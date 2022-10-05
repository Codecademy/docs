---
Title: 'Basic Output'
Description: 'In the C language the console output is managed by the library stdio.h which has to be included.
Thanks to that you can use function like putchar() that target the C console.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Print'
  - 'Output'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In the C language, **basic console output** is achieved using functions from the "standard input output" header file (**stdio.h**).

## Header File

C itself has no ability to output any information. In order to so, the **stdio.h** header file must be included in the program, which commonly happens at the top of the file:

```c
#include <stdio.h>
```

Once this is done, the functions included in it can be used.

## Format Specifiers

As seen above, the string given contains a `%` character followed by a letter to indicate what type of value will be formatted there. Some common ones are shown below:

| Format Specifier | Type    |
| ---------------- | ------- |
| `%c`             | char    |
| `%d`             | double  |
| `%i`             | integer |
| `%p`             | pointer |
| `%s`             | string  |

## Decimal Precision

When using format specifiers for decimal numbers, the number of decimal places to be printed can be specified.

To print 2 digits after the decimal place, `0.2f` can be used in `printf()`:

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
