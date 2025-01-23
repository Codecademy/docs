---
Title: 'scanf()'
Description: 'Reads a user input and assigns it to a variable.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Input'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`scanf()`** function (short for 'scan formatted') reads user input, interprets it according to the specified format, and assigns the converted value to a variable.

## Syntax

```pseudo
int scanf(const char *format, &variable1, &variable2, ..., &variableN);
```

- `format`: A string containing format specifiers (e.g., `%d`, `%f`, `%s`) that define the type of input expected.
- `&variable1, &variable2, ..., &variableN`: Pointers to variables where the values from the input will be stored. Each pointer corresponds to a format specifier in the `format` string.

For a short list of format specifiers you can use in the input string, see the 'Format Specifiers' table in the [`printf`](https://www.codecademy.com/resources/docs/c/basic-output/printf) documentation.

> **Note:** `scanf()` does not have any intrinsic validation of the user input. This can cause errors if the user input does not match the format specifiers in the string.

## Example 1

In the following example, the format specifier `%d` tells the function to expect an integer, then assigns it to the variable `yourNumber`:

```c
#include <stdio.h>

int main(void) {
  int yourNumber;

  printf("Type your favorite number:");
  scanf("%d", &yourNumber);
  printf("Your favorite number is: %d", yourNumber);
}
```

If the user typed in `3`, the output would be:

```shell
Your favorite number is: 3
```

## Example 2

Here is another example using two variables:

```c
#include <stdio.h>

int main(void) {
  int yourNumber;
  char yourLetter;

  printf("Type your favorite number and letter:");
  scanf("%d%c", &yourNumber, &yourLetter);
  printf("Your favorite number is: %d and your favorite letter is: %c", yourNumber, yourLetter);
}
```

If the user typed in `4Bh`, the output would be:

```shell
Type your favorite number and letter:Your favorite number is: 48 and your favorite letter is: h
```
