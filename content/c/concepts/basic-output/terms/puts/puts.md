---
Title: 'puts()'
Description: 'Print a string in the console.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'String'
  - 'Console'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`puts()`**, or "put string", function prints a [string](https://www.codecademy.com/resources/docs/c/strings) to `stdout`, normally the console, followed by a newline character.

## Syntax

```pseudo
puts(str)
```

The `puts()` function takes a `str` argument and prints it, adding a newline character at the end of it.

## Example

```c
#include <stdio.h>

int main(void) {
  puts("Hello World!");
  return 0;
}
```

The output would be:

```shell
Hello World!
```
