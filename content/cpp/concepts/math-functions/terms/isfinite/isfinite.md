---
Title: 'isfinite()'
Description: 'Returns a value telling whether the argument is a finite value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
  - 'Numbers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isfinite()`** function returns a value telling whether the argument has a finite value.

## Syntax

```pseudo
isfinite(x)
```

The `x` parameter is finite if it is a floating-point number that is neither infinite nor `NaN` (e.g., division by zero, square root of a negative value).

If `x` is finite, the `isfinite()` function will return a non-zero value for `true`. Otherwise, it will return zero for `false`.

## Example

The following example uses the `isfinite()` function to check whether `5.0` is finite:

```cpp
#include <iostream>
#include <cmath>

int main() {
  int result;

  result = std::isfinite(5.0);

  if (result == 0) {
    std::cout << "Not finite" << "\n";
  }
  else {
    std::cout << "Is finite" << "\n";
  }
  // Output: Is finite
}
```

## Codebyte Example

The following example is runnable and features a case where running the `isfinite()` function where the returns `false` and the value is not finite:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  int result;

  result = std::isfinite(1.0/0.0);

  if (result == 0) {
    std::cout << "Not finite" << "\n";
  }
  else {
    std::cout << "Is finite" << "\n";
  }
}
```
