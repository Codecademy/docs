---
Title: 'nan()'
Description: 'Returns a quiet NaN (Not-A-Number) value of type double.'
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

The **`nan()`** function returns a quiet `NaN` (not a number) value of type `double`.

## Syntax

```pseudo
nan(x)
```

The `x` argument is a character string that can be used by library implementations to distinguish different `NaN` values.

## Example

The following example uses the `nan()` function to return a `NaN` value:

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double number1 = 1.0;
  double number2 = nan("");

  if (isnan(number1)) {
    cout << "number1 is not a number";
  }

  if (isnan(number2)) {
    cout << "number2 is not a number";
  }

  return 0;
}
```

This produces the following output:

```shell
number2 is not a number
```

## Codebyte Example

The following example is runnable and uses the `nan()` function to return a `NaN` value:

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double number1 = nan("");
  double number2 = 2.0;

  if (isnan(number1)) {
    cout << "number1 is not a number";
  }

  if (isnan(number2)) {
    cout << "number2 is not a number";
  }

  return 0;
}
```
