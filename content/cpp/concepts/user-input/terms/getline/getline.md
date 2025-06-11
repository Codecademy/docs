---
Title: 'getline()'
Description: 'Converts user input into a string delimited by a character, if specified, and then stores it into a variable.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Characters'
  - 'Data Types'
  - 'Functions'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`getline()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) converts user input into a character-delimited [string](https://www.codecademy.com/resources/docs/cpp/strings) and stores it into a [variable](https://www.codecademy.com/resources/docs/cpp/variables). If a delimiting character is not specified, then the input is stored until `\n` (newline) is encountered. This function is widely used in reading multi-word user input, processing lines from text [files](https://www.codecademy.com/resources/docs/cpp/files), and parsing structured data such as CSV records or configuration files where input must be read line-by-line.

## Syntax

The `getline()` function is defined in the `<string>` header:

```pseudo
getline(cin, string, delim)
```

**Parameters:**

- `cin`: The [object](https://www.codecademy.com/resources/docs/cpp/objects) in the stream, which would be the user input.
- `string`: Refers to the variable to which the user input is set.
- `delim` (Optional): Refers to a character the user input is stored up to.

Although not recommended in C++, since it deals with [C strings](https://www.codecademy.com/resources/docs/c/strings), `getline()` can be called on the `cin` object as a member function like this:

```pseudo
cin.getline(string, length, delim)
```

**Parameters:**

- `string`: Refers to the variable to which the user input is set.
- `length`: The maximum number of characters to read, including the null terminator.
- `delim` (Optional): Refers to a character the user input is stored up to.

## Example 1: Using `getline()` Without `delim`

This example demonstrates the usage of the `getline()` function without the `delim` parameter:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  // Create a string
  string my_str;

  // Take input from the user
  cout << "Enter a pet name: ";

  // Store the input in the string
  getline(cin, my_str);

  cout << "My pet's name is " + my_str + "!";
}
```

Here is the output if the user input is "Nimbus":

```shell
Enter a pet name: Nimbus
My pet's name is Nimbus!
```

## Example 2: Using `getline()` with `delim`

This example demonstrates the usage of the `getline()` function with the `delim` parameter:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  // Create a string
  string my_str;

  // Take input from the user
  cout << "Enter a pet name: ";

  // Store the input in the string until '\n' (newline) is encountered
  getline(cin, my_str, '\n');

  cout << "My pet's name is " + my_str + "!";
}
```

Here is the output if the user input is "Dora":

```shell
Enter a pet name: Dora
My pet's name is Dora!
```

## Codebyte Example: Using `getline()` on `cin`

This codebyte example applies the `getline()` function on the `cin` object:

```codebyte/cpp
#include <iostream>

using namespace std;

int main() {
  // Create a string
  char my_char_array[20];

  // Take input from the user
  cout << "Enter a pet name: ";

  // Store the input in the string until the character limit (20) is reached
  cin.getline(my_char_array, 20);

  cout << "My pet's name is " << my_char_array << "!";
}
```

## `getline()` vs `cin`

| Feature                      | `getline()`                         | `cin`                                    |
| ---------------------------- | ----------------------------------- | ---------------------------------------- |
| Reads input until            | Newline (`\n`)                      | Whitespace (space, tab, newline)         |
| Captures spaces              | Yes                                 | No                                       |
| Input type                   | Entire line as `std::string`        | Word/token as `std::string`, `int`, etc. |
| Common use cases             | Full names, sentences, file lines   | Single words, numbers, basic input       |
| Header required              | `<string>` and `<iostream>`         | `<iostream>`                             |
| Works with file streams      | Yes                                 | Yes                                      |
| Buffer issues with mixing    | Must use `cin.ignore()` after `cin` | Not affected when used alone             |
| Ease of parsing line-by-line | Excellent                           | Limited                                  |

## Frequently Asked Questions

### 1. Can `getline()` read input from files?

Yes, `getline()` works with any input stream, including file streams (`std::ifstream`).

### 2. Does `getline()` include the newline character (`\n`) in the string?

No, `getline()` stops reading at the newline but does not store it in the string. The result is a clean line without the `\n`.

### 3. Can I use a custom delimiter with `getline()`?

Yes, you can specify a delimiter:

```cpp
std::getline(std::cin, str, ';'); // Stops at semicolon instead of newline
```

This is useful for parsing CSV or semi-colon-separated input.
