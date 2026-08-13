/*INSTRUCTIONS: Make a copy of this Doc and write all the queries that you have made here on the table and the screenshot/snippet of the result table of your query. Provide your answers on the table below.  Do not answer through comments or directly in the original answer sheet.

A hospital chain wants to analyze its patient and treatment records to improve service efficiency, manage costs, and identify departments that need attention. You are part of the hospital’s data analytics team tasked with using SQL aggregation and the HAVING clause to generate insights from summarized data

Problem 1 – High-Cost Departments
Find the departments where the average total cost (treatment + medicine) exceeds ₱15,000. */

SELECT * FROM hospital_records.hospital_records;
use hospital_records;
 select department,
 avg( treatment_cost + medicine_cost) as Average_total_cost
 from hospital_records
 group by department
 having avg( treatment_cost + medicine_cost)> 15000;
 
/* Problem 2 – Long-Stay Departments
Show departments that have an average length of stay greater than 5 days.
*/
 SELECT * FROM hospital_records.hospital_records; 
 select department,
 avg(length_of_stay) as average_length_of_stay
 from hospital_records
 group by department
 having  avg(length_of_stay) >5;
 
 /*Problem 3 – Costly Doctors
List doctors whose average treatment cost per patient is greater than ₱10,000, and show their corresponding departments.
*/
select doctor_name,
department,
avg(treatment_cost) as Average_treatment_cost
from hospital_records

group by doctor_name,
 department
having avg(treatment_cost) > 10000;

/*Problem 4 – Elderly Patients Trend
Identify departments where the average age of patients is over 60 years old but the average treatment cost is below ₱12,000.
*/

select department,
avg(patient_age) as Average_age_of_patient,
avg(treatment_cost)
from hospital_records
group by department
having avg(patient_age)>60
and avg(treatment_cost)<12000;
 