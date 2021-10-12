---
Title: 'Bitwise-Operators'
Description: 'C++ supports different types of bitwise operators that can perform operations on integers on bit-level.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Binary'
  - 'Logical'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

C++ supports different types of bitwise operators that can perform operations on integers on bit-level. Supported types of bitwise operators include:

- `&` Bitwise AND
- `|` Bitwise OR
- `<<` Bitwise Left Shift
- `>>` Bitwise Right Shift
- `~` Bitwise Complement
- `^` Bitwise XOR

### 1. `&` Bitwise AND

The bitwise AND operator, `&`, returns 1 if both the bits are 1 (1, 1). Else ((1, 0), (0, 1), (0, 0)), it returns 0.

For example:

```
4 = 100 (Base-2 binary system)
5 = 101 (Base-2 binary system)

    100
    101
    ___
    100, which is equal to 4 in base-10 binary system
```

```cpp
# include<iostream>

int main() {
    std::cout << (4 & 5) << std::endl;

    return 0;
}
// Output: 4 = 100 (Base-2 binary system)
```

### 2. `|` Bitwise OR

The Bitwise OR operator returns either of the following:

- 1 if at least one of the bits is 1.
- 0 if both of them are 0.

For example:

```
4 = 100 (Base-2 binary system)
5 = 101 (Base-2 binary system)

    100
    101
    ___
    101, which is equal to 5 in base-10 binary system.
```

```cpp
# include<iostream>

int main() {
    std::cout << (4 | 5) << std::endl;

    return 0;
}
// Output: 5 = 101 (Base-2 binary system)
```

### 3. `<<` Bitwise Left Shift

The left shift operator shifts all the bits towards the left side according to the number of bits specified and adds trailing 0's to the right side.

For example:

```
4 = 100 (Base-2 binary system)

4 << 1
100 << 1
100 + 0
1000 which is equal to 8 in base-10 binary system

4 << 2
100 << 2
100 + 00
10000 which is equal to 16 in base-10 binary system
```

```cpp
#include<iostream>

int main() {
  std::cout << (4 << 1) << std::endl; // Output: 1000 = 8
  std::cout << (4 << 2) << std::endl; // Output: 10000 = 16

  return 0;
}
```

### 4. `>>` Bitwise Right Shift

The right shift operator shifts all the bits towards the right side by the number of bits specified and discards the right most bits.


For example:

```
4 = 100 (Base-2 binary system)

4 >> 1
0 + 100 - 0

Here 0 was added to the left side of 4 (100) and then the rightmost bit was removed, which yields
10 which is equal to 2 in base-10 binary system

4 << 2
00 + 100 + 00

Here 00 was added to the left side of 4(100) and then the two rightmost bits were removed, which yields
1 which is equal to 1 in base-10 binary system
```

```cpp
#include<iostream>

int main() {
  std::cout << (4 >> 1) << std::endl; // Output: 10 = 2
  std::cout << (4 >> 2) << std::endl; // Output: 1 = 1

  return 0;
}
```

### 5. `~` Bitwise Complement

The complement operator flips the binary digits, that is from 0 to 1 and from 1 to 0

For example:

```
5 = 0000000000000101 in Base-2 binary system

~5 = 1111111111111010 in base-2 binary system
  => -6 in base-10 binary system.

unsigned(5) = 00000000000000000000000000000101 in base-2 binary system

~5 = 11111111111111111111111111111010 in base-2 binary system
  => 4294967290 in base-10 binary system

Here we would get a different result because the first bit of a signed integer is used to determine whether it's positive or negative.
```

```cpp
#include<iostream>

int main() {
  std::cout << (~(int)5) << std::endl; // Output: 1111111111111010 = -6
  // Complement of a signed integer 5 would yield -6 as a result

  std::cout << (~(unsigned int)5) << std::endl; // Output: 11111111111111111111111111111010 = 4294967290

  return 0;
}
```

### 6. `^` Bitwise XOR

The exclusive or (XOR) operator returns 1 if both the operands are different and returns 0 if both of them are the same (1, 1 or 0, 0)

```
12 = 01100(Base-2 binary system)
10 = 01010(Base-2 binary system)

      1100
      1010
      ____
      0110 which is 6 in base-10 binary system.
```

```cpp
#include<iostream>

int main() {
  std::cout << (12 ^ 10) << std::endl;

  return 0;
}
// Output: 6
```
