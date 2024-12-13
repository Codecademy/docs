---
Title: 'String Functions'
Description: 'String functions in SQL allow for operations such as modifying, formatting, and extracting information from strings.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Database'
  - 'Functions'
  - 'SQL'
  - 'Strings'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**String functions** in SQL allow for various operations such as modifying, formatting, and extracting information from strings.

These functions are commonly used in data analysis, database management, and report generation to clean and process text-based data efficiently.

## Common String Functions

Here are some widely used SQL string functions:

| **Function** | **Syntax**                                       | **Description**                                                              |
| ------------ | ------------------------------------------------ | ---------------------------------------------------------------------------- |
| `CONCAT`     | `CONCAT(string1, string2, ...)`                  | Combines two or more strings into one.                                       |
| `SUBSTRING`  | `SUBSTRING(string, start_position, length)`      | Extracts a portion of a string based on starting position and length.        |
| `LENGTH`     | `LENGTH(string)`                                 | Returns the number of characters in a string.                                |
| `TRIM`       | `TRIM([characters] FROM string)`                 | Removes leading and trailing spaces (or specified characters) from a string. |
| `UPPER`      | `UPPER(string)`                                  | Converts a string to uppercase.                                              |
| `LOWER`      | `LOWER(string)`                                  | Converts a string to lowercase.                                              |
| `REPLACE`    | `REPLACE(string, search_string, replace_string)` | Replaces occurrences of a substring within a string with another substring.  |
| `LEFT`       | `LEFT(string, number_of_characters)`             | Extracts a specified number of characters from the start of a string.        |
| `RIGHT`      | `RIGHT(string, number_of_characters)`            | Extracts a specified number of characters from the end of a string.          |
| `INSTR`      | `INSTR(string, substring)`                       | Returns the position of the first occurrence of a substring within a string. |

## Example

Assume there is a `users` table with the following data:

| first_name | last_name | email                    |
| ---------- | --------- | ------------------------ |
| John       | Doe       | john.doe@example.com     |
| Alice      | Johnson   | alice.johnson@work.org   |
| Robert     | Smith     | robert.smith@company.net |

Here's an example that uses string functions:

```sql
SELECT
  CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), '.', UPPER(last_name)) AS formatted_name,
  LENGTH(email) AS email_length,
  REPLACE(email, '@', '[at]') AS obfuscated_email
FROM users;
```

This example will generate the following output:

```shell
| formatted_name | email_length | obfuscated_email           |
|----------------|--------------|----------------------------|
| J.DOE          | 21           | john.doe[at]example.com    |
| A.JOHNSON      | 25           | alice.johnson[at]work.org  |
| R.SMITH        | 26           | robert.smith[at]company.net|
```
