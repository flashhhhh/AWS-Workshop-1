---
title : "Update IAM Role"
date : "`r Sys.Date()`"
weight : 1
chapter : false
pre : " <b> 5.1 </b> "
---

For our Glue job to be able to read data in S3 bucket and send this data to the S3 bucket, we will need to update the IAM Role assigned to the Glue job by adding a policy that allows access to S3.

#### Update IAM Role

1. Go to [IAM service management console](https://console.aws.amazon.com/iamv2/home?#/home)
  + Click **Roles**.
  + Click **Create role**.

![IAM](../../images/5.dataprocess/01-create_glue_role.png)

2. Click **AWS Service**, then choose **Glue** service. After that click **Next**.
 
![IAM](../../images/5.dataprocess/02-choose_glue.png)

3. In the Search box
  + Enter **S3**, then tick **AmazonS3FullAccess**.
  + Then click **Next**.

4. Now, enter the role name of this lambda function is **glue-access-s3**. We will see there is only 1 policy in this IAM role, and click **Create Role**.

![IAM](../../images/5.dataprocess/03-create_role.png)
 
{{%notice tip%}}
In the production environment, we will grant stricter permissions to the specified S3 bucket. In the framework of this lab, we use the policy **AmazonS3FullAccess** for convenience.
{{%/notice%}}

Next, we will proceed to create an S3 bucket folder to store clean data.