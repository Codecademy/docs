---
Title: '.insert()'
Description: 'Inserts a single value into a set.'
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

Values can be inserted into a declared set with the **`.insert()`** method.

## Syntax

```pseudo
setName.insert(value);
```

- `value` is the element to be inserted; it must be of the same data type as the set it is being inserted into.

## Codebyte Example

The following codebyte example creates a `grades` set of type `int` and inserts several values before being printed:

```codebyte/cpp
#include <iostream>
#include <set>

int main() {
  // Initiate set
  std::set<int> grades;

  // Insert values into set
  grades.insert(90);
  grades.insert(34);
  grades.insert(2);
  grades.insert(101);

  // Print set
  std::set<int> :: iterator iter;
  for (iter = grades.begin(); iter != grades.end(); iter++) {
    std::cout<< *iter << " ";
  }
}
```
