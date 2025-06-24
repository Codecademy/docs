---
Title: '.front()'
Description: 'Returns a reference to the first character of the string.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.front()`** method returns a reference to the first character of the [`string`](https://www.codecademy.com/resources/docs/cpp/strings). 

This method provides direct access to the initial character without requiring index notation, making code more readable when working with string beginnings. The method is equivalent to accessing the character at position 0, but offers a more expressive way to indicate intent when specifically targeting the first character.

## Syntax

```pseudo
stringName.front()
```

- `stringName` is the string whose first character is being accessed.

The method returns a reference to the first character, which can be used for both reading and modifying the character. Note that calling `.front()` on an empty string results in undefined behavior.

## Parameters
- `none` 

## Example

This example demonstrates accessing and modifying the first character of a string:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string message = "hello world";
  
  // Access the first character
  std::cout << "First character: " << message.front() << std::endl;
  
  // Modify the first character
  message.front() = 'H';
  std::cout << "Modified string: " << message << std::endl;
  
  // Compare with index access
  std::string another = "programming";
  std::cout << "Using front(): " << another.front() << std::endl;
  std::cout << "Using index [0]: " << another[0] << std::endl;
  
  return 0;
}
```

The output will be:

```shell
First character: h
Modified string: Hello world
Using front(): p
Using index [0]: p
```

## Codebyte Example

The following example shows practical usage of `.front()` for string processing and validation:

```codebyte/cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
  std::vector<std::string> words = {"apple", "banana", "cherry", "date"};
  
  std::cout << "Words starting with vowels:" << std::endl;
  
  for (const auto& word : words) {
    if (!word.empty()) {
      char first = word.front();
      if (first == 'a' || first == 'e' || first == 'i' || 
          first == 'o' || first == 'u') {
        std::cout << "- " << word << std::endl;
      }
    }
  }
  
  // Capitalize first letters
  std::cout << "\nCapitalized words:" << std::endl;
  for (auto& word : words) {
    if (!word.empty() && word.front() >= 'a' && word.front() <= 'z') {
      word.front() = word.front() - 'a' + 'A';
    }
    std::cout << word << " ";
  }
  std::cout << std::endl;
  
  return 0;
}
```