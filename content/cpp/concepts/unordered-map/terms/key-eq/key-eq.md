---
Title: '.key_eq()'
Description: 'Returns the key equality comparison function used by the `unordered_map` container.'
Subjects:
  - 'Computer Science'
  - 'Data Scienec'
Tags:
  - 'Classes'
  - 'Map'
  - 'OOP'
CatalogContent:
  - 'learn-example-course'
  - 'paths/example-path'
---

**`.key_eq()`** is a member [function](https://www.codecademy.com/resources/docs/cpp/functions) that returns the function (also called a predicate) that the container uses to determine whether two keys are considered equal. This function is essential because, in an `unordered_map`, keys are stored in hash buckets and even if two keys hash to the same bucket, the container still needs to check if they're actually equal. That’s where `.key_eq()` comes in.

## Syntax

```pseudo
unordered_map_name.key_eq()(args1, args2)
```

**Parameters:**

- `key1`: The first key to compare.
- `key2`: The second key to compare.

**Return value:**

- Returns `true` if `key1` and `key2` are considered equal by the map's key comparison function.
- Returns `false` otherwise.

## Example

In this example, the map's key equality function is used to find and print the population of selected animals by comparing external values to map keys:

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

int main() {
  std::unordered_map<std::string, int> animalPopulations = {
    {"Tiger", 5574},
    {"Elephant", 415000},
    {"Giraffe", 117000},
    {"Rhinoceros", 27000}
  };

  // List of animals to look up
  std::vector<std::string> animalList = {"Tiger", "Giraffe"};

  // Get the equality function used by the map
  auto eq = animalPopulations.key_eq();

  // Loop through the list
  for (const std::string& target : animalList) {
    for (const auto& pair : animalPopulations) {
      if (eq(pair.first, target)) {
        std::cout << "There are " << pair.second << " " << pair.first << "s in the wild." << std::endl;
      }
    }
  }

  return 0;
}
```

The output of this code is:

```shell
There are 5574 Tigers in the wild.
There are 117000 Giraffes in the wild.
```

## Codebyte Example

In this example, the key equality function is used to check whether foods from a list exist in the map and print their protein type or a not-found message:

```codebyte/cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

int main() {
  std::unordered_map<std::string, std::string> proteinSource = {
    {"Chicken", "non-veg"},
    {"Salmon", "non-veg"},
    {"Greek Yogurt", "veg"},
    {"Cottage Cheese", "veg"}
  };

  // List of foods to look up
  std::vector<std::string> foodList = {"Chicken", "Greek Yogurt", "Paneer"};

  auto eq = proteinSource.key_eq();

  for (const std::string& food : foodList) {
    bool found = false;
    for (const auto& pair : proteinSource) {
      if (eq(pair.first, food)) {
        std::cout << pair.first << " is a " << pair.second << " source of protein" << std::endl;
        found = true;
        break;
      }
    }
    if (!found) {
      std::cout << food << " is not found in the protein source list." << std::endl;
    }
  }

  return 0;
}
```
