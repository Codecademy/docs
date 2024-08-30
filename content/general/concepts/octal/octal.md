---
Title: 'Octal'
Description: 'Octal is a number system base 8.'
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

The **octal** number system is a base-8 number system that uses digits from 0-7 to represent any number. Octal is a number system similar to other number systems like [binary](https://www.codecademy.com/resources/docs/general/binary) and hexadecimal.

Octal was often used because machines were based on 12, 24, or 36 bits. In contrast, binary or hexadecimal are commonly used in modern technologies, especially with 16, 32, or 64-bit machines. The octal number system has an advantage over the hexadecimal system in that characters from the alphabet are not used to express a number in octal.

## Example

| octal | decimal |
| ----- | ------- |
| 0     | 0       |
| 1     | 1       |
| 2     | 2       |
| 3     | 3       |
| 7     | 7       |
| 10    | 8       |
| 11    | 9       |
| 12    | 10      |
| 20    | 16      |
| 40    | 32      |
| 100   | 64      |

Each digit corresponds to a power of 8. The last digit (decimal 0-7) is 8<sup>0</sup>, equalling 1. The one in front of it is 8<sup>1</sup>, and so on. So each digit represents the figure times 8 to the power of its position. An octal number is converted to decimal like so (using octal 125 as an example):

125 = 1 \* 8<sup>2</sup> + 2 \* 8<sup>1</sup> + 5 \* 8<sup>0</sup> = 64 + 16 + 5 = 85
