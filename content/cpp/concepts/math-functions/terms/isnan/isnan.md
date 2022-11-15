---
Title: 'isnan()'
Description: 'Returns a number telling whether a given value is a NaN value.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isnan()`** function returns a number telling whether a given value is a `NaN` value.

## Syntax

```pseudo
isnan(x)
```

The `x` parameter is a floating-point value that can be of type `float`, `double`, `long double`, or `int`. The return value is 1 if `x` is `NaN`. Otherwise, 0 is returned.

## Example

Below code is the example of the `isnan()` function checking if the value of `x` is `NaN` or not.

```cpp
#include <iostream>  
#include<math.h>  
using namespace std;  
int main()  
{  
    float x=0.0/0.0;  
    cout<<"value of x is : "<<x<<'\n';  
    cout<<"isnan(x) : "<<isnan(x);  
    return 0;  
}  
```

This example results in the following output:

```
value of x is : -nan
isnan(x) : 1 
```
