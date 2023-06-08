---
title: ATAN Function
short_description: Explanation and usage of the ATAN function in SQL.
---

The ATAN function in SQL is a mathematical function used to calculate the arctangent of a given number. It returns the angle (in radians) whose tangent is the specified number. This function is useful in various mathematical and analytical calculations, such as determining angles or performing trigonometric operations in SQL queries.

## SQL Database Compatibility

The ATAN function is supported by most SQL database systems, including MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.

## Syntax

The syntax of the ATAN function in SQL is as follows:

```sql
ATAN(expression)



2. Behavior: Explain how the ATAN function behaves when applied to different types of inputs. For example:

```markdown
## Behavior

- If the input expression is a numeric value, the ATAN function returns the arctangent of that value in radians.
- If the input expression is NULL, the ATAN function also returns NULL.


## Examples

1. Calculating the arctangent of a specific value:

```sql
SELECT ATAN(1.5);

SELECT id, value, ATAN(value) AS arctan_value
FROM my_table;


4. Related concepts: If there are any related SQL concepts or functions that are commonly used in conjunction with the ATAN function, you can mention and provide links to those concepts. For example:

```markdown
## Related Concepts

- [Trigonometric Functions](../trigonometric-functions/) in SQL: The ATAN function is one of the trigonometric functions available in SQL. You can use it along with other functions like SIN, COS, and TAN to perform complex mathematical calculations involving angles and triangles.
