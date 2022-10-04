---
Title: 'round()'
Description: 'Returns the integral value that is nearest to the argument, with halfway cases rounded away from zero.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The `round()` function returns the integral value that is nearest to the argument, with halfway cases rounded away from zero.

## Syntax

The `cmath` library must be added at the top of the file.

```cpp
std::round(double num);
```

Argument must be a `double`/`float`/`long double`, and the return value will be the type of `integer`.

## Example

```cpp
double num, result;

result = std::round(num);
```

## Codecademy Example

Use `round()` to round-off `10.89`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double num = 10.89;
  double result;

  result = std::round(num);

  std::cout << "The result is " << result << "!\n";
  // Output: The result is 11!
}
```
