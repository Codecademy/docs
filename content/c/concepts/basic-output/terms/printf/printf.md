## Print Formatted with `printf()`

While the `puts()` function can only accept and print a single string, the `printf()` function can print variables within a string. So more flexibility!

The `printf()` function, or "print formatted" function, takes a string with variable placeholders, also known as format specifiers, followed by the values to format in the string.

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
