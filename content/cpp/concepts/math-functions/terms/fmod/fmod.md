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

The **`fmod()`** function in C++ computes the floating point remainder of numerator/denominator (rounded towards zero).

## Syntax

```pseudo
fmod (x, y)
```

x: The value of numerator.
y: The value of denominator.

## Prototype [C++11 Standard]

```cpp
double fmod(double x, double y);
float fmod(float x, float y);
long double fmod(long double x, long double y);
double fmod(Type1 x, Type2 y);
// Additional overloads
```

## Definition and Return Type

Additional overloads are provided in this header (<cmath>) for other combinations of arithmetic types (Type1 and Type2): These overloads effectively cast its arguments to double before calculations, except if at least one of the arguments is of type long double (in which case both are casted to long double instead).

If successful, returns the floating-point remainder of the division x/y as defined above.
If a domain error occurs, an implementation-defined value is returned (NaN where supported). (If the denominator y is zero)
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
/* Output:
Remainder of 7.5/2.1 = 1.2
Remainder of -17.5/2 = -1.5
*/
```