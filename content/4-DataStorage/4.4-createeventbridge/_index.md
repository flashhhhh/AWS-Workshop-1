---
title : "Create EventBridge Scheduler"
date : "`r Sys.Date()`"
weight : 4
chapter : false
pre : " <b> 4.4 </b> "
---

#### Create a daily scheduler to automatically trigger Lambda function.

1. Access [Amazon EventBridge](https://console.aws.amazon.com/events). Click **Schedules**, then click **Create schedule**.
  
![Scheduler](../../images/4.datastorage/19-create_scheduler.png)

2. In the **Define rule detail**:
  + Enter event name **daily-trigger**.
  + Enter description **Daily triggerring a Lambda event**.

![Scheduler](../../images/4.datastorage/20-enter_name.png)

3. In **Schedule pattern**:
  + In **Occurence**, select **Recurring schedule**.
  + In **Schedule type**, select **Rate-based schedule**.
  + Enter our rate is **24 hours**, it means our job will be triggered in a period of 24 hours.
  + Choose **Off** in flexible time window.

![Scheduler](../../images/4.datastorage/21-schedule_pattern.png)

Scroll down then click **Next**.

4. In **Select target**:
  + Select **Templated targets**, then click **AWS Lambda Invoke**

![Scheduler](../../images/4.datastorage/22-lambda_invoke.png)

  + Choosing **Lambda function** is **rds-to-s3**, then click **Next**.

![Scheduler](../../images/4.datastorage/23-select_lambda_function.png)

5. Choose **NONE** for **Action after scheduler completion**, since we need to do daily.
  + Turn off **Retry** and **DLQ**.

![Scheduler](../../images/4.datastorage/24-turn_off_retry.png)

6. We will let AWS create an IAM role for us. Then scroll down and click **Next**.

7. Review your scheduler then click on **Create schedule**.

Now your **rds-to-s3** Lambda function will run automatically 24 hours per time, meaning data in RDS instance will be copied to S3 bucket **raw_data** in a period of 24 hours.