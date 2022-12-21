---
Title: 'fmax()'
Description: 'Returns the larger of two arguments.'
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

The **`fmax()`** function returns the larger of two arguments.

## Syntax

```pseudo
fmax(x, y)
```

The parameters `x` and `y` are usually a numeric [data type](https://www.codecademy.com/resources/docs/cpp/data-types) ranging from negative to positive `INFINITY`. If one of the parameters is `NaN`, then the other parameter is returned.

## Example

The following example uses the `fmax()` function to find the larger value between `3` and `5`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 3;
  double y = 5;
  double result;

  result = fmax(x, y);

  std::cout << "The larger value between " << x << " and " << y << " is " << result << "\n";
}
```

This produces the following output:

```shell
The larger value between 3 and 5 is 5
```

## Codebyte Example

The following example returns the larger value between `-32.123` and `-32.231`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = -32.123;
  double y = -32.231;
  double result;

  result = fmax(x, y);

  std::cout << "The larger value between " << x << " and " << y << " is " << result << "\n";
}
```
