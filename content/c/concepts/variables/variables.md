---
Title: 'Variables'
Description: 'A variable is a location in computer memory used to store data.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **variable** is a location in computer memory used to store data, usually for use in a program.

## Syntax

```pseudo
type name = value;
```

When declaring a variable in C, the `type` of variable goes first, followed by the name, and then the value.

But if a variable does not yet need a value assigned to it, this can be omitted and assigned later.

```pseudo
type name;
name = value;
```

Variables in C are static and can only have one type (e.g., an `int` variable can only hold an integer value).

## Example

To display a variable in C, the `printf()` function from the **stdio.h** header file can be used along with the `%` character to format values, followed by the variable name:

```c
#include <stdio.h>

int main(void) {
  int number = 5;
  char letter = 'a';

  printf("%d\n", number);
  printf("%c\n", letter);

  return 0;
}
```

The output would be:

```shell
5
a
```
