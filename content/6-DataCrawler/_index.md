---
title : "Data Crawling with Glue Crawler"
date :  "`r Sys.Date()`" 
weight : 6
chapter : false
pre : " <b> 6. </b> "
---

{{% notice info %}}
Now we want to analyze the clean data. To do it we want to crawl data from **S3** to **Glue Data Catalog**, so that we can query this data by **Athena**.
{{% /notice %}}
   
We will set up a **Glue Crawler** to crawl the data in S3 Bucket folder **clean_data**, and store this data in **Glue Data Catalog**.

![Glue](/images/arc-005.png) 

#### Content

   - [Create Glue crawler](./6.1-createcrawler/)