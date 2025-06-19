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

The **`.assign()`** method replaces the contents of a string with new characters, allowing precise control over what the string holds. It is commonly used in scenarios such as loops, input parsing, or reusing string variables to optimize memory and performance.

---

# Syntax

```pseudo
string.assign(str);                 // Assigns another string
string.assign(str, pos, len);      // Assigns a substring
string.assign(first, last);        // Assigns from iterator range
string.assign(n, c);               // Assigns n copies of a character
```
The `string` must be defined with `std::string` prior to using with the `.assign()` method.

## Codebyte Example

### Example 1: Assigning a string to another

In the example below, .assign() is called on the `greeting` string to copy the value from the `name` string:

```codebyte/cpp
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

### Example 2: Assigning a substring

In the example below,  `.assign() ` is called on the  `result ` string to copy a portion of the  `sentence ` string:

```codebyte/cpp
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

### Example 3: Assigning using iterators

In the example below,  `.assign() ` is used to copy a range of characters from the `source ` string into the  `result ` string using iterators:

```codebyte/cpp
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

### Example 4: Assigning repeated characters

In the example below, `.assign()` is used to assign the `line` string with five asterisk characters:

```codebyte/cpp
##include <iostream>
#include <string>

int main() {
  std::string line;

  // Assigns five '*' characters to line
  line.assign(5, '*');

  std::cout << line;
  return 0;
}
```
