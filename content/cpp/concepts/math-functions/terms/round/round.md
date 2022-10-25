---
Title: 'round()'
Description: 'Returns the integer that is nearest to the argument, with halfway cases rounded away from the ending zero.'
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

The **`round()`** function returns the integer that is closest to the argument, with halfway cases rounded away from the ending zero.

## Syntax

```pseudo
round(num);
```

- The `num` parameter must be a `double`,`float`, or `long double`.
- The return value will be an integer.
- If the decimal in `num` is `0.5` or higher, the closest integer greater than `num` is returned.

## Example

The following example showcases the `round()` function being applied to two `double` values, one of which is a halfway case:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double num1 = 9.23;
  double result1;
  result1 = std::round(num1);

  std::cout << "The result of round(9.23) is " << result1 << "\n";

  double num2 = 4.5;
  double result2;
  result2 = std::round(num2);

  std::cout << "The result of round(4.5) is " << result2 << "\n";
}
```

This produces the following output:

```shell
The result of round(9.23) is 9
The result of round(4.5) is 5
```

## Codebyte Example

The following example is runnable and rounds the halfway case away from zero:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double num = 10.89;
  double result;
  result = std::round(num);

  std::cout << "The result is " << result << "\n";
}
```
