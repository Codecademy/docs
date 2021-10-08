---
Title: 'Bitwise-Operators'
Description: 'C++ supports different types of bitwise operators that can perform operations on integers on bit-level.'
Subjects:
 - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Binary'
  - 'Bitwise-Operators'
  - 'Logical'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---


C++ supports different types of bitwise operators that can perform operations on integers on bit level, types of Bitwise Operators supported in C++ are:

- `&` Bitwise AND
- `|` Bitwise OR
- `<<` Bitwise Left Shift
- `>>` Bitwise Right Shift
- `~` Bitwise Complement
- `^` Bitwise XOR

### 1. `&` Bitwise AND

The Bitwise AND operator returns 1 if both the bits are 1 else, it returns 0.

For example:

```
4 = 100 (Binary)
5 = 101 (Binary)

    100
    101
    ___
    100, which is equal to 4 in Decimal System
```

```codebyte/cpp
# include<iostream>

int main() {
    std::cout << (4 & 5) << std::endl;

    return 0;
}
```

### 2. `|` Bitwise OR

The Bitwise OR operator returns 1 if at least one of the bit is 1, 0 if both of them are 0, it returns 0.

For example

```
4 = 100 (Binary)
5 = 101 (Binary)

    100
    101
    ___
    101, which is equal to 5 in Decimal System.
```

```codebyte/cpp
# include<iostream>

int main() {
    std::cout << (4 | 5) << std::endl;

    return 0;
}
```

### 3. `<<` Bitwise Left Shift

The left shift operator shifts all the bits towards left side by the number of bits specified and adds 0's to the right side.

For example

```
4 = 100 (Binary)

4 << 1
100 + 0
1000 which is equal to 8

4 << 2
100 + 00
10000 which is equal to 16
```

```codebyte/cpp
#include<iostream>

int main() {
  std::cout << (4 << 1) << std::endl;
  std::cout << (4 << 2) << std::endl;

  return 0;
}
```

### 4. `>>` Bitwise Right Shift

The right shift operator shifts all the bits towards right side by the number of bits specified and discards theh right most bits.

For example

```
4 = 100 (Binary)

4 >> 1
0 + 100 - 0
10 which is equal to 2

4 << 2
00 + 100 + 00
1 which is equal to 1
```

```codebyte/cpp
#include<iostream>

int main() {
  std::cout << (4 >> 1) << std::endl;
  std::cout << (4 >> 2) << std::endl;

  return 0;
}
```

### 5. `~` Bitwise Complement

The complement operator flips the binary digits, that is from 0 to 1 and from 1 to 0

```codebyte/cpp
#include<iostream>

int main() {
  std::cout << (~(int)5) << std::endl;
  std::cout << (~(unsigned int)5) << std::endl;

  return 0;
}
```

Here we would get a different result because first bit of a signed integer is used to determine whether it's positive or negative.

### 6. `^` Bitwise XOR

The XOR Operator returns 1 if both the operands are different and returns 0 if both of them are the same (1, 1 or 0, 0)

```
12 = 01100(Binary)
10 = 01010(Binary)

      1100
      1010
      ____
      0110 which is 6 in decimal system.
```

```codebyte/cpp
#include<iostream>

int main() {
  std::cout << (12 ^ 10) << std::endl;

  return 0;
}
```
