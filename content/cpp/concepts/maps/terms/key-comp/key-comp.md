---
Title: '.key_comp'
Description: 'Returns a copy of the comparison function object used internally by associative containers (like `std::map`) to order their keys.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Data'
  - 'Data Structures'
  - 'Map'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

The **`.key_comp()`** function returns a copy of the comparison function object (typically `key_compare`) used by the container to order its keys.

## Syntax

```pseudo
myMap.key_comp();
```

**Parameters:**

- `.key_comp()` takes no parameters.

**Return value:**

- Returns the key comparison function object used by the map to order its keys.
  - By default, this is `std::less<Key>` unless a custom comparator was specified when defining the map.

## Example

This is an example demonstrating how to use `.key_comp()` to compare keys in a `std::map`:

```cpp
#include <iostream>
#include <map>

int main() {

  std::map<int, std::string> myMap = {
    {1, "Apple"},
    {2, "Banana"},
    {3, "Orange"},
    {4, "Date"},
    {5, "Mango"}
  };

  auto comp = myMap.key_comp();

  int keyToCompare = 3;

  for (const auto& pair : myMap) {
    if (comp(pair.first, keyToCompare)) {
      std::cout << pair.first << " is less than " << keyToCompare << std::endl;
    } else if (comp(keyToCompare, pair.first)) {
        std::cout << pair.first << " is greater than " << keyToCompare << std::endl;
      } else {
          std::cout << pair.first << " is equal to " << keyToCompare << std::endl;
        }
  }

  return 0;
}
```

The output of this code will be:

```shell
  1 is less than 3
  2 is less than 3
  3 is equal to 3
  4 is greater than 3
  5 is greater than 3
```

## Codebyte Example

This is a codebyte example demonstrating how to use `.key_comp()` to compare keys in a `std::map`:

```codebyte/cpp
#include <iostream>
#include <map>

struct CustomCompare {
  bool operator()(int lhs, int rhs) const {
    return lhs > rhs; // Reverse order
  }
};

int main() {
  std::map<int, char, CustomCompare> myMap = {{1, 'a'}, {2, 'b'}, {3, 'c'}};

  auto comp = myMap.key_comp();

  std::cout << "Comparing 2 and 3: " << comp(2, 3) << std::endl;
  std::cout << "Comparing 3 and 2: " << comp(3, 2) << std::endl;

  return 0;
}
```
