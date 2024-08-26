---
Title: 'Data Types'
Description: 'Commonly used MySQL data types'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'MySQL'
  - 'data-types'
CatalogContent:
  - 'learn-sql'
  - 'getting-started-off-platform-for-data-science'
  - 'paths/analyze-data-with-sql'
  - 'paths/design-databases-with-mysql'
---

**`Data types`** defines the types of data formats that can be stored in tables. Types are assigned to columns while creating a table.

In MySQL, data types are categorized into several groups, including numeric, date and time, string (character), binary (byte), spatial, and JSON data types

## Different Data Types

Below is the list of data types.

### Numeric Data Types

- `BIGINT` (size): Used to store large integer values within the range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 for signed and 0 to 18,446,744,073,709,551,615 for the number of digits after the decimal point. The required storage is 8 bytes.
- `BIT` (size): Used to store bit values within the 1-64 bits range.
- `BOOLEAN`: Used to store boolean values. The stored values are known as tiny integers with 0 representing `FALSE` and 1 representing `TRUE`.
- `DECIMAL`(M, D) or `NUMERIC`(M, D): Used to store exact numeric values being applicable in financial databases where exactness is essential.
- `DOUBLE`(size, d) or `REAL`(size, d): are used for approximate calculations such as scientific, and statistical data, and scenarios that do not require exact precision. It uses 8 bytes to store the value.
- `FLOAT`(size, d): Used to store approximate values when range and precision are needed, providing less precision than DOUBLE. It uses 4 bytes to store the value.
- `INT`(size) or `INTEGER`(size): Used to store integer numbers and requires 4 bytes of storage being useful for counting, and indexing items in a database.
- `MEDIUMINT`(size): Used to store medium-sized integer values within the range of -8,388,608 to 8,388,607 for signed and 0 to 16,777,215 for unsigned.
  It needs 3 bytes (24 bits) to store the value.
- `SMALLINT`(size): Used to store small integer values within the range of -32,768 to 32,767 for signed and 0 to 65,535 for the number of digits after the decimal point. It needs 2 bytes (16 bits) to store the value.
- `TINYINT`(size): Used to store very small integer values within the range of -128 to 127 for signed and 0 to 255 for unsigned. It needs 1 byte (8 bits) to store the value.

> **Note**: `size` specifies numbers to display and `d` specifies number of digits after the decimal point.

### Date and Time Data Types

- `DATE`: Used to store date values in the standard SQL format YYYY-MM-DD wishing the range 1000-01-01 to 9999-12-31. It needs 3 bytes of storage.
- `DATETIME(fsp)`: Used to store date and time together in the standard format: YYYY-MM-DD HH:MM:SS. It is useful to keep records of the exact date and time when an event occurred, like transaction history. It holds values within the range 1000-01-01 00:00:00 to 9999-12-31 23:59:59 needing in general 8 bytes of storage but in case fsp (fractional seconds precision) is mentioned then more storage is required.
- `TIMESTAMP(fsp)`: Used to store timestamp in the format YYYY-MM-DD HH:MM:SS within the range from  1970-01-01 00:00:01 UTC to 2038-01-19 03:14:07 UTC,  storage needed between 4-7 bytes. Is useful for example when applications need SQL to handle time zone conversions automatically.
- `YEAR`: Used to store year values within the range 1901 to 2155 and needs 1 or 2 bytes for storage depending on how SQL mode is enabled. It is useful for applications that need to analyze data based on years without a need for granularity.

> **Note**: `fsp` parameter stands for Fractional Seconds Precision. It defines the number of digits to store for fractional seconds in data types like  `DATETIME` and `TIMESTAMP`, with values ranging from 0 (no fractional seconds) to 6 (means microseconds precision up to six decimals). Because this parameter defines the precision level, its specifications affect the storage size (higher precision requires more storage space).

### String Data Types

 `BINARY(size)`: Used to store binary strings of fixed length. Is suitable for exact binary operations for instance when data columns of binary data need exact length and content requirements (cryptographic hashes or binary encoded data).
- `BLOB(size)`: Used to store large binary data, like images, audio/video files, or other binary data files based on storage and database configuration. It's useful for variable data-saving scenarios, and back-ups.
- `CHAR(size)`: Used to store predefined fixed-length strings of characters, useful in cases when the database holds strings of known length like postal codes and abbreviations.
- `ENUM(val1, val2, val3, ...) `: Used to store a list of possible values that were predefined with required storage dependent on enumerated values (1, 2, or 4 bytes). Is useful when a database needs to prevent invalid data entries.
- `LONGBLOB`: Used to store binary data that is beyond the capacity of other options. It can store up to 4GB and is an efficient storage option for handling complex binary objects.
- `LONGTEXT`: Used to store text data that is very large, up to 4 GB of data being suitable for applications, and document repositories that handle large textual content
- `MEDIUMBLOB`: Used for storing large binary object data types like medium-sized images of up to 16 MB.
- `MEDIUMTEXT`: Used for storing medium-sized text data of up to 16 MB and it uses more storage space than smaller text types like `TINYTEXT`.
- `SET(val1, val2, …)`: Used for storing a set of values chosen from a predefined list of possible values where each ‘set’ value is stored as an integer.
- `TEXT(size)`: Used for storing medium to large text strings up to 64 KB of text data.
- `TINYBLOB`: Used for storing very small binary objects, like images or files with a minimal storage requirement.
- `TINYTEXT`: Used for storing short texts like descriptions or comments within the defined data size limits (up to 255 bytes).
- `VARBINARY (size)`: Used for storing variable-length binary data, like encryptions. The maximum number of bytes to be stored is defined by the `size` parameter.
- `VARCHAR(size)`: Used for storing variable-length strings with a maximum size specified and it gives flexibility in cases when user input to a database is needed.

Note: the size parameter defines the maximum number of characters or length a column can store, with the var prefix indicating a variable length up to a defined size. It will use storage proportional to the specified size and length of data entered.

### Spatial Data Types

- `GEOMETRY`: Uses any type of geometry spatial data in the database like points, lines, and polygons. It is a flexible, general base type for other more specific data space types.
- `GEOMETRYCOLLECTION`: Used to store collection of zero or different types of geometric classes like points, polygons, and lines that are in the same coordinate system.
- `LINESTRING`: Used to define points connected by lines on maps like paths, roads, or rivers.
- `MULTILINESTRING`: Uses a collection of LineString objects as part of a single dataset, like various mappings of road routes or transportation systems.
- `MULTIPOINT`: Uses a collection of point data objects linked to a specific entity, but not interconnected. On a map, it can represent multiple addresses within the same restaurant chain.
- `POINT`: Uses two-dimensional space coordinates (X, Y) to store a single point within it. Is useful when MSQL needs to query geographical coordinates.
- `POLYGON`: Uses a two-dimensional surface defined by several geometries ranging from a single exterior limit and zero or more interior limits within the shape. It can map objects like countries, forests, or other defined regions.
- `SURFACE`: Used for storing two-dimensional data used when mapping complex elevations, shapes, or terrains.


### JSON Data Types

- `JSON`: Allows storing and querying semi-structured JSON data in a relational database environment being useful in cases that require dynamic and flexible data storage (e-commerce platforms, product catalogs).

## Examples

Next are examples of some data types from the above categories.

In this example, we use MySQL for handling large values for user IDs, order IDs, and payment amounts on a database.
Data is gathered in a payment table in order to keep track of all transactions made by customers:

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

Numeric, date, and time data types used in the above scenario make it possible to have recorded payment details stored in the database like:

| User ID       | Order ID       | Payment Amount (in cents) | Payment Amount (in dollars)  | Payment Date & Time      |
|---------------|----------------|----------------------------|-----------------------------|--------------------------|
| 10000000001   | 50000000001    | 999999999999               | $9,999,999.99               | July 10, 2024, 12:00 PM  |
------------------------------------------------------------------------------------------------------------------------

In this example, we use MySQL to create and store fingerprint templates for biometric authentication in a security system.

```sql
CREATE TABLE biometric_data (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    fingerprint_template BINARY(255)
);

Each person will get a unique number called user_id that is increased automatically.

The fingerprint code is stored in this template, and it’s always 255 bytes long.

Next, when someone scans their fingerprint, a special code is created and stored in the database by means of converting the hexadecimal (base-16) string representation into its binary (base-2) equivalent:

```sql
INSERT INTO biometric_data (fingerprint_template)
VALUES (UNHEX('AABBCCDDEEFF00112233445566778899AABBCCDDEEFF00112233445566778899...'));

By using BINARY and INT data types MySQL stores fingerprint templates in their original binary format, useful in authentication systems.
