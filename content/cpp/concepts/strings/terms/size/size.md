---
Title: '.size()'
Description: 'Returns the size of the string it is called on.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Characters'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.size()`** method returns the size of a given string in terms of bytes. It functions just like the [`.length()`](https://www.codecademy.com/resources/docs/cpp/strings/length) method, but `.size()` is there to follow the consistency of other standard library containers (e.g., [maps](https://www.codecademy.com/resources/docs/cpp/maps) and [vectors](https://www.codecademy.com/resources/docs/cpp/vectors)).

## Syntax

```pseudo
string.size();
```

The `string` must be defined with `std::string` prior to using with the `.size()` method.

## Codebyte Example

In the example below, `.size()` is called on the `bird` string:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string bird = "Penguins";
  std::cout << bird.size();
}
```
