---
Title: 'UNHEX()'
Description: 'Converts a hexadecimal string to its corresponding binary string.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Functions'
  - 'Database'
  - 'MySQL'
  - 'Strings'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

The **`UNHEX()`** [function](https://www.codecademy.com/resources/docs/mysql/built-in-functions) is a build-in function in MySQL that converts a hexadecimal string to its corresponding binary string. Useful when we have data stored in hexadecimal format we can use `UNHEX()` function to convert it to the original binary form making it usable and understandable.

## Syntax

```pseudo
UNHEX(val);
```

- `val`: A hexadecimal string to be converted to its corresponding binary form.

## Example

The below example shows how `UNHEX()` function works.

```sql
CREATE TABLE documents (
    id INT PRIMARY KEY,
    content BLOB
);

INSERT INTO documents (id, content) VALUES (1, UNHEX('636F6465636164656D79'));

SELECT HEX(content) AS 'hex-content', CAST(content AS CHAR) AS readable_content
FROM documents
WHERE id = 1;
```

The output of the above code will be:

| hex-content          | readable-content |
| -------------------- | ---------------- |
| 636F6465636164656D79 | codecademy       |
