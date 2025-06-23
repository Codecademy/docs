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

In C++, **`.insert()`** is a method used to insert characters, substrings, or ranges into a string at a specified position. Unlike `.append()` which only adds to the end, `.insert()` provides flexibility in placing new data anywhere within the string.

## Syntax

```cpp
str.insert(pos, str2);               // Inserts entire string at position 'pos'
str.insert(pos, str2, subpos, len);  // Inserts substring from str2 at 'pos'
str.insert(pos, n, char);            // Inserts character 'char' n times at 'pos'
str.insert(iter, first, last);       // Inserts a range using iterators at position 'iter'
```

**Parameters:**

- `pos`: Index in the string where insertion starts.
- `str2`: The string or substring to insert.
- `subpos`: Starting index in `str2` for substring insertion.
- `len`: Number of characters from `str2` to insert.
- `n`: Number of times to insert character `char`.
- `char`: A character to insert repeatedly.
- `iter`: Iterator position in the string.
- `first`, `last`: Range of iterators indicating characters to insert.

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

  // Inserts 7 characters from index 7 of str2 at position 7 in str1
  str1.insert(7, str2, 7, 7);

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
