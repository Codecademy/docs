---
Title: '.insert()'
Description: 'Inserts a key-value pair into a map.'
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

Elements can be added to a map by inserting key-value pairs using the **`.insert()`** method.

## Syntax

A pair can be inserted using `std::pair` which is a class template used to store two different objects as a single unit.

```pseudo
mapName.insert(std::pair<type1, type2>(key, value));
```

Respectively, `type1` and `type2` are the [data types](https://www.codecademy.com/resources/docs/cpp/data-types) of the `key` and `value` that will be inserted.

## Codebyte Example

The following codebyte example inserts different mammals and their average lifespans into the `lifeSpan` map:

```codebyte/cpp
#include <iostream>
#include <iterator>
#include <map>

int main() {
  // Initializing map
  std::map<std::string, int> lifeSpan;

  // Adding elements
  lifeSpan.insert(std::pair<std::string, int>("Giraffe", 26));
  lifeSpan.insert(std::pair<std::string, int>("Goat", 15));
  lifeSpan.insert(std::pair<std::string, int>("Lion", 10));
  lifeSpan.insert(std::pair<std::string, int>("Tiger", 8));

  // Initializing iterator
  std::map<std::string, int> :: iterator iter;

  // Printing elements of map
  for (iter = lifeSpan.begin(); iter != lifeSpan.end(); ++iter) {
    std::cout << '\t' << iter->first << '\t' << iter->second
    << '\n';
  }
}
```
