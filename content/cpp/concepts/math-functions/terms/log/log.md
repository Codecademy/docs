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

The **log()** function returns the natural, base-_e_ logarithm of the argument. This is the inverse of the [`exp()`](https://www.codecademy.com/resources/docs/cpp/math-functions/exp) function.

## Syntax

```cpp
 log(x)
```

If the parameter `x` is negative (less than 0) or equal to 0, then a domain error will occur. If it is equal to 0, a pole error may occur where the result has reached the point of infinity and cannot be returned.

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
