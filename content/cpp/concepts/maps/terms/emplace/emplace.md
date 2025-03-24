---
Title: '.emplace()'
Description: 'Constructs and inserts an element into a map if the key does not already exist'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
  - 'Map'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.emplace()`** method in C++ for `std::map` is used to construct and insert an element directly into the map efficiently. Unlike `.insert()`, `.emplace()` constructs the element in-place, avoiding unnecessary copies or moves.

## Syntax

```pseudo
mapName.emplace(key, value)
```

- `mapName`: Refers to the specific map being modified.
- `key`: The key for the new element.
- `value`: The value associated with the key.

## Codebyte Example

The following codebyte example uses `.emplace()` to add new elements to a map:

```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Creating a map of student names and their scores
  std::map<std::string, int> student_scores;

  // Emplacing elements into the map
  auto [iter1, inserted1] = student_scores.emplace("Alice", 95);
  auto [iter2, inserted2] = student_scores.emplace("Bob", 87);

  // Attempting to emplace an existing key
  auto [iter3, inserted3] = student_scores.emplace("Alice", 100);

  // Printing results
  std::cout << "Alice's first insertion: " << (inserted1 ? "Successful" : "Failed") << std::endl;
  std::cout << "Bob's insertion: " << (inserted2 ? "Successful" : "Failed") << std::endl;
  std::cout << "Alice's second insertion: " << (inserted3 ? "Successful" : "Failed") << std::endl;

  // Printing map contents
  for (const auto& [name, score] : student_scores) {
    std::cout << name << ": " << score << std::endl;
  }

  return 0;
}
```
