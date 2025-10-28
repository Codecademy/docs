---
Title: 'PI()'
Description: 'Returns the mathematical constant π (PI).'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'MySQL'
  - 'PostgreSQL'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The SQL math function **`PI()`** is used to return the mathematical constant π (PI), which is approximately 3.14. PI is a fundamental constant in mathematics, particularly in geometry, where it's used to calculate properties of circles and spheres.

## Syntax

```pseudo
PI()
```

**Parameters:**

The `PI()` function does not take any parameters.

**Return value:**

Returns the mathematical constant π (PI).

## Example 1

In this example, the PI value is returned using the `PI()` function:

```sql
SELECT PI() AS pi_value;
```

The [`AS`](https://www.codecademy.com/resources/docs/sql/commands/as) keyword is used to name the resulting column `pi_value` in the output:

| pi_value          |
| ----------------- |
| 3.141592653589793 |

## Example 2

In this example, the following data is given in the `circles` table:

| id  | radius |
| --- | ------ |
| 1   | 5.00   |
| 2   | 10.00  |
| 3   | 15.00  |
| 4   | 7.50   |

The `PI()` function is used to perform the calculation of the area of each circle:

```sql
SELECT id, radio, PI() * POWER(radius, 2) AS circle_area
FROM circles;
```

In this SQL statement, the value of PI is multiplied by the result of squaring the radius (`radius`) using the [`POWER()`](https://www.codecademy.com/resources/docs/sql/math-functions/power) function to calculate the `circle_area`.

The output will be:

| id  | radius | circle_area |
| --- | ------ | ----------- |
| 1   | 5.00   | 78.54       |
| 2   | 10.00  | 314.16      |
| 3   | 15.00  | 706.86      |
| 4   | 7.50   | 176.71      |

> **Note:** Values are rounded to 2 decimal places for readability.
