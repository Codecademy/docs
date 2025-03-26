---
Title: 'Arithmetic Operators'
Description: 'Arithmetic operators perform mathematical operations such as addition, subtraction, multiplication, division, modulus, increment, and decrement in C++.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Operators'
  - 'Math'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Arithmetic operators** in C++ perform basic mathematical operations, including addition, subtraction, multiplication, division, modulus, increment, and decrement. These operators are commonly applied to variables and expressions in computations.

Arithmetic operators allow programmers to handle numerical computations and manipulate values effectively within code. Understanding how these operators function is crucial for building algorithms and solving problems in C++ programming.

The following table summarizes the seven arithmetic operators in C++:

| Symbol | Name           | Description                               | Implementation Example |
| ------ | -------------- | ----------------------------------------- | ---------------------- |
| `+`    | Addition       | Adds two values                           | `a + b`                |
| `-`    | Subtraction    | Subtracts the second value from the first | `a - b`                |
| `*`    | Multiplication | Multiplies two values                     | `a * b`                |
| `/`    | Division       | Divides the first value by the second     | `a / b`                |
| `%`    | Modulus        | Returns the remainder of division         | `a % b`                |
| `++`   | Increment      | Increases the value of a variable by 1    | `++a` or `a++`         |
| `--`   | Decrement      | Decreases the value of a variable by 1    | `--a` or `a--`         |

## Explanation of Arithmetic Operators

### Addition (`+`)

The addition operator `+` adds two operands together.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 5;
  int sum = a + b;
  cout << "Sum: " << sum;
  return 0;
}
```

**Output:**

```shell
Sum: 15
```

### Subtraction (`-`)

The subtraction operator `-` subtracts the second operand from the first.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 5;
  int diff = a - b;
  cout << "Difference: " << diff;
  return 0;
}
```

**Output:**

```shell
Difference: 5
```

### Multiplication (`*`)

The multiplication operator `*` multiplies two operands.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 5;
  int product = a * b;
  cout << "Product: " << product;
  return 0;
}
```

**Output:**

```shell
Product: 50
```

### Division (`/`)

The division operator `/` divides the first operand by the second. If both operands are integers, the result will also be an integer, dropping any remainder. If either of the operand is a floating point number, then the result will be in decimals.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 5;
  int quotient = a / b;
  cout << "Quotient: " << quotient;
  return 0;
}
```

**Output:**

```shell
Quotient: 2
```

> **Note:** When performing division, ensure the divisor is not zero, as this will result in a runtime error.

### Modulus (`%`)

The modulus operator `%` returns the remainder of integer division.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10, b = 3;
  int remainder = a % b;
  cout << "Remainder: " << remainder;
  return 0;
}
```

**Output:**

```shell
Remainder: 1
```

> **Note:** The modulus operator is only applicable to integer operands.

### Increment (`++`)

The increment operator `++` increases the value of a variable by 1. It can be used in two ways:

- **Pre-increment (**`++a`**)**: Increments `a` first, then uses its value.
- **Post-increment (**`a++`**)**: Uses the current value of `a`, then increments it.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 5;
  cout << "Pre-increment: " << ++a << endl; // Increments then prints
  a = 5;
  cout << "Post-increment: " << a++ << endl; // Prints then increments
  cout << "After post-increment: " << a;
  return 0;
}
```

**Output:**

```shell
Pre-increment: 6
Post-increment: 5
After post-increment: 6
```

### Decrement (`--`)

The decrement operator `--` decreases the value of a variable by 1. It also has two types:

- **Pre-decrement (**`--a`**)**: Decreases `a` first, then uses its value.
- **Post-decrement (**`a--`**)**: Uses the current value of `a`, then decreases it.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 5;
  cout << "Pre-decrement: " << --a << endl; // Decrements then prints
  a = 5;
  cout << "Post-decrement: " << a-- << endl; // Prints then decrements
  cout << "After post-decrement: " << a;
  return 0;
}
```

**Output:**

```shell
Pre-decrement: 4
Post-decrement: 5
After post-decrement: 4
```

To continue learning about C++ operators and other fundamental programming concepts, check out the [Learn C++ Course](https://www.codecademy.com/learn/learn-c-plus-plus) on Codecademy.
