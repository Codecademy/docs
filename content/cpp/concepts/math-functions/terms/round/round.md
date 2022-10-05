---
Title: 'round()'
Description: 'Returns the integer that is nearest to the argument, with halfway cases rounded away from zero.'
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

The `round()` function returns the integer that is nearest to the argument, with halfway cases rounded away from zero.

## Syntax

```pseudo
round(num);
```

The `num` parameter must be a `double`,`float`, or `long double`. The return value will be an integer.

## Example

```cpp
double num = 9.23;
double result;

result = std::round(num);

std::cout << "The result is " << result << "!\n";
// Output: The result is 9!
```

## Codebyte Example

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
