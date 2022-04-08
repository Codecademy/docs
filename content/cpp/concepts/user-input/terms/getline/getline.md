---
Title: 'getline()'
Description: 'Gets the user input up to a character, if specified, and stores it to a variable.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Strings'
  - 'Characters'
  - 'Data Types'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the `getline()` function gets the user's input up to a character and stores it to a variable. If the character, refered to as the delimiting character, is not specified, then the entire input will be stored.

## Syntax

The `getline()` function is part of the `<string>` header.

```pseudo
#include <string>

getline(cin, string, delim)
```

- `cin` is the object in the stream, which would be the user input.
- `string` refers to the variable the user input is set to.
- `delim` refers to a character that the user's input is stored up to.

Although not recommended, the `getline()` member function can be called on the `cin` object like this:

```pseudo
cin.getline(string, length, delim)
```

- `length` is the expected length of the character array.

## Example

```cpp
#include <iostream>
// Variables can be declared as strings with the following header.
#include <string>

int main() {
  std::string my_str;

  std::cout << "Enter a pet name:";
  std::getline(std::cin, my_str);

  std::cout << "My pet's name is " + my_str + "!";
}
```

In the example above the user will be prompted to enter a pet name. Then, the `getline()` function will take the input and set it to the `my_str` variable. `my_str` can then be used and for following operations. If the user inputs a string, `"Nimbus"`, what's printed to the console is `"My pet's name is Nimbus!"`.
