---
Title: 'atan2()'
Description: 'Returns the inverse tangent of a pair of x- and y-coordinates in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`atan2()`** function returns the inverse tangent of the quotient of a coordinate pair (y/x), in radians.

## Syntax

```pseudo
atan2(y, x)
```

The [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the `y` and `x` parameters can be `double`, `float` or `long double`.

- The return value has the range of [-π, π].
- A negative value is returned if the first parameter is negative.
- If both parameters are 0, then the value is 0.

## Example

The following is an example of the `atan2()` function:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 10.0, y = 20.0;

  std::cout << atan2(y, x) << std::endl;

  x = 0.0, y = 0.0;   // Edge Case

  std::cout << atan2(y, x) << std::endl;
  return 0;
}
```

This will produce the following output:

```shell
1.10715
```

## Codebyte Example

The following example accepts [user input](https://www.codecademy.com/resources/docs/cpp/user-input) for the `x` and `y` parameters to be passed into the `atan2()` function:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 4.0, y = -10.0;

  std::cout << atan2(y, x) << std::endl;
  return 0;
}
```
