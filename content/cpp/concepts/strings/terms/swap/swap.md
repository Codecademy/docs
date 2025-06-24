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

After calling the `.swap()` method, the contents of `string1` and `string2` are exchanged: `string1` now holds the original contents of `string2`, and `string2` holds the original contents of `string1`.

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
