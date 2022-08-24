# Write your MySQL query statement below
SELECT d.name Department, e.name Employee, e.salary Salary
FROM Employee e
JOIN Department d
ON d.id = e.departmentId
WHERE (d.id, e.salary) IN (
    SELECT departmentId AS id, MAX(salary)
    FROM Employee
    GROUP BY departmentId
);