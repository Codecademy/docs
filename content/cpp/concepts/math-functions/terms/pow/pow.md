---
Title: 'pow()'
Description: 'Returns the result of the base raised to the power of exponent'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`pow()`** function returns the value of *base*<sup>*exponent*</sup>.

## Syntax

```cpp
pow(base, exponent)
```


## Example

The following example uses the `pow()` function to raise `2` to the power of `2`:

```cpp
#include <iostream>
#include <cmath>

int main(){

    double base = 2;
    double exponent = 2;

    double result = pow(base, exponent);


    std::cout << base << " raised to the power of " << exponent << " equals " << result << ".\n";
    //Output: 2 raised to the power of 2 equals 4.

}
```

## Codebyte Example

The following example is runnable and uses the `pow()` function to raise `3` to the power of `2`:

```codebyte/cpp
#include <iostream>
#include <cmath>

int main(){

    double base = 3;
    double exponent = 2;

    double result = pow(base, exponent);


    std::cout << base << " raised to the power of " << exponent << " equals " << result << ".\n";

}
```
