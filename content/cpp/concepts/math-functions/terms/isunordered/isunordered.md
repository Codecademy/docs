---
Title: 'isunordered()'
Description: 'Returns true if one or both of the arguments is a NaN value'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

When comparing two floating-point numbers, the comparison behaves as unordered if one of them is a `NaN` (Not a Number). The function **`isunordered()`** receives two floating-point numbers and checks if either of them is a `NaN`. `isunordered()` returns `true` if one or both of the arguments is `NaN`, and returns `false` only if both arguments are normal floating-point numbers. 

## Syntax

```pseudo
isunordered(a, b)
```
The function `isunordered(a, b)` receives two arguments `a` and `b`, of type `double`, `float`, or `long double` data types and returns `true` if either `a` or `b` is `NaN`. It will return `false` only if both `a` and `b` are normal floating-point numbers. 

## Example

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	cout << (isunordered(3.0, NAN)?"true":"false") << endl;
		// returns true
	cout << (isunordered(NAN, 3.0)?"true":"false") << endl;
		// returns true
	cout << (isunordered(NAN, 3.0)?"true":"false") << endl;
		// returns true
	cout << (isunordered(3.0, 4.0)?"true":"false") << endl;
		// returns false 
}
```

## Codebyte Example

The following example is runnable and shows what the function `isunordered()` resolves to, when given different kinds of arguments. In the example the helper function `checkNaN()` takes in two double arguments `a` and `b` and passes them to `isunordered()` and outputs the appropriate message depending on the condition `isunordered()` returns. the `main()` function calls `checkNaN()` multiple times with different arguments. For simplicity, `checkNaN()` only takes arguments with `double` data type. 

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

void checkNaN(double a, double b) {
	if (isunordered(a, b))
		cout << a << " is NOT comparable with " << b << endl;
	else
		cout << a << " is comparable with " << b << endl;
}


int main()
{
	double nan = NAN; // a NaN (Not a Number) value
	double pi = 3.14; // a regular double number
	double c = 2.99792458e8; // a regular double number

	checkNaN(nan, nan); 
	// outputs: nan is NOT comparable with nan
	checkNaN(nan, pi);
	// outputs: nan is NOT comparable with 3.14
	checkNaN(c, nan);
	// outputs: 2.99792e+08 is NOT comparable with nan
	checkNaN(c, pi);
	// outputs: 2.99792e+08 is comparable with 3.14
}
```