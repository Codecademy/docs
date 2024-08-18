---
Title: 'Built-in Functions'
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

**Built-in functions** are predefined functions that can be used to perform operations on data at any time. They are usually categorized according to the data types (strings, date, numeric, and other built-in functions) that they operate on, and are used to simplify complex calculations and data manipulations by reusing code blocks for common tasks.

## String Functions

String functions allow operations to be performed on string data.

### Concat function

`CONCAT()`: Concatenates two or more strings.

```pseudo
CONCAT(string1, string2, ...)
```

### Example

In the following example, how to use `CONCAT()` is shown:

The table `greeting` below will concatenate the strings and show the value `Hello world` as a Greeting.

```mysql
CREATE TABLE greetings (
id INT AUTO_INCREMENT PRIMARY KEY,
    string1 VARCHAR(50),
    string2 VARCHAR(50),
    string3 VARCHAR(50)
);
INSERT INTO greetings (string1, string2, string3) VALUES
('Hello', ' ', 'world');
```

This example results in the following output:

| string1 | string2 | string3 | Greeting    |
| ------- | ------- | ------- | ----------- |
| Hello   |         | world   | Hello world |

### Length function

`LENGTH()`: Returns the length of a string.

```pseudo
LENGTH(string)
```

In the following example, how to use `LENGTH()` is shown:

The table `words` below will count the number of characters on each string and return the `length` of the corresponding string.

```mysql
CREATE TABLE words (
    id INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(50)
);

INSERT INTO words (word) VALUES
('MySQL'),
('Database'),
('Example');

SELECT word, LENGTH(word) AS Length FROM words;
```

The example results in the following output:

| word     | Length |
| -------- | ------ |
| MySQL    | 5      |
| Database | 8      |
| Example  | 7      |

### Upper function

`UPPER()`: Converts a string to upper-case.

```pseudo
UPPER(string)
```

In the following example, how to use `UPPER()` is shown:

The table `uppercases` will take the values ('Nelson', 'Joao', and 'Ana') and convert each lower-case character of the string into an upper-case character.

```mysql
CREATE TABLE uppercases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lowercases VARCHAR(50)
);

INSERT INTO uppercases (lowercases) VALUES
('Nelson'),
('Joao'),
('Ana');
```

The example results in the output below:

| lowercases | Uppercase |
| ---------- | --------- |
| Nelson     | NELSON    |
| Joao       | JOAO      |
| Ana        | ANA       |

## Numeric Functions

Numeric functions allow to perform operations on numeric data.

### Abs function

`ABS()`: Returns the absolute value of a number.

```pseudo
ABS(value)
```

### Example

In the following example, how to use `ABS()` is shown:

```mysql
CREATE TABLE digits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    digit INT
);

INSERT INTO digits (digit) VALUES
(-5),
(10),
(-15);

SELECT digit, ABS(digit) AS AbsoluteValue FROM digits;
```

The example results in the output below:

| digit | AbsoluteValue |
| ----- | ------------- |
| -5    | 5             |
| 10    | 10            |
| -15   | 15            |

### Ceil function

`CEIL()`: Returns the smallest integer value that is greater than or equal to a number.

```pseudo
CEIL(value)
```

In the following example, there are two columns (one of them is an auto_increment) that correspond to three queues. The table `digits` below will take the numbers and return the closest integer value greater than or equal to each.

```mysql
CREATE TABLE digits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    digit FLOAT
);


INSERT INTO digits (digit) VALUES
(21.6),
(10.3),
(15.9);

SELECT digit, CEIL(digit) AS CeilingValue FROM digits;
```

The example results in the output below:

| digit | CeilingValue |
| ----- | ------------ |
| 21.6  | 22           |
| 10.3  | 11           |
| 15.9  | 16           |

### Round function

`ROUND()`: Rounds a number to a specific number of decimal places.

```pseudo
ROUND(number, decimals)
```

In the following example, there are two columns (one of them is an auto_increment) that correspond to three queues. The table `digits` will take the numbers and round them to the number of decimal places inserted into the second `ROUND()` argument. In this case, the numbers are rounded to two decimal places.

```mysql
CREATE TABLE digits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    digit FLOAT
);

INSERT INTO digits (digit) VALUES
(3.1437896),
(2.71828),
(1.234567);

SELECT digit, ROUND(digit, 2) AS RoundedValue FROM digits;
```

The example results in the output below:

| digit     | RoundedValue |
| --------- | ------------ |
| 3.1437896 | 3.14         |
| 2.71828   | 2.72         |
| 1.234567  | 1.23         |

## Date and Time Functions

Date and Time functions allow to perform operations on date and time data.

### Now function

`NOW()`: Returns the current date and time.

```pseudo
NOW()
```

### Example

In the following example, there are three columns (one of them is an auto_increment) that correspond to one queue. The table `events` below takes the name of the event as `event_name` as well as the time of the event as `event_time`, and returns the current date and time which usually are different from the time of the event. For the sake of this example, both are the same.

```mysql
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(50),
    event_time DATETIME
);

INSERT INTO events (event_name, event_time) VALUES
('Sample Event', now());

SELECT event_name, event_time, now() AS CurrentDateTime FROM events;
```

The example results in the output below (at the time it was consulted):

| event_name       | event_time          | CurrentDateTime     |
| ---------------- | ------------------- | ------------------- |
| Codecademy Party | 2024-06-21 15:02:14 | 2024-06-21 15:02:14 |

### DATE_ADD() Function

`DATE_ADD()`: Adds a time interval to a date.

```pseudo
DATE_ADD(date, INTERVAL value unit)
```

In the following example, there are two columns (one of them is an auto_increment) that correspond to one queue. The table `events` below will take the value (to count the number of units) and the unit (DAY in this case, but can also be MONTH, or YEAR) to calculate the `INTERVAL` between the event_date and `NextWeek`. The result is seven days in this case.

```mysql
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_date DATE
);

INSERT INTO events (event_date) VALUES
('2024-06-21');

SELECT event_date, DATE_ADD(event_date, INTERVAL 7 DAY) AS NextWeek FROM events;
```

The example results in the output below (at the time it was consulted):

| event_date | NextWeek   |
| ---------- | ---------- |
| 2024-06-21 | 2024-06-28 |

### DATEDIFF function

`DATEDIFF()`: Returns the number of days between two dates.

```pseudo
DATEDIFF(date1, date2)
```

In the following example, there are two columns (one of them is an auto_increment) that correspond to one queue. The table `events` below will take the value of `start_date` as well as the value of `end_date` as arguments in the `DATEDIFF()` and will return the number of days between the two dates.

```mysql
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_date DATE,
    end_date DATE
);

INSERT INTO events (start_date, end_date) VALUES
('2024-06-01', '2024-06-21');

SELECT start_date, end_date, DATEDIFF(end_date, start_date) AS DaysDifference FROM events;
```

The example results in the following output:

| start_date | end_date   | DaysDifference |
| ---------- | ---------- | -------------- |
| 2024-06-01 | 2024-06-21 | 20             |

## Aggregate Functions

Aggregate functions allow to perform calculations on a set of values and return a single value.

### SUM function

`SUM()`: Returns the sum of a set of values.

```pseudo
SUM(expression)
```

In the following example, there are three columns (one of them is an auto_increment) that correspond to one queue. The table `payments` below will take the values of the `amount` column and sum them up resulting in a total amount.

```mysql
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(50),
    amount DECIMAL(10, 2)
);

INSERT INTO payments (customer_name, amount) VALUES
('Nelson', 100.00),
('Ana', 150.00),
('Joao', 200.00),
('Lidia', 50.00),
('Afonso', 300.00);

SELECT SUM(amount) AS TotalAmount FROM payments;
```

The example results in the following output:

| TotalAmount |
| ----------- |
| 800.00      |

### AVG function

`AVG()`: Returns the average value of a set of values.

```pseudo
AVG(expression)
```

In the following example, there are three columns (one of them is an auto_increment) that correspond to one queue. The table `exams` below will take the values from the score column and calculate the average of those values.

```mysql
CREATE TABLE exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50),
    score INT
);

INSERT INTO exams (student_name, score) VALUES
('Nelson', 85),
('Ana', 78),
('Joao', 92),
('Lidia', 74),
('Afonso', 88);

SELECT AVG(score) AS AverageScore FROM exams;
```

The example results in the following output:

| AverageScore |
| ------------ |
| 83.4000      |

### COUNT function

`COUNT()`: Returns the number of rows in a table.

```pseudo
COUNT(expression)
```

In the following example, there are two columns (one of them is an auto_increment) that correspond to one queue. The table `users` below will count the number of rows inserted and will return the total.

```mysql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50)
);

INSERT INTO users (username) VALUES
('Nelson'),
('Ana'),
('Joao'),
('Lidia'),
('Afonso');

SELECT COUNT(username) AS NumberOfUsers FROM users;
```

The example results in the following output:

| NumberOfUsers |
| ------------- |
| 5             |

## Control Flow Functions

Control Flow functions return different values based on different conditions.

### IF function

`IF()`: Returns a value if a condition is true, and another value if it is false.

```pseudo
IF(condition, true_value, false_value)
```

In the following example, there are three columns (one of them is an auto_increment) that correspond to five queues. The table `exams` below will take the values from `student_name` and from the `score` and make a comparison. If the student's score is higher than 60, the corresponding students pass, otherwise they fail.

```mysql
CREATE TABLE exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50),
    score INT
);

INSERT INTO exams (student_name, score) VALUES
('Nelson', 85),
('Ana', 58),
('Joao', 92),
('Lidia', 45),
('Afonso', 74);

SELECT student_name, score, IF(score > 60, 'Pass', 'Fail') AS Result FROM exams;
```

The example results in the following output:

| student_name | score | Result |
| ------------ | ----- | ------ |
| Nelson       | 85    | Pass   |
| Ana          | 58    | Fail   |
| Joao         | 92    | Pass   |
| Lidia        | 45    | Fail   |
| Afonso       | 74    | Pass   |

### CASE Expression

CASE is a statement that goes through conditions and returns a value when the first condition is met and closes with an END clause.
Once a condition is true, it will stop reading and return the result.
If no conditions are true, it returns the value in the ELSE clause.
If there is no ELSE part and no conditions are true, it returns NULL.

```pseudo
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE result
END
```

In the following example, there are three columns (one of them is an auto_increment) that correspond to five queues. The table `exams` below will take the values from `student_name` and from `score` and make a comparison.
`When` the score is higher or equal than 90, `then` the Grade is A.
`When` the score is higher or equal than 80, `then` the Grade is B.
`When` the score is higher or equal than 70, `then` the Grade is C.
Otherwise, the grade is F.

```mysql
CREATE TABLE exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50),
    score INT
);

INSERT INTO exams (student_name, score) VALUES
('Nelson', 85),
('Ana', 78),
('Joao', 92),
('Lidia', 65),
('Afonso', 88);

SELECT student_name, score,
       CASE
           WHEN score >= 90 THEN 'A'
           WHEN score >= 80 THEN 'B'
           WHEN score >= 70 THEN 'C'
           ELSE 'F'
       END AS Grade
FROM exams;
```

The example results in the following output:

| student_name | score | Grade |
| ------------ | ----- | ----- |
| Nelson       | 85    | B     |
| Ana          | 78    | C     |
| Joao         | 92    | A     |
| Lidia        | 65    | F     |
| Afonso       | 88    | B     |

## JSON Functions

JSON functions are used to manipulate [JSON](https://www.codecademy.com/resources/docs/general/json) data.

### JSON_EXTRACT function

`JSON_EXTRACT()`: Extracts data from a JSON document.

More about JSON can be learned [here](https://www.json.org/json-en.html)

```pseudo
JSON_EXTRACT(json_doc, path)
```

In the following example, there are two columns (one of them is an auto_increment) that correspond to two queues. In the following table `people` will return the name extracted from the `person_info` and solicited in the second argument of `JSON_EXTRACT()`.

```mysql
CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_info JSON
);

INSERT INTO people (person_info) VALUES
('{"name": "Nelson", "age": 30}'),
('{"name": "Santiago", "age": 25}');

SELECT JSON_EXTRACT(person_info, '$.name') AS Name FROM people;
```

As a result, the query will return the names stored in the JSON documents in the 'person_info' column:

| Name       |
| ---------- |
| "Nelson"   |
| "Santiago" |

### JSON_ARRAY function

`JSON_ARRAY()`: Creates a JSON array from a list of values.

```pseudo
JSON_ARRAY(value1, value2, ...)
```

In the following example, there are five columns (one of them is an auto_increment) that correspond to one queue. The table `example_data` below will take these different data type values from the columns and compress them into a list of values as JSON Array.

```mysql
CREATE TABLE example_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value1 INT,
    value2 INT,
    value3 VARCHAR(50),
    value4 INT
);

INSERT INTO example_data (value1, value2, value3, value4) VALUES
(1, 2, 'three', 4);

SELECT JSON_ARRAY(value1, value2, value3, value4) AS JSONArray FROM example_data;
```

The example results in the following output:

| JSONArray          |
| ------------------ |
| [1, 2, "three", 4] |

## Encryption and Compression Functions

These functions provide encryption and compression utilities.

### AES_ENCRYPT function

`AES_ENCRYPT()`: Encrypts a string using AES (Advanced Encryption Standard) encryption, and returns the original (binary) in [hexadecimal format](https://www.codecademy.com/resources/docs/general/hexadecimal).

```pseudo
AES_ENCRYPT(str, key_str)
```

In the following example, there are 3 columns (one of them is an auto_increment) that correspond to one queue. The table `secrets` below will take the value SecretText from `plain_text` and will represent it in a binary code of [hexadecimal encrypted message](https://www.codecademy.com/resources/docs/general/hexadecimal).

```mysql
CREATE TABLE secrets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plain_text VARCHAR(50),
    encrypted_text VARBINARY(50)
);

INSERT INTO secrets (plain_text, encrypted_text) VALUES
('SecretText', AES_ENCRYPT('SecretText', 'key'));

SELECT plain_text, AES_ENCRYPT(plain_text, 'key') AS EncryptedText FROM secrets;
```

The example results in the following output:

| plain_text | EncryptedText                   |
| ---------- | ------------------------------- |
| SecretText | (encrypted text representation) |

> **Note:** When dealing with encrypted data, we usually store the result in a 'VARBINARY' column because the encrypted data is binary. For display purposes, we might convert it to a readable format.

### Example

| plain_text   | EncryptedText                    |
| ------------ | -------------------------------- |
| MySecretText | 48ACB92DB61B99F84CFF35B2DEC31350 |

### MD5 function

`MD5()`: Calculates the MD5 (message-digest algorithm) hash of a string. This means that the value is returned as a string of 32 hexadecimal digits, or NULL if the argument was NULL.

```pseudo
MD5(string)
```

In the following example, there are 3 columns (one of them is an auto_increment) that correspond to two queues. The table `users` below will take the values from username and password and then `MD5(string)` will convert the password's value into a binary string of 32 hexadecimal digits.

```mysql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO users (username, password) VALUES
('user1', 'password1'),
('user2', 'password2');

SELECT username, password, MD5(password) AS HashValue FROM users;
```

The output will be a 32-character hexadecimal string:

| username | password  | HashValue                        |
| -------- | --------- | -------------------------------- |
| user1    | password1 | 7c6a180b36896a0a8c02787eeafb0e4c |
| user2    | password2 | 6cb75f652a9b52798eb6cf2201057c73 |

> **Note:** The HashValues are the 32-character hexadecimal string, which represents the MD5 hash of the input string. The hashed password can also be stored in the database instead of the plain text revealing the password.

Here is how it is possible to modify the table and insertion process to store hashed passwords:

```mysql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    hashed_password CHAR(40)
);

INSERT INTO users (username, hashed_password) VALUES
('user1', MD5('password1')),
('user2', MD5('password2'));

SELECT username, hashed_password FROM users;
```

The output would be:

| username | hashed_password                  |
| -------- | -------------------------------- |
| user1    | 7c6a180b36896a0a8c02787eeafb0e4c |
| user2    | 6cb75f652a9b52798eb6cf2201057c73 |

With this approach, it is possible to make sure that passwords are stored securely in the database. During user login, it is possible to compare the MD5 hash of the entered password with the stored hashed password.

## Conclusion

These are some examples of primary built-in functions in MySQL across various categories, illustrating its usage with examples. Each function serves a specific purpose which allows making data manipulation and querying in MySQL in a more efficient and powerful way.
