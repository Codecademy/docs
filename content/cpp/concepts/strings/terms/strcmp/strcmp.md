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
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`strcmp()`** function compares two strings and returns an integer value.

> **Note:** `strcpy()` only works on [C-style strings](https://www.codecademy.com/resources/docs/c/strings) of type `char str[];`, not C++ style strings of type `string str;`.

## Syntax

```pseudo
#include <string.h>

strcmp(string1, string2);
```

At the top of the file, the `<string.h>` header file needs to be included. The `strcmp()` function compares C-style strings `string1` and `string2` and returns an integer value.

- If the two strings are the same, it returns 0.
- If `string1` > `string2`, it returns a positive value.
- If `string1` < `string2` or `string1` is a substring of `string2`, it returns a negative value.

## Codebyte Example

The following performs comparisons on three strings and prints out information about their order:

```codebyte/cpp
#include <iostream>
using namespace std;
#include<string.h>

int main() {
  char str1[40] = "Microsoft";
  char str2[40] = "Apple";
  char str3[40] = "Linux";

  if (strcmp(str1, str2) < 0) {
    cout << str1 << " comes before " << str2 << ". \n";
  }
  else if (strcmp(str1, str2) > 0) {
    cout << str2 << " comes before " << str1 << ". \n";
  }
  else {
    cout << str1 << " is equal to " << str2 << ". \n";
  }

  if (strcmp(str1, str3) < 0) {
    cout << str1 << " comes before " << str3 << ". \n";
  }
  else if (strcmp(str1, str3) > 0) {
    cout << str3 << " comes before " << str1 << ". \n";
  }
  else {
    cout << str1 << " is equal to " << str3 << ". \n";
  }

  return 0;
}
```
