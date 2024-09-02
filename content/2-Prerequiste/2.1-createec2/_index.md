---
title : "Preparing VPC, EC2 and RDS"
date : "`r Sys.Date()`"
weight : 1
chapter : false
pre : " <b> 2.1 </b> "
---

In this step, we will need to create a VPC with 2 public / private subnets. Then create 1 EC2 Instance Linux located in the public subnet, 1 RDS Instance MySQL located in the private subnet. And we need to connect the Linux instance to the RDS MySQL instance.

The architecture overview after you complete this step will be as follows:

![VPC](../images/arc-001.png)

### Content
  - [Create VPC with public and private subnets](2.1.1-createvpc/)
  - [Create security group](2.1.2-createsecgroup/)
  - [Create public Linux server](2.1.3-createec2linux/)
  - [Create private RDS instance](2.1.4-createrdsmysql/)