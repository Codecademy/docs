---
Title: '.begin()'
Description: 'Returns an iterator to the first element in a map container.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'Map'
  - 'Sort'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.begin()`** function is a built-in method in the C++ Standard Template Library (STL) that retrieves an iterator pointing to the first element in a [`std::map`](https://www.codecademy.com/resources/docs/cpp/maps) container. This method is essential for accessing and traversing the elements stored in a map.

The `.begin()` method returns an iterator that provides access to the first key-value pair in the map, determined by the map's sorting criterion. Maps in C++ store elements in a sorted order based on their keys, and `.begin()` gives access to the element that comes first in this order.

## Syntax

```pseudo
map_name.begin();
```

**Parameters:**

This function does not take any parameters.

**Return value:**

The `.begin()` method returns:

- An iterator pointing to the first element in the map container.
- If the map is empty, it returns an iterator equivalent to `.end()`.

## Example 1: Basic Usage of Map Begin

This example demonstrates how to use the `.begin()` method to access the first element in a map:

```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Create a map with integer keys and string values
  std::map<int, std::string> studentNames = {
    {101, "Alice"},
    {102, "Bob"},
    {103, "Charlie"}
  };

  // Access the first element using begin()
  auto firstElement = studentNames.begin();

  // Print the first key-value pair
  std::cout << "First student ID: " << firstElement->first << std::endl;
  std::cout << "First student name: " << firstElement->second << std::endl;

  return 0;
}
```

This example results in the following output:

```shell
First student ID: 101
First student name: Alice
```

## Example 2: Traversing a Map Using `.begin()` and `.end()`

This example shows how to traverse all elements in a map using the `.begin()` method alongside [`.end()`](https://www.codecademy.com/resources/docs/cpp/maps/end):

```cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Create a map of country codes and their names
  std::map<std::string, std::string> countryCodes = {
    {"US", "United States"},
    {"UK", "United Kingdom"},
    {"FR", "France"},
    {"DE", "Germany"},
    {"JP", "Japan"}
  };

  // Traverse the map using begin() and end()
  std::cout << "Country codes and names:" << std::endl;
  for (auto it = countryCodes.begin(); it != countryCodes.end(); ++it) {
    std::cout << it->first << ": " << it->second << std::endl;
  }
  return 0;
}
```

This example results in the following output:

```shell
Country codes and names:
DE: Germany
FR: France
JP: Japan
UK: United Kingdom
US: United States
```

Notice how the output is sorted by the keys (country codes), as maps automatically maintain their elements in sorted order.

## Codebyte Example: Modifying Map Values Using `.begin()`

This example demonstrates how to modify values in a map using the iterator returned by `.begin()`:

```codebyte/cpp
#include <iostream>
#include <map>
#include <string>

int main() {
  // Create a map of items and their prices
  std::map<std::string, double> prices = {
    {"apple", 0.99},
    {"banana", 0.59},
    {"orange", 0.89},
    {"grape", 2.99},
    {"watermelon", 3.99}
  };

  // Apply a 10% discount to all items
  std::cout << "Applying 10% discount to all items..." << std::endl;

  // Output original prices
  std::cout << "Original prices:" << std::endl;
  for (auto it = prices.begin(); it != prices.end(); ++it) {
    std::cout << it->first << ": $" << it->second << std::endl;
  }

  // Apply discount by modifying the values
  for (auto it = prices.begin(); it != prices.end(); ++it) {
    // Reduce each price by 10%
    it->second = it->second * 0.9;
  }

  // Output new prices
  std::cout << "\nDiscounted prices:" << std::endl;
  for (auto it = prices.begin(); it != prices.end(); ++it) {
    std::cout << it->first << ": $" << it->second << std::endl;
  }

  return 0;
}
```

## Frequently Asked Questions

### 1. How to initialize a map in C++?

A map in C++ can be initialized in several ways:

- Method 1: Using initializer list (C++11 and later)

```cpp
std::map<int, std::string> map1 = {
  {1, "one"},
  {2, "two"},
  {3, "three"}
}
```

- Method 2: Using `insert()` method

```cpp
std::map<int, std::string> map2;
map2.insert({1, "one"});
map2.insert({2, "two"});
map2.insert({3, "three"});
```

- Method 3: Using `emplace()` method (more efficient in C++11 and later)

```cpp
std::map<int, std::string> map3;
map3.emplace(1, "one");
map3.emplace(2, "two");
map3.emplace(3, "three");
```

- Method 4: Using square bracket operator

```cpp
std::map<int, std::string> map4;
map4[1] = "one";
map4[2] = "two";
map4[3] = "three";
```

### 2. How to get first element in map in C++?

The first element in a map can be accessed using the `.begin()` method:

```cpp
std::map<int, std::string> myMap = {{1, "one"}, {2, "two"}, {3, "three"}};

// Get the first element
auto firstElement = myMap.begin();

// Access key and value
int firstKey = firstElement->first;      // 1
std::string firstValue = firstElement->second;  // "one"

// Alternative syntax
int firstKey2 = (*firstElement).first;
std::string firstValue2 = (*firstElement).second;
```

Note that "first" here means the element with the smallest key according to the map's sorting criterion, not necessarily the first element inserted.

### 3. Can I use `.begin()` to modify the contents of a map?

Yes, you can use the iterator returned by `.begin()` to modify the values of a map, but not the keys. In C++, map keys are constant (const), so they cannot be changed through the iterator.

Here’s an example:

```cpp
std::map<std::string, int> scores = {
  {"Alice", 85},
  {"Bob", 90}
};

auto it = scores.begin();
it->second = 95; // This is allowed – modifies value

// it->first = "Charlie"; // Not allowed – keys are read-only
```

If you need to change a key, the only way is to remove the key-value pair and insert a new one with the updated key.
