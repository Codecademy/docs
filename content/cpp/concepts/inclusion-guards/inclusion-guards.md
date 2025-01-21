---
Title: 'Inclusion Guards'
Description: 'Used in C++ to prevent multiple inclusions of the same header file.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Error Handling'
  - 'Compilation'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
  - 'paths/computer-science'
---

**Inclusion guards**, also known as **header guards**, are a common technique used in C++ to prevent multiple inclusions of the same header file. Without inclusion guards, including the same header file multiple times in a project could lead to redefinition errors and increased compilation time.

These guards use preprocessor directives to ensure a header file is included only once during compilation.

These guards use preprocessor directives to ensure a header file is included only once during compilation.

## Syntax

```cpp
#ifndef MY_HEADER_H
#define MY_HEADER_H

// Your header file content here

#endif // MY_HEADER_H
```

## Example

Let's say you have a header file named example.h:

```cpp
// example.h
#ifndef EXAMPLE_H
#define EXAMPLE_H

myFunction();

#endif // EXAMPLE_H
```

And your source file is main.cpp:

```cpp
// main.cpp
#include "example.h"
#include "example.h" // This will be ignored due to the inclusion guard

int main() {
    myFunction();
    return 0;
}
```
By using inclusion guards, you ensure that example.h is only included once, even if you include it multiple times in different files or within the same file.
