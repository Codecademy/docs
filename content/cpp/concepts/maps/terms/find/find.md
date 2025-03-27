---
Title: '.find()'
Description: 'Searches for an element with a particular key in a map.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Elements'
  - 'Map'
  - 'OOP'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.find()`** method searches for an element with a given key in a `std::map`. If the key exists, `.find()` returns an iterator pointing to the key-value pair; otherwise, it returns `map.end()`.

## Syntax

```pseudo
mapName.find(key);
```

**Parameters:**

- `key`: The key to search for in the map.

**Return value:**

- If the key is found, returns an iterator pointing to the key-value pair.
- If the key is not found, returns an iterator to `map.end()`.

## Example

This example demonstrates using `std::map` and the `.find()` method to check for an animal's existence and retrieve its lifespan efficiently:

```cpp
#include <iostream>
#include <map>

int main() {
  std::map<std::string, int> lifeSpan = {
    {"Giraffe", 26},
    {"Goat", 15},
    {"Lion", 10},
    {"Tiger", 8}
  };

  auto it = lifeSpan.find("Lion");

  if (it != lifeSpan.end()) {
    std::cout << "Lion found! Lifespan: " << it->second << " years.\n";
  } else {
    std::cout << "Lion not found in the map.\n";
  }

  return 0;
}
```

The code above results in the following output:

```shell
Lion found! Lifespan: 10 years.
```

## Codebyte Example

Run the following codebyte example to understand how to use `.find()` to search for a key in a map:

```codebyte/cpp
#include <iostream>
#include <map>

int main() {
  // Initializing map with items
  std::map<std::string, int> lifeSpan = {
    {"Giraffe", 26},
    {"Goat", 15},
    {"Lion", 10},
    {"Tiger", 8}
  };

  // Searching for a key
  std::string key = "Lion";
  auto it = lifeSpan.find(key);

  // Checking if the key was found
  if (it != lifeSpan.end()) {
    std::cout << key << " found! Lifespan: " << it->second << " years.\n";
  } else {
    std::cout << key << " not found in the map.\n";
  }

  // Searching for a non-existent key
  key = "Elephant";
  it = lifeSpan.find(key);

  if (it != lifeSpan.end()) {
    std::cout << key << " found! Lifespan: " << it->second << " years.\n";
  } else {
    std::cout << key << " not found in the map.\n";
  }
}
```
