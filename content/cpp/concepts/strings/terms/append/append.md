---
Title: '.append()'
Description: 'Appends characters or strings to the end of an existing string.'
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

In C++, **`.append()`** is a method that concatenates new characters to the end of an existing string without requiring reassignment. It can be used to combine two different strings, append a portion of a string (also known as a substring), or add specific characters to the end of a string.

## Syntax

```pseudo
str.append(str2);               // Appends entire string
str.append(str2, pos, len);     // Appends substring from str2
str.append(n, char);            // Appends character 'char' n times
str.append(first, last);        // Appends range using iterators
```

**Parameters:**

- `str2`: The string to append or extract a substring from.
- `pos`: The starting index in `str2` (used when appending a substring).
- `len`: The number of characters to append from `str2`, starting at `pos`.
- `n`: The number of times to append the character `char`.
- `char`: A character to be appended multiple times.
- `first`, `last`: Iterators defining a range of characters to append.

**Return value:**

Returns a reference to the modified string (`*this`), allowing method chaining.

## Example 1: Appending Two Strings Together

This example takes two separate strings and concatenates them:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main () {
  string stringOne = "Hello ";
  string stringTwo = "World!";

  //Appends stringTwo to the end of stringOne
  stringOne.append(stringTwo);

  cout << stringOne;
  return 0;
}
```

The output produced by this code is:

```shell
Hello World!
```

## Example 2: Appending One Piece of a String to Another

This example takes a portion of one string and adds it to the end of another string:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str1("Straw Hat ");
  string str2("Monkey D. Luffy");

  // Appends 5 characters from index 10 of str2 to str1
  str1.append(str2, 10, 5);

  cout << str1;
  return 0;
}
```

The output produced by this code is:

```shell
Straw Hat Luffy
```

## Codebyte Example: Appending Multiple Characters to a String

This codebyte example takes a specific character and adds it a specific amount of times to the end of a string:

```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str("Codecademy is awesome");

  // Appends 3 occurrences of '!' to the end of str
  str.append(3, '!');

  cout << str;

  return 0;
}
```
