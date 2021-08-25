---
Title: "strcpy()"
Description: "Copies one string into another."
Subjects:
  - "Code Foundations"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Data Types"
  - "Characters"
  - "Arrays"
  - "Functions"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

The `strcpy()` string function copies one string into another string.

## Syntax

```c
strcpy(string1, string2)
```

Copies `string2` into `string1`.

The following declaration and initialization create a string consisting of the word "Hello". To hold the null character at the end of the array, the size of the character array containing the string is one more than the number of characters in the word "Hello."

## Example

```c
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
```

If you follow the rule of array initialization then you can write the above statement as follows −

```c
char greeting[] = "Hello";
```

Though if a variable does not yet need a value assigned to it, this can be ommitted and assigned later.

```c
int num;
num = 5;
```

Variables are statically typed in C, meaning a variable can only ever have one type. A variable declared as an `int` can only hold an integer value.

## Memory

So here's the memory presentation:

```shell
Character |   'H'    'e'    'l'    'l'    'o'   '\0'
Index     |    0      1      2      3      4      5
Address   |  23451  23452  23453  23454  23455  23456
```

## Displaying a Variable

To display a variable in C, the `printf()` function from the **stdio.h** header file can be used along with the `%` character to format values, followed by the variable name.

## Example

```c
#include <stdio.h>

int main () {
   char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
   printf("Greeting message: %s\n", greeting);

   return 0;
}
```

The output would be:

```shell
5
a
```
