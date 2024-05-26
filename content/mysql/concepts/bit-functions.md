Title: 'MySQL bit-functions'
Description: 'Commonly used MySql bit-functions'

---

MySQL bit-functions are used to perform operations on binary data at the bit level. These functions are used for tasks that require binary data manipulation or optimization based on bitwise logic.

## Syntax
These are some commonly used bit-functions in MySQL:
Bitwise AND &

```mysql
SELECT (expression1 & expression2);
```
Bitwise XOR ^

```mysql
SELECT (expression1 ^ expression2);
```
Bitwise OR |

```mysql
SELECT (expression1 | expression2);
```

BIT_COUNT
```mysql
SELECT BIT_COUNT(expression);
```


## Examples

In this example mySQL performs the bitwise AND operation on the two literal integer values 45 and 25:

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


In this example the function XOR operation compares each corresponding bit of two integer literals (5 and 0):

```mysql
> SELECT 5 ^ 0;
-> 5;
```
Comparison of each bit position:
 If he bits are different, the resulting bit is 1
 If the bits are the same, the resulting bit is 0

 5 in binary is represented as 101 and 0 in binary is represented as 000:
 --------------------------
 Bit Position |  2	1	0	
 5 (decimal)  |  1	0	1
 0 (decimal)  |  0	0	0
 --------------------------
 XOR Result	    1	0	1

 +-------+
 | 5 ^ 0 |
 +-------+
 |     5 |
 +-------+
 When comparing these two integer literals, the result is 5.

