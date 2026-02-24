---
Title: 'fpclassify()'
Description: 'Classifies a floating-point value into categories such as zero, normal, subnormal, infinite, or NaN.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Classification'
  - 'Functions'
  - 'Math'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`fpclassify()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) in C++ returns an integer value indicating the classification of a floating-point number. It categorizes values as normal, subnormal, zero, infinite, or NaN (Not-a-Number). The function is available through the `<cmath>` header.

## Syntax

```pseudo
fpclassify(x)
```

**Parameters:**

- `x`: A floating-point value (can be `float`, `double`, or `long double`).

**Return value:**

The `fpclassify()` function returns one of the following integer constants:

- `FP_INFINITE`: The value is positive or negative infinity.
- `FP_NAN`: The value is NaN (Not-a-Number).
- `FP_ZERO`: The value is zero.
- `FP_SUBNORMAL`: The value is a subnormal (denormalized) number.
- `FP_NORMAL`: The value is a normal finite non-zero number.

## Example

The following example demonstrates various classifications using `fpclassify()`:

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double normal = 1.5;
  double zero = 0.0;
  double inf = INFINITY;
  double nan = NAN;

  cout << "Classification of " << normal << ": ";
  if (fpclassify(normal) == FP_NORMAL) {
    cout << "Normal" << endl;
  }

  cout << "Classification of " << zero << ": ";
  if (fpclassify(zero) == FP_ZERO) {
    cout << "Zero" << endl;
  }

  cout << "Classification of inf: ";
  if (fpclassify(inf) == FP_INFINITE) {
    cout << "Infinite" << endl;
  }

  cout << "Classification of nan: ";
  if (fpclassify(nan) == FP_NAN) {
    cout << "NaN" << endl;
  }

  return 0;
}
```

The output of this code is:

```shell
Classification of 1.5: Normal
Classification of 0: Zero
Classification of inf: Infinite
Classification of nan: NaN
```

## Codebyte Example

The following runnable example shows how to use `fpclassify()` with different values:

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double values[] = {1.0, 0.0, INFINITY, NAN, -5.5};

  for (double val : values) {
    cout << "fpclassify(" << val << ") = ";

    switch(fpclassify(val)) {
      case FP_INFINITE:
        cout << "Infinite";
        break;
      case FP_NAN:
        cout << "NaN";
        break;
      case FP_ZERO:
        cout << "Zero";
        break;
      case FP_SUBNORMAL:
        cout << "Subnormal";
        break;
      case FP_NORMAL:
        cout << "Normal";
        break;
    }
    cout << endl;
  }

  return 0;
}
```
