---
Title: '.erase()'
Description: 'Removes a single value from a set.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Types'
  - 'Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.erase()`** method removes a single value from a set.

## Syntax

```pseudo
setName.erase(value);
```

The `value` is the element to be removed from the set.

## Codebyte Example

The following example uses `.erase()` to remove elements from the `stoneFruits` set:

```codebyte/cpp
#include <iostream>
#include <set>
#include <string>

int main() {
  // Initiate set
  std::set<std::string> stoneFruits;

  // Insert values into set
  stoneFruits.insert("Apricots");
  stoneFruits.insert("Peaches");
  stoneFruits.insert("Nectarines");
  stoneFruits.insert("Plums");

  // Remove values from set
  stoneFruits.erase("Apricots");
  stoneFruits.erase("Nectarines");

  // Print out set
  std::set<std::string> :: iterator iter;

  for(iter = stoneFruits.begin(); iter != stoneFruits.end(); iter++) {
    std::cout<< *iter << "\n";
  }
}
```
