---
Title: '.c_str()'
Description: 'Returns a pointer to an array of characters represent the string on which the method was called.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Calling the **`c_str()`** method on a [string](https://www.codecademy.com/resources/docs/cpp/strings) returns a [pointer](https://www.codecademy.com/resources/docs/cpp/pointers) to an [array](https://www.codecademy.com/resources/docs/cpp/arrays) of characters, equivalent to the characters in the string.

> **Note:** `c_str()` runs in constant time O(1).

## Syntax
```pseudo
std::string string = "Hello";
const char *pString = example_string.c_str();
```

## Examples
The following example shows the size taken to store the characters `Foobar` when stored as a string and as an array.
```cpp
#include <string>
#include <iostream>

int main() {
    std::string str = "Foobar";
    const char* arr = str.c_str();
    std::cout << "Size of \"" << arr << "\" as Array: " << sizeof(arr) << std::endl;
    std::cout << "Size of \"" << str << "\" as String: " << sizeof(str) << std::endl;
    return 0;
}
```


## Codebyte Example
In this example we have a function `printPointerCharArrToStdOut` that expects a pointer to an array. The `c_str()` method can be used to obtain the correct parameter type for `printPointerCharArrToStdOut` from a given string, which then outputs the array character-by-character.  
```codebyte/cpp
#include <string>
#include <iostream>

void printPointerCharArrToStdOut(const char* arr) {
    const int size = sizeof(arr);
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
