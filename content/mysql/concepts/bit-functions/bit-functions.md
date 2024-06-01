---
Title: 'Bit Functions'
Description: 'Commonly used MySql bit-functions'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'MySQL'
  - 'bit functions'
CatalogContent:
  - 'getting-started-off-platform-for-data-science'
  - 'paths/design-databases-with-mysql'  
---

MySQL bit-functions are used to perform operations on binary data at the bit level. 
These functions are used for tasks that require binary data organization or manipulation based on bitwise logic.

## Syntax

These are some commonly used bit-functions in MySQL:

`Bitwise AND &()`: It takes two integer operands and compares them bit by bit. 
The result is 1 if the bits of both operands are 1, otherwise, the result is 0.

```mysql
SELECT (expression1 & expression2);
```

`Bitwise XOR ^()`: It takes two integer values and executes a bitwise exclusive OR operation on them. 

```mysql
SELECT (expression1 ^ expression2);
```

`Bitwise OR |`: It takes two operands and compares them by the bit. If at least one 
of the corresponding bits is 1, result is 1. If both bits are 0, the result is 0.

```mysql
SELECT (expression1 | expression2);
```

`BIT_COUNT`: This function is used to return the number of bits that are set to 1 in the operand's binary representation.

```mysql
SELECT BIT_COUNT(expression);
```

## Examples

Next are a few examples of some of the MySQL concepts described. In this basic example, 
mySQL performs the bitwise AND operation on the two literal integer values 45 and 25:

```mysql
> SELECT 45 & 25;
-> 9;
```

In the above example:
45 in binary is represented as 101101.
25 in binary is represented as 011001.
The bitwise AND operation between 45 and 25 is in binary 001001. 
001001 in decimal is represented as 9.

In this example, the function `XOR` is used to compare and manipulate the label values within a database. 
The query uses this function to select rows based on the results of the operation:

id|name  |labels

--|------|-----
1  post1  5
--|------|-----
2  post2  3
--|------|-----
3  post3  12

```mysql
SELECT *
FROM posts
WHERE (labels ^ 3) > 5;
```

From the table, a query takes rows from the name where the XOR compraison of the labels column value with 3 results in a value greater than 5.

Performed XOR operations are explained bellow:

Labels value 5 is represented by 0101 and XOR comparison is:
0101 ^ 0011 = 0110 (6 in decimal, which is greater than 5)

Labels value 3 is represented by 0011 and XOR comparison is:
0011 ^ 0011 = 0000 (0 in decimal, which is not greater than 5)

Labels value 12 is represented by 1100 and XOR comparison is:
1100 ^ 0011 = 1111 (15 in decimal, which is greater than 5)

The result looks like:

id | name  | labels

---|-------|-------
 1 | post1 | 5
 3 | post3 | 12

This basic XOR operation example illustrates a bit level comparison of two integer literals (5 and 0):

```mysql
> SELECT 5 ^ 0;
-> 5;
```

Comparison of each bit position:
If he bits are different, the resulting bit is 1
If the bits are the same, the resulting bit is 0

5 in binary is represented as 101 and 0 in binary is represented as 000.
When comparing these two integer literals, the result is 5:
------------|------
Bit Position 2 1 0
5 (decimal)  1 0 1
0 (decimal)  0 0 0
------------|------
  XOR Result 1 0 1

In next example is needed to perform the bitwise OR operation between the decimal integers 9 and 5 retrieved from a table.

```mysql
SELECT (9 | 5) AS result;
```

9 in binary:  1001
5 in binary:  0101
The result of the bitwise OR operation is 1101 in binary, which is equivalent to the decimal number 13.

In this example we have a table called customers which contains a list of customers IDs as integers.
Each customer ID is associated with a number of orders. 
We need to find out how many bits are set to '1' in the binary representation of each customer's ordering activity.

-----------------------------
customer_ID|number_of_orders

102               5                                 
102               7                                        
103               10                                        
104               12

-----------------------------

BIT_COUNT(number_of_orders) function returns the number of '1' bits in the binary representation of the number_of_orders column.

```mysql
SELECT
    customer_id,
    number_of_orders,
    BIT_COUNT(number_of_orders) AS bits_set_to_1
FROM
    customers;
```

For value 5 (binary 101), the number of '1' bits is 2.
For value 7 (binary 111), the number of '1' bits is 3.
For value 10 (binary 1010), the number of '1' bits is 2.
For value 12 (binary 1100), the number of '1' bits is 2.

-------------------------------------------
customer_ID|number_of_orders|bits_set_to_1

102               5                 2
102               7                 3
103               10                2
104               12                2

-------------------------------------------

The result returns how many bits are set to '1' in the binary representation of each customer's number of orders.
