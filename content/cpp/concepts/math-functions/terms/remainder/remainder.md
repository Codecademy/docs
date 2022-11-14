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

The **remainder()** function returns the IEEE floating-point remainder resulting from the division of the arguments provided.

## Syntax

```pseudo
remainder(numerator, denominator)
```

- the function returns remainder = `numerator` - `n` \* `denominator`
- `n` is the result of `numerator` / `denominator` rounded to the nearest integral value
- halfway cases are rounded toward the even number
- if remainder is zero, it will have the same sign as `numerator`
- two floats will return a float, two longs will return a long, and other combinations will return a double

## Example

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main ()
{
  cout << "Remainder of 33.2 / 13 is " << remainder(33.2, 13) << endl;
  cout << "Remainder of 9/ 2 is " << remainder(9, 2) << endl;
  return 0;
}
```

This produces the following output:

```shell
Remainder of 33.2 / 13 is -5.8
Remainder of 9/ 2 is 1
```

## Codebyte Example

The following example is runnable and produces the remainder of 7.3 / 2

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main ()
{
  cout << "Remainder of 7.3 / 2 is " << remainder(33.2, 13) << endl;
  return 0;
}
```

This example produces a result of -0.7 as 7.3/2 = 3.65, which rounded to the nearest integral value is 4. Thus, remainder = 7.3 - 4\*2 = -0.7.
