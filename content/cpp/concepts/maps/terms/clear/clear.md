---
Title: '.clear()'
Description: 'Removes all elements from a map.'
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

The **`.clear()`** method removes all elements of a map. This destroys the elements in the container making the new size of the container to be 0.

## Syntax

This method is applied by adding `.clear()` to the end of the specified `mapName`:

```pseudo
mapName.clear()
```

## Codebyte Example

The following codebyte example clears the items of the `supplies` map:

```codebyte/cpp
#include <iostream>
#include <iterator>
#include <map>

int main() {
  // Initializing map with items
  std::map<std::string, int> supplies {{"pen", 5}, {"pencils", 3}, {"paper", 12}};

  // Clear items
  supplies.clear();

  // Print size of map
  std::cout << supplies.size();
}
```
