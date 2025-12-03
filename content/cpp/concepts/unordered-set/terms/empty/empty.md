---
Title: C++ Unordered Set empty()
Description: The C++ `empty()` method, when used with an unordered_set, checks if the unordered_set container is empty or not.
---

The C++ `empty()` method, when used with an unordered_set, checks if the unordered_set container is empty or not.

## Syntax

```cpp
unordered_set_name.empty()
```

The `empty()` method does not take any parameters and returns a boolean value:

- `true`: if the unordered_set is empty.
- `false`: if the unordered_set is not empty.

## Example

```cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> groceries;

  if (groceries.empty()) {
    std::cout << "The grocery list is empty!\n";
  } else {
    std::cout << "The grocery list is not empty.\n";
  }

  groceries.insert("Milk");
  groceries.insert("Eggs");

  if (groceries.empty()) {
    std::cout << "The grocery list is empty!\n";
  } else {
    std::cout << "The grocery list is not empty.\n";
  }

  return 0;
}
```

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> my_set;

  if (my_set.empty()) {
    std::cout << "The unordered_set is empty.\n";
  } else {
    std::cout << "The unordered_set is not empty.\n";
  }

  my_set.insert(10);

  if (my_set.empty()) {
    std::cout << "The unordered_set is empty.\n";
  } else {
    std::cout << "The unordered_set is not empty.\n";
  }

  return 0;
}
```
