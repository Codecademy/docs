---
Title: 'remquo()'
Description: 'Returns the remainder of two integer values, and stores an integer value with the sign and approximate magnitude of the quotient in a parameter.'
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

The **`remquo()`** function returns the remainder of two integer values, and stores an integer value with the sign and approximate magnitude of the quotient in a parameter.

## Syntax

```pseudo
remquo(numerator, denominator, int* quotient)
```

The [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the return value will either be a `double`, `float`, or `long double`. Combinations of these types will return a `double`. The parameter `quotient` must always be an `int` pointer.

The `remquo()` function calculates the floating-point remainder `f` of `numerator / denominator` such that `numerator = n * denominator + f*`, where n is an integer, `f` has the same sign as `numerator`, and the absolute value of `f` is less than the absolute value of `denominator`.

## Example

The following example uses the `remquo()` function to calculate the remainders and quotients of multiple values:

```cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int q;
    double x = 12.5, y = 2.2;

    double result = remquo(x, y, &q);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    cout << "Quotient of " << x << "/" << y << " = " << q << endl << endl;

    x = -12.5;
    result = remquo(x, y, &q);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    cout << "Quotient of " << x << "/" << y << " = " << q << endl << endl;

    y = 0;
    result = remquo(x, y, &q);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    cout << "Quotient of " << x << "/" << y << " = " << q << endl << endl;

    return 0;
}
```

This produces the following output:

```shell
Remainder of 12.5/2.2 = -0.7
Quotient of 12.5/2.2 = 6

Remainder of -12.5/2.2 = 0.7
Quotient of -12.5/2.2 = -6

Remainder of -12.5/0 = -nan
Quotient of -12.5/0 = 0
```

## Codebyte Example

The following example is runnable and uses the `remquo()` function to return the remainder and quotient of `12.5 / 10`:

```codebyte/cpp
#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int q;
    double x = 12.5;
    int y = 10;

    double result = remquo(x, y, &q);
    cout << "Remainder of " << x << "/" << y << " = " << result << endl;
    cout << "Quotient of " << x << "/" << y << " = " << q << endl;

    return 0;
}
```
