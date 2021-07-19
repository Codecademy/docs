---
Title: "floor()"
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

Returns the first whole number that is less than or equal to the argument. Argument must be a double/float/long double, and the return value will be same datatype.

## Syntax

```cpp
std::floor(n);
```

## Example 1

Use `floor()` to round down the double `12.3456`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double n = 12.3456;
  double result;

  result = std::floor(n);

  std::cout << "The result is " << result << "!\n";
  // Output: The result is 12!
}
```
