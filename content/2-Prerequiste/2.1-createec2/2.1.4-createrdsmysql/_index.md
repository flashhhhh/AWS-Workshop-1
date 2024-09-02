---
title : "Create private RDS Instance"
date : "`r Sys.Date()`"
weight : 6
chapter : false
pre : " <b> 2.1.4 </b> "
---

1. Go to [RDS service management console](https://console.aws.amazon.com/rds/v2/home)
  + Click **Databases**.
  + Click **Create database**.

![RDS](../../../images/2.prerequisite/17-create_rds_instance.png)
  
2. Click **Standard create**, then choose **MySQL** engine type. We will use **Engine version** **MySQL 8.0.35**

![RDS](../../../images/2.prerequisite/18-choose_engine.png)

3. We can use **Free tier** template if we have a free tier AWS account.

![RDS](../../../images/2.prerequisite/19-choose_free_tier.png)

4. Change your instance settings.
  + Enter your instance name **de-mysql-instance**.
  + Set the **Master username** **admin**.
  + Select **Self managed** management.
  + Change your **Master password** and confirm it.

![RDS](../../../images/2.prerequisite/20-settings.png)

5. In the **Connectivity** settings:
  + We want to connect this RDS Instance to the public EC2 instance, so that click **Connect to an EC2 compute resource**.
  + Choose **de-linux-instance** we've created in the **EC2 instance**.

![RDS](../../../images/2.prerequisite/21-link_to_ec2_instance.png)

6. Now we should create our subnet group.
  + Open **Subnet group** in a new tab.

![RDS](../../../images/2.prerequisite/22-navigate_to_subnet_group.png)

  + Click on **Create DB subnet group**.
  + Enter the name **de-mysql-instance-subnet-group**, and the description **Subnet group for mysql instance**.
  + Choose **DE-vpc**.
  + On **Availability Zones**, choose your 2 AZs on your created VPC.
  + On **Subnets**, choose 2 **private subnets** in your VPC.
  + Then we click **Create**.

![RDS](../../../images/2.prerequisite/23-create_subnet_group.png)

7. After creating **Subnet group** successfully, click **Choose existing DB subnet group**, and choose what your've created. And on **VPC security group**, choose **de-rds-instance-SG**.

![RDS](../../../images/2.prerequisite/24-choose_SG.png)

8. Scroll down and click **Create Database**. It takes a few minutes for our database instance to be created.