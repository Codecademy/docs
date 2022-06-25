---
Title: 'Macros'
Description: 'A macro is a label defined in the source code that is replaced by its value by the preprocessor before compilation.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Command Line'
  - 'Developer Tools'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **macro** is a label defined in the source code that is replaced by its value by the [preprocessor](https://www.codecademy.com/resources/docs/c/preprocessors) before compilation. Macros are initialized with the `#define` preprocessor command and can be undefined with the `#undef` command.

There are two basic types of macros, object-like macros and function-like macros.

## Object-like Macros

These macros are simply replaced by their value in the source code before compilation. These are typically used to define constants to be used in the code. Note that macro definitions are not followed by a semicolon.

### Example

In the following example `PI` is defined as an object-like macro.

```c
#include <stdio.h>
#define PI 3.1416

int main() {
  float radius = 3;
  float area;
  area = PI * radius * radius;
  printf("Area is: %f",area);
  return 0;
}
```

This example outputs the following:

```shell
Area is: 28.274401
```

## Function-like Macros

These macros behave like functions, in that they take arguments that are used in the replaced code. Note that in defining a function-like macro, there cannot be a space between the macro name and the opening parenthesis.

### Example

In the following example `AREA` is defined as a function-like macro. Note that other macros can be used in defining a subsequent macro. The inner macro is replaced by its value before the outer macro is replaced.

```c
#include <stdio.h>
#define PI 3.1416
#define AREA(r) r * r * PI

int main() {
  float radius = 5;
  float result;
  result = AREA(radius);
  printf("Area is: %f",result);
  return 0;
}
```

This example outputs the following:

```shell
Area is: 78.540001
```

## Predefined Macros

C has a number of predefined macros, here's a list of the most prominent ones:

- `__DATE__`:	Current date formatted as MMM DD YYYY.
- `__TIME__`:	Current time formatted as HH:MM:SS.
- `__FILE__`:	Current filename.
- `__LINE__`:	Current line number.

### Example

The following example uses the above predefined macros:

```c
#include <stdio.h>
int main() {

char file[] = __FILE__;
char date[] = __DATE__;
char time[] = __TIME__;
int line = __LINE__;

printf("File name: %s\n", file);
printf("Date: %s\n", date);
printf("Time: %s\n", time);
printf("Line number: %d\n", line);
}
```

The output resembles the following:

```shell
File name: main.c
Date: Jun 25 2022
Time: 14:01:56
Line number: 15
```


