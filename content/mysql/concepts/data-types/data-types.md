---
Title: 'Data Types'
Description: 'The commonly used data types in MySQL.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Data'
  - 'Database'
  - 'Data Types'
  - 'MySQL'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In MySQL, **data types** define the types of data formats that can be stored in tables. The types are assigned to the columns while creating a table.

## Different Data Types

In MySQL, data types are categorized into several groups, including numeric, date and time, string (character), binary (byte), spatial, and JSON. These data types are discussed below.

### Numeric Data Types

Here is a list of numeric data types in MySQL:

- `BIGINT` (size): Used to store large integer values within the range of _-9,223,372,036,854,775,808_ to _9,223,372,036,854,775,807_ for signed and _0_ to _18,446,744,073,709,551,615_ for the number of digits after the decimal point. The required storage is _8_ bytes.
- `BIT` (size): Used to store bit values within the _1-64_ bits range.
- `BOOLEAN`: Used to store boolean values. The stored values are known as tiny integers with _0_ representing `FALSE` and _1_ representing `TRUE`.
- `DECIMAL` (M, D) or `NUMERIC` (M, D): Used to store exact numeric values being applicable in financial databases where exactness is essential.
- `DOUBLE` (size, d) or `REAL` (size, d): Used for approximate calculations such as scientific and statistical data as well as scenarios that do not require exact precision. It uses _8_ bytes to store the value.
- `FLOAT` (size, d): Used to store approximate values when range and precision are needed, providing less precision than `DOUBLE`. It uses _4_ bytes to store the value.
- `INT` (size) or `INTEGER` (size): Used to store integer numbers and requires _4_ bytes of storage being useful for counting and indexing items in a database.
- `MEDIUMINT` (size): Used to store medium-sized integer values within the range of _-8,388,608_ to _8,388,607_ for signed and _0_ to _16,777,215_ for unsigned. It needs _3_ bytes to store the value.
- `SMALLINT` (size): Used to store small integer values within the range of _-32,768_ to _32,767_ for signed and _0_ to _65,535_ for the number of digits after the decimal point. It needs _2_ bytes to store the value.
- `TINYINT` (size): Used to store very small integer values within the range of _-128_ to _127_ for signed and _0_ to _255_ for unsigned. It needs _1_ byte to store the value.

> Note: `size` specifies the numbers to display and `d` specifies the number of digits after the decimal point.

### Date and Time Data Types

Here is a list of date and time data types in MySQL:

- `DATE`: Used to store date values in the standard SQL format _YYYY-MM-DD_ within the range _1000-01-01_ to _9999-12-31_. It needs _3_ bytes of storage.
- `DATETIME(fsp)`: Used to store date and time together in the standard format _YYYY-MM-DD HH:MM:SS_. It is useful to keep records of the exact date and time when an event occurred, like transaction history. It holds values within the range _1000-01-01 00:00:00_ to _9999-12-31 23:59:59_, needing in general _8_ bytes of storage. In case `fsp` (fractional seconds precision) is mentioned, then more storage is required.
- `TIMESTAMP(fsp)`: Used to store timestamp in the format _YYYY-MM-DD HH:MM:SS_ within the range _1970-01-01 00:00:01 UTC_ to _2038-01-19 03:14:07 UTC_, needing storage between _4-7_ bytes. It is useful, for example, when applications need SQL to handle time zone conversions automatically.
- `YEAR`: Used to store year values within the range _1901_ to _2155_ and needs _1_ or _2_ bytes of storage depending on how SQL mode is enabled. It is useful for applications that need to analyze data based on years without a need for granularity.

> Note: `fsp` defines the number of digits to store for fractional seconds with values ranging from _0_ (no fractional seconds) to _6_ (means microseconds precision up to six decimals). Since it defines the precision level, its specifications affect the storage size (higher precision requires more storage space).

### String Data Types

Here is a list of string data types in MySQL:

- `BINARY(size)`: Used to store binary strings of fixed length. It is suitable for exact binary operations, for instance, when data columns of binary data need exact length and content requirements (cryptographic hashes or binary encoded data).
- `BLOB(size)`: Used to store large binary data, like images, audio/video files, or other binary data files based on storage and database configuration. It's useful for variable data-saving scenarios and back-ups.
- `CHAR(size)`: Used to store predefined fixed-length strings of characters, useful in cases when the database holds strings of known length like postal codes and abbreviations.
- `ENUM(val1, val2, val3, ...)`: Used to store a list of possible values that were predefined with required storage dependent on enumerated values (_1_, _2_, or _4_ bytes). It is useful when a database needs to prevent invalid data entries.
- `LONGBLOB`: Used to store binary data that is beyond the capacity of other options. It can store up to _4_ GB and is an efficient storage option for handling complex binary objects.
- `LONGTEXT`: Used to store text data that is very large. Up to _4_ GB of data being suitable for applications and document repositories that handle large textual content.
- `MEDIUMBLOB`: Used for storing large binary object data types like medium-sized images of up to _16_ MB.
- `MEDIUMTEXT`: Used for storing medium-sized text data of up to _16_ MB and it uses more storage space than smaller text types like `TINYTEXT`.
- `SET`: Used for storing a set of values chosen from a predefined list of possible values where each `set` value is stored as an integer.
- `TEXT(size)`: Used for storing medium to large text strings up to _64_ KB of text data.
- `TINYBLOB`: Used for storing very small binary objects, like images or files with a minimal storage requirement.
- `TINYTEXT`: Used for storing short texts like descriptions or comments within the defined data size limits (up to _255_ bytes).
- `VARBINARY(size)`: Used for storing variable-length binary data, like encryptions. The maximum number of bytes to be stored is defined by the `size` parameter.
- `VARCHAR(size)`: Used for storing variable-length strings with a maximum size specified and it gives flexibility in cases when user input to a database is needed.

> Note: `size` defines the maximum number of characters or length a column can store, with the `var` prefix indicating a variable length up to a defined size. It will use storage proportional to the specified size and length of data entered.

### Spatial Data Types

Here is a list of spatial data types in MySQL:

- `GEOMETRY`: Uses any type of geometry spatial data in the database like points, lines, and polygons. It is a flexible, general base type for other more specific data types.
- `GEOMETRYCOLLECTION`: Used to store a collection of zeros or different types of geometric classes like points, polygons, and lines that are in the same coordinate system.
- `LINESTRING`: Used to define points connected by lines on maps like paths, roads, or rivers.
- `MULTILINESTRING`: Uses a collection of `LineString` objects as part of a single dataset, like various mappings of road routes or transportation systems.
- `MULTIPOINT`: Uses a collection of point data objects linked to a specific entity, but not interconnected. On a map, it can represent multiple addresses within the same restaurant chain.
- `POINT`: Uses two-dimensional space coordinates (X, Y) to store a single point within it. It is useful when MySQL needs to query geographical coordinates.
- `POLYGON`: Uses a two-dimensional surface defined by several geometries ranging from a single exterior limit and zero or more interior limits within the shape. It can map objects like countries, forests, or other defined regions.
- `SURFACE`: Used for storing two-dimensional data used when mapping complex elevations, shapes, or terrains.

### JSON Data Type

The `JSON` data type allows storing and querying semi-structured JSON data in a relational database environment being useful in cases that require dynamic and flexible data storage (e-commerce platforms, product catalogs, etc.).

## Example

In this example, MySQL is used for handling large values for user IDs, order IDs, and payment amounts on a database. The data is gathered in a payment table to keep track of all transactions made by the customers:

```sql
CREATE TABLE payments (
  payment_id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT,
  order_id BIGINT,
  payment_amount BIGINT(20),
  payment_date DATETIME
);

INSERT INTO payments (user_id, order_id, payment_amount, payment_date)
VALUES
  (10000000001, 50000000001, 999999999999, '2024-07-10 12:00:00'),
  (10000000002, 50000000002, 150000000000, '2024-07-10 12:30:00'),
  (10000000003, 50000000003, 200000000000, '2024-07-10 13:00:00');

SELECT user_id as 'User ID', order_id as 'Order ID', payment_amount as 'Payment Amount (in cents)', payment_date as 'Payment Date & Time'  from payments
```

The above code will give the table below:

| User ID     | Order ID    | Payment Amount (in cents) | Payment Date & Time |
| ----------- | ----------- | ------------------------- | ------------------- |
| 10000000001 | 50000000001 | 999999999999              | 2024-07-10 12:00:00 |
| 10000000002 | 50000000002 | 150000000000              | 2024-07-10 12:30:00 |
| 10000000003 | 50000000003 | 200000000000              | 2024-07-10 13:00:00 |
