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

The **exp()** function returns the base-_e_ exponential function of the argument. This is _e_ raised to the power of the argument. This is the inverse of the [`log()`](https://www.codecademy.com/resources/docs/cpp/math-functions/log) function.

## Syntax

```cpp
 exp(x)
```

The `x` parameter can be any value, positive, negative or zero.

## Example

The following example uses the `exp()` function to find the exponential function of `3`:

```cpp
#include <iostream>
#include <math.h>

int main() {
  double x = 3;
  double result;
  result = exp(x);
  std::cout << "The exp of " << x << " is " << result << "\n";
  // Output: The exp of 3 is 20.0855
}
```

## Codebyte Example

The following example is runnable and returns the exponential function of `1`:

```codebyte/cpp
#include <iostream>
#include <math.h>

int main() {
  double x = 1;
  double result;
  result = exp(x);
  std::cout << "The exp of " << x << " is " << result << "\n";
}
```
