---
Title: '.count()'
Description: 'Returns the number of elements with a specific key in an unordered_set.'
Subjects:
  - 'Computer Science'
  - 'Programming'
Tags:
  - 'C++'
  - 'Unordered Set'
  - 'STL'
  - 'Searching'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.count()`** method is used to determine if a specific element (key) is present within a C++ `std::unordered_set`.

Because `std::unordered_set` only allows **unique** elements, the `.count()` method will only ever return one of two possible values:

1.  **`1`**: If the element is found in the set.
2.  **`0`**: If the element is not found in the set.

This method is commonly used as a fast, O(1) average time complexity way to check for element existence.

## Syntax

The `.count()` method takes one argument: the value (key) to search for.

```cpp
unordered_set_name.count(key);
```

## Parameters

* `key` (const Key&): The value of the element to search for. Must be of the same type as the elements stored in the `unordered_set`.

## Return Value

Returns an integer (`1` if the element exists, `0` otherwise).

## Example

This example demonstrates using `.count()` to check for the presence of elements within a set of strings.

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

  // 1. Check for an existing element
  if (inventory.count("Sword")) {
    std::cout << "\n'Sword' is present (Count: " << inventory.count("Sword") << ").\n";
  }

  // 2. Check for a missing element
  if (inventory.count("Axe") == 0) {
    std::cout << "'Axe' is not present (Count: " << inventory.count("Axe") << ").\n";
  }

  return 0;
}
```

Output:

```
Inventory contains:
- Potion
- Shield
- Sword

'Sword' is present (Count: 1).
'Axe' is not present (Count: 0).
```

## Codebyte

Use the Codebyte below to check for the presence of an item in a set of integers.

```cpp
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