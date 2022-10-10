---
Title: 'exp2()'
Description: 'Returns the base-2 exponential function, i.e. 2 raised to the given argument'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`exp2()`** is a builtin function in C++ STL that computes the `base-2` exponential function of a given number, i.e. `2` raised to the given argument.

## Syntax

```pseudo
exp2(x)
```

`x`: Value of the exponent.
Single mandatory argument (can be positive, negative or 0).

## Prototype [C++11 Standard]

```cpp
double exp2(double x);
float exp2(float x);
long double exp2(long double x);
// For integral type
double exp2(T x);
```

## Definition and Return Type

The function is defined in `<cmath>` header file.
The `exp2()` function returns the value in the range of `[0, ∞]`.

If no errors occur, the base-2 exponential of `n` is returned.
If a range error due to overflow occurs, `HUGE_VAL`, `HUGE_VALF`, or `HUGE_VALL` is returned.
If a range error occurs due to underflow, the correct result (after rounding) is returned.

## Error Handling

If the argument is `±0`, `1` is returned.
If the argument is `-∞`, `+0` is returned.
If the argument is `+∞`, `+∞` is returned.
If the argument is `NaN`, `NaN` is returned.

## Example

The following example uses `exp2()` to return `2` raised to the given argument:

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	double x = -6.19, result;
	
	result = exp2(x);
	cout << "exp2(x) = " << result << endl;

	return 0;
}
```

Output:
```shell
exp2(x) = 0.013697
```

## Codebyte Example

The following example is runnable and returns `2` raised to the given argument

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	double x = -6.19, result;
	
	result = exp2(x);
	cout << "exp2(x) = " << result << endl;

	return 0;
}
```