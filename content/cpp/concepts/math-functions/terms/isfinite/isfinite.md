---
Title: 'isfinite()'
Description: 'Returns whether or not the argument is a number.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Arithmetic'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The function **`isfinite()`** is used to determine if the supplied argument is a finite number. A finite number is as any [real](https://en.wikipedia.org/wiki/Real_number]) number.

The function returns `1` if the number is finite and `0` otherwise.

Examples of real numbers (`isfinite()` will return `1`):

- 727
- -8
- 8.16
- -2.7
- $\pi$
- Euler's number (_e_)

Examples of non-real numbers (`isfinite()` will return `0`):

- $\sqrt{-1}$ (_i_)
- $\infty$

A mathematical operation can sometimes attempt to divide by zero or take the square root of a negative number causing a program to crash. To prevent the program from crashing, `isfinite()` can be used to catch these errors and respond accordingly.

## Syntax

```cpp
isfinite(n) // n is a number
```

## Example

The function `isfinite()` is defined in the `math` library, so we must include it.

```cpp
#include<iostream>
#include<math.h>

using namespace std;

int main(){
    cout << "isfinite(3): " << isfinite(3) << endl;
    cout << "isfinite(5/2): " << isfinite(5/2) << endl;
    cout << "isfinite(8.0/0.0): " << isfinite(8.0/0.0) << endl;
    cout << "isfinite(sqrt(2)): " << isfinite(sqrt(2)) << endl;
    cout << "isfinite(sqrt(-1)): " << isfinite(sqrt(-1)) << endl;
    return 0;
}
```

This code will output:

```pseudo
isfinite(3): 1
isfinite(5/2): 1
isfinite(8.0/0.0): 0
isfinite(sqrt(2)): 1
isfinite(sqrt(-1)): 0
```
