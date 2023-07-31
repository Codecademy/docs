---
Title: 'cbrt()'
Description: 'Returns the cube root of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`cbrt()`** function returns the cube root of the argument.

## Syntax

```pseudo
std::cbrt(n)
```

## Example

Use `cbrt()` to find the side lengths of a `27` m<sup>3</sup> cube:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double V = 27;
  double side;

  side = std::cbrt(V);

  std::cout << "A cube with a volume of " << V << " has a side length of " << side << "\n";
}
```

This results in the following output:

```shell
A cube with a volume of 27 has a side length of 3
```

## Codebyte Example

Use `cbrt()` to find the cube root of `8`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 8;
  double result;

  result = std::cbrt(x);

  std::cout << "The cube root of " << x << " is " << result << "\n";
}
```
