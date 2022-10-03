## Print Character with `putchar()`

The `putchar()` function, or "put character" function, takes a single `char` as an argument and prints it to the `stdout` file, normally the console.

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
