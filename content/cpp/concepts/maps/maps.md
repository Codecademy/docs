---
Title: 'Maps'
Description: 'Maps are associative containers that have elements with key-value pairs.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Maps** are associative containers that have elements with key-value pairs. The keys are used to sort and identify the elements, while the values store the content associated with the keys. Each mapped value must have a unique key value.

## Syntax

An empty map can be created by using the map keyword, declaring the data types of the key and value, and setting a `mapName`:

```pseudo
std::map<type1, type2> mapName;
```

`type1` and `type2` are the data types of the key and value, respectively.

To set a list at declaration, the following syntax is used:

```pseudo
std::map<type1, type2> mapName { {key1, value1}, {key2, value2}, ...};
```

Each `value` must have a unique `key` assigned to it.

## Example

The following example creates an empty map, `emptyMap`, and a map set with values, `clothingStore`:

```cpp
#include <iostream>
#include <iterator>
#include <map>

int main() {
  // Initializing empty map
  std::map<std::string, int> emptyMap;

  // Initializing map with items
  std::map<std::string, int> clothingStore {{"tshirt", 10}, {"pants", 12}, {"sweaters", 18}};
}
```

## Accessing Elements

Elements can be accessed within a map using the following square bracket syntax:

```pseudo
mapName[key]
```

This returns the mapped value associated with the `key`.

### Example

The `sweaters` element is retrieved from the `clothingStore` map initialized in the previous example:

```cpp
std::cout << clothingStore["sweaters"]; // Output: 18
```

## Comparison Function

By default, elements are sorted by their key in ascending order.

```cpp
#include <iostream>
#include <iterator>
#include <map>

int main() {
 // Initializing map with items
  std::map<int, std::string> reptiles {
    {10, "Komodo Dragon"}, {15, "Saltwater Crocodile"}, {8, "Leatherback Sea Turtle"}
  };


  // Initializing iterator
  std::map<int, std::string> :: iterator iter;

  for (iter = reptiles.begin(); iter != reptiles.end(); ++iter) {
    std::cout << '\t' << iter->first << '\t' << iter->second
    << '\n';
  }
}
```

The snippet above outputs the following:

```shell
8   Leatherback Sea Turtle
10  Komodo Dragon
15  Saltwater Crocodile
```

The default comparison function can be changed to `std::greater<dataType>` in order to sort the elements in descending order.

### Syntax

To set the comparison function while initializing an empty map:

```pseudo
std::map<type1, type2, std::greater<dataType>> mapName;
```

To set the comparison function while initializing a map with items:

```pseudo
std::map<type1, type2, std::greater<dataType>> mapName { {key1, value1}, {key2, value2}, ...};
```

The `dataType` for the comparison function above must be the same as `type1` which is the data type for the keys.

### Codebyte Example

Setting the previous example's comparison function to `std::greater<int>`:

```codebyte/cpp
#include <iostream>
#include <iterator>
#include <map>

int main() {
  // Initializing map with items
  std::map<int, std::string, std::greater<int>> reptiles {
    {10, "Komodo Dragon"}, {15, "Saltwater Crocodile"}, {8, "Leatherback Sea Turtle"}
  };


  // Initializing iterator
  std::map<int, std::string> :: iterator iter;

  for (iter = reptiles.begin(); iter != reptiles.end(); ++iter) {
    std::cout << '\t' << iter->first << '\t' << iter->second << '\n';
  }
}
```
