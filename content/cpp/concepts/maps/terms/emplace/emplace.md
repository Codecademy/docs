---
Title: '.emplace()'
Description: 'Constructs and inserts an element into a map if the key does not already exist.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Map'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.emplace()`** method in C++ for `std::map` efficiently constructs and inserts an element directly into the map. Unlike [`.insert()`](https://www.codecademy.com/resources/docs/cpp/maps/insert), `.emplace()` constructs the element in-place, avoiding unnecessary copies or moves.

## Syntax

```pseudo
mapName.emplace(key, value)
```

- `mapName`: Refers to the specific map being modified.
- `key`: The key for the new element.
- `value`: The value associated with the key.

## Example

This example demonstrates using the `.emplace()` method to add elements to a map and the behaviour on inserting elements with the same key:

```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Initialize a map of products and their prices
  std::map<std::string, double> product_prices;

  // Using std::pair instead of structured binding to support C++11 and later
  std::pair<std::map<std::string, double>::iterator, bool> prod1 = product_prices.emplace("Laptop", 999.99);
  std::pair<std::map<std::string, double>::iterator, bool> prod2 = product_prices.emplace("Phone", 499.99);
  std::pair<std::map<std::string, double>::iterator, bool> prod3 = product_prices.emplace("Laptop", 799.99);

  // Print results
  std::cout << "Laptop insertion (first attempt): " << (prod1.second ? "Successful" : "Failed") << std::endl;
  std::cout << "Phone insertion: " << (prod2.second ? "Successful" : "Failed") << std::endl;
  std::cout << "Laptop insertion (second attempt): " << (prod3.second ? "Successful" : "Failed") << std::endl;

  // Print the content of the map
  for (const auto& pair : product_prices) {
    std::cout << pair.first << ": $" << pair.second << std::endl;
  }

  return 0;
}
```

The code above results in the following output:

```shell
Laptop insertion (first attempt): Successful
Phone insertion: Successful
Laptop insertion (second attempt): Failed
Laptop: $999.99
Phone: $499.99
```

## Codebyte Example

Run the following codebyte example to understand how the `.emplace()` method adds new elements to a map:

```codebyte/cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Creating a map of student names and their scores
  std::map<std::string, int> student_scores;

  // Emplacing elements into the map
  std::pair<std::map<std::string, int>::iterator, bool> inserted1 = student_scores.emplace("Alice", 95);
  std::pair<std::map<std::string, int>::iterator, bool> inserted2 = student_scores.emplace("Bob", 87);

  // Attempting to emplace an existing key
  std::pair<std::map<std::string, int>::iterator, bool> inserted3 = student_scores.emplace("Alice", 100);

  // Printing results
  std::cout << "Alice's first insertion: " << (inserted1.second ? "Successful" : "Failed") << std::endl;
  std::cout << "Bob's insertion: " << (inserted2.second ? "Successful" : "Failed") << std::endl;
  std::cout << "Alice's second insertion: " << (inserted3.second ? "Successful" : "Failed") << std::endl;

  // Printing map contents
  for (const auto& pair : student_scores) {
    std::cout << pair.first << ": " << pair.second << std::endl;
  }

  return 0;
}
```
