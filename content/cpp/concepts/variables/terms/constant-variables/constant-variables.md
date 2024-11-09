---
Title: 'Constant Variables'
Description: 'Defines variables in C++ whose values cannot be altered after they are set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Const'
  - 'OOP'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Constant variables** in C++ are variables whose values cannot be altered after they are set. By using the `const` keyword, a variable becomes read-only, preventing accidental modification. Constants are especially useful for defining values that should remain consistent throughout the program, such as mathematical constants (e.g., `PI`) or configuration settings.

## Syntax

```pseudo
const data_type variable_name = value;
```

- `data_type`: The type of the variable.
- `variable_name`: The name of the constant variable.
- `value`: The initial value assigned to the variable. Once set, this value cannot change.

## Example

This example demonstrates how to declare and use a constant variable in C++:

```cpp
#include <iostream>

int main() {
    const int max_attempts = 5;
    std::cout << "Maximum allowed attempts: " << max_attempts << std::endl;

    // Uncommenting the following line would cause a compilation error
    // max_attempts = 10;

    return 0;
}
```

This example results in the following output:

```shell
Maximum allowed attempts: 5
```

In this example, `max_attempts` is declared as a constant integer. Attempting to modify it later in the code would result in a compilation error, ensuring that its value remains consistent.

## Codebyte Example

```codebyte/cpp
#include <iostream>

int main() {
    const float pi = 3.14159;
    std::cout << "The value of pi is: " << pi << std::endl;

    // Uncommenting the following line would cause a compilation error
    // pi = 3.14;

    return 0;
}
```
