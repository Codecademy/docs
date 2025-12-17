---
Title: 'islessequal()'
Description: 'Checks whether the first floating-point value is less than or equal to the second, without raising floating-point exceptions.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Math'
  - 'Numbers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`islessequal()`** function compares two floating-point values and returns `true` if the first value is less than or equal to the second. It performs a quiet comparison, meaning it does not raise floating-point exceptions and always returns `false` if either value is `NaN`.

This function is provided by the `<cmath>` header and is safer than using the `<=` operator when working with floating-point edge cases.

## Syntax

```pseudo
islessequal(x, y)
```

**Parameters:**

- `x`: The first numeric value to compare.
- `y`: The second numeric value to compare.
  Both parameters can be floating-point or integer types due to overloads.

**Return value:**

- Returns `true` if `x` is less than or equal to `y` and neither value is `NaN`.
- Returns `false` otherwise, including when either argument is `NaN`.

## Example 1: Comparing two numeric values

In this example, `islessequal()` is used to compare two regular numeric values:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double a = 4.5;
  double b = 7.2;

  cout << boolalpha;
  cout << islessequal(a, b) << endl;
  cout << islessequal(b, a) << endl;

  return 0;
}
```

The output of this code is:

```shell
true
false
```

## Example 2: Comparison involving `NaN`

In this example, `islessequal()` safely handles a comparison involving `NaN`:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double x = 5.0;
  double y = NAN;

  cout << boolalpha;
  cout << islessequal(x, y) << endl;
  cout << islessequal(y, x) << endl;

  return 0;
}
```

The output of this code is:

```shell
false
false
```

## Codebyte Example

In this example, `islessequal()` is used inside a helper function to check ordering between different numeric inputs:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

void checkOrder(double a, double b) {
  if (islessequal(a, b))
    cout << a << " is less than or equal to " << b << endl;
  else
    cout << a << " is greater than " << b << endl;
}

int main() {
  checkOrder(3.0, 3.0);
  checkOrder(2.5, 4.1);
  checkOrder(6.0, 1.0);
}
```

## Frequently Asked Questions

### 1. What is the equal function in C++?

C++ does not have a standalone `equal()` function for basic comparisons; equality is typically checked using the `==` operator, or with helper functions like `std::equal()` for ranges.

### 2. What is the math library function in C++?

C++ math functions such as `sqrt()`, `pow()`, `sin()`, and `islessequal()` are provided by the `<cmath>` header.

### 3. Should I use `equals()` or `==` for string compare?

In C++, strings should be compared using `==` when working with `std::string`. The `equals()` method does not exist in standard C++.
