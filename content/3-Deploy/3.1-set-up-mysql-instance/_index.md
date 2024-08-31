---
title : "Set up MySQL instance"
date : "`r Sys.Date()`"
weight : 1
chapter : false
pre : " <b> 3.1. </b> "
---

Since the RDS instance is private, we must connect to EC2 instance to connect to it.

1. Go to [EC2 service management console](https://console.aws.amazon.com/ec2/v2/home).
  + Click on **Instances**.
  + Choose Linux instance we created.
  + Click **Connect** to connect to this instance.

![Deploy](/images/3.deploy/01-connect_to_ec2_instance.png)

2. Choose **Connect using EC2 Instance Connect**, then click **Connect**.

![Deploy](/images/3.deploy/02-connect.png)

3. Now we should see a terminal for this Linux instance.
  + Enter **sudo apt update** to check for new updates.
  + Enter **sudo apt install mysql-server** to install MySQL.

4. Access to MySQL by typing **sudo mysql**.

![Deploy](/images/3.deploy/03-mysql_signin.png)

5. But we should login without using **sudo** command. To do that, we can set up a password for **root** user.
  + Enter **ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_pass_word';**
  + Enter **FLUSH PRIVILEGES;**

![Deploy](/images/3.deploy/04-mysql_change_password.png)

Now you can exit then try to log in by new password created. The command to login is **mysql -u root -p** then type your password.

![Deploy](/images/3.deploy/05-mysql_relogin.png)

6. Now we can implement our database in this MySQL instance. This is our database diagram:

![Deploy](/images/3.deploy/06-db_diagrams.png)

It's easy to see the **Transactions** table stores the transaction list of the customers. Sender and receiver must be in the **Customers** table.

7. Now type the SQL Queries.

After that, we should receive the result like this.

![Deploy](/images/3.deploy/07-SQL_queries.png)

Now exit MySQL.