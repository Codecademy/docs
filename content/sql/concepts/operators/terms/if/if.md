---
Title: 'IF'
Description: 'Applies conditional logic to queries and returns a value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Database'
  - 'Data'
  - 'Conditionals'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`IF`** statement allows for conditional logic to be applied within SQL queries. It evaluates a condition and returns a value if the condition is true and another value if the condition is false.

## Syntax

```pseudo
IF(condition, value_if_true, value_if_false)
```

- `condition`: The condition to be evaluated.
- `value_if_true`: The value to be returned if the condition is true.
- `value_if_false`: The value to be returned if the condition is false.

## Example

The following example demonstrates the use of the `IF` function to label stock prices as `High` or `Low`:

```sql
# Create a table named 'stocks'
CREATE TABLE stocks (company VARCHAR(30), price DECIMAL(8, 2));

# Insert some stocks into the table
INSERT INTO stocks (company, price) VALUES
('Amazon', 589.45),
('Microsoft', 398.23),
('Nvidia', 1237.78),
('Tesla', 1089.25);

# Use the IF statement to categorize stock prices
SELECT company, price, IF(price > 500, 'High', 'Low') AS price_category FROM stocks;
```

The output of the `SELECT` statement will be:

| company   | price   | price_category |
| --------- | ------- | -------------- |
| Amazon    | 589.45  | High           |
| Microsoft | 398.23  | Low            |
| Nvidia    | 1237.78 | High           |
| Tesla     | 1089.25 | High           |

The `IF` function checks if the price of the stock is greater than `500`. If true, it assigns `High` to the `price_category`. Otherwise, it assigns `Low`.
