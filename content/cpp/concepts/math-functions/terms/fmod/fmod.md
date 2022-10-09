---
Title: 'fmod()'
Description: 'Computes the floating point remainder of numerator/denominator (rounded towards zero)'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`fmod()`** function in C++ computes the floating-point remainder of `numerator`/`denominator` (rounded towards zero). It is the extension of the modulo operation to floating-point numbers.

## Syntax

```pseudo
fmod (x, y)
```

x: The value of numerator,
y: The value of denominator.

## Prototype [C++11 Standard]

```cpp
double fmod(double x, double y);
float fmod(float x, float y);
long double fmod(long double x, long double y);
// Additional overloads
double fmod(Type1 x, Type2 y);
```

## Definition and Return Type

Additional overloads are provided in this header `\<cmath\>` for other combinations of arithmetic types (Type1 and Type2): The overloaded functions cast the arguments to a `double` before the calculation. If one of the arguments is of type `long double`, both arguments are cast to a `long double` type.

If the computation is successful, a floating-point remainder of the division of `x` and `y` is returned as defined above.
If a domain error occurs (the denominator is zero), an implementation-defined value is returned (`NaN` where supported).
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Example

The following example uses `fmod()` to return floating-point remainder of the division `x/y` in double:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    double x = 7.5, y = 2.1;
    double result = fmod(x, y);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    
    x = -17.50, y = 2.0;
    result = fmod(x, y);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    
    return 0;
}
```

Output:
```shell
Remainder of 7.5/2.1 = 1.2
Remainder of -17.5/2 = -1.5
```

## Codebyte Example

The following example is runnable and returns the x/y value

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    double x = 7.5, y = 2.1;
    double result = fmod(x, y);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    
    x = -17.50, y = 2.0;
    result = fmod(x, y);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    
    return 0;
}
```