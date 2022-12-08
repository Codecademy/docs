---
Title: 'atan()'
Description: 'Returns the inverse tangent of the argument in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`atan()`** function returns the inverse tangent of an argument in radians.

## Syntax

```pseudo
atan(n)
```

The `n` parameter can be any real number (positive, negative, or zero).

- If `n` is zero, the result will be zero with the same sign.
- If `n` is postive or negative infinity, the result will be 1.5708 radians with the same sign.

## Example

The following example uses the `atan()` function that returns the inverse tangent of value `0.0`:

```cpp
#include <iostream>
#include <cmath>


int main() {
  double x = 0.0;
  double result;

  result = std::atan(x);

  std::cout << result << " radians" << "\n";
}
```

This produces the following output:

```shell
0.0 radians
```

### Codebyte Example

The following example returns the inverse tangent of the `value` with the `atan()` function:

```codebyte/cpp
#include <iostream>
#include<cmath>

int main() {
  double value = 1.0, result;
  result = atan(value);

  std::cout << result << " radians" << "\n";
}
```
