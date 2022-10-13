---
Title: 'trunc()' 
Description: 'Returns the integral part of the argument.' 
Subjects:
  - 'Computer Science'
Tags: 
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`trunc()`** function returns the integral part of the argument as a value of [type](https://www.codecademy.com/resources/docs/cpp/data-types) `double`, `float`, or `long double`. The fractional part is truncated, not rounded.

## Syntax

```cpp
std::trunc(x);
```

## Example

```cpp
#include <iostream>
#include <cmath>

int main() {
    double x = -3.14159;
    double result;

    result = std::trunc(x);

    std::cout << "trunc(" << x << ") = " << result << "\n";
    // Output: trunc(3.14159) = -3
}
```

## Codebyte Example

Use `trunc()`  to strip off the decimal part of `12.3456` and return `12`.

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
    double n = 12.3456;
    double result;

    result = std::trunc(n);

    std::cout << "The result is " << result << "!\n";
}
```
