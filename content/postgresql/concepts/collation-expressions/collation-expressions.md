---
Title: 'Collation Expressions'
Description: A collation expression refers to the rules that determine how data are sorted and compared in a database. These rules are crucial for ensuring that text data is handled in a way that is consistent with linguistic and regional expectations. Collations can be specified at various levels; database, table, column, and expression levels, which gives you control over how your data behaves, providing consistent and expected results.
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'PostgreSQL'
  - `Collation`
CatalogContent:
  - 'learn-postgresql'
  - 'paths/analyze-data-with-sql'
---

Collation is a feature in Postgresql that set rules which defines how data characters are stored, compared and sorted out in database. This feature allow you specify the sort order and character classification behavior of data per-column, or even per-operation.
A collation expression in PostgreSQL is a way to explicitly specify the collation to be used for sorting and comparing text data.

Collation can be set at different levels which reflects on different aspect of the database. These levels are:
- Database-level
- Column-level
- Expression-level

## Database-Level

Database level collation determines how the system sorts and compares string data within a database, Seting the collation at the database level establishes a consistent foundation for text handling, ensuring all text data follows the same rules unless explicitly overridden. This approach simplifies configuration and maintains consistency across your database.
When creating a new database, you can specify the collation settings using the `CREATE DATABASE` clause with `LC_COLLATE` and `LC_CTYPE` which defines the sort order and character classification respectively.

``` sql
CREATE DATABASE zion
LC_COLLATE = 'en_US.UTF-8'
LC_CTYPE = 'en_US.UTF-8';
```
In the above query:
- `CREATE DATABASE zion` clause specifies the creation of a new database named `zion`.
- `LC_COLLATE = 'en_US.UTF-8'` defines the database collation as `"en_US.UTF-8"`, indicating US English rules for character comparison with `UTF-8` encoding.
- `LC_CTYPE = 'en_US.UTF-8';` clause sets the character set for the database to `"en_US.UTF-8"`, ensuring support for a wide range of characters encoded in `UTF-8;`.

## Column-Level

Column-level collation, unlike database-level collation we mentioned earlier, allows you to define specific sorting and comparison rules for individual columns within a table. This provides more internal control over how text data is handled. 
When you define a column-level collation, it actively overrides the database-level collation for that specific column. This allows you to tailor the sorting rules for each column based on its content and needs.  

Say we create a table `novel` where the `name` column might contain product names with accented characters and we want these names to be sorted correctly, considering the accents. below is a query on how to define a column-level collation for this scenario:

``` sql
CREATE TABLE novels (
  product_id INT PRIMARY KEY,
  name VARCHAR(50) COLLATE "fr_FR.ci",
  price DECIMAL,
  description TEXT
);
```
This query creates a table named `novels` with four columns: 
- `product_id INT PRIMARY KEY`: The `product` column with an integer data type that serves as the primary key, ensuring each value is unique and not null. 
- `name VARCHAR(50)`: The `name` column with character data type which can hold up to 50 characters, uses the French case-insensitive collation `"fr_FR.ci"` for sorting and comparison. 
- `price DECIMAL,`: The `price` column with decimal data type. 
- `description TEXT`: The `description` column stores variable-length text, suitable for long descriptions. 

This query establishes a structured way to manage a collection of novels with consistent text handling rules.

In column level collation the `ALTER` statement plays a crucial role in modifying existing table structures, which includes changing the collation of a column. This statement forms the foundation for modifying an existing table.

``` sql
ALTER TABLE novels
MODIFY COLUMN name VARCHAR(50) COLLATE "de_DE";
```
From the query above:

- `ALTER TABLE novels` initiates the modification of the `novel` table.
- `MODIFY COLUMN name` specifies that we're modifying the `name` column.
- `VARCHAR(50) COLLATE "de_DE"` defines the new data type for name as varchar(50) alongside the German collation `"de_DE"`.

## Expression-Level

Expression-level collation allows you to specify the collation for individual string expressions within your queries, overriding the default collation of the column or database.
You can use the `COLLATE` clause within a string expression to define its collation. For example:

``` sql
SELECT name COLLATE "en_US" FROM customers;
```
Expression-level collation allows temporary overrides without affecting the underlying column definition.

Let's consider a table named `novels` with columns for `book_title` and `publication_year` where the `book_title` column might have titles with mixed cases. We want to sort them alphabetically, ignoring case differences, using US English rules. 

Below is an expression-level collation query:

``` sql
SELECT book_title COLLATE "en_US.ci"
FROM books
ORDER BY book_title;
```
From the above query:

- `book_title COLLATE "en_US.ci"` applies the `COLLATE` clause to the book_title column, specifying the collation `"en_US.ci"` which defines US English sorting rules (en_US) while ignoring case.
- `ci` for case-insensitive.
- `ORDER BY book_title` clause uses the already collated title expression for sorting, ensuring case-insensitive alphabetical order.

## Collation options

Collation options dictate the settings or attributes you can choose and apply at the different levels of collation mentioned above. These options define the rules for comparing and sorting strings. They act like a set of rules that determine the order of characters, considering factors like case sensitivity and accent.
For example, if you have a database with different regional content, you might use different collation options for different columns or tables to ensure that text is sorted and compared correctly based on language-specific rules.

Below is a table of commonly used options:
-
| Option | Syntax | Description |
| ---- | ---- | ---- |
| Case sensitive | `_CS` | Uppercase and lowercase letters are treated differently. "Castle" would come before "castle" during sorting. |
| Case insensitive | `_CI` | Lower case and upper case are treated as identical, "Ban" and "ban" will be considered equal and might appear in order of other sorting rules. |
| Accent sensitive | `_AS` |  used to consider accented and non accented letter separately. for example ‘a’ and ’ ấ’are not treated identical. |
| Accent insensitive | `_AI` | used to consider accented and non accented letter identical. for example ‘a’ and ’ ấ’are treated identical. |
| Width sensitive | `_WS` | Differentiates full width and half width characters present, if `_WS` wasn't mentioned then it is width-insensitive and hence full and half width characters will be considered as identical. |

By understanding the available collation options and choosing the appropriate ones for your data, you can ensure your database delivers accurate and meaningful results that meet your specific requirements.
