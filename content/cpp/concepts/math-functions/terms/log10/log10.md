---
Title: 'log10()'
Description: 'Returns the base-10 logarithm of the argument.'
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

The **`log10()`** function returns the base-10 logarithm of the argument.

## Syntax

```pseudo
log10(x)
```

If the `x` parameter is negative (less than zero), then a domain error will occur. If `x` is equal to zero, a pole error may occur where the result has reached the point of infinity and cannot be expressly returned.

## Example

The following example uses the `log10()` function to find the base-10 log of `5`:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  double x = 5;
  double result;
  result = log10(x);
  cout << "The log to the base of 10 of " << x << " is " << result << "\n";
  // Output: The log of 5 is 0.69897
}
```

## Codebyte Example

The following example is runnable and returns the base-10 log of `10`:

```codebyte/cpp
#include <iostream>
#include <math.h>
using namespace std;

int main() {
  double x = 10;
  double result;
  result = log10(x);
  cout << "The log to the base of 10 of " << x << " is " << result << "\n";
}
```
