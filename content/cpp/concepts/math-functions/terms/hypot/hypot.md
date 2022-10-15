---
Title: 'hypot()'
Description: 'Returns the square root of sum of squares of arguments passed.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **hypot()** function returns the square root of sum of square of arguments passed.

## Syntax

```cpp
 hypot(float x, float y)
```

The `hypot()` function finds the hypotenuse, the longest side of a right angled triangle. The parameters `x` and `y` are the lengths of the other two sides.

## Example

The following example uses the `hypot()` function to find the hypotanuse of a right angled triangle with base and perpendicular as `9` & `10`:

```cpp
#include <cmath>
#include <iostream>
using namespace std;
int main()
{
    double x = 9, y = 10, res;
    res = hypot(x, y);
  
    cout << res << endl;
    return 0;
    This results in the following output: 13.4536
}
```

## Codebyte Example

The following example is runnable and returns the square root of sum of squares of `4.525252` & `5.767676`:

```codebyte/cpp
#include <cmath>
#include <iostream>
using namespace std;
int main()
{
    long double a, b, result;
    a = 4.525252;
    b = 5.767676;
  
    result = hypot(a, b);
    cout << result;
    return 0;
}
```
