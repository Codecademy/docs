---
Title: '.size()'
Description: 'Returns the size of the string it is called on.'
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

The `.size()` method finds the size of the string it is called on, in terms of bytes. The [`.length()`](https://www.codecademy.com/resources/docs/python/strings/length) method functions in the same way and can be used in place of `.size()`.

## Syntax

```pseudo
stringName.size();
```

## Codebyte Example

In the example below, `.size()` is called on the `bird` string:

```codebyte/cpp
#include <iostream>
#include <string>

int main(){
  std::string bird = "Penguins";
  std::cout << bird.size();
}
```
