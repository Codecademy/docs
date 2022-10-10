---
Title: 'atanh()'
Description: 'Computes the arc hyperbolic tangent(inverse hyperbolic tangent) of a number in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`atanh()`** function in C++ returns the arc hyperbolic tangent (inverse hyperbolic tangent) of a number in `radians`.The area hyperbolic tangent is the inverse operation of the hyperbolic tangent.

## Syntax

```pseudo
atanh(data_type x)
```

`x`: The value of mandatory argument in range `[-1,1]`.

## Parameter

This function accepts one mandatory parameter `x` which specifies the inverse hyperbolic angle in radian which lies in the range `[-1, 1]`. The parameter can be of `double`, `float`, or `long double` datatype.

## Error Handling

If the argument is not on the interval `[-1, +1]`, a range error occurs.

If the argument is `±1`, a pole error occurs.

If the argument is `±0`, it is returned `unmodified`.
If the argument is `±1`, `±∞` is returned and `FE_DIVBYZERO` is raised.
If |arg|>1, `NaN` is returned and `FE_INVALID` is raised.
If the argument is `NaN`, `NaN` is returned.

## Prototype [C++11 Standard]

```cpp 
double atanh(double x);
float atanh(float x);
long double atanh(long double x);
// For integral type
double atanh(T x);
```

## Example

The following example uses `atanh()` to return the arc hyperbolic tangent (inverse hyperbolic tangent) of a number `x` in `radians`.

```cpp
#include <iostream>
#include <cmath>

#define PI 3.141592654
using namespace std;

int main()
{
	double x = 0.32, result;

	result = atanh(x);
	cout << "atanh(x) = " << result << " radian" << endl;

	// result in degrees
	cout << "atanh(x) = " << result*180/PI << " degree" << endl;
	
	return 0;
}
```

Output:
```shell
atanh(x) = 0.331647 radian
atanh(x) = 19.002 degree
```

## Codebyte Example

The following example is runnable.

```codebyte/cpp
#include <iostream>
#include <cmath>

#define PI 3.141592654
using namespace std;

int main()
{
	double x = 0.32, result;

	result = atanh(x);
	cout << "atanh(x) = " << result << " radian" << endl;

	// result in degrees
	cout << "atanh(x) = " << result*180/PI << " degree" << endl;
	
	return 0;
}
```