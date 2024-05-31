Title: 'MySQL bit-functions'
Description: 'Commonly used MySql bit-functions'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'MySQL'
  - 'bit functions'
---

MySQL bit-functions are used to perform operations on binary data at the bit level. These functions are used for tasks that require binary data manipulation or optimization based on bitwise logic.

## Syntax
These are some commonly used bit-functions in MySQL:

`Bitwise AND &()` takes two integer operands and compares them bit by bit. The result is 1 if the bits of both operands are 1, otherwise the result is 0.

```mysql
SELECT (expression1 & expression2);
```

`Bitwise XOR ^()` takes two integer values and executes a bitwise exclusive OR operation on them. 

```mysql
SELECT (expression1 ^ expression2);
```

`Bitwise OR |` takes tow operands and compares them by the bit. If at least one of the corresponfing bits is 1, result is 1. If both bits are 0, result is 0.

```mysql
SELECT (expression1 | expression2);
```

`BIT_COUNT` function is used to return the number of bits that are set to 1 in the operand's binary representation.

```mysql
SELECT BIT_COUNT(expression);
```

## Examples

Next are few examples for some of the mysql concepts described.

In this basic example mySQL performs the bitwise AND operation on the two literal integer values 45 and 25:

```mysql
> SELECT 45 & 25;
-> 9;
```

45 in binary is represented as 101101.
25 in binary is represented as 011001.
The bitwise AND operation between 45 and 25 is in binary 001001. 
001001 in decimal is represented as 9.

  101101 (45)
& 011001 (25)
  -------
  001001 (result)


In this example the function XOR is used to compare and manipulate the label values within a database.
The query uses this function to select rows based on the results of the operation.

```mysql
SELECT *
FROM posts
WHERE (labels ^ 3) > 5;
```

From this table bellow, a query takes rows from the name where the XOR comparison of the labels column value with 3 results in a value greater than 5.

id | name  | labels 
---|-------|-------
 1 | post1 | 5     
 2 | post2 | 3     
 3 | post3 | 12    

Performed XOR operations are explained bellow.

Labels value 5 is represented by 0101 and XOR comparison is:
0101 ^ 0011 = 0110 (6 in decimal, which is greater than 5)

Labels value 3 is represented by 0011 and XOR comparison is:
0011 ^ 0011 = 0000 (0 in decimal, which is not greater than 5)

Labels value 12 is represented by 1100 and XOR comparison is:
1100 ^ 0011 = 1111 (15 in decimal, which is greater than 5)

The result looks like table bellow:

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

 5 in binary is represented as 101 and 0 in binary is represented as 000:
------------- ---------
 Bit Position |  2	1	0	
 5 (decimal)  |  1	0	1
 0 (decimal)  |  0	0	0
 ------------- ---------
 XOR Result	    1	0	1

When comparing these two integer literals, the result is 5.



