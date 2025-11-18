---
Title: 'isless()'
Description: 'Returns true if first argument less than second argument, false otherwise.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
  - 'Booleans'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ **`isless()`** function returns true if first argument is lesser than the second, false otherwise. This math function is part of the C++ standard library and is defined in the `<cmath>` header file.

## Syntax

```pseudo
bool isless(x, y);
```

**Parameters:**

- `x, y`: A floating-point number (double, float, or long double) or integer values [data type](https://www.codecademy.com/resources/docs/cpp/data-types).

**Return value:**

- The `isless()` function returns true or false. True if `x < y`, false otherwise. If one or both of the parameters is NaN, the function returns false.

## Example

The following example uses the `isless()` function to compare and determine if the first argument is lesser than the second argument:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	bool result; // true 1, false 0
	int x, y;
	
	x = 5;
	y = 7;
	result = isless(x, y); // true 1
	cout << x << " is less than " << y << ": " << result << endl;
	
	x = 9;
	y = 3;
	result = isless(x, y); // false 0
	cout << x << " is less than " << y << ": " << result << endl;

	double z = nan("1");
	result = isless(x, z); // false 0
	cout << x << " is less than " << z << ": " << result << endl;

	return 0;
}

```

This produces the following output:

```shell
5 is less than 7: 1
9 is less than 3: 0
9 is less than nan: 0
```

## Codebyte Example: Using `isless()` inside Condition Logic

This example demonstrates using `isless()` inside mathematical conditions cleanly. It avoids undefined behavior from comparing with NaNs.

```codebyte/cpp
#include <iostream>
#include <cmath>

void compare(double x, double y) {
    if (std::isless(x, y)) {
        std::cout << x << " is LESS than " << y << "\n";
    } else if (std::isless(y, x)) {
        std::cout << x << " is GREATER than " << y << "\n";
    } else {
        std::cout << x << " and " << y << " are NOT comparable (maybe NaN?)\n";
    }
}

int main() {
    compare(3.0, 7.0);
    compare(9.0, 2.0);
    compare(std::nan(""), 5.0);
}
```

## When should we use `isless()`

- When NaN might appear in the comparison or calculations.
- When building SAFE comparison functions.
- In sorting or filtering.