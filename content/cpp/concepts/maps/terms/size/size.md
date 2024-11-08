---
Title: 'size'
Description: 'Returns the number of key-value pairs in the map'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Map'
  - 'OOP'
  - 'Object'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the `.size()` is used to determine the number of elements in a std::map container.

## Syntax

```pseudo
mapName.size();
```

## Example

The following example is using `.size()` to get the number of elements in myMap;

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

The output of code above will be:

```shell
The map contains 3 elements.
```

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    // Initializing map with items
    map<int, string> vehicles {{1, "Car"}, {2, "Motorcycle"}, {3, "Bicycle"}, {4, "Bus"}, {5, "Airplane"}};
    map<int, string> fruits{{1, "apple"}, {5, "banana"}, {6, "strawberry"}};

    // Print size of each map
    cout << "The number of vehicles: " << vehicles.size() << endl;
    cout << "The number of fruits: " << fruits.size() << endl;
}
```
