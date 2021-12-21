---
Title: 'strcpy()'
Description: 'Copies one string into another.'
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

The `strcpy()` string function copies one string into another string.

## Syntax

The **string.h** header file needs to be included at the top of the file:

```c
#include <string.h>
```

`strcopy()` function copies the string `string2` into string `string1`, including the terminating `null` character (`'\0'`).

```c
strcpy(string1, string2)
```

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
