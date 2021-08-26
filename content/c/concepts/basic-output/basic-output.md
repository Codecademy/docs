---
Title: "Basic Output"
Subjects:
  - "Code Foundations"
  - "Computer Science"
Tags:
  - "Print"
  - "Output"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

In the C language, basic console output is achieved using functions from the "standard input output" header file (**stdio.h**).

## Header File

C itself has no ability to output any information. In order to so, the **stdio.h** header file must be included in the program, which typically happens at the top of the file:

```c
#include <stdio.h>
```

Once this is done, the functions included in it can be used.

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

## Print String with `puts()`

The `puts()` function, or "put string" function, takes a string as an argument and prints it to the `stdout` file, followed by a newline character.

```c
#include <stdio.h>

int main(void) {
  puts("Hello World!");
  return 0;
}
```

The output would be

```shell
Hello World!
```

## Print Formatted with `printf()`

The `puts()` function can only accept and print a single string argument, which is why there is the `printf()` function.

The `printf()` function, or "print formatted" function, takes a string with variable placeholders, also known as format specifiers, followed by the values to format in the string. This offers a lot more flexibility because it can print variable(s) within a string.

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

| Format Specifier | Type |
| --- | --- |
| `%c` | char |
| `%d` | double |
| `%i` | integer |
| `%p` | pointer |
| `%s` | string |
