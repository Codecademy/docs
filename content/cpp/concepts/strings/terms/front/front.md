---
Title: '.front()'
Description: 'Returns a reference to the first character in a string.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Characters'
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.front()`** method returns a reference to the first character in a [string](https://www.codecademy.com/resources/docs/cpp/strings). The `.front()` method returns a reference to the first character in a string, allowing both access and modification of the character at the front position.

## Syntax

```pseudo
string.front()
```

**Parameters:**

The `.front()` method takes no parameters.

**Return value:**

The `.front()` method returns a reference to the first character of the string.

> **Note:** Calling `.front()` on an empty string results in undefined behavior.

## Example 1: Accessing First Character

This example demonstrates how to access the first character of a string using the `.front()` method:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string greeting = "Hello";

  // Access the first character
  char first = greeting.front();

  std::cout << "First character: " << first << std::endl;

  return 0;
}
```

This example results in the following output:

```shell
First character: H
```

## Example 2: Modifying First Character

This example shows how to modify the first character of a string, which can be useful for text processing tasks like capitalizing sentences:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string sentence = "hello world";

  // Capitalize the first character
  sentence.front() = 'H';

  std::cout << "Modified sentence: " << sentence << std::endl;

  return 0;
}
```

This example results in the following output:

```shell
Modified sentence: Hello world
```

## Codebyte Example: Password Validation

This example demonstrates a practical use case where `.front()` helps validate password requirements by checking the first character:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string password = "P@ssw0rd";

  // Check if password starts with uppercase letter
  if (password.front() >= 'A' && password.front() <= 'Z') {
    std::cout << "Password starts with uppercase: Valid" << std::endl;
  } else {
    std::cout << "Password must start with uppercase letter" << std::endl;
  }

  return 0;
}
```

## Frequently Asked Questions

### 1. What is `front()` in C++?

The `.front()` method is a member function of the `std::string` class that returns a reference to the first character in the string, allowing both read and write access.

### What does `front()` return?

The `.front()` method returns a reference to the first character of the string. This reference can be used to both access and modify the character.

### How to add characters in front of string in C++?

To add characters at the beginning of a string in C++, use the `.insert()` method with position 0, or use the `+` operator to concatenate a character or string before the original string. The `.front()` method only provides access to modify the existing first character, not to insert new ones.
