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

The `<cmath>` header file defines `atan()` function that returns the inverse tangent of an argument in radians. It takes a single argument (positive, negative, or zero) and returns the output in radians.

## Syntax

```py
atan(n)
```

## Example 1

The following example uses the `atan()` function that returns the inverse tangent of value `0.0`:

```cpp
#include <iostream>
#include <cmath>

int main() {
  double value = 0.0;
  double result;

  result = std::atan(value);

  std::cout << result << " radians" << "\n";
  // Output: 1.5708 radians
}
```
### Example 2

The following example uses the `atan()` function that returns the inverse tangent of value `1.0`:

```cpp
#include <iostream>
#include<cmath>

int main(){
  double value= 1.0, result;
  result= atan(value);

  std::cout << result << " radians" << "\n";
  //Output: 0.785398 radians
}
```