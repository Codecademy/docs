---
Title: 'Data Types'
Description: 'Data types provide categories for values we store in tables.'
Subjects:
  - 'Data Science'
  - 'Information Technology'
Tags:
  - 'Data Types'
  - 'MySQL'
CatalogContent:
  - 'learn-MySQL'
  - 'paths/database-administration'
---

**Data types** provide categories for values we store in tables. Types are assigned to fields through table creation and are responsible for determining some of the attributes and constraints (such as the amount of memory allocated) of data stored within a given table.

MySQL supports a range of data types across widely used classes of data, such as the following:

- Numeric types
- String or character types
- Date and time types

These data types are found across all flavors of SQL. However, some versions of SQL may support several distinct data types of a particular class while others may only have one (the definitions below are specific to MySQL).

### Numeric Types

- `TINYINT`: A very small integer. Range: -128 to 127 (signed), 0 to 255 (unsigned).
- `SMALLINT`: A small integer. Range: -32,768 to 32,767 (signed), 0 to 65,535 (unsigned).
- `MEDIUMINT`: A medium-sized integer. Range: -8,388,608 to 8,388,607 (signed), 0 to 16,777,215 (unsigned).
- `INT`: A standard integer. Range: -2,147,483,648 to 2,147,483,647 (signed), 0 to 4,294,967,295 (unsigned).
- `BIGINT`: A large integer. Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (signed), 0 to 18,446,744,073,709,551,615 (unsigned).
- `DECIMAL`: A fixed-point number. It is stored as a string, allowing for very precise values. Syntax: `DECIMAL(M, D)`, where M is the maximum number of digits and D is the number of digits to the right of the decimal point.
- `FLOAT`: A small floating-point number with up to 7 decimal places. Syntax: `FLOAT(M, D)`.
- `DOUBLE`: A floating-point number with up to 15 decimal places. Syntax: `DOUBLE(M, D)`.

### String Types

- `CHAR`: A fixed-length string. Size: 0 to 255 characters. Syntax: `CHAR(N)`, where N is the length of the string.
- `VARCHAR`: A variable-length string. Size: 0 to 65,535 characters. Syntax: `VARCHAR(N)`, where N is the maximum length of the string.
- `TEXT`: A large variable-length string. Up to 65,535 characters.
- `TINYTEXT`: A very small string. Up to 255 characters.
- `MEDIUMTEXT`: A medium-sized string. Up to 16,777,215 characters.
- `LONGTEXT`: A large string. Up to 4,294,967,295 characters.
- `ENUM`: An enumeration, which is a string object that can have only one value, chosen from a list of allowed values. Syntax: `ENUM('value1', 'value2', 'value3', ...)`.
- `SET`: A set, which is a string object that can have zero or more values, each chosen from a list of allowed values. Syntax: `SET('value1', 'value2', 'value3', ...)`.

### Date and Time Types

- `DATE`: A date value in the format 'YYYY-MM-DD'. Range: '1000-01-01' to '9999-12-31'.
- `TIME`: A time value in the format 'HH:MM:SS'. Range: '-838:59:59' to '838:59:59'.
- `DATETIME`: A combined date and time value in the format 'YYYY-MM-DD HH:MM:SS'. Range: '1000-01-01 00:00:00' to '9999-12-31 23:59:59'.
- `TIMESTAMP`: A timestamp value, which is automatically updated to the current date and time. Range: '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC.
- `YEAR`: A year value in the format 'YYYY'. Range: '1901' to '2155' and '0000'.

```sql
CREATE TABLE data_types (
    age TINYINT,
    num_of_children SMALLINT,
    salary MEDIUMINT,
    employee_id INT,
    total_assets BIGINT,
    price_per_unit DECIMAL(10, 2),
    cash_amount FLOAT(5, 2),
    exchange_rate DOUBLE(10, 2),
    first_name CHAR(10),
    last_name VARCHAR(255),
    bio TEXT,
    birth_date DATE,
    meeting_time TIME,
    event_datetime DATETIME,
    last_updated TIMESTAMP,
    graduation_year YEAR,
    status ENUM('active', 'inactive', 'pending'),
    preferences SET('preference1', 'preference2', 'preference3')
);
```
