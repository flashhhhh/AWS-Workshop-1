---
title : "Preparation "
date : "`r Sys.Date()`"
weight : 2
chapter : false
pre : " <b> 2. </b> "
---

{{% notice info %}}
You need to create 1 Linux instance on the public subnet and 1 RDS MySQL instance on the private subnet to perform this lab.
{{% /notice %}}

We will store the website data to the RDS instance and make a daily schedule data pipeline to process and analyze our data.

### Content
  - [Prepare VPC, EC2 and RDS](2.1-createec2/)
  - [Create IAM Role](2.2-createiamrole/)