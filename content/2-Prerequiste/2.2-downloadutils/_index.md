---
title : "Download utils"
date : "`r Sys.Date()`"
weight : 2
chapter : false
pre : " <b> 2.2 </b> "
---

### Download utils

In this step, we will download all files we need for this workshop.

1. Go to [EC2 service management console](https://console.aws.amazon.com/ec2/v2/home)
  + Navigate to **Instances**.
  + Click on our created Linux instance.
  + Click **Connect** to connect to this EC2 instance.

![EC2](images/2.prerequisite/25-connect_to_EC2_instance.png)

2. Click **Connect**.

![EC2](images/2.prerequisite/26-connect.png)

3. Now you can access EC2 instance through terminal.
  + Enter **sudo apt update** to check for new updates.
  + Type **git clone https://github.com/flashhhhh/AWS-Workshop-1.git**
  + Enter **cd AWS-Workshop-1** to change directory to this repo.
  + Now, type **git checkout utils**.
  + This is the branch containing all of the files we need. You can type **ls** to check.

![EC2](images/2.prerequisite/27-download_utils.png)