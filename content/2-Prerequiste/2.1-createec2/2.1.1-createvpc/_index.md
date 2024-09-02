---
title : "Create VPC"
date : "`r Sys.Date()`"
weight : 1
chapter : false
pre : " <b> 2.1.1 </b> "
---


#### Create VPC **Lab VPC**
1. Go to [VPC service management console](https://console.aws.amazon.com/vpc/home)
   + Click **Your VPC**.
   + Click **Create VPC**.

![VPC](images/2.prerequisite/01-createvpc.png)

2. At the **Create VPC** page.
   + Click on **VPC and more**
   + In the **Name tag** field, enter **DE**.
   + In the **IPv4 CIDR** field, enter: **10.10.0.0/16**.

![VPC](images/2.prerequisite/02-set_VPC_name.png)

3. Scroll down, we will keep the remaining default settings (2 AZs, 2 public subnets and 2 private subnets), because RDS forces us to have at least 2 AZs and 2 subnets. Then click **Create VPC**.

![VPC](images/2.prerequisite/03-set_num_AZs.png)