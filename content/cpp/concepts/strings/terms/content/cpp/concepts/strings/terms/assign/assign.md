---
Title: '.assign()'
Description: 'Replaces the contents of a C++ string with new characters or strings.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Assignment'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c++'
  - 'paths/computer-science'
---

**`.assign()`** is a method used to **replace the contents of a C++ string** with new data. Unlike `.append()`, which adds to the end of a string, `.assign()` **overwrites** the current content.

This method is useful when:
- You want to fully replace a string with a different one.
- You need to copy a **substring**, specific **number of characters**, or even **characters from an iterator range**.

---

## Example 1: Assigning one string to another

This example takes one string and replaces the contents of another string with it.

### Parameters
- `str2`: A secondary string whose value will replace the original string.

### Syntax
- `stringName.assign(str2);`

```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string greeting = "Hello!";
  string newText = "Welcome to Codecademy";

  // Replaces greeting with the contents of newText
  greeting.assign(newText);

  cout << greeting;  // Output: Welcome to Codecademy
  return 0;
}
```

## Example 2: Assigning a substring from another string

This example replaces the contents of a string with a specific portion of another string.

### Parameters
- `str2`: The source string.
- `pos`: The starting index in the source string.
- `len`: The number of characters to copy.

### Syntax
- `stringName.assign(str2, pos, len);`

```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string sentence = "Learning C++ is powerful!";
  string result;

  // Assigns 9 characters from index 9 of sentence ("C++ is po")
  result.assign(sentence, 9, 9);

  cout << result;  // Output: C++ is po
  return 0;
}
```
## Example 3: Assigning a number of characters

This example creates a string by repeating a single character multiple times.

### Parameters
- `n`: The number of times to repeat the character.
- `c`:The character to be repeated.
  
### Syntax
- `stringName.assign(n, c);`

```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string excitement;

  // Assign 5 exclamation marks to the string
  excitement.assign(5, '!');

  cout << excitement;  // Output: !!!!!
  return 0;
}
```
## Example 4: Assigning from a range using iterators

This example uses iterators to assign a specific range of characters from another string.

### Parameters
- `first`: Iterator pointing to the first character to copy.
- `last`: Iterator pointing to the character after the last one to copy.
  
### Syntax
- `stringName.assign(first, last);`

```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string phrase = "I love programming!";
  string partial;

  // Assign characters from phrase[7] to phrase[18]
  partial.assign(phrase.begin() + 7, phrase.begin() + 18);

  cout << partial;  // Output: programming
  return 0;
}
```



