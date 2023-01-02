---
Title: '.clear()'
Description: 'Removes all values from a set.'
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

The **`.clear()`** method removes all values from a set. This will destroy every value and the container will be of size 0.

## Syntax

```pseudo
setName.clear();
```

## Codebyte Example

The following shows the `.clear()` method being used on the `composers` set:

```codebyte/cpp
#include <iostream>
#include <set>
#include <string>

int main() {
  // Initiate set
  std::set<std::string> composers;

  // Insert values
  composers.insert("Bologne");
  composers.insert("Mozart");
  composers.insert("Hadyn");

  // Clear values
  composers.clear();

  // Print out size of set
  std::cout << composers.size();
}
```
