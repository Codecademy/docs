---
Title: 'strlen()'
Description: 'Returns the length of the string without including the terminating character.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

The **`strlen()`** string function returns the length of the string without including the terminating character, `'\n'`.

## Syntax

```pseudo
strlen(string)
```

It takes in the `string` and returns an unsigned short.

## Example

```c
#include <stdio.h>
#include <string.h>

int main() {
  char spell[20] = "Abracadabra";
  printf("Length: %i", strlen(spell));
  return 0;
}
```

The output would be:

```shell
Length: 11
```

Notice how it didn't count the terminating character.
