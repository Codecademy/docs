---
Title: "strlen()"
Description: "Returns the length of the string without including terminating character."
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

The `strlen()` string function returns the length of the string without including terminating character `'\n'`.

## Syntax

```c
strlen(string)
```

The following declaration and initialization create a string consisting of the word "Hello". To hold the null character at the end of the array, the size of the character array containing the string is one more than the number of characters in the word "Hello."

## Example

```c
#include <stdio.h>
#include <string.h>

int main() {
  char str1[20] = "BeginnersBook";
  printf("Length of string str1: %d", strlen(str1));
  return 0;
}
```
