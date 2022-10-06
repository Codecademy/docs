---
Title: 'signbit()'
Description: 'Returns true if the floating point is negative and false if floating point is positive.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The `signbit()` function returns true if the sign of the  number is negative and false if sign is positive.

## Syntax

The `cmath` library must be added at the top of the file.

```cpp
std::signbit(n);
```

Argument must be a `double`/`float`/`long double`/`int`, and the return value will be the same type.
This function also detects the signs of zeroes, intfinities and NaNs.

## Example

```cpp
#include <iostream>
#include <cmath>

int main()
{
    double a=9.0,b=0.0;
    // Here, c is infinity
    double c=a/b;
    // if c tends to positive infinity
    if(std::signbit(c)==false)
    {
        std::cout<<"c tends to positive infinity";
    }
    else
    {
        std::cout<<"c tends to negative infinity";
    }
    return 0;
}
```

## Codecademy Example

Use `signbit()` to know whether the integer is positive or negative:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  bool result;

  result = std::signbit(n);

  if(result)
  {
    std::cout<<"n is negative";
  }
  else
  {
    std::cout<<"n is positive";
  }
}
```
