---
Title: 'nullptr'
Description: 'Represents a null pointer in C++, ensuring type safety and indicating that a pointer does not point to any valid memory location.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Memory'
  - 'Pointers'
  - 'Programming'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`nullptr`** keyword in C++ represents a null pointer, ensuring type safety and clarity in pointer operations. Introduced in C++11, it replaces the traditional `NULL` [macro](https://www.codecademy.com/resources/docs/cpp/macros) and eliminates ambiguity in comparisons and [function overloads](https://www.codecademy.com/resources/docs/cpp/overloading) involving pointers.

## Syntax

```pseudo
std::nullptr_t variable_name = nullptr;
```

- `variable_name`: The name of the pointer [variable](https://www.codecademy.com/resources/docs/cpp/variables) initialized with `nullptr`.

The above operation assigns a null value to a pointer, ensuring it does not point to any valid memory address.

## Example

This example initializes a pointer with `nullptr` and then checks its value:

```cpp
#include <iostream>

int main() {
  int* ptr = nullptr; // Initialize the pointer to nullptr

  if (ptr == nullptr) {
    std::cout << "The pointer does not point to any memory location." << std::endl;
  }

  return 0;
}
```

This example results in the following output:

```shell
The pointer does not point to any memory location.
```

In this example, `nullptr` ensures the pointer is safely initialized and easily checked, reducing the risk of undefined behavior from uninitialized pointers.
