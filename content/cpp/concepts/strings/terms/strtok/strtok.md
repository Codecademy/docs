---
Title: 'strtok()'
Description: 'Breaks a C-style string into a series of tokens using a list of delimiters.'
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
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`strtok()`** function breaks a C-style string into a series of tokens using a list of delimiters.

> **Note:** `strtok()` only works on C-style strings, not C++ style strings. So it only works with strings of type `char str[];` not `string str;`

## Syntax

```pseudo
char *token = strtok(string, delimiter);
```

The `strtok()` function splits the C-style string `string` into tokens on occurrences of any character in the C-style string `delimiters` and returns the pointer to the first token. Subsequent calls to strtok with `string` = `NULL` will return subsequent tokens. It returns a `NULL` pointer when there are no more tokens to retrieve.

## Example

The following example splits up a comma-delimited list and prints out the result:

```cpp
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
