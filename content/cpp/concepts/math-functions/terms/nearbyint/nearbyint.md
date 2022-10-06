---
Title: 'nearbyint()'
Description: 'Returns an integer that is closest to a given argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`nearbyint()`** function returns an integer that is closest to a given floating point argument.

## Syntax

```pseudo
nearbyint(n)
```
The function takes the argument `n` which represents the positive or any non-negative floating point value. If the last decimal value of `n` is 5 or greater than 5 then the function returns an integer value greater than `n`.

### Example

The following example returns the nearby integer of `1.5`:

```cpp
#include <iostream>
#include <cmath>

int main()
{
    double value = 1.50;
    int result;
    result = std::nearbyint(value);

    std::cout << "Nearest value is " << result << "\n";
    // Output: Nearest value is 2
}
```

### Codebyte Example

The following example returns the nearby integer of `2.9`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main()
{
    float value = 2.9;
    int result;
    result = std::nearbyint(value);

    std::cout << "Nearest value is " << result << "\n";
}
```