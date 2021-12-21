---
Title: 'Variables'
Description: 'A variable is a location in computer memory used to store data, usually for use in a program. To declare a variable in C, the type of variable is first included, followed by the name, and the value. pseudo type name = value;  Though if a variable does not yet need a value assigned to it, this can be ommitted and assigned later. c'
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

A variable is a location in computer memory used to store data, usually for use in a program.

## Declaring and Assigning a Variable

To declare a variable in C, the type of variable is first included, followed by the name, and the value.

```pseudo
type name = value;
```

Though if a variable does not yet need a value assigned to it, this can be ommitted and assigned later.

```c
int num;
num = 5;
```

Variables are statically typed in C, meaning a variable can only ever have one type. A variable declared as an `int` can only hold an integer value.

## Displaying a Variable

To display a variable in C, the `printf()` function from the **stdio.h** header file can be used along with the `%` character to format values, followed by the variable name.

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
