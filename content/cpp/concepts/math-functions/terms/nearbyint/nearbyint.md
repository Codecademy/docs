---
Title: 'nearbyint()'
Description: 'Returns the argument rounded to the closest integer as a floating-point value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`nearbyint()`** function returns the argument rounded to the closest integer as a floating-point value, according to the current rounding method.

## Syntax

```pseudo
nearbyint(value)
```

The `value` parameter represents a positive or negative floating-point value. The current rounding method, as described by `fegetround()`, determines which direction the `value` is rounded. By default, the rounding direction is set as `FE_TONEAREST`.

### Example

The following example returns the nearby integer of `1.5`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double value = 1.50;
  int result;
  result = std::nearbyint(value);

  std::cout << "Nearest value is " << result << "\n";
  // Output: Nearest value is 2
}
```

This will produce the following output:

```
Nearest value is 2
```

### Codebyte Example

The following example returns the nearby integer of `2.9`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main() {
  float value = 2.9;
  int result;
  result = std::nearbyint(value);

  std::cout << "Nearest value is " << result << "\n";
}
```
