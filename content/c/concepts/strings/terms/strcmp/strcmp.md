---
Title: 'strcmp()'
Description: 'Compares two strings and returns an integer value.'
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

The **`strcmp()`** function compares two strings and returns an integer value.

## Syntax

```pseudo
#include <string.h>

strcmp(string1, string2);
```

At the top of the file, the `<string.h>` header file needs to be included. The `strcmp()` function compares strings `string1` and `string2` and returns an integer value.

- If the two strings are the same, return 0.
- If `string1` > `string2`, return positive value.
- If `string1` < `string2` or `string1` is a substring of `string2`, return negative value.

## Example

```c
#include <stdio.h>
#include <string.h>

int main() {
  char address1[20] = "575 Broadway";
  char address2[20] = "576 Broadway";

  if (strcmp(address1, address2) == 0) {
    printf("Address 1 and address 2 are equal.");
  }
  else {
    printf("Address 1 and address 2 are different.");
  }
  return 0;
}
```
