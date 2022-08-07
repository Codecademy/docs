---
Title: 'strtok()'
Description: 'Breaks a string into a series of tokens using a delimiter.'
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

The **`strtok()`** function breaks a C string into a series of tokens using a delimiter.

## Syntax

```pseudo
char *token = strtok(string, delimiter);
```

The `strtok()` function splits the C string `string` into tokens on the C string `delimiter` and returns the pointer to the first token. Subsequent calls to strtok with `string` = `NULL` will return subsequent tokens. It returns a `NULL` pointer when there are no more tokens to retrieve.

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

The above example results in the following output:

```shell
Comma
Delimited
List
```
