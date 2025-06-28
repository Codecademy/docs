---
Title: '.assign()'
Description: 'Assigns new content to a string, replacing its current contents with specified characters, substrings, or values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Assignment'
  - 'Characters'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.assign()`** method replaces the contents of a string with new characters, allowing precise control over what the string holds. It is commonly used in scenarios such as loops, input parsing, or reusing string variables to optimize memory and performance.

## Syntax

```pseudo
string.assign(str);                             // Assign entire string
string.assign(str, subpos, sublen);             // Assign substring from another string
string.assign("text");                          // Assign from a C-style null-terminated string
string.assign("text", n);                       // Assign first n characters from a C-string
string.assign(n, ch);                           // Assign n copies of character ch
string.assign(first, last);                     // Assign characters from iterator range
```

**Parameters:**

- `str`: Another `std::string` whose contents will be assigned to the string.
- `subpos`: The starting index in `str` from which to begin copying.
- `sublen`: The number of characters to copy from `str` starting at `subpos`.
- `s`: A C-style null-terminated string (`const char*`) to assign from.
- `n`:
  - With C-string: Number of characters to copy from `s`.
  - With character: Number of times to repeat the character `ch`.
- `ch`: A character to be repeated `n` times.
- `first`: Input iterator pointing to the beginning of the range to assign.
- `last`: Input iterator pointing one past the end of the range.

**Return value:**

- `string&`: Reference to the modified string (`*this`) for method chaining

## Example 1: Assigning a String to Another

In this example, `.assign()` is called on the `greeting` string to copy the value from the `name` string:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string greeting = "Hello";
  std::string name = "World";

  // Replaces the contents of greeting with name
  greeting.assign(name);

  std::cout << greeting;
  return 0;
}
```

The output of this code is:

```shell
World
```

## Example 2: Assigning a Substring

In this example, `.assign()` is called on the `result` string to copy a portion of the `sentence` string:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string sentence = "Codecademy Docs";
  std::string result;

  // Assigns the first 9 characters of sentence to result
  result.assign(sentence, 0, 9);

  std::cout << result;
  return 0;
}
```

The output of this code is:

```shell
Codecadem
```

## Example 3: Assigning Using Iterators

In this example, `.assign()` is used to copy a set of characters from the `source` string into the `result` string using iterators:

```cpp
#include <iostream>
#include <iostream>
#include <string>

int main() {
  std::string source = "Version Control";
  std::string result;

  // Assigns characters from index 0 to 7 (exclusive)
  result.assign(source.begin(), source.begin() + 7);

  std::cout << result;
  return 0;
}
```

The output of this code is:

```shell
Version
```

## Codebyte Example: Assigning Repeated Characters

In this codebyte example, `.assign()` is used to assign the `line` string with five asterisk characters:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string line;

  // Assigns five '*' characters to line
  line.assign(5, '*');

  std::cout << line;
  return 0;
}
```
