---
Title: 'getline()'
Description: 'Converts the user input into a string delimited by a character, if specified, and then stored into a variable.'
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

In C++, the `getline()` function converts the user's input into a character-delimited string and stores them in a variable. If a delimiting character is not specified, then the entire input will be stored.

## Syntax

The `getline()` function is part of the `<string>` header.

```pseudo
#include <string>

getline(cin, string, delim)
```

- `getline()` is part of the `<string>` header, so it is included at the top of the file.
- `cin` is the object in the stream, which would be the user input.
- `string` refers to the variable the user input is set to.
- `delim` refers to a character that the user's input is stored up to.

Although not recommended, `getline()` can be called on the `cin` object as a member function like this:

```pseudo
cin.getline(string, length, delim)
```

- `length` is the expected size of the character array.

## Examples

```cpp
#include <iostream>
// Variables can be declared as strings with the following header.
#include <string>
using namespace std;


int main() {
  string my_str;

  cout << "Enter a pet name: ";
  getline(cin, my_str);

  cout << "My pet's name is " + my_str + "!";
}
```

In the example above the user will be prompted to enter a pet name. Then, the `getline()` function will take the input and set it to the `my_str` variable. `my_str` can then be used and for following operations. If the user inputs a string, `"Nimbus"`, what's printed to the console is `"My pet's name is Nimbus!"`.

The same example of `getline()`, but called upon the `cin` object, would look like this:

```cpp
#include <iostream>
using namespace std;

int main() {
  char my_char_array[20];

  cout << "Enter a pet name: ";
  cin.getline(my_char_array, 20);

  cout << "My pet's name is " << my_char_array << "!;
}
```
