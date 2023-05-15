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

Using the `acos()` function with an integral type

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  int x = -1;
  double result;

  result = acos(x);
  
  cout << "acos(x) = " << result << " radians" << endl;
  // Converting result to degrees
  cout << "acos(x) = " << result*180/3.1415 << " degrees";
  
  return 0;
}
```
