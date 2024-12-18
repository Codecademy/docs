---
Title: 'Loops'
Description: 'Loops are used to repeatedly execute a block of code as long as a certain condition is met.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Loops'
  - 'Database'
  - 'Queries'
  - 'Tables'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
---

In SQL, **loops** are used to repeatedly execute a block of code as long as a certain condition is met. These loops can be useful when performing operations that require repetition, such as processing a set of rows or performing iterative calculations.

## Types of Loops

### 1. WHILE Loop

The `WHILE` loop is the most common loop in SQL and is used to execute a block of SQL statements as long as a given condition remains true.

The syntax for `WHILE` loop is as follows:

```pseudo
WHILE condition
BEGIN
    -- SQL statements to execute
END
```

Here's an example to print the value of `@counter` from 1 to 5 using a `WHILE` loop:

```sql
DECLARE @counter INT = 1;

WHILE @counter <= 5
BEGIN
    PRINT 'Counter: ' + CAST(@counter AS VARCHAR);
    SET @counter = @counter + 1;
END
```

### 2. FOR Loop

In SQL, a `FOR` loop is often used for iterating over a specific range of values. It is more common in Oracle databases than other SQL variants.

The syntax for `FOR` loop is as follows:

```pseudo
FOR counter IN lower_bound..upper_bound
LOOP
    -- SQL statements to execute
END LOOP;
```

Here's an example to print the value of `counter` from 1 to 5 using a `FOR` loop:

```sql
BEGIN
    FOR counter IN 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE('Counter: ' || counter);
    END LOOP;
END;
```

### 3. LOOP

A `LOOP` without an explicit condition can create an infinite loop. To exit the loop, a conditional `EXIT` statement is used.

The syntax for using `LOOP` is as follows:

```pseudo
LOOP
    -- SQL statements
    IF condition THEN
        EXIT;
    END IF;
END LOOP;
```

Here's an example to print the value of `counter` from 1 to 5 using a `LOOP`:

```sql
DECLARE
    counter INT := 1;
BEGIN
    LOOP
        EXIT WHEN counter > 5;
        DBMS_OUTPUT.PUT_LINE('Counter: ' || counter);
        counter := counter + 1;
    END LOOP;
END;
```

> **Note**: Be cautious of creating infinite loops, especially if the exit condition is not correctly defined, as it can lead to system performance degradation.
