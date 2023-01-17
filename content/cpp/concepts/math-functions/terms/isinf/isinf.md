---
Title: 'isinf()'
Description: 'Returns a value telling whether the argument is an infinite value.'
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

The **`isinf()`** function returns a value telling whether the argument has an infinite value.

## Syntax

```pseudo
isinf(x)
```

The `x` parameter is infinite if it is an infinity, either positive or negative (e.g., division by zero).

If `x` is infinite, the `isinf()` function will return a non-zero value for `true`. Otherwise, it will return zero for `false`.

## Example

The following example uses the `isinf()` function to check whether `1.0` is finite:

```cpp
#include <iostream>
#include <cmath>

int main() {
  int result;

  result = std::isinf(1.0);

  if (result == 0) {
    std::cout << "Not infinite" << "\n";
  }
  else {
    std::cout << "Is infinite" << "\n";
  }
  // Output: Not infinite
}
```

## Codebyte Example

The following example is runnable and features a case where running the `isinf()` function returns `false` for a finite value, and `true` for an infinite value:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  int result, result2;

  result = std::isinf(1.0/2);
  result2 = std::isinf(1.0/0);

  if (result == 0) {
    std::cout << "Not infinite" << "\n";
  }
  else {
    std::cout << "Is infinite" << "\n";
  }
  if (result2 == 0) {
    std::cout << "Not infinite" << "\n";
  }
  else {
    std::cout << "Is infinite" << "\n";
  }
}
```
