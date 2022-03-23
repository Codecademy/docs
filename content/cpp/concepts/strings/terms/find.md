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

- sequence: the char or string to search for
- position (optional): index to start search at (default: 0)
- count (optional): the number of characters that must match (default: length of sequence)

## Example

The following example searches for `izz` in string `food`:

```cpp
#include <iostream>
#include <string>

int main(){
    std::string food = "pizzabagle";
    std::cout << food.find("izz");
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

The output `18446744073709551615` represents `size::npos`. This means the sequence, `izz`, could not be found with the parameters given. `izz` is at index 1 which comes before the specified start position of `2`. Therefore, it is outside of the search range and is not found.

Searching for a sequence not in the string also returns `size::npos`. The following example searches for `bad` which is not in string `food`:

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
