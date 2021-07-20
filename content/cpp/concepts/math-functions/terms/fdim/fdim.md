---
Title: "fdim()"
Subjects:
  - "Computer Science"
Tags:
  - "Functions"
  - "Arithmetic"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns the positive difference between two arguments. 
If the first argument is greater than the second argument `fdim()` returns the first argument minus the second argument, otherwise it returns zero.

## Syntax

```cpp
std:fdim(n)
```

## Example 1

Use `fdim()` to return the positive difference between `8` and `5`:

```cpp
#include <iostream>
#include <cmath> 

int main () {
  double x = 8;
  double y = 5;
  double result1;
  double result2;

  result1 = std::fdim(x,y);
  result2 = std::fdim(y,x);

  std::cout << "fdim(" << x << "," << y << ") = " << result1 << "\n";
  std::cout << "fdim(" << y << "," << x << ") = " << result2 << "\n";
  //Output: fdim(8,5) = 3
  //        fdim(5,8) = 0  
}
```
