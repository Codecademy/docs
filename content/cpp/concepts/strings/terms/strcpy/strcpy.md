---
Title: 'strcpy()'
Description: 'Copies one string into another and returns the newly copied string.'
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

The **`strcpy()`** string function copies one string into another string and returns the newly copied string.

> **Note:** `strcpy()` only works on C-style strings, not C++ style strings. So it only works with strings of type `char str[];` not `string str;`

## Syntax

```pseudo
#include <string.h>

strcpy(string1, string2);
```

At the top of the file, the `<string.h>` header file needs to be included. The `strcpy()` copies the C-style `string2` parameter into `string1`, including the terminating `null` character (`'\0'`).

## Codebyte Example

The following example prints a string, copies a second string over it, and prints it again:

```codebyte/cpp
#include <iostream>
using namespace std;
#include<string.h>

int main() {
  char str1[40] = "Hello World!";
  char str2[40] = "Copied String.";

  cout << str1 << "\n";
  strcpy(str1, str2);
  cout << str1 << "\n";

  return 0;
}
```
