---
Title: '.c_str()'
Description: 'Returns a pointer to a null-terminated character array that represents the contents of the string.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.c_str()`** method returns a [pointer](https://www.codecademy.com/resources/docs/cpp/pointers) to a null-terminated [array](https://www.codecademy.com/resources/docs/cpp/arrays) of characters, equivalent to the contents of the [string](https://www.codecademy.com/resources/docs/cpp/strings) on which it is called.

The `c_str()` method is commonly used when a C-style string is needed, such as when passing a `std::string` to functions that expect a `const char*`. It's especially useful for interoperability with legacy C libraries or APIs like [`printf()`](https://www.codecademy.com/resources/docs/c/basic-output/printf), `fopen()`, or other system-level functions.

> **Note:** The `.c_str()` method runs in constant time O(1), as it returns a pointer to the internal character array of the std::string.

## Syntax

```pseudo
string.c_str()
```

**Parameters:**

The `.c_str()` method does not take any parameters.

**Return value:**

Returns a `const char*`, which is a pointer to a null-terminated character array that represents the contents of the string.

## Example

This example shows the size of a `std::string` object and a pointer returned by `.c_str()`, along with the actual string length using [`length()`](https://www.codecademy.com/resources/docs/cpp/strings/length) and [`strlen()`](https://www.codecademy.com/resources/docs/c/strings/strlen):

```cpp
#include <string>
#include <iostream>
#include <cstring> // for strlen

int main() {
  std::string str = "Foobar";
  const char* arr = str.c_str();

  std::cout << "Size of 'arr' (pointer): " << sizeof(arr) << " bytes" << std::endl;
  std::cout << "Size of 'str' (std::string object): " << sizeof(str) << " bytes" << std::endl;

  std::cout << "Length of string using str.length(): " << str.length() << std::endl;
  std::cout << "Length of string using strlen(arr): " << strlen(arr) << std::endl;

  return 0;
}
```

The output of this code is:

```shell
Size of 'arr' (pointer): 8 bytes
Size of 'str' (std::string object): 32 bytes
Length of string using str.length(): 6
Length of string using strlen(arr): 6
```

> **Note:** [`sizeof`](https://www.codecademy.com/resources/docs/c/operators/sizeof) gives the size of the variable's type, not the number of characters.

## Codebyte Example

In this example, we have a function `printPointerCharArrToStdOut` that expects a pointer to a character array. The `.c_str()` method is used to convert a `std::string` to a C-style string, allowing it to be passed to the function. The function then outputs each character of the array individually:

```codebyte/cpp
#include <string>
#include <iostream>
#include <cstring> // for strlen

void printPointerCharArrToStdOut(const char* arr) {
  const int size = strlen(arr);
  for (int i = 0; i < size; ++i) {
    std::cout << *(arr + i) << std::endl;
  }
}

int main() {
  std::string str = "StrArray";
  const char* cStr = str.c_str();
  printPointerCharArrToStdOut(cStr);
  return 0;
}
```
