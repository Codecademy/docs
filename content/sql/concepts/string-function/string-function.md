---
Title: 'SQL String Functions'
Description: 'String functions in SQL help with text manipulation, formatting, and analysis within a database.'
Subjects:
  - 'SQL'
  - 'Databases'
Tags:
  - 'String'
  - 'Functions'
  - 'Text'
  - 'SQL Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

**SQL String Functions** are used for manipulating and analyzing string data stored in a database. These functions enable operations such as concatenating text, extracting substrings, changing the case of text, and replacing characters. They are particularly useful when working with columns of text data types like `VARCHAR` and `TEXT`.

## Common SQL String Functions

Here is an overview of several frequently used string functions:

### CONCAT
Combines multiple strings into one.
```sql
CONCAT(string1, string2, ..., stringN)


### SUBSTRING
Extracts a portion of a string.
```sql
SUBSTRING(string, start_position, length)
```

### UPPER
Converts a string to uppercase.
```sql
UPPER(string)
```

### LOWER
Converts a string to lowercase.
```sql
LOWER(string)
```

### TRIM
Removes leading and trailing spaces from a string.
```sql
TRIM(string)
```

### REPLACE
Replaces occurrences of a substring with another substring.
```sql
REPLACE(string, substring_to_replace, replacement_substring)
```

### CHAR_LENGTH
Returns the length of a string.
```sql
CHAR_LENGTH(string)
```

## Example Usage

Here is a practical example of using SQL string functions:

```sql
SELECT 
  CONCAT('Hello', ' ', 'World') AS CombinedText,
  SUBSTRING('SQL String Functions', 5, 6) AS SubstringExample,
  UPPER('hello world') AS UpperCaseText,
  LOWER('HELLO WORLD') AS LowerCaseText,
  TRIM('   SQL   ') AS TrimmedText,
  REPLACE('2024-11-11', '-', '/') AS ReplacedText,
  CHAR_LENGTH('Codecademy') AS LengthOfText;
```

### Example Output

| CombinedText | SubstringExample | UpperCaseText | LowerCaseText | TrimmedText | ReplacedText | LengthOfText |
|--------------|-------------------|---------------|---------------|-------------|--------------|--------------|
| Hello World  | String            | HELLO WORLD   | hello world   | SQL         | 2024/11/11   | 10           |

## Codebyte Example

```codebyte/sql
SELECT 
  UPPER('Codecademy Docs') AS UpperCaseExample,
  CHAR_LENGTH('Codecademy Docs') AS LengthExample;
```

This example will output:
- **UpperCaseExample**: `CODECADEMY DOCS`
- **LengthExample**: `15`
