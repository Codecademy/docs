---
Title: 'tan()'
Description: 'Returns the tangent of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`tan()`** function returns the tangent of the argument.

## Syntax

```cpp
tan(x)
```

If the parameter `x` is , then a domain error will occur.

## Example

The following example uses the `sqrt()` function to find the square root of `4`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 4;
  double result;

  result = std::sqrt(x);

  std::cout << "The square root of " << x << " is " << result << "\n";
  // Output: The square root of 4 is 2
}
```

## Codebyte Example

The following example is runnable and returns the square root of `9` with the `sqrt()` function:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 9;
  double result;

  result = std::sqrt(x);

  std::cout << "The square root of " << x << " is " << result << "\n";
}
```
