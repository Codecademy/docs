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

The **`.count()`** method in C++ for `std::map` is used to determine the presence of a specific key in the map. Since all keys in a map are unique, the function returns:

- _1_ if the key exists in the container.
- _0_ if the key does not exist.

## Syntax

```pseudo
mapName.count(key)
```

- `mapName`: Refers to the specific map being accessed.
- `key`: Represents the value that will be searched for in `mapName`.

## Example

In the following example, the `.count()` method is used to check whether the keys `"coconuts"` and `"strawberries"` exist in the `fruits` map:

```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Initializing map with items
  std::map<std::string, int> fruits {{"apples", 50}, {"bananas", 100}, {"coconuts", 20}, {"dates", 500}};

  // Checking if "coconuts" exists
  std::string key = "coconuts";

  if (fruits.count(key) > 0) {
    std::cout << "There are " << fruits[key] << " " << key << ".\n"; // If key exists, print the count
  } else {
    std::cout << "There are no " << key << ".\n"; // If key does not exist, print a message
  }

  // Checking if "strawberries" exists
  key = "strawberries";

  if (fruits.count(key) > 0) {
    std::cout << "There are " << fruits[key] << " " << key << ".\n"; // If key exists, print the count
  } else {
    std::cout << "There are no " << key << ".\n"; // If key does not exist, print a message
  }

  return 0;
}
```

The above code produces the following output:

```shell
There are 20 coconuts.
There are no strawberries.
```

## Codebyte Example

The example below illustrates a scenario in which the `.count()` method is used to check whether an array of elements exists in a map:

```codebyte/cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  std::map<std::string, int> zoo_animals {{"hippos", 2}, {"lions", 4},  {"zebras", 6}, {"gorillas", 8}};

  std::string animals_to_check[] = {"bats", "giraffes", "gorillas", "hippos", "zebras"};

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
