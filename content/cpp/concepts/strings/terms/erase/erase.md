---
Title: '.erase()'
Description: 'Removes characters from a C++ string object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Memory'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.erase()`** method is a built-in member function of the C++ `string` class that removes characters from a string object. It provides several overloaded versions to delete specific characters, ranges of characters, or clear the entire string, effectively shortening the string's length and modifying the original string in place.

## Syntax

The `.erase()` method has three main overloads:

```pseudo
string.erase()
string.erase(pos, len)
string.erase(iterator)
string.erase(first, last)
```

**Parameters:**

- `pos`: Position (index) of the first character to be erased (0-based indexing)
- `len`: Number of characters to erase from the starting position
- `iterator`: Iterator pointing to the character to be removed
- `first`: Iterator pointing to the first character in the range to be erased
- `last`: Iterator pointing to one position past the last character in the range

**Return value:**

Returns an iterator pointing to the character that now occupies the position of the first erased character. If no characters remain after the erased portion, returns `string::end()`.

## Example 1: Character Removal Using `.erase()`

This example demonstrates removing a single character from a specific position in a string:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string text = "Hello World!";

  // Remove the character at index 5 (space character)
  text.erase(5, 1);

  cout << text << endl;

  return 0;
}
```

The output of this code is:

```shell
HelloWorld!
```

The code removes one character starting at position 5, which eliminates the space between "Hello" and "World".

## Example 2: Text Processing Application Using `.erase()`

This example shows how `.erase()` can be used in a real-world text processing scenario to remove unwanted characters from user input:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string userInput = "user@email.com###";

  // Find and remove trailing special characters
  size_t hashPos = userInput.find('#');
  if (hashPos != string::npos) {
    // Erase everything from the first '#' to the end
    userInput.erase(hashPos);
  }

  cout << "Cleaned email: " << userInput << endl;

  return 0;
}
```

The output of this code is:

```shell
Cleaned email: user@email.com
```

This example demonstrates cleaning user input by removing unwanted trailing characters, which is common in data validation and preprocessing applications.

## Codebyte Example: String Formatting Tool

This example shows using `.erase()` with iterators to remove specific words from a sentence, useful for content filtering or text formatting applications:

```codebyte/cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string sentence = "This is a very long sentence";

  // Find the word "very " and remove it
  size_t pos = sentence.find("very ");
  if (pos != string::npos) {
    // Remove "very " (5 characters including space)
    sentence.erase(pos, 5);
  }

  cout << "Modified sentence: " << sentence << endl;

  // Clear the entire string using erase()
  sentence.erase();
  cout << "String length after clearing: " << sentence.length() << endl;

  return 0;
}
```

This example shows both selective word removal and complete string clearing, demonstrating the versatility of `.erase()` in text manipulation applications.

## Frequently Asked Questions

### 1. How do I clear a string in C++?

Use the `.erase()` method without any parameters to clear the entire string:

```cpp
string text = "Hello World";
text.erase(); // Clears the entire string
```

Alternatively, you can use `.clear()` method which is more explicit for this purpose.

### 2. How to erase space in string in C++?

To remove all spaces from a string, you can use `.erase()` in combination with algorithms:

```cpp
#include <algorithm>
#include <string>

using namespace std;

string text = "Hello World Example";
text.erase(remove(text.begin(), text.end(), ' '), text.end());
// Result: "HelloWorldExample"
```

### 3. What happens if I use an invalid index with `.erase()`?

If you provide an index that exceeds the string length, `.erase()` throws a `out_of_range` exception. Always ensure the position is within valid bounds (0 to `string.length()-1`) before calling `.erase()`.
