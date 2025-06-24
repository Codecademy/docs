---
Title: '.swap()'
Description: 'Exchanges the contents of two strings.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.swap()`** method for strings is used to exchange the contents of two strings efficiently.

## Syntax

```pseudo
string1.swap(string2);
```

The `string1` and `string2` contents are swapped after using this method i.e. `string1` contains the content stored in `string2` and `string2` contains the content stored in `string1` after the swap.

## Codebyte Example

In the example below, `.swap()` is called on the `place1` and `place2` strings:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {

    std::string place1 = "Los Angeles";
    std::string place2 = "New York";

    std::cout << "Before swap:\n";
    std::cout << "Place 1 : " << place1 << "\n";
    std::cout << "Place 2 : " << place2 << "\n";
  
    place1.swap(place2);

    std::cout << "After swap:\n";
    std::cout << "Place 1 : " << place1 << "\n";
    std::cout << "Place 2 : " << place2 << "\n";

    return 0;
}
```
