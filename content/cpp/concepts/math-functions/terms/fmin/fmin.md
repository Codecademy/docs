---
Title: 'fmin()'
Description: 'Returns the smaller of two arguments.'
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

The **`fmin()`** function returns the smaller of two arguments.

## Syntax

```pseudo
fmin(x, y)
```

The parameters `x` and `y` are usually a numeric [data type](https://www.codecademy.com/resources/docs/cpp/data-types) ranging from negative to positive `INFINITY`. If one of the parameters is `NaN`, then the other parameter is returned.

## Example

The following example uses the `fmin()` function to find the smaller value between `3` and `5`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 3;
  double y = 5;
  double result;
  result = fmin(x, y);
  std::cout << "The smaller value between " << x << " and " << y << " is " << result << "\n";
}
```

This produces the following output:

```shell
The smaller value between 3 and 5 is 3
```

## Codebyte Example

The following example returns the smaller value between `-32.123` and `-32.231`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = -32.123;
  double y = -32.231;
  double result;
  result = fmin(x, y);
  std::cout << "The smaller value between " << x << " and " << y << " is " << result << "\n";
}
```
