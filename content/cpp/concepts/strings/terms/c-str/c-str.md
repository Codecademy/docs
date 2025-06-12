---
title: 'c_str()'
slug: 'cpp-c-str'
contentType: 'term'
description: 'Returns a pointer to a null-terminated C-style string representation of a C++ std::string.'
---

`c_str()` is a member function of the C++ `std::string` class. It returns a pointer to a constant, null-terminated character array (C-style string) representing the contents of the string object. This is useful when you need to pass a C++ string to functions that expect a C-style string (`const char*`).

## Syntax

```cpp
const char* str.c_str() const noexcept;
```

- `str` is a `std::string` object.
- Returns a pointer to a constant null-terminated character array.
- The pointer remains valid as long as the string object is not modified or destroyed.

## Example

```cpp
#include <iostream>
#include <string>

int main() {
    std::string cppString = "Hello, world!";
    const char* cString = cppString.c_str();
    std::cout << cString << std::endl;
    return 0;
}
```

This example creates a `std::string`, obtains its C-style string representation using `c_str()`, and prints it.

## Codebyte

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
    std::string greeting = "Codecademy Docs";
    const char* c_greeting = greeting.c_str();
    std::cout << "C++ string: " << greeting << std::endl;
    std::cout << "C-style string: " << c_greeting << std::endl;
    return 0;
}
```
