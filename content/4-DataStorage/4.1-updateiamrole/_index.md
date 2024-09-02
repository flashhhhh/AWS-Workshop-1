---
title : "Update IAM Role"
date : "`r Sys.Date()`"
weight : 1
chapter : false
pre : " <b> 4.1 </b> "
---

For our Lambda function to be able to access data in RDS instance and send to S3 bucket, we will need to update the IAM Role assigned to lambda function by adding a policy that allows access to RDS and S3.

Since our Lambda function is inside a private VPC, we will need attach a policy allowing our lambda function to access to EC2 instance too.

#### Update IAM Role

1. Go to [IAM service management console](https://console.aws.amazon.com/iamv2/home?#/home)
  + Click **Roles**.
  + Click **Create role**.

![IAM](images/4.datastorage/01-create_Lambda_role.png)

2. Click **AWS Service**, then choose **Lambda** service. After that click **Next**.
 
![IAM](images/4.datastorage/02-select_Lambda.png)

3. In the Search box
  + Enter **S3**, then tick **AmazonS3FullAccess**.
  + Enter **RDS**, then tick **AmazonRDSDataFullAccess**.
  + Enter **EC2**, then tick **AmazonEC2FullAccess**.
  + Then click **Next**.

4. Now, enter the role name of this lambda function is **rds-to-S3**. We will see there are 3 policies in this IAM role, and click **Create Role**.

![IAM](images/4.datastorage/03-create_Lambda.png)
 
{{%notice tip%}}
In the production environment, we will grant stricter permissions to the specified S3 bucket. In the framework of this lab, we use the policy **AmazonS3FullAccess** for convenience.
{{%/notice%}}

Next, we will proceed to create an S3 bucket to store data.