---
Title: '.find()'
Description: 'Returns the index of the first occurrence of the specified string or character.'
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

The **`.find()`** method returns the index of the first occurrence of the specified string or character. If no result is found, `string::npos` is returned instead.

> **Note:** `string::npos` will often be shown as the highest possible value of type `size_t`.

## Syntax

```pseudo
stringName.find(sequence, position, count)
```

The following arguments are applied to the `.find()` method:

- `sequence`: the char or string to be searched for.
- `position` (optional): the index to start the search at (defaults to 0).
- `count` (optional): the number of characters that must match (defaults to the length of `sequence`).

## Examples

The following example searches for `izz` in the `food` string:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string food = "pizzabagel";
  std::cout << food.find("izz");
  // Output: 1
}
```

A starting index can also be specified:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string food = "pizzabagel";
  std::cout << food.find("izz", 2);
}
```

The output for the snippet above would look like this:

```shell
18446744073709551615
```

The output `18446744073709551615` represents the `string::npos` constant that indicates a match was not found with the given parameters. The sequence, `izz`, begins at index 1 while the call to the `.find()` method begins at index 2. Therefore, it is outside of the search range and a matching index was not found.

Searching for a sequence not in the string also returns `string::npos`. The following example searches for `bad` which is not in string `food`:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string food = "pizzabagel";
  std::cout << food.find("bad");
}
```

The output for the snippet above would look like this:

```shell
18446744073709551615
```

## Codebyte Example

However, if the previous example is changed to search for the first two characters of `bad` instead, then a result is found:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string food = "pizzabagel";
  std::cout << food.find("bad", 0, 2);
}
```
