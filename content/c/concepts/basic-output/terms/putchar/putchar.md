---
Title: 'putchar()'
Description: 'Print a char in the console.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Char'
  - 'Console'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`putchar()`**, or "put character", function prints a single character to `stdout` (normally the console).

## Syntax

```pseudo
putchar(char)
```

The **`putchar()`** takes a single `char` as an argument and prints it.

## Example

```c
#include <stdio.h>

int main(void) {
  putchar('a');
  return 0;
}
```

The output would be:

```shell
a
```
