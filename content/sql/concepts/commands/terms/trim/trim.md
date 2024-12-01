---
Title: 'TRIM'
Description: 'Removes leading and trailing spaces or specified characters from a string.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'SQL'
  - 'Strings'
  - 'Methods'
  - 'Values'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, the **`TRIM`** command removes leading and trailing spaces or specified characters from a string.

## Syntax

```pseudo
TRIM([remove_chars] FROM string)
```

- `remove_chars` (Optional): The characters to be removed. If omitted, the function removes spaces by default.
- `string`: The string from which characters or spaces will be removed.

## Example

Here's a table `users` to be used in this example:

| username      |
| ------------- |
| ' john_doe '  |
| ' alice_123 ' |
| ' admin '     |

Here's another table `products` to be used in this example as well:

| product_code |
| ------------ |
| '#AB123#'    |
| '##XY456##'  |
| '#LM789#'    |

The example below demonstrates how to remove leading and trailing spaces from the `username` column in the `users` table:

```sql
SELECT username, TRIM(username) AS cleaned_username
FROM users;
```

In this example, the `TRIM` command will remove any spaces from the beginning and end of the `username` field, returning the cleaned string as `cleaned_username`. The output will be as follows:

| username      | cleaned_username |
| ------------- | ---------------- |
| ' john_doe '  | 'john_doe'       |
| ' alice_123 ' | 'alice_123'      |
| ' admin '     | 'admin'          |

If a specific character needs to be removed, such as the hash symbol (`#`), from both ends of the string, the following query can be used:

```sql
SELECT TRIM('#' FROM product_code) AS cleaned_product_code
FROM products;
```

This will remove any hash symbols (`#`) from the beginning and end of each `product_code` string. The output will be as follows:

| product_code | cleaned_product_code |
| ------------ | -------------------- |
| '#AB123#'    | 'AB123'              |
| '##XY456##'  | 'XY456'              |
| '#LM789#'    | 'LM789'              |
