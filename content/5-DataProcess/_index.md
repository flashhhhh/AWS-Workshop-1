---
title : "Data Processing with Amazon Glue"
date :  "`r Sys.Date()`" 
weight : 5 
chapter : false
pre : " <b> 5. </b> "
---

{{% notice info %}}
The data we receive in RDS instance is just raw data. To analyze this data, we must process to clean this data through ETL.
{{% /notice %}}
   
We will set up an ETL job using **AWS Glue** to process the data in S3 Bucket folder **raw_data**, and store clean data in another folder.

![Glue](../images/arc-003.png) 

#### Content

   - [Update IAM Role](./5.1-updateiamrole/)
   - [Create S3 Bucket](./5.2-creates3bucket/)
   - [Create ETL job](./5.3-createetljob/)