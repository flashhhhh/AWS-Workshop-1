---
title : "Create security groups"
date : "`r Sys.Date()`"
weight : 4
chapter : false
pre : " <b> 2.1.2 </b> "
---

#### Create security groups

In this step, we will proceed to create the security groups used for our instances. As you can see, these security groups will not need to open traditional ports to **ssh** like port **22** or **remote desktop** through port **3389**.

#### Create security group for Linux instance located in public subnet

1. Go to [VPC service management console](https://console.aws.amazon.com/vpc)
  + Click **Security Group**.
  + Click **Create security group**.

![SG](../images/2.prerequisite/04-create_security_group.png)

3. In the **Security group name** field, enter **de-ec2-instance-SG**.
  + In the **Description** section, enter **Security Group for ec2 public instance**.
  + In the **VPC** section, click the **X** to reselect the **DE VPC** you created for this lab.

![SG](../images/2.prerequisite/05-set_SG_name.png)

4. In the **Inbound rules**, click **Add rule**.
  + Set **Type** to **SSH**, and set **Source** to **0.0.0.0/0**.
  ![SG](../images/2.prerequisite/06_set_inbound_rule.png)
  
  + Set other inbound rules like this (Custom TCP with port 3000 because our website will run in port 3000)
  ![SG](../images/2.prerequisite/07-set_other_ec2_inbound_rules.png)

4. With **Outbound rule**, we don't need to change anything. Then click **Create security group**.

![SG](../images/2.prerequisite/08-outbound_rules.png)

#### Create a security group for an RDS instance located in private subnets

1. After successfully creating a security group for the Linux instance located in the public subnet, click the Security Groups link to return to the Security groups list.

![SG](../images/2.prerequisite/09-create_sg.png)

2. Click **Create security group**.

3. In the **Security group name** field, enter **de-rds-instance-SG**.
  + In the **Description** section, enter **Security Group for RDS MySQL instance**.
  + In the **VPC** section, click the **X** to reselect the **DE VPC** you created for this lab.

![SG](../images/2.prerequisite/10-set_SG_name.png)

4. Scroll down, then click **Create security group**.

![SG](../images/2.prerequisite/11-create_new_sg.png)

#### Create a security group for a Lambda function in private subnets

1. Go to [VPC service management console](https://console.aws.amazon.com/vpc), then click **Create security group**.

2. Enter **de-lambda-function-SG** in **Security group name**, then **Security Group for Lambda function** in **Description**.

![SG](../images/2.prerequisite/28-create_Lambda_sg.png)

3. Since Lambda function doesn't need Inbound rules, we can scroll down and **Create security group**.