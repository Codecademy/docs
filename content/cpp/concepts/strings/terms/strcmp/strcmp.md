---
Title: 'strcmp()'
Description: 'Compares two C-style strings.'
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

The **`strcmp()`** string function compares two C-style strings and returns an integer value.

> **Note:** `strcpy()` only works on C-style strings, not C++ style strings. So it only works with strings of type `char str[];` not `string str;`

## Syntax

The `string.h` header file needs to be included at the top of the file:

```cpp
#include <string.h>
```

The `strcmp()` function compares C-style strings `string1` and `string2` and returns an integer value.

```cpp
strcmp(string1, string2)
```

- If the two strings are the same, it returns 0.
- If `string1` > `string2`, it returns a positive value.
- If `string1` < `string2` or `string1` is a substring of `string2`, it returns a negative value.

## Example

The following performs comparisons on three strings and prints out information about their order.

```cpp
#include <iostream>
using namespace std;
#include<string.h>

int main ()
{
    char str1[40]="Microsoft";
    char str2[40]="Apple";
    char str3[40]="Linux";

    if (strcmp(str1,str2) < 0) {
        cout << str1 << " comes before " << str2 << ". \n";
    } else if (strcmp(str1,str2) > 0) {
        cout << str2 << " comes before " << str1 << ". \n";
    } else {
        cout << str1 << " is equal to " << str2 << ". \n";
    }

    if (strcmp(str1,str3) < 0) {
        cout << str1 << " comes before " << str3 << ". \n";
    } else if (strcmp(str1,str3) > 0) {
        cout << str3 << " comes before " << str1 << ". \n";
    } else {
        cout << str1 << " is equal to " << str3 << ". \n";
    }

    return 0;
}
```

This produces the following output:

```shell
Apple comes before Microsoft.
Linux comes before Microsoft.
```
