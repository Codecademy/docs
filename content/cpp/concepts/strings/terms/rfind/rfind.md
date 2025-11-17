---
Title: 'rfind()'
Description: 'Searches a string from right to left and returns the last occurrence of a substring or character.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Methods'
  - 'STL'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`rfind()`** function returns the position of the last occurrence of a specified substring or character within a `std::string`. The search proceeds from right to left, and the function returns `std::string::npos` if no match is found.

## Syntax

```pseudo
string_object.rfind(val, pos = npos);
```

**Parameters:**

- `val`: A character or string to search for.
- `pos`: (Optional) The position to start searching backward from. Defaults to `std::string::npos`, meaning the end of the string.

**Return value:**

Returns the index (zero-based) of the last occurrence of val, or `std::string::npos` if no match is found.

## Example 1

In this example, `rfind()` locates the last occurrence of a substring:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string text = "hello world, welcome to the world";

  std::size_t pos = text.rfind("world");
  std::cout << "Last occurrence of 'world': " << pos << "\n";

  return 0;
}
```

The output of this code is:

```shell
Last occurrence of 'world': 28
```

## Example 2

In this example, `rfind()` is used to locate the last occurrence of a character:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string text = "abracadabra";

  std::size_t pos = text.rfind('a');
  std::cout << "Last 'a' found at index: " << pos << "\n";

  return 0;
}
```

The output of this code is:

```shell
Last 'a' found at index: 10
```

## Codebyte Example

In this example, the position of the last occurrence of a character is printed using `rfind()`:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string word = "mississippi";

  std::size_t pos = word.rfind('s');
  std::cout << "Last 's' found at index: " << pos << "\n";

  return 0;
}
```

## Frequently Asked Questions

### 1. What does `rfind` do in C++?

The `rfind()` function searches a string from right to left and returns the index of the last occurrence of a character or substring. If the value is not found, it returns `std::string::npos`. It is useful when the needed match appears multiple times and the last one is required.

### 2. What does `string::find()` do in C++?

The `find()` function searches a string from left to right and returns the index of the first occurrence of a specified character or substring. Like `rfind()`, it returns `std::string::npos` when no match exists.

### 3. What does `string()` do in C++?

Calling `std::string()` constructs an empty string object. It represents a dynamic sequence of characters and supports operations such as insertion, erasure, concatenation, comparison, and searching.
