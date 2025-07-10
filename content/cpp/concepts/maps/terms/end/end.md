---
Title: '.end()'
Description: 'Returns an iterator referring to the past-the-end element in a map container.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Iterators'
  - 'Map'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.end()`** method is a [built-in function](https://www.codecademy.com/resources/docs/cpp/functions) in C++ Standard Template Library(STL), which is defined in the `<map>` header file. It returns an iterator pointing to the theoretical element just after the last element in the [map](https://www.codecademy.com/resources/docs/cpp/maps) container. This element is referred to as the "past-the-end" element and does not represent an actual element in the map container. It serves as a marker indicating the end of the map sequence and should not be dereferenced.

The `.end()` method is commonly used in combination with `.begin()` to specify a range for iterating through all elements in a map container. This iterator-based approach is a fundamental pattern in the C++ Standard Template Library (STL) and is used across various algorithms and container operations.

## Syntax

```pseudo
map_name.end();
```

**Parameters:**

The `.end()` method does not accept any parameters.

**Return value:**

It returns an iterator pointing to the past-the-end element in the map container. If the map object is const-qualified, the function returns a `const_iterator`. Otherwise, it returns an `iterator`.

## Example 1: Basic Map Iteration Using `.end()`

This example demonstrates how to use `.end()` with `.begin()` to iterate through all key-value pairs in a map:

```cpp
#include <iostream>
#include <map>

int main() {
  // Create a map with some key-value pairs
  std::map<char, int> charMap;

  // Insert elements
  charMap['a'] = 10;
  charMap['b'] = 20;
  charMap['c'] = 30;

  // Iterate through the map using begin() and end()
  std::cout << "Map contents: " << std::endl;
  for (auto it = charMap.begin(); it != charMap.end(); ++it) {
    std::cout << "Key: " << it->first << ", Value: " << it->second << std::endl;
  }

  return 0;
}
```

This code creates a map that associates characters with integers, then uses `.begin()` and `.end()` to establish the range for iteration. The loop continues until the iterator equals the value returned by `.end()`, which indicates we've gone through all elements.

The output of this code will be:

```shell
Map contents:
Key: a, Value: 10
Key: b, Value: 20
Key: c, Value: 30
```

## Example 2: Finding Elements in a Map with `.end()`

This example shows how to use `.end()` as a comparison point to determine if an element exists in a map:

```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Create a map for storing student grades
  std::map<std::string, char> studentGrades;

  // Add some student records
  studentGrades["Alice"] = 'A';
  studentGrades["Bob"] = 'B';
  studentGrades["Carol"] = 'A';

  // Names to search for
  std::string names[] = {"Alice", "David", "Bob"};

  // Search for each name in the map
  for (const auto& name : names) {
    // Use find() method which returns end() if element is not found
    auto it = studentGrades.find(name);

    if (it != studentGrades.end()) {
      // Element was found
      std::cout << name << "'s grade: " << it->second << std::endl;
    } else {
      // Element was not found (iterator equals end())
      std::cout << name << " is not in the database." << std::endl;
      }
    }

  return 0;
}
```

This example demonstrates a common pattern for checking if an element exists in a map. The `.find()` method returns an iterator to the element if found, or an iterator equal to `.end()` if not found. By comparing the returned iterator with `.end()`, we can determine if the search was successful.

The output for this code will be:

```shell
Alice's grade: A
David is not in the database.
Bob's grade: B
```

## Codebyte Example: Using `.end()` with STL Algorithms

This example shows how to use `.end()` with STL algorithms to perform operations on map elements:

```codebyte/cpp
#include <iostream>
#include <map>
#include <algorithm>
#include <string>

// Function to display map contents
void printMap(const std::map<std::string, int>& m) {
  std::cout << "Map contents: " << std::endl;
  for (const auto& pair : m) {
    std::cout << pair.first << ": " << pair.second << std::endl;
  }
  std::cout << "------------------------" << std::endl;
}

int main() {
  // Create a map of product prices
  std::map<std::string, int> productPrices;

  // Add some products
  productPrices["Apple"] = 100;
  productPrices["Banana"] = 50;
  productPrices["Cherry"] = 120;
  productPrices["Date"] = 90;

  // Display initial contents
  printMap(productPrices);

  // Count items with price greater than 95
  int expensiveCount = std::count_if(
    productPrices.begin(),
    productPrices.end(),
    [](const auto& pair) { return pair.second > 95; }
  );

  std::cout << "Number of products with price > 95: " << expensiveCount << std::endl;

  // Apply discount to all products
  std::for_each(
    productPrices.begin(),
    productPrices.end(),
    [](auto& pair) { pair.second = static_cast<int>(pair.second * 0.9); }
  );

  // Display contents after discount
  std::cout << "After 10% discount:" << std::endl;
  printMap(productPrices);

  return 0;
}
```

This example demonstrates how `.end()` is used with various STL algorithms. These algorithms require a range defined by two iterators, and the common pattern is to use `.begin()` and `.end()` to specify the entire container.

To explore more C++ concepts, check out our [Learn C++](https://www.codecademy.com/learn/learn-c-plus-plus) course to enhance your coding skills.
