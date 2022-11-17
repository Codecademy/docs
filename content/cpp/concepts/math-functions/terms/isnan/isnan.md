---
Title: 'isnan()'
Description: 'Returns a number telling whether a given value is a NaN value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isnan()`** function returns a number telling whether a given value is a `NaN` value.

## Syntax

```pseudo
isnan(x)
```

The `x` parameter is a floating-point value that can be of type `float`, `double`, `long double`, or `int`. The return value is 1 if `x` is `NaN`. Otherwise, 0 is returned.

> **Note:** Common cases of a `NaN` value include:
>
> - Taking the square root of a negative value
> - Dividing positive or negative zero by positive or negative zero (0/0)

## Example

In the example below, the `isnan()` function checks whether or not the value of `x` is `NaN`:

```cpp
#include <iostream>
#include<math.h>
using namespace std;

int main() {
  float x = 0.0 / 0.0;
  cout << "value of isnan(x) is: " << isnan(x) << "\n";
  return 0;
}
```

This produces the following output:

```
value of isnan(x) is: 1
```

## Codebyte Example

In the example below, each possible data type is applied to the `isnan()` function. The application of the `int` type involves the [`sqrt()`](https://www.codecademy.com/resources/docs/cpp/math-functions/sqrt) function:

```codebyte/cpp
#include <iostream>
#include<math.h>
using namespace std;

int main() {
  float f = 10.0 / 0.0;
  double d = 3.14;
  long double ld = 3.1415926535897932384626433832L;
  int i = -144;

  cout << "value of isnan(f) is: " << isnan(f) << "\n";
  cout << "value of isnan(d) is: " << isnan(d) << "\n";
  cout << "value of isnan(ld) is: " << isnan(ld) << "\n";
  cout << "value of isnan(i) is: " << isnan(sqrt(-144)) << "\n";
}
```
