---
Title: 'tan()'
Description: 'Returns the tangent of an angle given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`tan()`** function returns the tangent of an angle given in radians.

## Syntax

```pseudo
tan(x)
```

The `x` parameter represents an angle measured in radians. One radian is equal to 180/&pi; degrees (where &pi; (Pi) = 3.14159...). If `x` is equal to &pi; &plusmn; `n`/&pi; (where `n` is a natural number), then a domain error will occur.

## Example

The following example returns the tangent of `0` with the `tan()` function:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0;
  double result;

  result = std::tan(x);

  std::cout << "The tangent of " << x << " is " << result << ".\n";
}
```

This produces the following output:

```shell
The tangent of 0 is 0.
```

## Codebyte Example

The following example is runnable and uses the `tan()` function to find the tangent of &pi;/4:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = M_PI/4;
  double result;

  result = std::tan(x);

  std::cout << "The tangent of " << x << "..." << " is " << result << ".\n";
}
```
