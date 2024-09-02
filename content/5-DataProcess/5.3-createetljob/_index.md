---
title : "Create ETL job"
date :  "`r Sys.Date()`" 
weight : 5 
chapter : false
pre : " <b> 5.3 </b> "
---

![Glue](images/arc-004.png)

### Create Visual ETL job to process data

1. Go to [Glue console](https://console.aws.amazon.com/glue/home)
    + Click **ETL jobs**.
    + Then click **Visual ETL** to launch a new ETL job.

![Glue](images/5.dataprocess/06-create_ETL_job.png)

2. Choose **Amazon S3** as source data. An Amazon S3 rectangle will appear, click to this.

![Glue](images/5.dataprocess/07-choose_S3_as_source.png)

3. In Data source properties:
    + Enter **Customers** as a name.
    + Click **Browse S3**, then navigate to **customers.csv** in **raw_data** folder.
    + Click **Infer schema** to load properties of this data.

![Glue](images/5.dataprocess/08-setup_data_source.png)

4. Do similarly to the **Transaction** data source.

![Glue](images/5.dataprocess/09-setup_data_source.png)

5. Now we have all data sources. Let's turn to transform data:
    + Click **Join** in the list of **Transform**. Then click to the figure of **Join** in the right.
![Glue](images/5.dataprocess/10-create_join.png)
    + Link **Transactions** and **Customers** to the **Join** transformation.
    + Enter the name: **Sender join**.
    + Click **Add condition**. Then select the condition join is **Transactions.sender_id = Customers.id**.

![Glue](images/5.dataprocess/11-setup_join.png)

6. Create another **Join**. Link **Sender join** and **Customers** to this **Join**.

![Glue](images/5.dataprocess/12-create_join.png)

7. Click to this **Join**.
    + In name, enter **Receiver join**.
    + Click **Add condition**. Then select the condition join is **Sender join.receiver_id** = **Customers.id**.

![Glue](images/5.dataprocess/13-setup_join.png)

8. Now, we should delete some unnecessary fields.
    + Choose **Drop Fields** among the list of **Transforms**.
    + Link **Receiver join** to **Drop fields**.
    + Click on this **Drop fields**.

![Glue](images/5.dataprocess/14-create_drop_fields.png)

9. Delete these fields that we don't need.

![Glue](images/5.dataprocess/15-delete_fields.png)

10. We want to rename some fields too.
    + Scroll down in **Transform** list to find **Rename Field**.
    + Link **Drop fields** to **Rename fields**, then click on **Rename Fields**.
![Glue](images/5.dataprocess/16-create_rename_field.png).
    + Rename **name** to **sender_name**.
![Glue](images/5.dataprocess/17-rename_field.png)

11. Do similarly to rename 3 other fields:
    + **phone_number** to **sender_phone_number**.
    + **.name** to **receiver_name**.
    + **.phone_number** to **receiver_phone_number**.

![Glue](images/5.dataprocess/18-almost_total_pipeline.png)

12. Now add data destination:
    + In the **Targets** list, select **Amazon S3**.
    + Link the last **Rename field** to this S3. Click on this **S3**.
![Glue](images/5.dataprocess/19-create_S3_dest.png)
    + Enter **Data Destination** to the name.
    + Click **Browse S3**. Navigate to **clean_data** folder. This is the folder we store our clean data.
![Glue](images/5.dataprocess/20-setup_S3_dest.png)

13. We have completed our visual ETL job. It will look like this image. Now click on **Job detail**.

![Glue](images/5.dataprocess/21-setup_job_detail.png)

14. Now in **Job details**.
    + Enter **DE ETL job** for name.
    + Enter **ETL job to clean data from raw_data to clean_data** for **Description**.
    + Select **glue-access-s3** IAM role.

![Glue](staticimages/5.dataprocess/22-setup_job_detail.png)

15. We will have job type **Spark** with Language **Python 3**.
    + Choose worker type **G 1X**, minimal for our demand.
    + Enter **number of workers** from 2 to 10. I will choose 2 which is minimal.
    + Since we don't need incremental loading, Disable **Job Bookmark**.
    + Keep default for others.

![Glue](images/5.dataprocess/23-setup_job_detail.png)

16. Click **Save** to save our job. After ETL job is created, click **Run** to test our job.

![Glue](images/5.dataprocess/24-save_and_run.png)

17. Now go to [S3 bucket](https://console.aws.amazon.com/s3/home). We can see in **clean_data** folder there are some new files added (Because we choose Snappy Parquet compression)

![Glue](images/5.dataprocess/25-result.png)