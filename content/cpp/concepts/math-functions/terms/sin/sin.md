---
Title: 'sin()'
Description: 'Returns the sine of an angle given in radians in the range [-1,1].'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Returns the sine of an angle (argument) given in radians in the range [-1,1].

## Syntax

```cpp
std::sin(n)
```

The argument `n` is an angle given in radians.

## Example 

The following example illustrates the `sin()` function:

```cpp
#include<iostream>  
#include<math.h>  
using namespace std;  
int main()  
{  
  double degree = 60;  
  //convert degree to radian
  double radian = degree*3.14/180;  
  cout<<"Sine of an angle is : "<<sin(radian);  
  return 0;  
}  
```
This results in the following output:

```cpp
Sine of an angle is : 0.86576   
```
