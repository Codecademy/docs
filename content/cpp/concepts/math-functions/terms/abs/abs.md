---
Title: 'abs()'
Description: 'Returns the absolute value of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`abs()`** function returns the absolute value of the argument.

## Syntax

```pseudo
abs(n)
```

## Example 1

Use `abs()` to return the absolute value of `-6.5`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  std::cout << std::abs(-6.5) << "\n";
  // Output: 6.5
}
```

## Codebyte Example

In this example, the `std::abs()` function is applied to the variable `num`, which holds the value -6.5. The absolute value of -6.5 is 6.5.

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double num = -6.5;
  double absValue = std::abs(num);
  
  std::cout << "Absolute value of " << num << " is " << absValue << "\n";
  
  return 0;
}
```