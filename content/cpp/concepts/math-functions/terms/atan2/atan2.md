---
Title: 'atan2()'
Description: 'Returns the inverse tangent of coordinates in radians.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`atan2()`** function returns the inverse tangent of a coordinate (y/x), where y is the y-coordinate value and x is the x-coordinate value.

## Syntax

```pseudo
atan2(y, x)
```

The `y`, `x` parameter can be one of the following [data types](https://www.codecademy.com/resources/docs/java/data-types)

## Example

The following is an example of the `.atan2()` method:

```cpp
#include <iostream>
#include <cmath>

int main() {
    // Declaration of the two parameters
    double x = 10.0, y = 20.0;

    // Output
    std :: cout << atan2(y, x) << std :: endl;

    1.10715
}
```

This will produce the following output:

```shell
1.10715
```
