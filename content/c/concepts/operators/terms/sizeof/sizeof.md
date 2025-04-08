---
Title: 'sizeof()'
Description: 'Determines the memory size (in bytes) of a given data type or variable and returns it as an integer.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Operators'
  - 'Data Types'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In C, the **`sizeof()`** operator returns an integer representing the memory size of a [data type](https://www.codecademy.com/resources/docs/c/data-types) or [variable](https://www.codecademy.com/resources/docs/c/variables) in bytes.

## Syntax

```pseudo
sizeof(input)
```

- `input`: The data type or variable whose memory size is to be calculated.

## Example

The following example demonstrates the usage of the `sizeof()` operator:

```c
#include <stdio.h>

int main() {
  // Calculate the memory size of the 'int' data type
  int res = sizeof(int);

  // Print the result
  printf("Size of int: %d bytes\n", res);

  return 0;
}
```

The above code produces the following output:

```shell
Size of int: 4 bytes
```
