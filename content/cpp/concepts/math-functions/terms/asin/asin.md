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

The example shows how the `asin()` works

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  double x = 0.25, result;
  result = asin(x);
  
  cout << "asin(x) = " << result << " radians" << endl;
  // result in degrees
  cout << "asin(x) = " << result*180/3.1415 << " degrees" << endl;
  
  return 0;
}
```