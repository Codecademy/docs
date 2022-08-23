---
Title: 'strtok()'
Description: 'Breaks a string into a series of tokens using a list of delimiters.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
  - 'Arrays'
  - 'Functions'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`strtok()`** function breaks a string into a series of tokens using a list of delimiters.

## Syntax

```pseudo
char *token = strtok(string, delimiters);

token = strtok(NULL, delimiters);
```

The `strtok()` function splits the `string` parameter into tokens based on one or more `delimiters`, and returns the [pointer](https://www.codecademy.com/resources/docs/c/pointers) to the first token.

Subsequent calls to `strtok()`, with `string` set to `NULL`, return a pointer to the next tokenized string. When there are no tokens left to retrieve, a `NULL` pointer is returned.

## Example

The following example splits up a comma-delimited list and prints out the result:

```c
#include <string.h>
#include <stdio.h>

int main () {
   char str[] = "Comma,Delimited,List";
   const char s[] = ",";
   char *token = strtok(str, s);

   while( token != NULL ) {
      printf( "%s\n", token );
      token = strtok(NULL, s);
   }
}
```

This results in the following output:

```shell
Comma
Delimited
List
```
