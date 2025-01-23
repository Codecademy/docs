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

The **`scanf()`** (scan formatted string) function reads a user input and then converts that input into a value that it assigns to a variable.

## Syntax

```pseudo
scanf(string, &variable, &variable2, ..., &variableN)
```

The `scanf()` function takes a format specifier string as input, along with a variable for each format specifier in the string. The format specifier string acts as a template that the function will use to convert the user input into values for the variables.

For a short list of format specifiers you can use in the input string, see the 'Format Specifiers' table in the [`printf`](https://www.codecademy.com/resources/docs/c/basic-output/printf) documentation.

> **Note:** `scanf()` does not have any intrinsic validation of the user input. This can cause errors if the user input does not match the format specifiers in the string.

## Examples

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

If the user typed in `4B`, the output would be:

```shell
Your favorite number is: 4 and your favorite letter is: B
```
