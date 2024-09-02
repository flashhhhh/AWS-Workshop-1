---
title : "Create Lambda function"
date : "`r Sys.Date()`"
weight : 3
chapter : false
pre : " <b> 4.3 </b> "
---


1. Go to [Lambda console](https://console.aws.amazon.com/lambda/home)
  + Click **Create a function**.

![Lambda](/images/4.datastorage/09-create_lambda_function.png)

2. In the **Create function**:
  + Select **Author from scratch**.
  + In **function name**, enter **rds-to-s3**.
  + Choose **Runtime** is **Python 3.12**.

![Lambda](/images/4.datastorage/10-choose_function_type.png)

3. Scroll down to **Permissions**:
  + Select **Use an existing role** among 3 options.
  + Enter **rds-to-s3** to **Existing role**.

![Lambda](/images/4.datastorage/11-choose_permissions.png)

4. Click **Advanced settings**:
  + Tick **Enable VPC**, since we want this lambda function in private subnet with our RDS instance.
  + Select **de-vpc** we created.
  + In the **Subnets**, select 2 private subnets.
  + In the **Security groups**, select our **de-lambda-function-SG**.
  + Now we can click **Create function**.

![Lambda](/images/4.datastorage/16-choose_VPC_for_lambda.png)

5. Now we want to upload Lambda layer for more library.
  + In the Lambda function console, click **Upload from**.
  + Then click **.zip file**.

![Lambda](/images/4.datastorage/12-upload_lambda_layers.png)

6. Upload **pymysql.zip** (the file in utils), then click **Save**.

![Lambda](/images/4.datastorage/13-upload_pymysql.png)

7. Create a new file inside **rds-to-s3** folder which has name **lambda-function.py**, then copy code from **lambda-function.py** from utils to this. And click **Deploy** to save.

![Lambda](/images/4.datastorage/14-code_lambda_function.png)

8. Click **Test** to create a new test event.
  + Enter **Event name** **de-test-event**.
  + Click **Save**.

![Lambda](/images/4.datastorage/15-create_test_event.png)

9. Click **Test** again. We can see our lambda function will run successfully.

![Lambda](/images/4.datastorage/17-run_lamda_function.png)

10. Now go to [S3 console](https://console.aws.amazon.com/s3/home)
  + Click on our **de-bucket**.
  + Click on folder **raw_data**.
  + We can see there are 2 csv files in this folder.

![Lambda](/images/4.datastorage/18-see_S3_bucket.png)