---
Title: 'ceil()'
Description: 'Returns the next whole number that is greater than or equal to the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`ceil()`** function returns the next whole number that is greater than or equal to the argument.

## Syntax

```pseudo
std::ceil(n);
```

Argument must be a `double`/`float`/`long double`, and the return value will be same type.

## Example

Use `ceil()` to round up some math constants:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double pi = M_PI;
  double e = M_E
  double a;
  double b;

  a = std::ceil(pi);
  b = std::ceil(e);

  std::cout << "Pi rounded up is " << a << "!\n";
  std::cout << "e rounded up is " << b << "!\n";
}
```

This results in the following output:

```shell
Pi rounded up is 4!
e rounded up is 3!
```

## Codebyte Example

Use `ceil()` function to round up the double `12.3456`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  double result;

  result = std::ceil(n);

  std::cout << "The result is " << result << "!\n";
}
```
