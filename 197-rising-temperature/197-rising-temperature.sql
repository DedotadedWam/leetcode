# Write your MySQL query statement below
SELECT a.id
FROM Weather a
JOIN Weather b
ON DATE_SUB(a.recordDate, INTERVAL 1 DAY) = b.recordDate 
AND a.temperature > b.temperature;