---
Title: 'count()'
Description: 'Returns the number of elements with a specific key in an unordered_set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`count()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) in C++ checks whether a given key exists in a `std::unordered_set`. Since this container stores only unique elements, `count()` will always return one of these two values:

- `1`: If the element is found in the set.
- `0`: If the element is not found in the set.

This method is commonly used as a fast, _O(1)_ average time complexity way to check for element existence.

## Syntax

```pseudo
unordered_set_name.count(key);
```

**Parameters:**

- `key` (const Key&): The value of the element to search for. Must be of the same type as the elements stored in the `unordered_set`.

**Return value:**

Returns an integer. `1` if the element exists, `0` otherwise.

## Example

This example demonstrates using `count()` to check for the presence of elements within a set of [strings](https://www.codecademy.com/resources/docs/cpp/strings):

```cpp
#include <iostream>
#include <string>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> inventory = {
    "Sword",
    "Shield",
    "Potion"
  };

  std::cout << "Inventory contains:\n";
  for (const auto& item : inventory) {
    std::cout << "- " << item << "\n";
  }

  // Check for an existing element
  if (inventory.count("Sword")) {
    std::cout << "\n'Sword' is present (Count: " << inventory.count("Sword") << ").\n";
  }

  // Check for a missing element
  if (inventory.count("Axe") == 0) {
    std::cout << "'Axe' is not present (Count: " << inventory.count("Axe") << ").\n";
  }

  return 0;
}
```

The output of the code is:

```shell
Inventory contains:
- Potion
- Shield
- Sword

'Sword' is present (Count: 1).
'Axe' is not present (Count: 0).
```

## Codebyte Example

Run the codebyte below to check for the presence of an item in a set of integers:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> unique_ids = {101, 205, 330};

  int search_key = 205;
  int missing_key = 400;

  // Check the count for the element 205
  std::cout << "Count for " << search_key << ": "
            << unique_ids.count(search_key) << "\n";

  // Check the count for the element 400
  std::cout << "Count for " << missing_key << ": "
            << unique_ids.count(missing_key) << "\n";

  return 0;
}
```
