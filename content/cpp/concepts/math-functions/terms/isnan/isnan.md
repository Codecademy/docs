---
Title: 'isnan()'
Description: 'returns non-zero value (true) if value in parameter is a NaN value; and zero (false) otherwise.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`isnan()`**  returns non-zero value (true) if value in parameter is a NaN value; and zero (false) otherwise.

## Syntax

```pseudo
bool isnan(float x);  
bool isnan(double x);  
bool isnan(long double x);  
bool isnan(integral x);
```

## Return Value

```
It returns 1, if x is NAN otherwise 0.
```

## Example

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

## Output

```
value of x is : -nan
isnan(x) : 1 
```
