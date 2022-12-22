---
Title: '.substr()'
Description: 'Returns a portion of a string specified by a starting position and length.'
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

The **`.substr()`** method returns a portion of a string specified by a starting position and length.

## Syntax

```pseudo
baseString.substr(pos,len)
```

- `baseString` is the string whose substring is being returned.
- `pos` is the zero-based starting position of the substring. An exception is thrown if `pos` is greater than [`.size()`](https://www.codecademy.com/resources/docs/cpp/strings/size).
- `len` is the number of characters to return in the substring. If `len` is greater than the number of characters after `pos`, the whole remainder of the string is returned.

## Codebyte Example

The following example prints out a section of a longer string.

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string base = "this is a test string.";

  std::cout << base.substr(10,4) << '\n';

  return 0;
}
```
