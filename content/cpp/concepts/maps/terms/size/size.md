---
Title: '.size()'
Description: 'Determines the number of elements in a map.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Elements'
  - 'Map'
  - 'OOP'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.size()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) is used to determine the number of elements in a map.

## Syntax

```pseudo
mapName.size();
```

- `mapName`: The map object for which the size is to be checked.

## Example

The following example uses `.size()` to get the number of elements in `myMap`:

```cpp
#include <iostream>
#include <map>

int main() {
  std::map<int, std::string> myMap;
  myMap[1] = "apple";
  myMap[2] = "banana";
  myMap[3] = "cherry";

  std::cout << "The map contains " << myMap.size() << " elements.";
}
```

The output of the above code will be:

```shell
The map contains 3 elements.
```

## Codebyte Example

The below example demonstrates the usage of the `.size()` method with two maps, `vehicles` and `fruits`:

```codebyte/cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
  // Initializing maps with items
  map<int, string> vehicles {{1, "Car"}, {2, "Motorcycle"}, {3, "Bicycle"}, {4, "Bus"}, {5, "Airplane"}};
  map<int, string> fruits{{1, "apple"}, {5, "banana"}, {6, "strawberry"}};

  // Printing the size of each map
  cout << "The number of vehicles: " << vehicles.size() << endl;
  cout << "The number of fruits: " << fruits.size() << endl;
}
```
