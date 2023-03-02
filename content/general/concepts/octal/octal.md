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

The **octal** number system is base 8. The number system that we are used to is decimal, which is base 10. There are other number systems like [binary](https://www.codecademy.com/resources/docs/general/binary) or hexadecimal that work similarly. The octal system being base 8 means that there are only 8 possible digits: 0-7. Nevertheless, every number can be displayed.

The octal system was often used in the past because systems were based on 12, 24, or 36 bits. The binary or hexadecimal system is commonly used in today's technologies, especially with 16, 32, or 64-bit machines. The octal number system has an advantage over the hexadecimal system in that we do not need to use characters from the alphabet to express a number in octal.

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

