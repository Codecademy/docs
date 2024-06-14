---
Title: 'Query Attributes'
Description: 'Query attributes client-defined attributes that apply to the next statement sent to the server for execution.'
Subjects:
  - 'Computer Science'
  - 'Information Technology'
Tags:
  - 'Database'
  - 'MySQL'
  - 'Queries'
CatalogContent:
  - 'learn-sql'
  - 'paths/full-stack-engineer'
---

**Query attributes** are client-defined attributes that apply to the next statement sent to the server for execution.

- Attributes are defined prior to sending the statement.
- Attributes exist until statement execution ends, at which point the attribute set is cleared.
- While attributes exist, they can be accessed on the server side.

Examples of common uses for query attributes:

- A web application produces pages that generate database queries, and for each query must track the URL of the page that generated it.
- An application passes extra processing information with each query, for use by a plugin such as an audit plugin or query rewrite plugin.

## Syntax

### Defining Query attributes

The `query_attributes` command enables defining up to 32 pairs of attribute names and values.

```sql
mysql> query_attributes name1 value1 name2 value2 name3 value3;
```

### Accessing Query Attributes

To access query attributes within SQL statements for which attributes have been defined, the `mysql_query_attributes_string()` loadable function is implemented. It takes an attribute-name argument and returns an attribute value as a string, or `NULL` if the attribute does not exist.

```sql
mysql> query_attributes name1 value1 name2 value2;
mysql> SELECT
        mysql_query_attribute_string('name1') AS 'attribute 1',
        mysql_query_attribute_string('name2') AS 'attribute 2',
        mysql_query_attribute_string('name3') AS 'attribute 3';
+-------------+-------------+-------------+
| attribute 1 | attribute 2 | attribute 3 |
+-------------+-------------+-------------+
| value1      | value2      | NULL        |
+-------------+-------------+-------------+
mysql> SELECT
        mysql_query_attribute_string('name1') AS 'attribute 1',
        mysql_query_attribute_string('name2') AS 'attribute 2',
        mysql_query_attribute_string('name3') AS 'attribute 3';
+-------------+-------------+-------------+
| attribute 1 | attribute 2 | attribute 3 |
+-------------+-------------+-------------+
| NULL        | NULL        | NULL        |
+-------------+-------------+-------------+
```

As shown by the second `SELECT` statement, attributes defined prior to a given statement are available only to that statement. After the statement executes, the defined attributes are cleared. To use an attribute value across multiple statements, assign it to a variable.

### Using an attribute value across multiple statements

The following example shows how to use an attribute value across multiple statements, and illustrates that attribute values are available in subsequent statements by means of the variables, but not by calling `mysql_query_attribute_string()`:

```sql
mysql> query_attributes name1 value1 name2 value2;
mysql> SET
         @a1 = mysql_query_attribute_string('name1'),
         @a2 = mysql_query_attribute_string('name2');

mysql> SELECT
         @a1, mysql_query_attribute_string('name1') AS 'attribute 1',
         @a2, mysql_query_attribute_string('name2') AS 'attribute 2';
+--------+-------------+--------+-------------+
| @a1    | attribute 1 | @a2    | attribute 2 |
+--------+-------------+--------+-------------+
| value1 | NULL        | value2 | NULL        |
+--------+-------------+--------+-------------+
```

## Example

### MySQL Statements
```sql
mysql> query_attributes weapon1 glamdring weapon2 anduril;
mysql> SELECT
        mysql_query_attribute_string('weapon1') AS 'gandalf',
        mysql_query_attribute_string('weapon2') AS 'aragorn',
        mysql_query_attribute_string('weapon3') AS 'gollum';
+-----------+---------+--------+
| gandalf   | aragorn | gollum |
+-----------+---------+--------+
| glamdring | anduril | NULL   |
+-----------+---------+--------+
mysql> SELECT
        mysql_query_attribute_string('weapon1') AS 'gandalf',
        mysql_query_attribute_string('weapon2') AS 'aragorn';
+---------+---------+
| gandalf | aragorn |
+---------+---------+
| NULL    | NULL    |
+---------+---------+
```