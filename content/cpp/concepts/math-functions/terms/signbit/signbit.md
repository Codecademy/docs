---
Title: 'signbit()'
Description: 'Returns true if the floating point argument is negative and false if floating point argument is positive.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`signbit()`** function returns `true` if the sign of the argument is negative and `false` if its sign is positive.

## Syntax

The `cmath` library must be added at the top of the file.

```pseudo
std::signbit(n);
```

Argument `n` must be of type `double`/`float`/`long double`/`int`, and the return value will be of that type. This function also detects the signs of zeroes, infinities, and `NaN`s.

## Example

```cpp
#include <iostream>
#include <cmath>

int main() {
  double a = 9.0, b = 0.0;
  double c = a/b;

  // If c is false, print out that it tends to positive infinity.
  if (std::signbit(c) == false) {
    std::cout << "c tends to positive infinity";
  }
  else {
    std::cout << "c tends to negative infinity";
  }
  return 0;
}
```

In the example above, `c` is infinity because a number divided by 0 evaluates to positive infinity when there is a limit.

This will output:

```shell
c tends to positive infinity
```

## Codebyte Example

The example below outputs a string about whether the integer is positive or negative:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  bool result;

  result = std::signbit(n);

  if (result) {
    std::cout << "n is negative";
  }
  else {
    std::cout << "n is positive";
  }
}
```
