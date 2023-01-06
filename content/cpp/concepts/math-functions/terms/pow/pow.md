---
Title: 'pow()'
Description: 'Returns the result of a base value raised to the power of an exponent.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`pow()`** function returns the result of a base value raised to the power of an exponent.

## Syntax

```pseudo
pow(base, exponent)
```

The `base` and `exponent` parameters are integers or of type `float`. If `base` is zero, the function returns `0.0`. If `exponent` is zero, the function returns `1.0`.

- A domain error may occur if the `base` is a float and `exponent` is not an integer value.
- A pole or range error may occur due to overflow.
- A range error may occur due to underflow.

## Example

The following example uses the `pow()` function to raise `2` to the power of `2`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double base = 2;
  double exponent = 2;

  double result = pow(base, exponent);
  std::cout << base << " raised to the power of " << exponent << " equals " << result << ".\n";
  // Output: 2 raised to the power of 2 equals 4
}
```

## Codebyte Example

The following example is runnable and uses the `pow()` function to find the nth-root of `16` by raising the base to the reciprocal of the desired root:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  double base = 16;
  double root = 3;
  double exponent = 1 / root;

  double result = pow(base, exponent);

  std::cout << base << " raised to the power of " << exponent << " equals " << result << ", which is the " << root << "-root of " << base << ".\n";
}
```
