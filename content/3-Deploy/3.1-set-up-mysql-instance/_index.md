---
title : "Set up MySQL instance"
date : "`r Sys.Date()`"
weight : 1
chapter : false
pre : " <b> 3.1. </b> "
---

Since the RDS instance is private, we must connect to EC2 instance to connect to it.

1. Go to [EC2 service management console](https://console.aws.amazon.com/ec2/v2/home).
  + Click on **Instances**.
  + Choose Linux instance we created.
  + Click **Connect** to connect to this instance.

![Deploy](../images/3.deploy/01-connect_to_ec2_instance.png)

2. Choose **Connect using EC2 Instance Connect**, then click **Connect**.

![Deploy](../images/3.deploy/02-connect.png)

3. Now we should see a terminal for this Linux instance.
  + Enter **sudo apt update** to check for new updates.
  + Enter **sudo apt install mysql-server** to install MySQL.

4. Access to MySQL by typing **sudo mysql**.

![Deploy](../images/3.deploy/03-mysql_signin.png)

5. But we are going to use the database inside RDS instance we created.
  + Go to [RDS console](https://console.aws.amazon.com/rds/home)
  + Navigate to **Databases** and select our **de-mysql-instance**.
  + You can see your database endpoint here.

![Deploy](../images/3.deploy/04-see_rds_endpoint.png)

Now you can exit then try to log in by new password created. The command to login is **mysql -h your_endpoint -u admin -p** then type your password.

![Deploy](../images/3.deploy/05-mysql_login.png)

6. Now we can implement our database in this MySQL instance. This is our database diagram:

![Deploy](../images/3.deploy/06-db_diagrams.png)

It's easy to see the **Transactions** table stores the transaction list of the customers. Sender and receiver must be in the **Customers** table.

7. Now type the SQL queries. These are stored in the file having name **de_db.sql** we've downloaded.

After that, we should receive the result like this.

![Deploy](../images/3.deploy/07-SQL_queries.png)

Now exit MySQL.