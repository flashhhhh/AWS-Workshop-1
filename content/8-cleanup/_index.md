---
title : "Clean up resources"
date :  "`r Sys.Date()`" 
weight : 8
chapter : false
pre : " <b> 8. </b> "
---

We will take the following steps to delete the resources we created in this exercise.

#### Delete Crawler

1. Go to [AWS Glue](https://console.aws.amazon.com/glue/home)
   + Click **Crawlers**.
   + Tick the crawler we created, click **Action** then choose **Delete crawler**.

![Crawler](images/8.clean/01-delete_crawler.png)

2. Navigate to **Databases**. Tick the **transactions** database, then click **Delete**.

![Database](images/8.clean/02-delete_db.png)

#### Delete Glue ETL

1. Navigate to **ETL Jobs**. Tick **DE ETL job**, then click **Actions**, choose **Delete job(s)**.

![GlueETL](images/8.clean/03-delete_etl_job.png)

#### Delete Lambda function

1. Go to [Lambda](https://console.aws.amazon.com/lambda/home)

2. Tick our function, then click **Actions**, choose **Delete**.

3. Go to [EventBridge](https://console.aws.amazon.com/events/home/)
   + Navigate to **Schedules**.
   + Choose our **daily-trigger** function, then click **Delete**.

#### Delete RDS instance.

1. Go to [RDS](https://console.aws.amazon.com/rds/home)

2. Navigate to **Databases**, tick **de-mysql-instance**, then click **Actions**, choose **Delete**.

3. Tick like this image, then click **Delete**.

![RDS](images/8.clean/04-delete_rds.png)

4. Navigate to **Subnet groups**. Tick **de-mysql-instance-subnet-group**, then click **Delete**.

#### Delete EC2 Instance

Go to [EC2 service management console](https://console.aws.amazon.com/ec2/v2/home)
   + Click **Instances**.
   + Select our instance, click **Instance state**, then click **Terminate (delete) instance**.

![EC2](images/8.clean/05-delete_ec2_instance.png)

#### Delete VPC

1. Go to [VPC console](https://console.aws.amazon.com/vpc/home)

2. Click **Your VPCs**. Select **de-vpc**, click **Actions**, then **Delete VPC**.

#### Delete IAM roles

1. Go to [IAM](https://console.aws.amazon.com/iam/home)

2. Navigate to **Roles**. Delete these roles we created.

![IAM](images/8.clean/06-delete_iam.png)