---
title : "Create public EC2 instance"
date : "`r Sys.Date()`"
weight : 5
chapter : false
pre : " <b> 2.1.3 </b> "
---

1. Go to [EC2 service management console](https://console.aws.amazon.com/ec2/v2/home)
  + Click **Instances**.
  + Click **Launch instances**.
  
![EC2](../../../images/2.prerequisite/12-launch_instance.png)

2. Enter instance name **de-linux-instance**.
  + Choose your OS **Ubuntu**
  + On the **Amazon Machine Image (AMI)**, select **Ubuntu Server 24.04 LTS** which has Free tier.
  
![EC2](../../../images/2.prerequisite/13-choose_AMI.png)

3. On the **Step 2: Choose an Instance Type** page.
  + Select your **Architecture** **64-bit (x86)**.
  + Click on Instance type **t2.micro**.
  + In the **Key pair**, click **Create new key pair**.
 
![EC2](../../../images/2.prerequisite/14-choose_instance_type.png)

4. Enter key pair name **kp-linux**. Keep the default setting, then click **Create key pair**. You will receive a file installed.

![EC2](../../../images/2.prerequisite/15-create_key_pair.png)

5. Now on **Network settings**, click **Edit** to edit VPC and Security Group.
  + Choose **DE-VPC** we have created.
  + Choose **DE-subnet-public-1** in **Subnet**.
  + **Enable** in **Auto-assign public IP**.
  + Click **Select existing security group**, then choose **de-ec2-instance-SG** we have created.
  + Finally, click **Launch instance**.

![EC2](../../../images/2.prerequisite/16-edit_network_setting.png)