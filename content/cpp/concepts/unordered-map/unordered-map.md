---
Title: 'Unordered Maps'
Description: 'Unordered Maps are associative containers with elements with key-value pairs.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**`Unordered Maps`** are associative containers that have elements with key-value pairs. Unlike Maps, the pairs in Unordered Maps are not sorted by their keys. Each mapped value must have a unique key value.

## Syntax

An empty unordered map can be created by using the `unordered_map` keyword, declaring the data types of the key and value, and setting a `mapName`:

```pseudo
std::unordered_map<type1, type2> mapName;
```

- `type1`: Date type of the key in the unordered_map.
- `type2`: Date type of the value in the unordered_map.

> **Note:** To use unordered_map, including the `unordered_map` library is necessary.

## Examples

The below example shows how to use `unordered_map`.

```cpp
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> myMap;

    // Inserting elements
    myMap["apple"] = 2;
    myMap["banana"] = 5;
    myMap["orange"] = 3;

    // Iterating over elements
    for (const std::pair<const std::string, int>& x : myMap) {
        std::cout << x.first << " " << x.second << std::endl;
    }
    return 0;
}
```

The output will be:

```shell
orange 3
banana 5
apple 2
```

### Overriding Functions

By default, keys are treated as `case-sensitive`, but this can be avoided, so they can be treated as `case-insensitive`. In the example below, the keys are treated as `case-insensitive`.

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

struct CustomHash {
  std::size_t operator()(const std::string & key) const {
    // Custom hash: hash based on the length of the string
    return key.length();
  }
};

struct CustomEqual {
  bool operator()(const std::string & lhs,
    const std::string & rhs) const {
    // Custom equality: compare strings ignoring case
    return std::equal(lhs.begin(), lhs.end(), rhs.begin(), rhs.end(),
      [](char a, char b) {
        return tolower(a) == tolower(b);
      });
  }
};

int main() {
  // Unordered map with custom hash and equality functions
  std::unordered_map < std::string, int, CustomHash, CustomEqual > myMap;

  myMap["apple"] = 1;

  // Will be treated as the same key as "apple"
  myMap["APPLE"] = 2;

  for (const auto & pair: myMap) {
    std::cout << pair.first << ": " << pair.second << std::endl;
  }
  return 0;
}
```

The above code snippet will return the following output:

```shell
apple: 2
```

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <unordered_map>

int main() {
    // Create an unordered_map with default hash and equality functions
    std::unordered_map<int, std::string> myMap;

    // Insert elements into the unordered_map
    myMap[1] = "one";
    myMap[2] = "two";
    myMap[3] = "three";

    // Print the elements in the unordered_map
    std::cout << "Elements in the unordered_map:" << std::endl;
    for (const auto& pair : myMap) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }
    return 0;
}
```
