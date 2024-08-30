---
Title: 'sin()'
Description: 'Returns the sine of an angle, given in radians, in the range [-1,1].'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`sin()`** function returns the sine of an angle argument, given in radians, in the range [-1,1].

## Syntax

```pseudo
sin(angle)
```

The `angle` parameter is expressed in radians.

## Example

The following example illustrates the `sin()` function:

```cpp
#include<iostream>
#include<math.h>

using namespace std;

int main() {
  // convert degrees to radians
  double pi = M_PI;
  double degree = 60;
  double radian = degree * pi/180;

  cout << "Sine of 60 degrees is " << sin(radian) << "\n";

  return 0;
}
```

This results in the following output:

```cpp
Sine of 60 degrees is 0.866025
```

## Codebyte Example

The following code example returns the sine of a angle given in radians using the `sin()` function.

```codebyte/cpp
#include <iostream>
#include <cmath> //  For the sin method

int main() {
    double x = 3.14 / 2;
    std::cout << "The sine of " << x << " is " << sin(x) << std::endl;
    return 0;
}
```
