---
Title: 'Assignment Operators'
Description: 'Assigns values to variables using basic and compound assignment operators in C++'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Operators'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Assignment operators** in C++ are fundamental operators used to assign values to variables. They perform the essential task of storing data in memory locations represented by variables, enabling programs to manipulate and update data during execution.

## List of Assignment Operators

C++ provides several types of assignment operators as follows:

- `=` (Simple assignment)
- `+=` (Addition assignment)
- `-=` (Subtraction assignment)
- `*=` (Multiplication assignment)
- `/=` (Division assignment)
- `%=` (Modulus assignment)
- `&=` (Bitwise AND assignment)
- `|=` (Bitwise OR assignment)
- `^=` (Bitwise XOR assignment)
- `<<=` (Left shift assignment)
- `>>=` (Right shift assignment)

## Examples of Assignment Operators

### Basic Assignment Operator (`=`)

The basic assignment operator (`=`) assigns a value from the right operand to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 10;
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
10
```

The value `10` is assigned to variable `x` using the basic assignment operator `=`.

### Addition Assignment Operator (`+=`)

The addition assignment operator (`+=`) adds the right operand to the left operand and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 5;
  x += 3;  // Equivalent to: x = x + 3
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
8
```

The operator `+=` adds `3` to the current value of `x` (which is `5`) and assigns the result (`8`) back to `x`.

### Subtraction Assignment Operator (`-=`)

The subtraction assignment operator (`-=`) subtracts the right operand from the left operand and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 10;
  x -= 4;  // Equivalent to: x = x - 4
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
6
```

The operator `-=` subtracts `4` from the current value of `x` (which is `10`) and assigns the result (`6`) back to `x`.

### Multiplication Assignment Operator (`*=`)

The multiplication assignment operator (`*=`) multiplies the left operand by the right operand and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 3;
  x *= 4;  // Equivalent to: x = x * 4
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
12
```

The operator `*=` multiplies the current value of `x` (which is `3`) by `4` and assigns the result (`12`) back to `x`.

### Division Assignment Operator (`/=`)

The division assignment operator (`/=`) divides the left operand by the right operand and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  double x = 20.0;
  x /= 4;  // Equivalent to: x = x / 4
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
5
```

The operator `/=` divides the current value of `x` (which is `20.0`) by `4` and assigns the result (`5`) back to `x`.

### Modulus Assignment Operator (`%=`)

The modulus assignment operator (`%=`) calculates the remainder when the left operand is divided by the right operand and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 17;
  x %= 5;  // Equivalent to: x = x % 5
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
2
```

The operator `%=` calculates the remainder when `x` (which is `17`) is divided by `5`, resulting in `2`, and assigns this value back to `x`.

### Bitwise AND Assignment Operator (`&=`)

The bitwise AND assignment operator (`&=`) performs a bitwise AND operation between the left and right operands and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 12;  // Binary: 1100
  x &= 10;     // Binary: 1010, Result: 1000 (8 in decimal)
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
8
```

The operator `&=` performs bitwise AND between `12` (binary: 1100) and `10` (binary: 1010), resulting in `8` (binary: 1000).

### Bitwise OR Assignment Operator (`|=`)

The bitwise OR assignment operator (`|=`) performs a bitwise OR operation between the left and right operands and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 12;  // Binary: 1100
  x |= 10;     // Binary: 1010, Result: 1110 (14 in decimal)
  cout << x;
  return 0;
}
```

The output of this code is:

```shell
14
```

The operator `|=` performs bitwise OR between `12` (binary: 1100) and `10` (binary: 1010), resulting in `14` (binary: 1110).

### Bitwise XOR Assignment Operator (`^=`)

The bitwise XOR assignment operator (`^=`) performs a bitwise XOR operation between the left and right operands and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 12;  // Binary: 1100
  x ^= 10;     // Binary: 1010, Result: 0110 (6 in decimal)
  cout << x;
  return 0;
}
```

**Output:**

```shell
6
```

The operator `^=` performs bitwise XOR between `12` (binary: 1100) and `10` (binary: 1010), resulting in `6` (binary: 0110).

### Left Shift Assignment Operator (`<<=`)

The left shift assignment operator (`<<=`) shifts the bits of the left operand to the left by the number of positions specified by the right operand and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 5;   // Binary: 101
  x <<= 2;     // Shift left by 2 positions: 10100 (20 in decimal)
  cout << x;
  return 0;
}
```

**Output:**

```shell
20
```

The operator `<<=` shifts the bits of `5` (binary: 101) left by `2` positions, resulting in `20` (binary: 10100).

### Right Shift Assignment Operator (`>>=`)

The right shift assignment operator (`>>=`) shifts the bits of the left operand to the right by the number of positions specified by the right operand and assigns the result to the left operand:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 20;  // Binary: 10100
  x >>= 2;     // Shift right by 2 positions: 101 (5 in decimal)
  cout << x;
  return 0;
}
```

**Output:**

```shell
5
```

The operator `>>=` shifts the bits of `20` (binary: 10100) right by `2` positions, resulting in `5` (binary: 101).

## Frequently Asked Questions

### 1. What is an assignment operator in C++?

An assignment operator in C++ is a symbol used to assign values to variables. The basic assignment operator `=` assigns the value on the right side to the variable on the left side. Compound assignment operators like `+=`, `-=`, `*=` combine an arithmetic or bitwise operation with assignment.

### 2. Is `==` an assignment operator?

No, `==` is not an assignment operator. It is a comparison operator used to check if two values are equal. The single `=` is the assignment operator, while `==` is used for equality comparison in conditional statements.

### 3. How many types of assignment operators are in C++?

C++ has 11 assignment operators in total: one basic assignment operator (`=`) and 10 compound assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`). These operators provide efficient ways to perform operations and assign results in a single step.
