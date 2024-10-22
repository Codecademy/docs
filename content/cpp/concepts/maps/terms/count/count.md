---
Title: '.count()'
Description: 'Checks whether a specified key exists in the map and returns the number of occurrences'
Subjects:
  - 'Computer Science'
  - 'Game Development'
  - 'Machine Learning'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
  - 'Map'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.count()`** method checks if a map contains an element with a specified key. Since all keys in a map are unique, the function returns 1 if the key exists in the container and 0 if it does not.

## Syntax

```pseudo
mapName.count(key)
```

- `mapName`: Refers to the specific map being accessed.
- `key`: Represents the value that will be searched for in `mapName`.

## Example

In the following example, the `count()` function is used to check whether the keys `"coconuts"` and `"strawberries"` exist in the `fruits` map.

```codebyte/cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Initializing map with items
  std::map<std::string, int> fruits {{"apples", 50}, {"bananas", 100},  {"coconuts", 20}, {"dates", 500}};

  // Checking if "coconuts" exists
  std::string key = "coconuts";

  if (fruits.count(key) > 0) {
    std::cout << "There are " << fruits[key] << " " << key << ".\n";
  } else {
    std::cout << "There are no " << key << ".\n";
  }

  // Checking if "strawberries" exists

  key = "strawberries";

  if (fruits.count(key) > 0) {
    std::cout << "There are " << fruits[key] << " " << key << ".\n";
  } else {
    std::cout << "There are no " << key << ".\n";
  }

  return 0;
}
```

The example below illustrates a scenario where the count function is used to check if an array of elements exists in a map.

```codebyte/cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Initializing map with items
  std::map<std::string, int> zoo_animals {{"hippos", 2}, {"lions", 4},  {"zebras", 6}, {"gorillas", 8}};
  
  // Creating array of animals
  std::string animals_to_check[] = {"bats", "giraffes", "gorillas", "hippos", "zebras"};
     
  // Loop through the animals and check if each one exists in the map
  for (const auto& animals : animals_to_check) {
        if (zoo_animals.count(animals) > 0) {
            std::cout << "The zoo has " << zoo_animals[animals] << " " << animals << ".\n";
        } else {
            std::cout << "The zoo does not have " << animals << ".\n";
        }
    }

    return 0;
}
```
