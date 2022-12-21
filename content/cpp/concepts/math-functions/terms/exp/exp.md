---
Title: 'exp()'
Description: 'Returns the base-e exponential function of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`exp()`** function returns the base-`e` exponential value of the argument (i.e., `e` raised to the power of the argument). This is the inverse of the [`log()`](https://www.codecademy.com/resources/docs/cpp/math-functions/log) function.

## Syntax

```pseudo
exp(x)
```

The `x` parameter is a `double` value that can be positive, negative, or zero.

## Example

The following example uses the `exp()` function to find the value of e<sup>3</sup>:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 3;
  double result;

  result = exp(x);

  std::cout << "The exp of " << x << " is " << result << "\n";
}
```

This produces the following output:

```shell
The exp of 3 is 20.0855
```

## Codebyte Example

The following example is runnable and returns the value of e<sup>1</sup>:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 1;
  double result;

  result = exp(x);

  std::cout << "The exp of " << x << " is " << result << "\n";
}
```
