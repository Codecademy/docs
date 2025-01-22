---
Title: 'Inclusion Guards'
Description: 'Prevents multiple inclusions of the same header file in C++ using inclusion guards.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Error Handling'
  - 'Compilation'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Inclusion guards**, also known as **header guards**, are a common technique used in C++ to prevent multiple inclusions of the same header file. Without inclusion guards, including the same header file multiple times in a project could lead to redefinition errors and increased compilation time.

These guards use preprocessor directives to ensure a header file is included only once during compilation.

## Syntax

```cpp
#ifndef MY_HEADER_H
#define MY_HEADER_H

// Header file content goes here

#endif // MY_HEADER_H
```

## Example

Let's say there is a header file named **example.h**:

```cpp
// example.h
#ifndef EXAMPLE_H  // Checks if EXAMPLE_H has been defined
#define EXAMPLE_H  // Defines it and includes the header content

void myFunction();  // Declare the function

#endif // EXAMPLE_H
```

And your source file is **main.cpp**:

```cpp
// main.cpp
#include "example.h"
#include "example.h" // This will be ignored due to the inclusion guard

int main() {
    myFunction();
    return 0;
}
```

The inclusion guard in **example.h** ensures that the content of the header file is only included once, even if it is included multiple times (as shown with the duplicate `#include "example.h"` in `main.cpp`). This avoids issues like redefinition errors or increased compilation time.
