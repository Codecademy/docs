---
Title: 'strcpy()'
Description: 'Copies one C-style string into another.'
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

The **`strcpy()`** string function copies one C-style string into another string.

> **Note:** `strcpy()` only works on C-style strings, not C++ style strings. So it only works with strings of type `char str[];` not `string str;`

## Syntax

The `string.h` header file needs to be included at the top of the file:

```cpp
#include <string.h>
```

`strcopy()` function copies the C-style string `string2` into C-style string `string1`, including the terminating `null` character (`'\0'`).

```pseudo
strcpy(string1, string2)
```

## Example

The following example prints a string, copies a second string over it, and prints it again:

```cpp
#include <iostream>
using namespace std;
#include<string.h>

int main ()
{
    char str1[40]="Hello World!";
    char str2[40]="Copied String.";

    cout << str1 << "\n";
    strcpy(str1, str2);
    cout << str1 << "\n";

    return 0;
}
```

The output would be:

```shell
Hello World!
Copied String.
```
