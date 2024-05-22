---
Title: 'sinh()'
Description: 'Returns the hyperbolic sine of an argument given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`sinh()`** function returns the hyperbolic sine of an argument given in radians.

## Syntax

```pseudo
sinh(angle)
```

The `angle` parameter should be expressed in radians. To convert from degrees to radians:

```pseudo
radians = degrees * PI / 180
```

## Example

The following example uses `sinh()` to return the hyperbolic sine of `0.0` in radians:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result;

  result = std::sinh(x);

  std::cout << "The hyperbolic sine of " << x << " radians is " << result << "\n";
  // Output: The hyperbolic sine of 0 radians is 0
}
```

## Codebyte Example

The following code example returns the hyperbolic sine of a given number using the `sinh` function.

```codebyte/cpp
#include <iostream>
#include <cmath> // For the sinh method

int main() {
    double x = 4;
    std::cout << "The hyperbolic sine of " << x << " is " << sinh(x) << std::endl;
    return 0;
}
```
