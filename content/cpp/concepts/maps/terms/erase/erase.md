---
Title: '.erase()'
Description: 'Removes an element by key from a map.'
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

The **`.erase()`** method removes an element by it's key from a map.

## Syntax

```pseudo
mapName.erase(key);
```

The `key` is the element to be erased.

## Codebyte Example

The following codebyte example uses `.erase()` to remove an element from the `fields` map:

```codebyte/cpp
#include <iostream>
#include <iterator>
#include <map>

int main() {
  // Initializing map with items
  std::map<std::string, std::string> fields {{"zero", "0"}, {"one", "1"},  {"two", "2"}, {"three", "3"}};

  // Removing an item
  fields.erase("three");

  // Initializing iterator
  std::map<std::string, std::string> :: iterator iter;

  // Print map
  for (iter = fields.begin(); iter != fields.end(); ++iter) {
    std::cout << '\t' << iter->first << '\t' << iter->second
    << '\n';
  }
}
```
