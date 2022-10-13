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
The function accepts a `n` parameter that represents a positive or negative floating point value. If the decimal value of `n` is 0.5 or greater, then the function returns an integer value greater than `n`.

### Example

The following example returns the nearby integer of `1.5`:

```codebyte/cpp
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
