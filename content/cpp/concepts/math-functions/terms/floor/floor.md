---
Title: 'floor()'
Description: 'Returns the first whole number that is less than or equal to the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`floor()`** function returns the first whole number that is less than or equal to the argument.

## Syntax

The `cmath` library must be added at the top of the file.

```pseudo
std::floor(n);
```

Argument must be a `double`/`float`/`long double`, and the return value will be the same type.

## Example

```cpp
double result;

result = std::floor(n);
```

## Codebyte Example

Use `floor()` to round down the double `12.3456`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  double result;

  result = std::floor(n);

  std::cout << "The result is " << result << "!\n";
}
```
