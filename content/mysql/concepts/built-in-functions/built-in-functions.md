---
Title: 'Built in Functions'
Description: 'Built-in functions are predefined functions that can be used to perform operations on data at any time.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'MySQL'
  - 'Data'
CatalogContent:
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**`Built-in functions`** are predefined functions that can be used to perform operations on data at any time. They are usually categorized according to the data types (strings, date, numeric, and other built-in functions) that they operate on, and are used to simplify complex calculations and data manipulations by reusing code blocks for common tasks.

## String Functions

String functions allow operations to be performed on string data.

### Concat Function

`CONCAT()`: Concatenates two or more strings.

```pseudo
CONCAT(string1, string2, ...)
```

### Length Function

`LENGTH()`: Returns the length of a string.

```pseudo
LENGTH(string)
```

### Upper Function

`UPPER()`: Converts a string to upper-case.

```pseudo
UPPER(string)
```

## Numeric Functions

Numeric functions allow to perform operations on numeric data.

### Abs Function

`ABS()`: Returns the absolute value of a number.

```pseudo
ABS(value)
```

### Ceil Function

`CEIL()`: Returns the smallest integer value that is greater than or equal to a number.

```pseudo
CEIL(value)
```

### Round function

`ROUND()`: Rounds a number to a specific number of decimal places.

```pseudo
ROUND(number, decimals)
```

## Date and Time Functions

Date and Time functions allow to perform operations on date and time data.

### Now function

`NOW()`: Returns the current date and time.

```pseudo
NOW()
```

### DATE_ADD() Function

`DATE_ADD()`: Adds a time interval to a date.

```pseudo
DATE_ADD(date, INTERVAL value unit)
```

### DATEDIFF Function

`DATEDIFF()`: Returns the number of days between two dates.

```pseudo
DATEDIFF(date1, date2)
```

## Aggregate Functions

Aggregate functions allow to perform calculations on a set of values and return a single value.

### SUM Function

`SUM()`: Returns the sum of a set of values.

```pseudo
SUM(expression)
```

### AVG Function

`AVG()`: Returns the average value of a set of values.

```pseudo
AVG(expression)
```

### COUNT Function

`COUNT()`: Returns the number of rows in a table.

```pseudo
COUNT(expression)
```

## Control Flow Functions

Control Flow functions return different values based on different conditions.

### IF Function

`IF()`: Returns a value if a condition is true, and another value if it is false.

```pseudo
IF(condition, true_value, false_value)
```

### CASE Expression

CASE is a statement that goes through conditions and returns a value when the first condition is met and closes with an END clause. Once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause. If there is no ELSE part and no conditions are true, it returns NULL.

```pseudo
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE result
END
```

## JSON Functions

JSON functions are used to manipulate [JSON](https://www.codecademy.com/resources/docs/general/json) data.

### JSON_EXTRACT Function

`JSON_EXTRACT()`: Extracts data from a JSON document.

More about JSON can be learned [here](https://www.json.org/json-en.html)

```pseudo
JSON_EXTRACT(json_doc, path)
```

### JSON_ARRAY Function

`JSON_ARRAY()`: Creates a JSON array from a list of values.

```pseudo
JSON_ARRAY(value1, value2, ...)
```

## Encryption and Compression Functions

These functions provide encryption and compression utilities.

### AES_ENCRYPT Function

`AES_ENCRYPT()`: Encrypts a string using AES (Advanced Encryption Standard) encryption, and returns the original (binary) in [hexadecimal format](https://www.codecademy.com/resources/docs/general/hexadecimal).

```pseudo
AES_ENCRYPT(str, key_str)
```

### MD5 Function

`MD5()`: Calculates the MD5 (message-digest algorithm) hash of a string. This means that the value is returned as a string of 32 hexadecimal digits, or NULL if the argument was NULL.

```pseudo
MD5(string)
```

## Conclusion

These are some examples of primary built-in functions in MySQL across various categories, illustrating its usage with examples. Each function serves a specific purpose which allows data manipulation and querying in MySQL more efficiently and powerfully.
