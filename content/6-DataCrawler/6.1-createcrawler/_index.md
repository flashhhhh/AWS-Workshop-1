---
title : "Create Crawler"
date : "`r Sys.Date()`"
weight : 2
chapter : false
pre : " <b> 6.1 </b> "
---


In this step, we will create a crawler job.

1. Access [Glue console](https://s3.console.aws.amazon.com/glue/home)
    + Click **Databases**.
    + Then click **Add database**.

![Crawler](../../images/6.datacrawler/01-create_database.png)

2. Enter **transactions** in the **Name**, then click **Create database**.

![Crawler](../../images/6.datacrawler/02-enter_db_name.png)

3. Now navigate to **Crawlers**, then click **Create crawler**.

![Crawler](../../images/6.datacrawler/03-create_crawler.png)

4. Enter **crawl-transaction-data** to **name**, then click **Next**.

![Crawler](../../images/6.datacrawler/04-enter_crawler_name.png)

5. We need to assign a data source. Click on **Add a data source**.
    + In **Data source**, choose **S3**.
    + In **S3 path**, click **Browse S3**, then navigate to **clean_data** folder path.
    + Tick **Crawler new sub-folders** only.
    + Click **Add an S3 data source**. Then click **Next**.

![Crawler](../../images/6.datacrawler/05-add_data_source.png)

6. We also need an IAM role. Click **Create new IAM role**:
    + It will show a new role wih name **AWSGlueServiceRole-**. Enter anything in the suffix to create this role.
    + Then click **Next**.

![Crawler](../../images/6.datacrawler/06-createiamrole.png)

7. Choose your **Target database** is **transactions** you've created. Then click **Next**.

![Crawler](../../images/6.datacrawler/07-choose_target_db.png)

8. Click **Create crawler** to finish creating crawler.

9. Now we can run our created Crawler.
    + Click **Run crawler** to start.
    + A new crawler run will appear. Wait a few minutes until it completes.

![Crawler](../../images/6.datacrawler/08-run_crawler.png)

10. You can navigate to **Databases** in **Glue Catalog** to see our data is moved to **Transactions** database.

![Crawler](../../images/6.datacrawler/09-created_database.png)