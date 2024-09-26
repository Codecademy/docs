---
Title: 'Identifier'
Description: 'Refers name given to databases object such as tables, columns, indexes etc.'
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

In PostgreSQL, identifiers refer to the names given to database objects such as tables, columns, indexes, views, sequences, and other database components.

## Identifier Types

`Identifier Types` refers to names given to objects in a database like tables, columns, indexes and other components of a database. These names help **PostgreSQL** to interact with database. The are different types of Identifier that are usedL

- Table Identifier
- Column Identifiers
- Index Identifiers
- View Identifiers
- Constraint Identifiers
- Schema Identifiers
- Sequence Identifiers
- Function Identifiers
- Trigger Identifiers
- Role Identifiers
- Foreign Key Identifiers
- Aggregate Type Identifiers
- Tablespace Identifiers

### Table Identifier

Table Identifier refers to name given to a table in the database. These name are used for interacting with the tables, they must follow certain rules like each table must have a unique name, using only character in the name that are allowed etc.

#### Example

In the below example `employees` is the table identifier:

```pseudo
-- Creating a Table with Standard identifiers
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

-- Creating a Table with case-sensitive identifiers
CREATE TABLE "Employees" (
    "ID" SERIAL PRIMARY KEY,
    "Name" VARCHAR(100)
);

-- Creating a table with special character identifiers
CREATE TABLE "Employee Details" (
    "Emp ID" SERIAL PRIMARY KEY,
    "First Name" VARCHAR(100)
);
```

### Column Identifiers

Column Identifier refers to name given to a colums in the database. These name are used for interacting with the columns, they must follow certain rules like each column in the same table must have a unique name but they do not need to be unique across different tables. For cases where using different tables with same column name using tables aliases is important to differentiate between them.

#### Example

In the below example two different tables `employees` and `departments` with same `name` column to access both tables aliases are used.

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department_id INT
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

SELECT emp.name AS employee_name, dep.name AS department_name
FROM employees emp
JOIN departments dep ON emp.department_id = dep.id;
```

### Index Identifiers

Index Identifier refers to name given to index created on tables or columns. Indexes are database objects that help improve the speed of query operations by providing quick access paths to data.

#### Example

In the below example `employee_name_idx` index is created on `employees` table:

```sql
CREATE INDEX employee_name_idx ON employees (name);
```

### View Identifiers

View Identifier refers to name given to views which are virtual tables defined by a query it allows user to encapsulate complex queries under a single name and interact with the query results as if they were actual tables.

#### Example

In the below example `employee_summary` view is created which works as a shortcut to select from the `employees` table.

```sql
CREATE VIEW employee_summary AS
SELECT name, department, salary
FROM employees;

SELECT * FROM employee_summary;
```

### Constraint Identifiers

Constraint Identifiers are name assgined to constraint that enforce rules on the data in the table. They ensure data integrity and include types such as primary keys, foreign keys, unique constraints, check constraints, and not-null constraints.

#### Example

In the below example we use different kinds of constraint

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id),
    email VARCHAR(255) UNIQUE,
    price NUMERIC CHECK (price > 0)
);
```

### Schema Identifiers

Schema Identifiers refers to name given to schemas, which are logical container for building relation between tables, views, indexes and other database objects. It helps in organizing database object and avoid conflicts.

#### Example

In the below example we use different kinds of constraint

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id),
    email VARCHAR(255) UNIQUE,
    price NUMERIC CHECK (price > 0)
);
```

### Sequence Identifiers

Sequence Identifiers refers to name assigned to sequence which is used to generate unique integer values and can be used in scenario when the purpose is to make sure each row has a distinct value, typically used for auto-incrementing primary key columns.

#### Example

In the below example a seqeunce is create and its current value is returned:

```sql
-- Naming sequence using 
CREATE SEQUENCE employee_id_seq;

SELECT currval('employee_id_seq');
```

### Function Identifiers

Function Identifiers are name assigned to custom function, these function are made for certain purpose and they return a result based on the logic inside them.

#### Example

In the below example a custom function `add_numbers` used to add numbers passed to it:

```sql
CREATE FUNCTION add_numbers (a INT, b INT) RETURNS INT AS $$
BEGIN
    RETURN a + b;
END;
$$ LANGUAGE plpgsql;

SELECT add_numbers(5, 10);
```

### Trigger Identifiers

Trigger Identifiers are names assgined to triggers, which automatically execute a specific procedure in response to certain events on the table. First we need to create trigger by specifying when to execute and the action to be performed.

#### Example

In the below example we have a trigger `update_timestamp` that will be trigger when a user information is updated and create a timestamp for when the update happened.

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(100),
    last_updated TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_last_updated()
RETURNS TRIGGER AS $$
BEGIN
    -- Set the last_updated column to the current time
    NEW.last_updated = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_timestamp
BEFORE UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION update_last_updated();
```

### Role Identifiers

Role Identifiers refers to name given to role which are used to manage roles within the database. They are fundamental part for security and permission system it can be used to give certain access to a user like read all the tables, write to all tables etc.

#### Example

In the below example how to create roles and assigned it to a user is shown:

```sql
CREATE ROLE admin;

GRANT admin TO alice;
```

### Foreign Key Identifiers

Foreign Key Identifiers is used to give names to foreign key constraint that help in establishes a relationship between two tables, it helps in building relation between columns in different tables. It ensures that values in one column (or a set of columns) match values in another column, typically the primary key of another table.

### Example

In the below example two tables are created `departments` and `employees` and a foreign key relationship between them is established.

```sql
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE CASCADE
);
```

### Aggregate Type Identifiers

Aggregate Type Identifiers refers to name given to aggregate function, these functions operate on set of values and return a single value. There are can build-in aggregate functions in like `COUNT`, `SUM` etc and they can also be custom aggregate function.

#### Example

In the below example build-in `SUM` aggregate function is used and a custom aggregate function `my_sum` is created and used.

```sql
SELECT SUM(salary) FROM employees;

CREATE AGGREGATE my_sum(int) (
    SFUNC = sum_state,
    STYPE = int,
    INITCOND = 0
);

SELECT my_sum(salary) FROM employees;
```

### Tablespace Identifiers

Tablespace Identifiers refers to name given to tablespace, which is used to give storage location where the data will be stored. It is used control where the data is stored that can help optimise performance by distributing I/O across different storage devices.

#### Example

In the below example `data/my_tablespace` is the path in the filesystem where data will reside and we are specifying which tablespace to use.

```sql
CREATE TABLESPACE my_tablespace LOCATION '/data/my_tablespace';

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
) TABLESPACE my_tablespace;
```
