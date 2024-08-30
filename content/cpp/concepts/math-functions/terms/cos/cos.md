---
Title: 'cos()'
Description: 'Returns the cosine of an argument given in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`cos()`** returns the cosine of an argument given in radians.

## Syntax

```pseudo
std::cos(n)
```

## Example

Use `cos()` to return the cosine of `3.1416` radians:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 3.1416;
  double result;

  result = std::cos(x);

  std::cout << "The cosine of " << x << " radians is " << result << "\n";
}
```

This results in the following output:

```shell
The cosine of 3.1416 radians is -1
```

## Codebyte Example

Use `cos()` to return the cosine of `25` degrees:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 25;
  double result;

  // Converting degrees to radians
  rad = x*M_PI/180
  result = std::cos(rad);

  std::cout << "The cosine of " << x << " degrees is " << result << "\n";
}
```
