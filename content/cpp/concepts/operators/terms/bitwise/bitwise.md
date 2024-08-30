---
Title: 'Bitwise Operators'
Description: 'C++ supports different types of bitwise operators that can perform operations on integers at bit-level.'
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

C++ supports different types of **bitwise operators** that can perform operations on integers at bit-level. Supported types of bitwise operators include:

- `&` Bitwise AND
- `|` Bitwise OR
- `<<` Bitwise Left Shift
- `>>` Bitwise Right Shift
- `~` Bitwise Complement
- `^` Bitwise XOR

## & Bitwise AND

The bitwise AND operator, `&`:

- Returns 1 if both the bits are 1 (1, 1).
- Else ((1, 0), (0, 1), (0, 0)), it returns 0.

For example:

```pseudo
4 = 100 (base-2 binary system)
5 = 101 (base-2 binary system)

  100
  101
  ___
  100, which is equal to 4 in the base-10 decimal system
```

```cpp
#include <iostream>

int main() {
  std::cout << (4 & 5) << "\n";
  // Output: 100 (base-2 binary system) = 4

  return 0;
}
```

## | Bitwise OR

The Bitwise OR operator returns either of the following:

- 1 if at least one of the bits is 1.
- 0 if both of them are 0.

For example:

```pseudo
4 = 100 (base-2 binary system)
5 = 101 (base-2 binary system)

  100
  101
  ___
  101, which is equal to 5 in the base-10 decimal system.
```

```cpp
#include <iostream>

int main() {
  std::cout << (4 | 5) << std::endl;
  // Output: 101 (base-2 binary system) = 5

  return 0;
}
```

## << Bitwise Left Shift

The left shift operator shifts all the bits towards the left side according to the number of bits specified and adds trailing 0's to the right side.

For example:

```pseudo
4 = 100 (base-2 binary system)

4 << 1
100 << 1
100 + 0
1000 which is equal to 8 in the base-10 decimal system

4 << 2
100 << 2
100 + 00
10000 which is equal to 16 in the base-10 decimal system
```

```cpp
#include <iostream>

int main() {
  std::cout << (4 << 1) << "\n";
  // Output: 1000 = 8

  std::cout << (4 << 2) << "\n";
  // Output: 10000 = 16

  return 0;
}
```

## >> Bitwise Right Shift

The right shift operator shifts all the bits towards the right side by the number of bits specified and discards the right most bits.

For example:

```pseudo
4 = 100 (base-2 binary system)

4 >> 1
0 + 100 - 0
```

In the example above, 0 is added to the left side of 4 (100 in base-2). Then, the rightmost bit is removed, which yields
10 (base-2) or 2 (base-10).

```pseudo
4 << 2
00 + 100 + 00
```

In the example above, 00 is added to the left side of 4 (100 in base-2). Then, the two rightmost bits are removed, which yields
1 (base-2) or 1 (base-10).

```cpp
#include <iostream>

int main() {
  std::cout << (4 >> 1) << "\n";
  // Output: 10 = 2

  std::cout << (4 >> 2) << "\n";
  // Output: 1 = 1

  return 0;
}
```

## ~ Bitwise Complement

The complement operator flips the binary digits, that is from 0 to 1 and from 1 to 0.

For example:

```pseudo
5 = 0000000000000101 in base-2 binary system

~5 = 1111111111111010 in base-2 binary system
  => -6 in base-10 binary system.

unsigned(5) = 00000000000000000000000000000101 in base-2 binary system

~5 = 11111111111111111111111111111010 in base-2 binary system
  => 4294967290 in base-10 binary system
```

The first bit of a signed integer is used to determine whether the result is positive or negative. Therefore, a signed 5 and an unsigned 5 yield different results.

```cpp
#include <iostream>

int main() {
  std::cout << (~(int)5) << "\n";
  // Output: 1111111111111010 = -6

  std::cout << (~(unsigned int)5) << "\n";
  // Output: 11111111111111111111111111111010 = 4294967290

  return 0;
}
```

## ^ Bitwise XOR

The exclusive or (XOR) operator returns 1 if both the operands are different and returns 0 if both of them are the same (1, 1 or 0, 0)

```pseudo
12 = 1100 (base-2 binary system)
10 = 1010 (base-2 binary system)

  1100
  1010
  ____
  0110 which is 6 in base-10 binary system.
```

```cpp
#include <iostream>

int main() {
  std::cout << (12 ^ 10) << "\n";
  // Output: 6

  return 0;
}
```
