---
Title: 'Built-in Functions' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Built-in functions are predefined functions that can be used to perform operations on data at any time.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Data Science'
  - 'Data Visualization'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'MySQL'
  - 'Data'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**Built-in functions** are predefined functions that can be used to perform operations on data at any time. They are usually categorized according to the data types (strings, date, numeric, and other built-in functions) that they operate on, and are used to simplify complex calculations and data manipulations by reusing code blocks for common tasks.

## String Functions

String functions allow to perform operations on string data.

### Syntax

`CONCAT()` concatenates two or more strings.

`CONCAT(string1, string2, ...)`

### Example

In the following example, there are four columns (one of them is an auto_increment) that correspond to one queue: 

string1 = 'Hello'
string2 = ''
string3 = 'world'

The table **greeting** below will **concatenate** the strings and will show the value **Hello world** as Greeting.

Here is a complete example with MySQL code:

```sql
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

```shell
#Query to get strings concatenated
SELECT string1, string2, string3, CONCAT(string1, string2, string3) AS Greeting FROM greetings;
```

| string1 | string2 | string3 | Greeting    |
|---------|---------|---------|-------------|
| Hello   |         | world   | Hello world |

### Syntax

`LENGTH()` returns the length of a string.

`LENGTH(string)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to three queues
The table **words** below will count the number of character on each string and return the **length** of the correspondent string.

Here is the complete example with MySQL code:

```sql
CREATE TABLE words (
    id INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(50)
);

INSERT INTO words (word) VALUES
('MySQL'),
('Database'),
('Example');
```

The example results in the following output:

```shell
#Query to get the length of the strings
SELECT word, LENGTH(word) AS Length FROM words;
```

| word     | Length |
|----------|--------|
| MySQL    | 5      |
| Database | 8      |
| Example  | 7      |


### Syntax

`UPPER()` converts a string to upper-case.

`UPPER(string)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to three queues.
The table **uppercases** will take the values ('Nelson', 'João', and 'Ana') and convert each lower-case character of the string into an upper-case character.

A complete example with MySQL code would be like this:

```sql
CREATE TABLE uppercases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lowercases VARCHAR(50)
);

INSERT INTO uppercases (lowercases) VALUES
('Nelson'),
('João'),
('Ana');
```
The example results in the output below:

```shell
#Query to convert the names to uppercase
SELECT lowercases, UPPER(lowercases) AS Uppercase FROM uppercases;
```
| lowercases | Uppercase |
|------------|-----------|
| Nelson     | NELSON    |
| João       | JOÃO      |
| Ana        | ANA       |


## Numeric Functions

Numeric functions allow to perform operations on numeric data.

### Syntax

`ABS()` returns the absolute value of a number.

`ABS(value)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to three queues.
The table **digits** will take the numbers and return the absolute value of each (even if the number is negative because it is related to its distance from 0).

Here is a complete example with MySQL code:

```sql
CREATE TABLE digits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    digit INT
);

INSERT INTO digits (digit) VALUES
(-5),
(10),
(-15);
```

The example results in the output below:

```shell
#Query to get the absolute value of the numbers
SELECT digit, ABS(digit) AS AbsoluteValue FROM digits;
```
| digit | AbsoluteValue |
|-------|---------------|
| -5    | 5             |
| 10    | 10            |
| -15   | 15            |


### Syntax

`CEIL()` returns the smallest integer value that is greater than or equal to a number.

`CEIL(value)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to three queues.
The table **digits1** below will take the numbers and return the closest integer value that is greater than or equal to each. 

Here is a complete example with MySQL code:

```sql
CREATE TABLE digits1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    digit1 FLOAT
);


INSERT INTO digits1 (digit1) VALUES
(21.6),
(10.3),
(15.9);
```
The example results in the output below:

```shell
#Query to get the ceiling value of the numbers
SELECT digit1, CEIL(digit1) AS CeilingValue FROM digits1;
```

| digit1 | CeilingValue |
|--------|--------------|
| 21.6   | 22           |
| 10.3   | 11           |
| 15.9   | 16           |

### Syntax

`ROUND()` rounds a number to a specific number of decimal places.

`ROUND(number, decimals)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to three queues.
The table **digits2** will take the numbers and round them to the number of decimal places inserted into the second `ROUND()` argument.
In this case, the numbers are rounded to two decimal places.

A complete example with MySQL code would be like this:

```sql
CREATE TABLE digits2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    digit2 FLOAT
);

INSERT INTO digits2 (digit2) VALUES
(3.1437896),
(2.71828),
(1.234567);
```

The example results in the output below:
```shell
#Query to round the numbers to 2 decimal places
SELECT digit2, ROUND(digit2, 2) AS RoundedValue FROM digits2;
```
| digit2    | RoundedValue |
|-----------|--------------|
| 3.1437896 | 3.14         |
| 2.71828   | 2.72         |
| 1.234567  | 1.23         |

## Date and Time Functions

Date and Time functions allow to perform operations on date and time data.

### Syntax

`NOW()` returns the current date and time.

`NOW()`

### Example

In the following example, there are three columns (one of them is an auto_increment) that correspond to one queue.
The table **events1** below takes the name of the event as **event_name** as well as the time of the event as **event_time**, and returns the current date and time which usually are different from the time of the event. For the sake of this example, both are the same.

A complete example with MySQL code would be like this:

```sql
CREATE TABLE events1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(50),
    event_time DATETIME
);

INSERT INTO events1 (event_name, event_time) VALUES
('Sample Event', now());
```
The example results in the output below (at the time it was consulted):
```shell
#Query to get the current date and time
SELECT event_name, event_time, now() AS CurrentDateTime FROM events;
```

| event_name       | event_time          | CurrentDateTime     |
|------------------|---------------------|---------------------|
| Codecademy Party | 2024-06-21 15:02:14 | 2024-06-21 15:02:14 |


### Syntax

`DATE_ADD()` adds a time interval to a date.

`DATE_ADD(date, INTERVAL value unit)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to one queue.
The table **events2** below will take the value (to count the number of unit) and the unit (DAY in this case, but can also be MONTH, or YEAR) to calculate the **INTERVAL** between the event_date and NextWeek.
The result are seven days in this case.

A complete example with MySQL code would be like this:

```sql
CREATE TABLE events2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_date DATE
);

INSERT INTO events2 (event_date) VALUES
('2024-06-21');
```
The example results in the output below (at the time it was consulted):

```shell
#Query to get the date one week after the event_date
SELECT event_date, DATE_ADD(event_date, INTERVAL 7 DAY) AS NextWeek FROM events;
```

| event_date | NextWeek   |
|------------|------------|
| 2024-06-21 | 2024-06-28 |

### Syntax

`DATEDIFF()` returns the number of days between two dates.

`DATEDIFF(date1, date2)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to one queue.
The table **events3** below will take the value of **start_date** as well as the value of **end_date** as arguments in the `DATEDIFF()` and will return the number of days between the two dates.

Here is a complete example using MySQL code:

```sql
CREATE TABLE events3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_date DATE,
    end_date DATE
);

INSERT INTO events (start_date, end_date) VALUES
('2024-06-01', '2024-06-21');
```
The example results in the following output:
```shell
#Query to calculate the difference in days between the start_date and end_date
SELECT start_date, end_date, DATEDIFF(end_date, start_date) AS DaysDifference FROM events;
```

| start_date | end_date   | DaysDifference |
|------------|------------|----------------|
| 2024-06-01 | 2024-06-21 | 20             |


## Aggregate Functions

Aggregate functions allow to perform calculations on a set of values and return a single value.

### Syntax

`SUM()` returns the sum of a set of values.

`SUM(expression)`

### Example

In the following example, there are three columns (one of them is an auto_increment) that correspond to one queue.
The table **payments** below will take the values of the **amount** column and *sum* them up resulting in a total amount.

Here is a complete example using MySQL code:

```sql
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(50),
    amount DECIMAL(10, 2)
);

INSERT INTO payments (customer_name, amount) VALUES
('Nelson', 100.00),
('Ana', 150.00),
('João', 200.00),
('Lidia', 50.00),
('Afonso', 300.00);
```

The example results in the following output:

```shell
#Query to calculate the total amount
SELECT SUM(amount) AS TotalAmount FROM payments;
```

| TotalAmount |
|-------------|
| 800.00      |


### Syntax

`AVG()` returns the average value of a set of values.

`AVG(expression)`

### Example

In the following example, there are three columns (one of them is an auto_increment) that correspond to one queue.
The table **exams** below will take the values from *score* column and calculate the *average* of those values.

Below a complete example using MySQL code:

```sql
CREATE TABLE exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50),
    score INT
);

INSERT INTO exams (student_name, score) VALUES
('Nelson', 85),
('Ana', 78),
('João', 92),
('Lidia', 74),
('Afonso', 88);
```

The example results in the following output:

```shell
#Query to calculate the average score
SELECT AVG(score) AS AverageScore FROM exams;
```

| AverageScore |
|--------------|
| 83.4000      |


### Syntax

`COUNT()` returns the number of rows in a table. In this case, it returns the number os users in the **users** table.

`COUNT(expression)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to one queue.
The table **users** below will count the number of row inserted and will return the total. 

Below a complete example using MySQL code:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50)
);

INSERT INTO users (username) VALUES
('Nelson'),
('Ana'),
('João'),
('Lidia'),
('Afonso');
```

The example results in the following output:

```shell
#Query to count the number of users
SELECT COUNT(username) AS NumberOfUsers FROM users;
```
or

```shell
#Query to count the number of users
SELECT COUNT(*) AS NumberOfUsers FROM users;
```

| NumberOfUsers |
|---------------|
| 5             |


## Control Flow Functions

Control Flow functions return different values based on different conditions.

### Syntax

`IF()` returns a value if a condition is true, and another value if it is false.

`IF(condition, true_value, false_value)`

### Example

In the following example, there are three columns (one of them is an auto_increment) that correspond to five queues.
The table **exams2** below will take the values from *student_name* and from *score* and make a comparison.
IF the students' score is higher than 60, the corresponding students pass, otherwise they fail. 

Below a complete example using MySQL code:

```sql
CREATE TABLE exams2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50),
    score INT
);

INSERT INTO exams2 (student_name, score) VALUES
('Nelson', 85),
('Ana', 58),
('João', 92),
('Lidia', 45),
('Afonso', 74);
```

The example results in the following output:

```shell
#Query to determine if each student passed or failed
SELECT student_name, score, IF(score > 60, 'Pass', 'Fail') AS Result FROM exams2;
```

| student_name | score | Result |
|--------------|-------|--------|
| Nelson       | 85    | Pass   |
| Ana          | 58    | Fail   |
| João         | 92    | Pass   |
| Lidia        | 45    | Fail   |
| Afonso       | 74    | Pass   |


### Syntax

CASE is a statement that goes through conditions and returns a value when the first condition is met(like an if-then-else statement).
Once a condition is true, it will stop reading and return the result.
If no conditions are true, it returns the value in the ELSE clause.
If there is no ELSE part and no conditions are true, it returns NULL.

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE result
END
```

### Example

In the following example, there are three columns (one of them is an auto_increment) that correspond to five queues.
The table **exams3** below will take the values from *student_name* and from *score* and make a comparison.
**When** the score is higher or equal than 90, **then** the Grade is A.
**When** the score is higher or equal than 80, **then** the Grade is B.
**When** the score is higher or equal than 70, **then** the Grade is C.
Otherwise, the grade is F.

Below a complete example using MySQL code:

```sql
CREATE TABLE exams3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50),
    score INT
);

INSERT INTO exams3 (student_name, score) VALUES
('Nelson', 85),
('Ana', 78),
('João', 92),
('Lidia', 65),
('Afonso', 88);
```

The example results in the following output:

```shell
#Query to categorize each student's score into grades
SELECT student_name, score,
       CASE
           WHEN score >= 90 THEN 'A'
           WHEN score >= 80 THEN 'B'
           WHEN score >= 70 THEN 'C'
           ELSE 'F'
       END AS Grade
FROM exams3;
```

| student_name | score | Grade |
|--------------|-------|-------|
| Nelson       | 85    | B     |
| Ana          | 78    | C     |
| João         | 92    | A     |
| Lidia        | 65    | F     |
| Afonso       | 88    | B     |


## JSON Functions

JSON functions are used to manipulate [JSON](https://www.codecademy.com/resources/docs/general/json) data.

### Syntax

`JSON_EXTRACT()` extracts data from a JSON document.
JSON stands for JavaScript Object Notation. 

More about JSON can be learned [here](https://www.json.org/json-en.html)

`JSON_EXTRACT(json_doc, path)`

### Example

In the following example, there are two columns (one of them is an auto_increment) that correspond to two queues.
The following table **people** will return the *name* extracted from the **person_info** and solicited in the second argument of `JSON_EXTRACT()`.

Below a complete example using MySQL code:

```sql
CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_info JSON
);

INSERT INTO people (person_info) VALUES
('{"name": "Nelson", "age": 30}'),
('{"name": "Santiago", "age": 25}');
```

As a result, the query will return the names stored in the JSON documents in the 'person_info' column:

```shell
#Query to extract the name from the JSON document
SELECT JSON_EXTRACT(person_info, '$.name') AS Name FROM people;
```

| Name      |
|-----------|
| "Nelson"  |
| "Santiago" |


### Syntax

`JSON_ARRAY()` creates a JSON array from a list of values.

`JSON_ARRAY(value1, value2, ...)`

### Example

In the following example, there are five columns (one of them is an auto_increment) that correspond to one queue.
The table **example_data** below will take these different data type values from the columns and compress them in a list of values as JSONArray.

Below a complete example using MySQL code:

```sql
CREATE TABLE example_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value1 INT,
    value2 INT,
    value3 VARCHAR(50),
    value4 INT
);

INSERT INTO example_data (value1, value2, value3, value4) VALUES
(1, 2, 'three', 4);
```

The example results in the following output:

```shell
#Query to create a JSON array from the inserted values
SELECT JSON_ARRAY(value1, value2, value3, value4) AS JSONArray FROM example_data;
```

| JSONArray          |
|--------------------|
| [1, 2, "three", 4] |



## Encryption and Compression Functions

These functions provide encryption and compression utilities.

### Syntax

`AES_ENCRYPT()` encrypts a string using AES (Advanced Encryption Standard) encryption, and returns the original (binary) in [hexadecimal format](https://www.codecademy.com/resources/docs/general/hexadecimal).

`AES_ENCRYPT(str, key_str)`

### Example

In the following example, there are 3 columns (one of them is an auto_increment) that correspond to one queue.
The table **secrets** below will take the value *SecretText* from **plain_text** and will represent it in a binary code of [hexadecimal encrypted message](https://www.codecademy.com/resources/docs/general/hexadecimal).

Below a complete example using MySQL code:

```sql
CREATE TABLE secrets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plain_text VARCHAR(50),
    encrypted_text VARBINARY(50)
);

INSERT INTO secrets (plain_text, encrypted_text) VALUES
('SecretText', AES_ENCRYPT('SecretText', 'key'));
```

The example results in the following output:

```shell
-- Query to select the encrypted text
SELECT plain_text, AES_ENCRYPT(plain_text, 'key') AS EncryptedText FROM secrets;
```

| plain_text | EncryptedText                   |
|------------|---------------------------------|
| SecretText | (encrypted text representation) |

> [!NOTE]
> When dealing with encrypted data, we usually store the result in a 'VARBINARY' column because the encrypted data is binary. For display purposes, we might convert it to a readable format using functions like ['HEX()'](https://www.codecademy.com/resources/docs/python/built-in-functions/hex) if needed.

### Example

The output will be the display of a hexadecimal representation of encrypted text.

```shell
-- Query to select the encrypted text in hexadecimal format
SELECT plain_text, HEX(AES_ENCRYPT(plain_text, 'key')) AS EncryptedText FROM secrets;
```

| plain_text   | EncryptedText                    |
|--------------|----------------------------------|
| MySecretText | 3B848449488F8A90A66B042F5BA648C9 |

### Syntax

`MD5()` calculates the MD5 (message-digest algorithm) hash of a string.
This means that the value is returned as a string of 32 hexadecimal digits, or NULL if the argument was NULL.

`MD5(string)`

### Example

In the following example, there are 3 columns (one of them is an auto_increment) that correspond to two queues.
The table **users2** below will take the values from username and from password and then `MD5(string)` will convert the password's value into a **message-digest algorithm** as HashValue.

Below a complete example using MySQL code:

```sql
CREATE TABLE users2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO users (username, password) VALUES
('user1', 'password1'),
('user2', 'password2');
```

The output will be a 32-character hexadecimal string. 

```shell
-- Query to select the MD5 hash of a password
SELECT username, password, MD5(password) AS HashValue FROM users2;
```
 
| username | password  | HashValue                        |
|----------|-----------|----------------------------------|
| user1    | password1 | 7c6a180b36896a0a8c02787eeafb0e4c |
| user2    | password2 | 6cb75f652a9b52798eb6cf2201057c73 |


> [!NOTE] 
> The HashValues are the 32-character hexadecimal string, which represents the MD5 hash of the input string.

The hashed password can also be stored in the database instead of the plain text revealing the password.
Here is how it is possible to modify the table and insertion process to store hashed passwords:

```sql
CREATE TABLE users3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    hashed_password CHAR(40)
);

INSERT INTO users3 (username, hashed_password) VALUES
('user1', MD5('password1')),
('user2', MD5('password2'));
```

The output would be:

```shell
#Query to verify data insertion
SELECT username, hashed_password FROM users3;
```

| username | hashed_password                  |
|----------|----------------------------------|
| user1    | 7c6a180b36896a0a8c02787eeafb0e4c |
| user2    | 6cb75f652a9b52798eb6cf2201057c73 |


With this approach it is possible to make sure that passwords are stored securely in the database. 
During user login, it is possible to compare the MD5 hash of the entered password with the stored hashed password.

## Conclusion

These are some examples of primary built-in functions in MySQL across various categories, illustrating its usage with examples. 
Each function serves a specific purpose which allows making data manipulation and querying in MySQL in a more efficient and powerful way.
More examples in the [MySQL Docs page](https://dev.mysql.com/doc/refman/8.4/en/built-in-function-reference.html).

