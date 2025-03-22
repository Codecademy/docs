---
Title: 'Collations'
Description: 'Represent the rules that determine how data is sorted and compared in a database.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'PostgreSQL'
  - 'Collations'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

Collations are a feature in PostgreSQL that set the rules that define how data is stored, compared, and sorted out in a database. This feature allows to specify the sort order and character classification behavior of data per column, or even per operation.

Collations can be set at different levels which reflect on different aspects of the database. These levels are:

- Database-level
- Column-level
- Expression-level

## Database-Level Collations

Database-level collations determine how the system sorts and compares string data within a database. Setting a collation at the database level establishes a consistent foundation for text handling, ensuring all the text data follows the same rules unless explicitly overridden. This approach simplifies configuration and maintains consistency across a database.

When creating a new database, the collation settings can be specified using the `CREATE DATABASE` clause with the `LC_COLLATE` and `LC_CTYPE` clauses, which define the sort order and character classification of the database respectively.

### Example

```sql
CREATE DATABASE zion
LC_COLLATE = 'en_US.UTF-8'
LC_CTYPE = 'en_US.UTF-8';
```

- `LC_COLLATE`: Defines the database collation as `en_US.UTF-8`, indicating US English rules for character comparison with `UTF-8` encoding.
- `LC_CTYPE`: Sets the character set for the database to `en_US.UTF-8`, ensuring support for a wide range of characters encoded in `UTF-8`.

## Column-Level Collations

Unlike database-level collations, column-level collations allow to define specific sorting and comparison rules for individual columns within a table. This provides more internal control over how text data is handled.

When a column-level collation is defined, it actively overrides the database-level collation for that specific column. This allows to tailor the sorting rules for each column based on its content and needs.

### Example

Let it be assumed that a column titled `name` in a table named `novels` might contain product names with accented characters and these names are to be sorted correctly, considering the accents. Below is a query on how to define a column-level collation for this scenario:

```sql
CREATE TABLE novels (
  product_id INT PRIMARY KEY,
  name VARCHAR(50) COLLATE "fr_FR.CI",
  price DECIMAL,
  description TEXT
);
```

Above, the `name` column uses the French case-insensitive collation `fr_FR.CI` for sorting and comparison, defined using the `COLLATE` clause.

This query establishes a structured way to manage a collection of novels with consistent text handling rules.

In column-level collations, the `ALTER` statement plays a crucial role in modifying existing table structures, which includes changing the collation of a column. This statement forms the foundation for modifying an existing table:

```sql
ALTER TABLE novels
MODIFY COLUMN name VARCHAR(50) COLLATE "de_DE";
```

## Expression-Level Collations

Expression-level collations allow to specify the collation for individual string expressions within database queries, overriding the default collation of the column or database:

```sql
SELECT name COLLATE "en_US" FROM customers;
```

Expression-level collations allow temporary overrides without affecting the underlying column definition.

### Example

Let it be assumed that a table named `novels` contains a `book_title` column that might have titles with mixed cases and they are to be sorted alphabetically, ignoring case differences, using US English rules. Below is an expression-level collation query for this scenario:

```sql
SELECT book_title COLLATE "en_US.CI"
FROM books
ORDER BY book_title;
```

## Collation Options

Collation options dictate the settings or attributes that can be chosen and applied at the different levels of collations mentioned above. These options define the rules for comparing and sorting strings. They act like a set of rules that determine the order of characters, considering factors like case sensitivity and accent.

For example, if there is a database with different regional content, different collation options might be used for different columns or tables to ensure that text is sorted and compared correctly based on language-specific rules.

Below is a table of commonly used options:

| Option             | Syntax | Description                                                                                                                                                                             |
| ------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Case-sensitive     | `_CS`  | Uppercase and lowercase letters are treated differently. "Castle" would come before "castle" during sorting.                                                                            |
| Case-insensitive   | `_CI`  | Lower case and upper case are treated as identical. "Ban" and "ban" will be considered equal and might appear in order of other sorting rules.                                          |
| Accent-sensitive   | `_AS`  | Used to consider accented and non-accented letters separately. For example, 'a' and 'ấ' are not treated separately.                                                                     |
| Accent-insensitive | `_AI`  | Used to consider accented and non-accented letters identical. For example, 'a' and 'ấ' are treated identically.                                                                         |
| Width-sensitive    | `_WS`  | Differentiates full-width and half-width characters present. If it's not mentioned, then width insensitivity is applied, i.e., full and half-width characters are considered identical. |

By understanding the available collation options and choosing the appropriate ones for the data, it can be ensured that the database delivers accurate and meaningful results that meet the user requirements.
