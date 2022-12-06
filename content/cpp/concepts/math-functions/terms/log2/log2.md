---
Title: 'log2()'
Description: 'Returns the base-2 logarithm of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`log2()`** function returns the base-2 logarithm of the argument.

## Syntax

```pseudo
log2(x)
```

If the `x` parameter is negative (less than zero), then a domain error will occur. If `x` is equal to zero, a pole error may occur where the result has reached the point of infinity and cannot be returned.

## Example

The following example uses the `log2()` function to find the base-2 log of `1024`:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double x = 1024;
  double result;
  result = log2(x);
  cout << "The log to the base of 2 of " << x << " is " << result << "\n";
  // Output: The log to the base of 2 of 1024 is 10
}
```

## Codebyte Example

The following example is runnable and returns the base-2 log of `8`:

```codebyte/cpp
#include <iostream>
#include <math.h>
using namespace std;

int main() {
  double x = 8;
  double result;
  result = log2(x);
  cout << "The log to the base of 2 of " << x << " is " << result << "\n";
}
```
