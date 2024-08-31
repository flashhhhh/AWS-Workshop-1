import os
import pymysql
import boto3
from io import StringIO

# Initialize S3 client
s3 = boto3.client('s3')

# Lambda handler function
def lambda_handler(event, context):
    # RDS connection details
    rds_host = 'de-database.cz02aya0ko32.us-east-1.rds.amazonaws.com'
    rds_username = 'admin'
    rds_password = '12345678'
    rds_db_name = 'de_db'
    
    # S3 bucket details
    s3_bucket = 'data-project-flash'

    # Connect to RDS MySQL
    connection = pymysql.connect(
        host=rds_host,
        user=rds_username,
        password=rds_password,
        db=rds_db_name,
        cursorclass=pymysql.cursors.DictCursor
    )

    try:
        with connection.cursor() as cursor:
            # Query to select data
            sql_query = "SELECT * FROM customers"
            cursor.execute(sql_query)
            rows = cursor.fetchall()

            # Convert rows to CSV format
            csv_buffer = StringIO()
            if rows:
                header = ','.join(rows[0].keys()) + '\n'
                csv_buffer.write(header)
                for row in rows:
                    csv_buffer.write(','.join(map(str, row.values())) + '\n')

            # Upload CSV to S3
            s3.put_object(
                Bucket=s3_bucket,
                Key='raw_data/customers.csv',
                Body=csv_buffer.getvalue()
            )

            # Query to select data
            sql_query = "SELECT * FROM transactions"
            cursor.execute(sql_query)
            rows = cursor.fetchall()

            # Convert rows to CSV format
            csv_buffer = StringIO()
            if rows:
                header = ','.join(rows[0].keys()) + '\n'
                csv_buffer.write(header)
                for row in rows:
                    csv_buffer.write(','.join(map(str, row.values())) + '\n')

            # Upload CSV to S3
            s3.put_object(
                Bucket=s3_bucket,
                Key='raw_data/transactions.csv',
                Body=csv_buffer.getvalue()
            )

        return {
            'statusCode': 200,
            'body': 'Data migrated to S3 successfully!'
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': f'Error: {str(e)}'
        }

    finally:
        connection.close()
