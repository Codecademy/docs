---
Title: 'typedef'
Description: 'Defines a new name for an existing data type in C to improve code readability and maintainability.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Alias'
  - 'Data Types'
  - 'Variables'
  - 'Keywords'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`typedef`** keyword in `C` is used to create a new name, for the existing data type. It is mostly used in simplifying complicated data types. This makes it easier to understand and maintain codes. `typedef` does not create a new type but assigns a new name to the existing type.

## Syntax

Here's the basic syntax for `typedef`:

```pseudo
typedef existing_data_type new_data_type;
```

- `existing_type`: The data type to assign a new name to.
- `new_name`: The new name for the existing type.

## Example

Here’s a simple example demonstrating the use of `typedef` to create a new name for an existing data type in `C`:

```c
#include <stdio.h>
// Using typedef to create a new name for int
typedef int Integer;

int main() {
    Integer age = 25;  // Integer is now an alias for int
    printf("Age: %d\n", age);
    return 0;
}
```

In this example, `Integer` is created as a new name (alias) for the `int` data type, making the code easier to read and maintain:

```shell
Age: 25
```
