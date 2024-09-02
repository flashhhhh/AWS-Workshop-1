---
title : "Create S3 Bucket"
date : "`r Sys.Date()`"
weight : 2
chapter : false
pre : " <b> 4.2 </b> "
---


In this step, we will create an S3 bucket to store data from RDS instance.

#### Create **S3 Bucket**

1. Access [S3 service management console](https://s3.console.aws.amazon.com/s3/home)
  + Click **Create bucket**.

![S3](../../images/4.datastorage/04-create_bucket.png)

2. At the **Create bucket** page.
  + In the **Bucket name** field, enter the bucket name **de-bucket**.

![S3](../../images/4.datastorage/05-enter_bucket_name.png)

 {{%notice tip%}}
The name of the S3 bucket must not be the same as all other S3 buckets in the system. You can substitute your name and enter a random number when generating the S3 bucket name.
{{%/notice%}}

3. Scroll down and click **Create bucket**.

![S3](../../images/4.datastorage/06-create_bucket.png)

4. Now, click on your new created bucket. Then click **Create folder**.

![S3](../../images/4.datastorage/07-create_new_folder.png)

5. Enter your folder name **raw-data**. Then click **Create folder**.

![S3](../../images/4.datastorage/08-enter_folder_name.png)