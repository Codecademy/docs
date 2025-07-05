---
Title: 'sqrt()'
Description: 'Returns the square root of a number in C++.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`sqrt()`** function returns the square root of a number. This mathematical function is part of the C++ standard library and is defined in the `<cmath>` header file.

The `sqrt()` function is commonly used in mathematical calculations, scientific computing, geometric computations, and algorithms that require finding the square root of numerical values. It finds applications in areas such as calculating distances between points, solving quadratic equations, implementing mathematical formulas, and various engineering calculations.

## Syntax

```pseudo
sqrt(num)
```

**Parameters:**

- `num`: A floating-point number (double, float, or long double) for which the square root is to be calculated

**Return value:**

The `sqrt()` function returns the square root of the given argument as a floating-point value. Its return type matches the type of the argument (e.g., float, double, or long double).

> **Note:** If a negative argument is passed to `sqrt()`, a domain error occurs and the function returns `NaN` (Not a Number).

## Example 1: Basic Usage of `sqrt()`

This example demonstrates the basic usage of the `sqrt()` function with different numerical values:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  // Calculate square root of different numbers
  cout << "Square root of 16: " << sqrt(16) << endl;
  cout << "Square root of 25: " << sqrt(25) << endl;
  cout << "Square root of 2: " << sqrt(2) << endl;
  cout << "Square root of 100.5: " << sqrt(100.5) << endl;

  return 0;
}
```

This example results in the following output:

```shell
Square root of 16: 4
Square root of 25: 5
Square root of 2: 1.41421
Square root of 100.5: 10.025
```

> **Note:** Output may vary slightly depending on platform-specific floating-point rounding.

## Example 2: Distance Calculation

This example shows how `sqrt()` is used to calculate the distance between two points using the Pythagorean theorem:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  // Calculate distance between two points (x1, y1) and (x2, y2)
  double x1 = 1.0, y1 = 2.0;
  double x2 = 4.0, y2 = 6.0;

  // Apply distance formula: sqrt((x2-x1)^2 + (y2-y1)^2)
  double distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

  cout << "Distance between points (" << x1 << ", " << y1 << ") and ("
       << x2 << ", " << y2 << ") is: " << distance << endl;

  return 0;
}
```

This example results in the following output:

```shell
Distance between points (1, 2) and (4, 6) is: 5
```

## Codebyte Example: Quadratic Formula

This example demonstrates using `sqrt()` to solve a quadratic equation using the quadratic formula:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  // Solve quadratic equation ax^2 + bx + c = 0
  double a = 1.0, b = -5.0, c = 6.0;

  // Calculate discriminant
  double discriminant = b * b - 4 * a * c;

  if (discriminant >= 0) {
    // Calculate roots using quadratic formula
    double root1 = (-b + sqrt(discriminant)) / (2 * a);
    double root2 = (-b - sqrt(discriminant)) / (2 * a);

    cout << "For equation " << a << "x^2 + " << b << "x + " << c << " = 0" << endl;
    cout << "Root 1: " << root1 << endl;
    cout << "Root 2: " << root2 << endl;
  } else {
    cout << "No real roots exist for this equation." << endl;
  }

  return 0;
}
```

## Frequently Asked Questions

### 1. What happens if I pass a negative number to `sqrt()`?

Passing a negative number to `sqrt()` results in a domain error and returns NaN (Not a Number).

### 2. What header file do I need to include to use `sqrt()`?

You need to include the `<cmath>` header file to use the `sqrt()` function.

### 3. What is the return type of the function `sqrt()` in C++?

The `sqrt()` function returns a floating-point value of the same type as the input parameter. If you pass a float, it returns a float; if you pass a double, it returns a double; and if you pass a long double, it returns a long double.
