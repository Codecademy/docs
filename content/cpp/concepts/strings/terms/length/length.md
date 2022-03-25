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

The `.length()` method finds the length of the string it is called on, in terms of bytes. This is the same functionality as the [`.size()`](https://www.codecademy.com/resources/docs/python/strings/size) method.

## Syntax

```pseudo
stringName.length()
```

## Codebyte Example

In the example below, `.length()` is called on the string variable, `snack`:

```codebyte/cpp
#include <iostream>
#include <string>

int main(){
  std::string snack = "applesauce";
  std::cout << snack.length();
}
```
