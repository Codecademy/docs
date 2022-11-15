---
Title: 'tan()'
Description: 'Returns the tangent of the angle in radians.'
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

If the parameter `x` is equal to pi +- n\*pi (Where n is a natural number), then a domain error will occur.

## Example

The following example uses the `tan()` function to find the tangent of pi/4:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = M_PI/4;
  double result;

  result = std::tan(x);

  std::cout << "The tangent of " << x << " is " << result << "\n";
  // Output: The tangent of pi/4 is 1
}
```

## Codebyte Example

The following example is runnable and returns the tangent of `0` with the `tan()` function:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0;
  double result;

  result = std::tan(x);

  std::cout << "The tangent of " << x << " is " << result << "\n";
}
```
