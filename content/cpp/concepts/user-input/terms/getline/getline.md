---
Title: 'getline()'
Description: 'Converts user input into a string delimited by a character, if specified, and then stores it into a variable.'
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

In C++, the **`getline()`** function converts user input into a character-delimited string and stores them in a variable. If a delimiting character is not specified, then the entire input will be stored.

## Syntax

The `getline()` function is defined in the `<string>` header.

```pseudo
#include <string>

getline(cin, string, delim)
```

- `getline()` is part of the `<string>` header, so it is included at the top of the file.
- `cin` is the object in the stream, which would be the user input.
- `string` refers to the variable the user input is set to.
- `delim` refers to a character that the user's input is stored up to.

Although not recommended in C++, since it deals with [C strings](https://www.codecademy.com/resources/docs/c/strings), `getline()` can be called on the `cin` object as a member function like this:

```pseudo
cin.getline(string, length, delim)
```

- `length` is the expected size of the character array.

## Example 1

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string my_str;

  cout << "Enter a pet name: ";
  getline(cin, my_str);

  cout << "My pet's name is " + my_str + "!";
}
```

This will output:

```shell
Enter a pet name:
```

If the user then inputs the string `"Nimbus"`, this will be the final output:

```shell
My pet's name is Nimbus!
```

## Example 2

In the example above, the user will be prompted to enter a pet name. Then, the `getline()` function will take the input and set it to the `my_str` variable. `my_str` can then be used in the following operations.

The same example of `getline()`, but called upon the `cin` object, would look like this:

```cpp
#include <iostream>

using namespace std;

int main() {
  char my_char_array[20];

  cout << "Enter a pet name: ";
  // Input: Nimbus
  cin.getline(my_char_array, 20);

  cout << "My pet's name is " << my_char_array << "!";
  // Output: My pet's name is Nimbus!
}
```

## Example 3

Sometimes we want to read a whole line from the input/file possibly containing spaces/tabs. In such cases, `getline()` comes handy.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string myString;

  cout << "Enter your input: \n";
  // Input: Codeacademy is awesome
  getline(cin, myString);

  cout << myString << "!";
  // Output: Codeacademy is awesome!
}
```
In the above example, using a traditional `cin >> myString` will result in `Codeacademy` only.
To avoid this, we've to use `getline(cin, myString)`.
