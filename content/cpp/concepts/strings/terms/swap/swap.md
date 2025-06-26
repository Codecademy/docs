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

## Example

Let us consider an example where we have 2 strings - `a` and `b` with the following original values before the `a.swap(b)` method is called : 
string a = "apple";
string b = "banana";

After the `a.swap(b)` method is called , the values of strings `a` and `b` are swapped and the strings now hold the following new values :
string a = "banana";
string b = "apple";

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
