---
title : "Query data with Athena"
date :  "`r Sys.Date()`" 
weight : 7
chapter : false
pre : " <b> 7. </b> "
---
   
We will use **Athena** to make some analytics to our data in **Glue Data Catalog**.

1. Access [Athena](https://s3.console.aws.amazon.com/athena/home). Choose your **Data source** is **AWSDataCatalog**, and **Database** is **transactions**.

![Athena](images/7.querydata/01-go_to_athena.png)

2. Type some queries you want, such as: **SELECT * FROM clean_data**, then click **Run**.

![Athena](images/7.querydata/02-type_query.png)

You will receive the result for your query.

3. Try to make as many queries as you want to analyze and mine this data.