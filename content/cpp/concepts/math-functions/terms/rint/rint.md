---
Title: 'rint()'
Description: 'Rounds the argument to an integral value using the current rounding direction.'
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

The **`rint()`** function rounds the argument to an integral value using the current rounding direction.

## Syntax

```pseudo
rint(x)
```

The `x` parameter must be a `double`, `float`, or `long double`. The return value will be the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types).

> **Note:** The rounding direction is specified by the `fegetround()` function, with the default direction set as to the nearest. The rounding direction can be set to other values using `fesetround()` function.

## Example

The following example uses the `rint()` function to find the value of `x` after rounding off:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 11.87;
  double result;
  result = rint(x);
  std::cout << "Rounding to-nearest integer of (" << x << ") = " << result << "/n";
}
```

This produces the following output:

```shell
Rounding to-nearest integer (11.87) = 12
```

## Codebyte Example

The following example is runnable and returns the value nearest to `x`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 11.5;
  double result;
  result = rint(x);
  std::cout << "Rounding to-nearest integer of (" << x << ") = " << result << "/n";
}
```
