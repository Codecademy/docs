---
Title: 'swap()'
Description: 'Swaps the values of two variables.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`swap()`** function swaps the values of two variables. The variables must have the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types).

## Syntax

The `swap()` function takes two parameters using the following syntax:

```pseudo
swap(a, b);
```

## Codebyte Example

The following codebyte exapmle below uses `swap()` on two int variables:

```codebyte/cpp
#include <iostream>
using namespace std;

int main() {
  // Declare variables
  int a = 1, b = 2;

  // Swap the values of a and b
  swap(a, b);

  // Print variable values
  cout << "a: " << a << endl;
  cout << "b: " << b;
}
```