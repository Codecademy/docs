---
Title: 'log()'
Description: 'Returns the natural, base-e logarithm of the argument.'
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

The **`log()`** function returns the natural, base-`e` logarithm of the argument. This is the inverse of the [`exp()`](https://www.codecademy.com/resources/docs/cpp/math-functions/exp) function.

## Syntax

```pseudo
log(x)
```

If the `x` parameter is less than or equal to zero, then a domain error will occur. If `x` is equal to zero, a pole error may occur where the result has reached the point of infinity and cannot be expressly returned.

## Example

The following example uses the `log()` function to find the natural log of `5`:

```cpp
#include <iostream>
#include <math.h>

int main() {
  double x = 5;
  double result;
  result = log(x);
  std::cout << "The log of " << x << " is " << result << "\n";
  // Output: The log of 5 is 1.60944
}
```

## Codebyte Example

The following example is runnable and returns the natural log of `10`:

```codebyte/cpp
#include <iostream>
#include <math.h>

int main() {
  double x = 10;
  double result;
  result = log(x);
  std::cout << "The log of " << x << " is " << result << "\n";
}
```
