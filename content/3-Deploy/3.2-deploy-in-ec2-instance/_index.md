---
title : "Deploy a website in EC2 instance"
date : "`r Sys.Date()`"
weight : 2
chapter : false
pre : " <b> 3.2. </b> "
---

We've prepared our database. Now it's time to deploy the website.

1. Create new folder with name **source** by typing **mkdir source**. Then **cd source**.
    + Download source code.
    + Change to branch.

2. In **app.js** file, change your **DB_PASSWORD** to the password you created.

![Deploy](/images/3.deploy/08-change_app_file.png)

3. Now download the library.
    + Enter **sudo apt install npm** to download **npm** library for Javascript.
    + Init your nodejs environment with **npm init -y**.
    + Download library for our website: **npm i express mysql**.

4. Run **node app.js**. We can access to our website by access **your_public_IP_linux_instance:3000** in your browser.

5. Now access URL **your_public_IP_linux_instance:3000/createcustomer**

![Deploy](/images/3.deploy/09-access_website.png)

Try to create some new customers to our website. Notice that **phone numbers** are unique.

6. Continually access URL **your_public_IP_linux_instance:3000/createtransaction**

![Deploy](/images/3.deploy/10-access_website.png)

Try to create some new transactions. **Sender_id** and **receiver_id** must be less or equal to the number of customers.