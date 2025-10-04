---
Title: 'Strings'
Description: 'Strings in C++ are objects that represent sequences of characters.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Characters'
  - 'Data Types'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Strings** are objects that represent sequences of characters. In C++, there are two ways to create strings:

- Using the `string` class from the Standard Template Library (STL)
- Using C-style character arrays

## `string` Class

The standard `string` class provides robust support for string operations in C++. To use this class, include the `<string>` header:

```cpp
#include <string>

std::string greeting = "Hello, World!";
std::string empty_string = "";
std::string user_name = "@developer123";
std::string message = "Good morning!";
```

### Creating and Initializing Strings

A string can be created and initialized in several ways:

```cpp
#include <iostream>
#include <string>

int main() {
  // Different ways to create strings
  std::string s1;                      // Empty string
  std::string s2 = "C++";              // Initialization with string literal
  std::string s3("Programming");       // Using constructor
  std::string s4(s2);                  // Copy of another string
  std::string s5(5, 'a');              // String with 5 'a' characters: "aaaaa"

  std::cout << "s1: " << s1 << std::endl;
  std::cout << "s2: " << s2 << std::endl;
  std::cout << "s3: " << s3 << std::endl;
  std::cout << "s4: " << s4 << std::endl;
  std::cout << "s5: " << s5 << std::endl;

  return 0;
}
```

### Accessing and Modifying Strings

Individual characters inside a string can be accessed and modified using indices, just like [arrays](https://www.codecademy.com/resources/docs/cpp/arrays):

```cpp
#include <iostream>
#include <string>

int main() {
  std::string text = "Hello";

  // Accessing characters
  char first = text[0];    // 'H'
  char last = text[4];     // 'o'

  // Modifying characters
  text[0] = 'J';           // Changes "Hello" to "Jello"

  std::cout << "Modified string: " << text << std::endl;

  return 0;
}
```

### Basic String Operations

The `string` class provides several useful methods for string manipulation:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string text = "C++ Programming";

  // String length/size
  std::cout << "Length: " << text.length() << std::endl;       // 15
  std::cout << "Size: " << text.size() << std::endl;           // 15 (same as length)

  // Check if empty
  std::cout << "Is empty: " << text.empty() << std::endl;      // 0 (false)

  // Substring extraction
  std::string sub = text.substr(0, 3);                         // "C++"
  std::cout << "Substring: " << sub << std::endl;

  // Find position of a substring
  size_t position = text.find("Programming");
  if (position != std::string::npos) {
    std::cout << "Found at position: " << position << std::endl; // 4
  }

  return 0;
}
```

### String Concatenation

Strings can be joined with the `+` operator or the `.append()` method:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string first_name = "Ada";
  std::string last_name = "Lovelace";

  // Using + operator
  std::string full_name = first_name + " " + last_name;

  // Using .append() method
  std::string greeting = "Hello, ";
  greeting.append(first_name);

  // Using += operator
  std::string message = "Welcome ";
  message += "to C++!";

  std::cout << full_name << std::endl;
  std::cout << greeting << std::endl;
  std::cout << message << std::endl;

  return 0;
}
```

This example results in:

```shell
Ada Lovelace
Hello, Ada
Welcome to C++!
```

## C-Style Character Strings

C-style strings are character arrays that originated from the [C](https://www.codecademy.com/resources/docs/c) language and continue to be supported in C++. In C, a string represents an array of characters, terminated by a `null` character `'\0'`.

```cpp
char message[] = "Howdy";
```

The memory representation of this C-style string looks like this:

```shell
Character |   'H'    'o'    'w'    'd'    'y'   '\0'
Index     |    0      1      2      3      4      5
Address   |  23451  23452  23453  23454  23455  23456
```

### Creating C-Style Strings

C-style strings can be created in several ways:

```cpp
#include <iostream>

int main() {
  // Different ways to create C-style strings
  char str1[] = "C++";                           // Automatic size calculation
  char str2[4] = "C++";                          // Explicitly specify size (including null character)
  char str3[] = {'C', '+', '+', '\0'};           // Character by character with null terminator
  char str4[100] = "Programming";                // With extra space allocation

  std::cout << "str1: " << str1 << std::endl;
  std::cout << "str2: " << str2 << std::endl;
  std::cout << "str3: " << str3 << std::endl;
  std::cout << "str4: " << str4 << std::endl;

  return 0;
}
```

### Working with C-Style Strings

C-style strings require the `<cstring>` header for string manipulation operations:

```cpp
#include <iostream>
#include <cstring>

int main() {
  char str1[20] = "Hello";
  char str2[20] = "World";
  char result[40];

  // String length
  std::cout << "Length of str1: " << strlen(str1) << std::endl;

  // String copy
  strcpy(result, str1);
  std::cout << "After strcpy: " << result << std::endl;

  // String concatenation
  strcat(result, " ");
  strcat(result, str2);
  std::cout << "Concatenated string: " << result << std::endl;

  // String comparison
  int comparison = strcmp(str1, str2);
  if (comparison < 0) {
    std::cout << "str1 is less than str2" << std::endl;
  } else if (comparison > 0) {
    std::cout << "str1 is greater than str2" << std::endl;
  } else {
    std::cout << "str1 equals str2" << std::endl;
  }

  return 0;
}
```

The output looks like this:

```shell
Length of str1: 5
After strcpy: Hello
Concatenated string: Hello World
str1 is less than str2
```

## `string` Class vs. C-Style Strings

Here are some key differences between the two string types:

| Feature           | `string` Class            | C-Style Strings           |
| ----------------- | ------------------------- | ------------------------- |
| Memory management | Automatic                 | Manual                    |
| Bounds checking   | Yes                       | No                        |
| Size              | Dynamic (can grow/shrink) | Fixed at declaration      |
| Null termination  | Handled automatically     | Must be managed manually  |
| Concatenation     | Using `+` operator        | Using `strcat()`          |
| Comparison        | Using `==`, `!=`, etc.    | Using `strcmp()`          |
| Character access  | Using `[]` or `at()`      | Using `[]`                |
| Required header   | `<string>`                | `<cstring>`               |
| Memory safety     | Safe                      | Prone to buffer overflows |

> **Note:** The `string` class is generally preferred in modern C++ for its safety and convenience features.

## Converting Between String Types

You can convert between `std::string` and C-style strings:

```cpp
#include <iostream>
#include <string>
#include <cstring>

int main() {
  // C-style string to std::string
  char cstr[] = "Hello C++";
  std::string str1(cstr);

  // std::string to C-style string
  std::string str2 = "C++ Programming";
  const char* cstr2 = str2.c_str();  // Get a C-style string pointer

  std::cout << "str1: " << str1 << std::endl;
  std::cout << "cstr2: " << cstr2 << std::endl;

  return 0;
}
```

## Frequently Asked Questions

### 1. What's the difference between `length()` and `size()` for strings?

In C++, the [`length()`](https://www.codecademy.com/resources/docs/cpp/strings/length) and [`size()`](https://www.codecademy.com/resources/docs/cpp/strings/size) methods of the `string` class are functionally identical. Both return the number of characters in the string. The dual naming is historical - `size()` is consistent with other STL containers, while `length()` is more intuitive for strings.

```cpp
std::string text = "Hello";
std::cout << text.length(); // Returns 5
std::cout << text.size();   // Also returns 5
```

### 2. Why should I use string class instead of C-style strings?

The `string` class provides several advantages over C-style strings:

- **Memory management:** Automatically handles allocation and deallocation
- **Safety:** Protects against buffer overflows
- **Functionality:** Provides built-in methods for common operations
- **Flexibility:** Can dynamically grow and shrink as needed

C-style strings require manual memory management and are prone to errors like buffer overflows.

### 3. How do I convert a number to a string in C++?

The simplest way to convert a number to a string in modern C++ is to use the `std::to_string()` function:

For example: `std::to_string(42)` returns the string `"42"`.

For converting a string to a number, you can use functions like `std::stoi()` (string to int), `std::stof()` (string to float), etc. For example, `std::stoi("42")` returns the integer `42`.
