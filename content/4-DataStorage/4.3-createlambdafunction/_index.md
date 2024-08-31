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
  + Click on **Create function**.

![Lambda](/images/4.datastorage/11-choose_permission.png)

4. Now we want to upload Lambda layer for more library.
  + In the Lambda function console, click **Upload from**.
  + Then click **.zip file**.

![Lambda](/images/4.datastorage/12-upload_lambda_layers.png)

5. Upload **pymysql.zip** (the file in utils), then click **Save**.

![Lambda](/images/4.datastorage/13-upload_pymysql.png)

6. Create a new file inside **rds-to-s3** folder which has name **lambda-function.py**, then copy code from **lambda-function.py** from utils to this. And click **Deploy** to save.

![Lambda](/images/4.datastorage/14-code_lambda_function.png)

7. Click **Test** to create a new test event.
  + Enter **Event name** **de-test-event**.
  + Click **Save**.

![Lambda](/images/4.datastorage/15-create_test_event.png)