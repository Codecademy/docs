---
Title: '.find()'
Description: 'Searches for an element with a specific key in a map.'
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

The **`.find()`** method searches for an element with a given key in a `std::map`. If found, it returns an iterator pointing to the element if the key is found; otherwise, it returns an iterator pointing to **`map.end()`**.

## Syntax

```pseudo
mapName.find(key);
```

**Parameters:**

- `key`: The key to search for in the map.

**Return value:**

- If the key is found, returns an iterator pointing to the key-value pair.
- If the key is not found, returns an iterator to `map.end()`.

## Codebyte Example

The following codebyte example demonstrates how to use `.find()` to search for a key in a map:

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
