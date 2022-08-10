---
Title: 'strcpy()'
Description: 'Copies one string into another string, and returns the newly copied string'
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

The **`strcpy()`** function copies one string into another string, and returns the newly copied string.

## Syntax

```pseudo
#include <string.h>

strcpy(string1, string2);
```

At the top of the file, the `<string.h>` header file needs to be included. The `strcpy()` copies `string2` parameter into `string1`, including the terminating `null` character (`'\0'`).

## Example

Suppose we have two strings, `pokemon1` and `pokemon2`:

```c
#include <stdio.h>
#include <string.h>

int main() {
  char pokemon1[30] = "Ditto";
  char pokemon2[30] = "Pikachu";

  // This function has copied pokemon2 into pokemon1
  strcpy(pokemon1, pokemon2);

  printf("pokemon1 is now: %s", pokemon1);
  return 0;
}
```

The output would be:

```
Pikachu
```
