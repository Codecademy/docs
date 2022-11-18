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

The **`atan2()`** function returns the inverse tangent of the quotient of a pair of coordinates (y/x), in radians.

## Syntax

```pseudo
atan2(y, x)
```

- The first and second parameters, `y` and `x`, can be one of `double`, `float` or `long double` [data type](https://www.codecademy.com/resources/docs/cpp/data-types).
- The return value has the range of [-π, π].
- The function returns negative value when first parameter is negative.
- If both the parameters are 0, then the value is 0.

## Example

The following is an example of the `.atan2()` method:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 10.0, y = 20.0;

  std :: cout << atan2(y, x) << std :: endl;
  return 0;
}
```

This will produce the following output:

```shell
1.10715
```

## Codebyte Example

The following example is runnable and demonstrates `.atan2()` function:

```codebyte/cpp
#include <iostream>
#include <cmath>
int main()
{
  double x, y;
  cin >> x >> y;

  std :: cout << atan2(y, x) << std :: endl;
  return 0;
}
```
