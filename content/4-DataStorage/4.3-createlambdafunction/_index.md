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