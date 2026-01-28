---
Title: 'isnormal()'
Description: 'Checks whether a floating-point value is a normal number (not zero, subnormal, infinite, or NaN).'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`isnormal()`** function determines whether a floating-point number is normal, meaning it is non-zero, not subnormal, not infinite, and not NaN. It is useful when performing numerical computations that require standard floating-point numbers.

## Syntax

```pseudo
bool isnormal(double x);
```

Or, alternatively:

```pseudo
bool isnormal(float x);
```

Or, alternatively:

```pseudo
bool isnormal(long double x);
```

**Parameters:**

- `x` : The floating-point number (`float`, `double`, or `long double`) to be checked.

**Return value:**

- `true` if `x` is a normal floating-point number.
- `false` if `x` is zero, subnormal, infinite, or NaN.

## Example 1: Checking normal and zero numbers

In this example, a normal number and zero are checked using `isnormal()`. The normal number returns `true`, while zero returns `false`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double a = 5.0;
  double b = 0.0;

  std::cout << std::boolalpha;
  std::cout << "isnormal(a): " << std::isnormal(a) << "\n";
  std::cout << "isnormal(b): " << std::isnormal(b) << "\n";

  return 0;
}
```

The output of this code is:

```shell
isnormal(a): true
isnormal(b): false
```

## Codebyte Example: Checking subnormal, infinite, and NaN numbers

In this example, subnormal, infinite, and NaN numbers are checked. All of these are not considered normal, so `isnormal()` returns `false` for each:

```codebyte/cpp
#include <iostream>
#include <cmath>
#include <limits>

int main() {
  double subnormal = std::numeric_limits<double>::denorm_min();
  double inf = std::numeric_limits<double>::infinity();
  double nanVal = std::nan("");

  std::cout << std::boolalpha;
  std::cout << "isnormal(subnormal): " << std::isnormal(subnormal) << "\n";
  std::cout << "isnormal(inf): " << std::isnormal(inf) << "\n";
  std::cout << "isnormal(nanVal): " << std::isnormal(nanVal) << "\n";

  return 0;
}
```

## Frequently Asked Questions

### 1. How to use not equal in C++?

The not equal operator in C++ is written as `!=`. It compares two values and returns `true` if they are not equal, otherwise `false`. Example:

```cpp
#include <iostream>
int main() {
  int a = 5, b = 10;
  if (a != b) {
    std::cout << "a and b are not equal\n"; // outputs: a and b are not equal

  }
  return 0;
}
```

### 2. What is `isdigit()` in C++?

The `isdigit()` function checks if a character is a decimal digit (`'0'`–`'9'`). It is declared in `<cctype>` or `<ctype.h>` and returns a non-zero value (`true`) if the character is a digit, otherwise 0 (`false`).

### 3. What are the four types of functions in C++?

The four types of functions in C++ based on parameters and return type are:

1. Function with no arguments and no return value
2. Function with arguments and no return value
3. Function with no arguments but returns a value
4. Function with arguments and returns a value
