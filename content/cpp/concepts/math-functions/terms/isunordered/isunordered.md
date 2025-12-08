---
Title: 'isunordered()'
Description: 'Checks whether either of two floating-point values is NaN, returning true if the comparison between them is unordered.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isunordered()`** function returns `true` if either of the two floating-point values is `NaN`, meaning the comparison is unordered because no meaningful relational comparison (such as `<`, `>`, or `==`) can be made.

## Syntax

```pseudo
isunordered(a, b)
```

**Parameters:**

- `a`: A floating-point value.
- `b`: A floating-point value.

Both arguments may be `float`, `double`, `long double`, or mixed arithmetic types (due to overloads).

**Return value:**

- Returns `true` if either `a` or `b` is `NaN`, which makes the comparison unordered (no meaningful `<`, `>`, or `==` relationship exists).
- Returns `false` otherwise.

## Example

In this example several value pairs are tested with `isunordered()` to demonstrate when comparisons involving NaN are unordered:

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
  cout << (isunordered(3.0, NAN)?"true":"false") << endl;
  cout << (isunordered(NAN, 3.0)?"true":"false") << endl;
  cout << (isunordered(3.0, 4.0)?"true":"false") << endl;
}
```

The output of this code is:

```shell
true
true
false
```

## Codebyte Example

In this example a helper function prints whether two doubles can be compared or if their comparison is unordered because of `NaN` involvement:

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

void checkNaN(double a, double b) {
  if (isunordered(a, b))
    cout << a << " is NOT comparable with " << b << endl;
  else
    cout << a << " is comparable with " << b << endl;
}

int main()
{
  double nan = NAN; // a NaN (Not a Number) value
  double pi = 3.14; // a regular double number
  double c = 2.99792458e8; // a regular double number

  checkNaN(nan, nan);
  checkNaN(nan, pi);
  checkNaN(c, nan);
  checkNaN(c, pi);
}
```
