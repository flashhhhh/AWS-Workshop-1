---
title : "Create S3 Bucket"
date : "`r Sys.Date()`"
weight : 2
chapter : false
pre : " <b> 5.2 </b> "
---


In this step, we will create an folder in our S3 bucket to store clean data from Glue job.

1. Access [S3 console](https://s3.console.aws.amazon.com/s3/home)
    + Click on **de-bucket** we've created.

![S3](images/5.dataprocess/04-s3_bucket.png)

2. Click **Create folder**:
    + Enter folder name: **clean_data**.
    + Then click **Create folder**.

![S3](images/5.dataprocess/05-enter_folder_name.png)