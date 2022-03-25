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

The `.find()` method returns the index of the first occurrence of the specified string or character. If no result is found, `string::npos` is returned instead.

**Note:** `string::npos` will often be shown as the highest possible value of type `size_t`.

## Syntax

```pseudo
stringName.find(sequence, position, count)
```

The following arguments are applied to the `.find()` method:

- `sequence`: the char or string to be searched for.
- `position` (optional): the index to start the search at at (defaults to 0).
- `count` (optional): the number of characters that must match (defaults to the length of `sequence`).

## Example

The following example searches for `izz` in the `food` string:

```cpp
#include <iostream>
#include <string>

int main(){
  std::string food = "pizzabagle";
  std::cout << food.find("izz");
  // Output: 1
}
```

Output:

```shell
1
```

A starting index can also be specified:

```cpp
#include <iostream>
#include <string>

int main(){
    std::string food = "pizzabagle";
    std::cout << food.find("izz", 2);
}
```

Output:

```shell
18446744073709551615
```

The output `18446744073709551615` represents `string::npos`. This means the sequence, `izz`, could not be found with the parameters given. `izz` is at index 1 which comes before the specified start position of `2`. Therefore, it is outside of the search range and is not found.

Searching for a sequence not in the string also returns `string::npos`. The following example searches for `bad` which is not in string `food`:

```cpp
#include <iostream>
#include <string>

int main(){
    std::string food = "pizzabagle";
    std::cout << food.find("bad");
}
```

Output:

```shell
18446744073709551615
```

However, if the previous example is changed to search for the first two characters of `bad` instead, then a result is found:

```codebyte/cpp
#include <iostream>
#include <string>

int main(){
    std::string food = "pizzabagle";
    std::cout << food.find("bad", 0, 2);
}
```
