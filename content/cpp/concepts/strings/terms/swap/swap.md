---
Title: '.swap()'
Description: 'Exchanges the contents of two strings.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.swap()`** method for strings is used to exchange the contents of two strings efficiently. It is commonly used in scenarios like optimizing performance during reordering, implementing the copy-and-swap idiom in custom classes, or quickly clearing a string by swapping it with an empty one.

## Syntax

```pseudo
string1.swap(string2);
```

**Parameters:**

- `string2`: Another `std::string` object whose contents will be swapped with `string1`.

**Return value:**

This method performs the swap in-place and does not return a value.

After calling the `.swap()` method, the contents of `string1` and `string2` are exchanged: `string1` now holds the original contents of `string2`, and `string2` holds the original contents of `string1`.

## Example

In this example, the `.swap()` method is used to exchange the contents of two strings, `a` and `b`:

```py
#include <iostream>
#include <string>

int main() {
  std::string a = "apple";
  std::string b = "banana";

  std::cout << "Before swap:\n";
  std::cout << "a = " << a << "\n";
  std::cout << "b = " << b << "\n";

  // Swap the contents of a and b
  a.swap(b);

  std::cout << "\nAfter swap:\n";
  std::cout << "a = " << a << "\n";
  std::cout << "b = " << b << "\n";

  return 0;
}
```

The output for this will be:

```shell
Before swap:
a = apple
b = banana

After swap:
a = banana
b = apple
```

## Codebyte Example

In this codebyte example, `.swap()` is called on the `place1` and `place2` strings:

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
