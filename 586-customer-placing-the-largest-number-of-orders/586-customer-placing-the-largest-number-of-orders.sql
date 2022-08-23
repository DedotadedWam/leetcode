# Write your MySQL query statement below
SELECT customer_number
FROM (
    SELECT customer_number, COUNT(order_number) AS 'count'
    FROM Orders
    GROUP BY customer_number
    ORDER BY count DESC
) AS t
LIMIT 1;