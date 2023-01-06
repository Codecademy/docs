---
Title: '.replace()'
Description: 'Returns a string with a portion replaced by another string.'
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

The **`.replace()`** method returns a string with a portion replaced by another string, or a portion of another string.

## Syntax

```pseudo
baseString.replace(pos, len, str, subpos, sublen)
```

- `baseString` is the string whose contents are being replaced.
- `pos` is the zero-based starting position of the replacement.
- `len` is the number of characters to be replaced.
- `str` is the replacement string.
- `subpos` is optional, and is the zero-based starting point of the replacement characters used from `str`.
- `sublen` is optional, and is the number of replacement characters used from `str`.

If `subpos` and `sublen` aren't specified, the entire `str` is used for the replacement.

## Codebyte Example

The following example replaces a portion of a base string with a portion of another string:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string base="this is a test string.";
  std::string repl="replacement string.";

  std::cout << base.replace(10,4,repl,0,11) << '\n';

  return 0;
}
```
