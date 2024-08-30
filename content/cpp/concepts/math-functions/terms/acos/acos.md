---
Title: 'acos()'
Description: 'Returns the inverse cosine of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`acos()`** function returns the inverse cosine of the argument in radians.

## Syntax

```pseudo
acos(n)
```

## Example 1

Use `acos()` to return the inverse cosine of `0.0`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double x = 0.0;
  double result;

  result = std::acos(x);

  std::cout << result << " radians" << "\n";
  // Output: 1.5708 radians
}
```

## Codebyte Example

The following example is runnable and outputs the inverse cosine of `-0.5`:

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double x = -0.5;
  double result = acos(x);

  cout << result << " radians" << endl;

  return 0;
}
```
