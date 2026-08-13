# 🏥 Hospital Records SQL Analysis

## 📌 Project Overview

The **Hospital Records SQL Analysis** project uses MySQL to analyze hospital records and generate meaningful insights related to treatment costs, patient length of stay, doctor-level treatment costs, and patient age trends.

The project focuses on answering four practical business questions that can help support hospital operational analysis and data-driven decision-making.

The analysis was performed using SQL queries in MySQL, with the results presented through a Power BI dashboard.

---

## 🎯 Project Objectives

The main objectives of this project are to:

- Identify departments with high average treatment and medicine costs
- Analyze departments with longer average patient stays
- Identify doctors with higher average treatment costs
- Analyze departments with older patient populations and lower treatment costs
- Demonstrate practical SQL data analysis techniques
- Transform raw hospital records into meaningful insights
- Present analytical results through Power BI visualization

---

## 🛠️ Tools & Technologies

| Tool | Purpose |
|---|---|
| **MySQL** | Database management and SQL analysis |
| **SQL** | Data querying, filtering, aggregation, and analysis |
| **Microsoft Excel** | Dataset preparation and storage |
| **Power BI** | Data visualization and dashboard presentation |
| **Loom** | Project presentation and walkthrough |

---

## 📊 Dataset

The project uses a hospital records dataset containing information related to:

- Patient age
- Department
- Doctor
- Treatment cost
- Medicine cost
- Length of stay

The dataset is provided as:

```text
hospital-records.xlsx
---

##🔎 SQL Analysis

The project focuses on four major business questions.

Analysis 1 — High-Cost Departments
Business Question

Which departments have an average total cost greater than ₱15,000?

SELECT
    department,
    ROUND(AVG(treatment_cost + medicine_cost), 2)
        AS average_total_cost
FROM hospital_records
GROUP BY department
HAVING AVG(treatment_cost + medicine_cost) > 15000
ORDER BY average_total_cost DESC;

What This Analysis Does

This query combines treatment and medicine costs and calculates the average total cost for each department.

Analysis 2 — Long-Stay Departments
Business Question

Which departments have an average patient length of stay greater than 5 days?

SELECT
    department,
    ROUND(AVG(length_of_stay), 2)
        AS average_length_of_stay
FROM hospital_records
GROUP BY department
HAVING AVG(length_of_stay) > 5
ORDER BY average_length_of_stay DESC;

What This Analysis Does

The query identifies departments where patients have an average hospital stay exceeding five days.

Analysis 3 — Costly Doctors
Business Question

Which doctors have an average treatment cost greater than ₱10,000?

SELECT
    doctor_name,
    department,
    ROUND(AVG(treatment_cost), 2)
        AS average_treatment_cost
FROM hospital_records
GROUP BY
    doctor_name,
    department
HAVING AVG(treatment_cost) > 10000
ORDER BY average_treatment_cost DESC;

What This Analysis Does

This analysis compares average treatment costs at the doctor and department levels.

Analysis 4 — Elderly Patient Trend
Business Question

Which departments have an average patient age above 60 and an average treatment cost below ₱12,000?

SELECT
    department,
    ROUND(AVG(patient_age), 2)
        AS average_patient_age,
    ROUND(AVG(treatment_cost), 2)
        AS average_treatment_cost
FROM hospital_records
GROUP BY department
HAVING AVG(patient_age) > 60
   AND AVG(treatment_cost) < 12000
ORDER BY average_patient_age DESC;

What This Analysis Does

This query identifies departments that meet both the age and treatment-cost criteria.

💡 Key Findings

This section is where you show what you discovered from the SQL results.
1. High-Cost Departments
![alt text](image.png)
2. Long-Stay Departments
![alt text](image-1.png)
3. Costly Doctors
![alt text](image-2.png)
4. Elderly Patient Trend
![alt text](image-3.png)