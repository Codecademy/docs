---
Title: 'strchr()'
Description: 'Finds the first occurrence of a given character.'
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

The `strchr()` string function finds the first occurrence of a given character.

## Syntax

The **string.h** header file needs to be included at the top of the file:

```c
#include <string.h>
```

`strchr()` function searches `string` for the character `'c'`:

```c
strchr(string, 'c')
```

## Example

Using `strchr()` function to find a specific character in the alphabet:

```c
#include <stdio.h>
#include <string.h>

int main() {
  char alphabet[] = "abcdefghijklmnopqrstuvwxyz";
  printf("%s", strchr(alphabet, 's'));
  return 0;
}
```

The output would be:

```shell
stuvwxyz
```
