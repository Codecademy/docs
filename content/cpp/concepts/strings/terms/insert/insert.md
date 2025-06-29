---
Title: '.insert()'
Description: 'Inserts characters or strings at a specified position within an existing string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Concatenation'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, **`.insert()`** is a method used to insert characters, substrings, or ranges into a string at a specified position. Unlike [`.append()`](https://www.codecademy.com/resources/docs/cpp/strings/append), which only adds content to the end, `.insert()` allows placing new data at any point within the string. It is commonly used in formatting output, inserting delimiters, modifying user input, or dynamically building strings during parsing and text processing tasks.

## Syntax

```pseudo
string.insert(pos, str);
string.insert(pos, str, subpos, sublen);
string.insert(pos, n, char);
string.insert(iterator, char);
string.insert(iterator, n, char);
template<class InputIterator>
string.insert(iterator, InputIterator first, InputIterator last);
```

**Parameters:**

- `pos`: The index position in the string where the insertion begins.
- `str`: The string or character array to insert.
- `subpos`: The starting position in `str` for partial insertion.
- `sublen`: The number of characters to insert from `str` starting at `subpos`.
- `n`: The number of times the character should be inserted.
- `char`: The character to be inserted.
- `iterator`: An iterator pointing to the insertion position within the string.
- `first`, `last`: A range of iterators defining the characters to insert.

**Return value:**

Returns a reference to the modified string (`*this`), enabling method chaining.

## Example 1: Inserting a Substring

This example demonstrates inserting part of one string into another at a specific index:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main () {
  string str1 = "Hello World!";
  string str2 = "Amazing ";

  // Inserts "Amazing " at index 6 in str1
  str1.insert(6, str2);

  cout << str1;
  return 0;
}
```

The output produced by this code is:

```shell
Hello Amazing World!
```

## Example 2: Inserting a Portion of a String

This example takes a portion of one string and inserts it into another string at a specific position:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str1 = "C++ is great!";
  string str2 = "really awesome and ";

  // Inserts 8 characters starting from index 7 of str2 into str1 at position 7
  str1.insert(7, str2, 7, 8);

  cout << str1;
  return 0;
}
```

The output produced by this code is:

```shell
C++ is awesome great!
```

## Codebyte Example: Inserting Multiple Characters

This codebyte demonstrates inserting multiple characters at a specific position in a string:

```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str = "C++ is fun";

  // Insert three '*' characters at index 5
  str.insert(5, 3, '*');

  cout << str;

  return 0;
}
```
