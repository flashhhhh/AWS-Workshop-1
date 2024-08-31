---
title : "Move data from RDS to S3"
date : "`r Sys.Date()`"
weight : 4
chapter : false
pre : " <b> 4. </b> "
---


We can manually create a snapshot of our RDS instance, then move it to S3 bucket. But when we need to do it daily, we must automate it by a Lambda function and schedule using CloudWatch.

![Backup](/images/arc-002.png)

### Content:

   - [Update IAM Role](./4.1-updateiamrole/)
   - [Create **S3 Bucket**](./4.2-creates3bucket/)
   - [Create **Lambda function**](./4.3-createlambdafunction)
   - [Create **CloudWatch Event**](./4.4-createcloudwatchevent/)