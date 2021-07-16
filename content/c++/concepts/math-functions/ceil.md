---
Title: "ceil()"
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns the next whole number that is greater than or equal to the argument. Argument must be a double/float/long double, and the return value will be same datatype.

## Syntax

```cpp

double ceil(double n);
float ceil(float n);
long double ceil (long double n);

```

## Example 1

Use `ceil()` to round up the double `12.3456`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  double result;

  result = std::ceil(n);

  std::cout << "The result is " << result << "!\n";
  // Output: The result is 13!
}

```
