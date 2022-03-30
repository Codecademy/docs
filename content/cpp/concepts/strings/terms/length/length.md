---
Title: '.length()'
Description: 'Returns the length of the string it is called on.'
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

The `.length()` method returns the length of the given string in terms of bytes. It functions exactly like the [.size()](https://www.codecademy.com/resources/docs/python/strings/size) method but follows a more intuitive terminology, i.e., "the length of a string" rather than "the size of a string." However, both methods yield the same results.

## Syntax

```pseudo
stringName.length();
```

## Codebyte Example

In the example below, `.length()` is called on the `snack` string:

```codebyte/cpp
#include <iostream>
#include <string>

int main(){
  std::string snack = "applesauce";
  std::cout << snack.length();
}
```
