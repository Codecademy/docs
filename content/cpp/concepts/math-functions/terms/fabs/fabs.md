---
Title: 'fabs()'
Description: 'Returns the absolute value of the floating point argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`fabs`** function returns the absolute value of the floating point argument.

## Syntax

```pseudo
std:fabs(n)
```

## Example 1

Use `fabs()` to return the absolute value of `-6.5`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  std::cout << std::fabs(-6.5) << "\n";
  // Output: 6.5
}
```

## Codebyte Example

The following code example returns the absolute value of a decimal with the `fabs()` method.

```codebyte/cpp
#include <iostream>
#include <cmath> // For the fabs method

int main() {
    double x = -3.14;
    std::cout << "The absolute value of " << x << " is " << fabs(x) << std::endl;
    return 0;
}
```
