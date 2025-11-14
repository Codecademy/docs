---
Title: 'isgreater()'
Description: 'Compares two floating-point values and returns true if the first is strictly greater than the second.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
  - 'Comparison'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isgreater()`** function performs a strict greater-than comparison between two floating-point values and returns `true` only if the first argument is greater than the second. Unlike the regular `>` operator, `isgreater()` never raises floating-point exceptions and always returns `false` when either argument is NaN (Not-a-Number).

## Syntax

```
isgreater(x, y)
```
### Parameters
x, y: Arithmetic values (integers or floating-point types).

Integer arguments are promoted to the appropriate floating-point type.

### Return Value
true if x > y and neither argument is NaN.

false otherwise — including if either value is NaN.

### Key Behavior
Quiet comparison: does not raise floating-point exceptions (e.g., FE_INVALID).

isgreater(NaN, y) and isgreater(x, NaN) always return false.

Follows IEEE-754 comparison semantics.

Available through the <cmath> header in C++.

## Example
Use `isgreater()` to check if one number is greater than another:
```
#include <iostream>
#include <cmath>

int main() {
    double x = 10.5;
    double y = 5.2;
    double z = std::nan("1");

    std::cout << std::boolalpha;

    std::cout << "isgreater(x, y): " 
              << std::isgreater(x, y) << std::endl;

    std::cout << "isgreater(x, z): " 
              << std::isgreater(x, z) << " (NaN comparison)" << std::endl;

    return 0;
}
```

### Output
```
isgreater(x, y): true
isgreater(x, z): false (NaN comparison)
```

## Codebyte Example
The following example is runnable and outputs whether one number is greater than another using `isgreater()`:
```
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double a = 7.5;
    double b = 9.3;

    cout << boolalpha;
    cout << "isgreater(a, b): " << isgreater(a, b) << endl;
    cout << "isgreater(b, a): " << isgreater(b, a) << endl;

    return 0;
}
```
