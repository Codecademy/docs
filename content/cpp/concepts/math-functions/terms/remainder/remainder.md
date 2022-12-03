---
Title: 'remainder()'
Description: 'Returns the floating-point remainder of numerator/denominator (rounded to the nearest number)'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

The **remainder()** function returns the floating-point remainder resulting from the division of the arguments provided.

## Syntax

```pseudo
remainder(numerator, denominator)
```

The [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the return value will either be a `double`, `float`, or `long`. Combinations of these types will return a `double`.

The remainder is `numerator - n \* denominator`, where `n` is the result of `numerator / denominator` rounded to the nearest integral value.
- If `n` is a halfway case, it is rounded toward the nearest even number (e.g., 2.5 becomes 2, 5.5 becomes 6).
- If the return value is zero, it will have the same sign as `numerator`.
- If `denominator` is zero, either zero will be returned or a domain error will be thrown (depending on the C++ implementation being used).

## Example

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main () {
  cout << "Remainder of 33.2 / 13 is " << remainder(33.2, 13) << endl;
  cout << "Remainder of 9 / 2 is " << remainder(9, 2) << endl;
  return 0;
}
```

This produces the following output:

```shell
Remainder of 33.2 / 13 is -5.8
Remainder of 9 / 2 is 1
```

## Codebyte Example

The following example is runnable and produces the remainder of 7.3 / 2

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main () {
  cout << "Remainder of 7.3 / 2 is " << remainder(7.3, 2) << endl;
  return 0;
}
```

This example produces a result of -0.7 as 7.3/2 = 3.65, which rounded to the nearest integral value is 4. Thus, remainder = 7.3 - 4\*2 = -0.7.
