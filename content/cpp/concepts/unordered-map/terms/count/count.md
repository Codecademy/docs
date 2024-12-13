---
Title: '.count()'
Description: 'Returns the number of elements with the specified key.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.count()`** method checks if a key exists in an [unordered map](https://www.codecademy.com/resources/docs/cpp/unordered-map). It returns _1_ if the key exists and _0_ if it does not.

## Syntax

```pseudo
mapName.count(key);
```

- `mapName`: The name of the unordered map.
- `key`: The key to check for existence in the map.

## Example

The following example demonstrates the use of the `.count()` method with an unordered map to check for mammals and display their lifespans:

```cpp
#include <iostream>
#include <unordered_map>

int main() {
    // Initializing unordered_map
    std::unordered_map<std::string, int> lifeSpan = {
        {"Giraffe", 26},
        {"Goat", 15},
        {"Lion", 10},
        {"Tiger", 8}
    };

    // Checking the existence of elements using .count()
    std::string mammals[] = {"Giraffe", "Elephant", "Lion", "Zebra"};

    for (const auto& mammal : mammals) {
        if (lifeSpan.count(mammal) > 0) {
            std::cout << mammal << " exists in the map with an average lifespan of " << lifeSpan[mammal] << " years.\n";
        } else {
            std::cout << mammal << " does not exist in the map.\n";
        }
    }

    return 0;
}
```

This example results in the following output:

```shell
Giraffe exists in the map with an average lifespan of 26 years.
Elephant does not exist in the map.
Lion exists in the map with an average lifespan of 10 years.
Zebra does not exist in the map.
```

## Codebyte Example

The following codebyte example demonstrates the use of the `.count()` method with an unordered map to check for the presence of various fruits and their prices:

```codebyte/cpp
#include <iostream>
#include <unordered_map>

int main() {
    // Initializing unordered_map with fruits and their prices
    std::unordered_map<std::string, double> fruitPrices = {
        {"Apple", 0.99},
        {"Banana", 0.59},
        {"Cherry", 2.99},
        {"Date", 3.49}
    };

    // Checking the existence of fruits using .count()
    std::string fruits[] = {"Apple", "Mango", "Cherry", "Pineapple"};

    for (const auto& fruit : fruits) {
        if (fruitPrices.count(fruit) > 0) {
            std::cout << fruit << " is available at $" << fruitPrices[fruit] << " each.\n";
        } else {
            std::cout << fruit << " is not available.\n";
        }
    }

    return 0;
}
```
