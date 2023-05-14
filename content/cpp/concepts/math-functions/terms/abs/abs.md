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

Example of the C++ `abs()` function

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  int num = -101;
  double result;

  result = abs(num);

  cout << "abs(" << num << ") = |" << num << "| = " << result;

  return 0;
}
```
