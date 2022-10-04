---
Title: 'nearbyint()'
Description: 'Round off the given argument(value) to the nearest integral value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The `cmath` header defines `nearbyint()` function that returns the nearby integral value of a given argument. It takes a single argument as a floating point value and returns the round off value of the argument as an integer.

## Syntax

```py
nearbyint(n)
```

### Example 1

The following example returns the nearby integral value of `1.5`:

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

### Example 2

The following example returns the nearby integral value of the `2.9`:

```cpp
#include <iostream>
#include <cmath>

int main()
{
    float value = 2.9;
    int result;
    result = std::nearbyint(value);

    std::cout << "Nearest value is " << result << "\n";
    // Output: Nearest value is 3
}
```