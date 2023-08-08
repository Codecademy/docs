---
Title: 'printf()'
Description: 'Print a string in the console.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Print'
  - 'Functions'
  - 'Console'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`printf()`**, or "print formatted", function can print a string to the console, including variables within the string.

## Syntax

```pseudo
printf(string, value1, value2 ... valueN)
```

The `printf()` function takes a string with variable placeholders, also known as format specifiers.

## Example

```c
#include <stdio.h>

int main(void) {
  printf("%d is a number\n", 5);
  printf("%d is after %d\n", 2, 1);
  return 0;
}
```

The output would be:

```shell
5 is a number
2 is after 1
```

## Format Specifiers

As seen above, the string given contains a `%` character followed by a letter to indicate what type of value will be formatted there. Some common ones are shown below:

| Format Specifier(s) | Type(s)         |
| ------------------- | --------------- |
| `%c`                | char            |
| `%f` or `%g`        | float or double |
| `%d` or `%i`        | int             |
| `%p`                | pointer         |
| `%s`                | string          |

## Decimal Precision

When using format specifiers for decimal numbers, the number of decimal places to be printed can be specified.

For example, to print two digits after the decimal place with `printf()`, `0.2f` can be used:

```c
#include <stdio.h>

int main() {
  float pi = 3.14159;

  // Print 2 digits after the decimal place
  printf("%0.2f", pi);

  return 0;
}
```

The output would be:

```shell
3.14
```
