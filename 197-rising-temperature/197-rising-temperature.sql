# Write your MySQL query statement below
SELECT a.id
FROM Weather a
JOIN Weather b
ON DATE_ADD(b.recordDate, INTERVAL 1 DAY) = a.recordDate 
AND a.temperature > b.temperature;