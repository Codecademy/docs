---
Title: 'Octal' 
Description: 'Octal is a number system that uses digits from 0 to 7. Compared to the decimal system each digit corresponds to the power of 8 instead of the power of 10.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'Code Foundations'
Tags: 
  - 'Arithmetic'
  - 'Encoding'
CatalogContent: 
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

The **octal** number system can be compared with the decimal, the hexadecimal, the [binary](https://www.codecademy.com/resources/docs/general/binary), and many other systems. As the name says the system consists of 8 different digits (0-7). In our daily life, we are used to the decimal system, which consists of steps to the power of 10. Instead the Octal system uses steps to the power of 8.

In the past, the octal system was used more often because systems were based on 12/24/36-bit but in today's technologies, especially with 16/32/64-bit the binary or hexadecimal system is used commonly. In the case of the hexadecimal system, the octal system has the advantage of using only numbers, therefore, renouncing using the alphabet.

## Example

octal|decimal
---|---
0|0
1|1
2|2
3|3
7|7
10|8
11|9
12|10
20|16
40|32
100|64

Each digit is a power of 8, so the last digit (decimal 0-7) is 8^0, equalling 1, the one in front of it 8^1, and so on. If we write the octal system as a calculation to convert it to the decimal system we would get:

```
125 = 1 * 8^2   + 2 * 8^1   + 5 * 8^0
    = 64        + 16        + 5
    = 85
```

