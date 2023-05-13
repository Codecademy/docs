---
Title: 'Math Functions'
Description: 'C++ has many functions that allows mathematical tasks to be performed on numbers.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

C++ has many functions that allows mathematical tasks to be performed on numbers.

Header `<cmath>` declares a set of functions to compute common mathematical operations and transformations:

```cpp
// Include the cmath library
#include <cmath>

std::cout << sqrt(64);    // Return the square root of 64
std::cout << log(2);      // Return the log of 2
std::cout << round(2.6);  // Round 2.6
```

A list of other popular math functions from the `<cmath>` library can be found in the table below:

## Codebyte Example

The C++ `<cmath>` header file declares a set of functions to perform mathematical operations such as: `sqrt()` to calculate the square root, `log()` to find natural logarithm of a number etc.

```codebyte/cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  cout << "Square root of 25 = ";
   
  // print the square root of 25
  cout << sqrt(25);

  return 0;
}
```