---
Title: 'asin()'
Description: 'Returns the inverse sine of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`asin()`** function returns the inverse sine of the argument in radians.

## Syntax

```pseudo
asin(n)
```

## Example 1

Use `asin()` to return the inverse sine of `0.0`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result;

  result = std::asin(x);

  std::cout << result << " radians" << "\n";
  // Output: 1.5708 radians
}
```

## Codebyte Example

The following example is runnable and outputs the inverse sine of `0.32`:

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double x = 0.32;
  double result = asin(x);

  cout << result << " radians" << endl;

  return 0;
}
```
