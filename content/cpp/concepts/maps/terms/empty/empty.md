---
Title: '.empty()'
Description: 'Checks if the map is empty and returns true if it has no elements, otherwise it returns false.'
Subjects: 
  - 'Computer Science'
Tags:
  - 'Cpp'
  - 'Data Structures'
  - 'Documentation'
  - 'Functions'
  - 'Map'
  - 'Programming'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ Standard Template Library (STL) [map](https://www.codecademy.com/resources/docs/cpp/maps) class **`.empty()`** function is a member function that checks if an STL map object contains no key-value pairs. It returns a boolean `true` if the map is empty and `false` otherwise.

## Syntax

```pseudo
myMap.empty();
```

The `.empty()` function takes no parameters and returns a boolean value: `true` if the map is empty, and `false` if it contains one or more elements.

## Example

The following example calls the `.empty()` member function of the `map` class, stores its return value in a boolean variable, and uses this value to display whether the map is empty or not:

```cpp
#include <map>
using namespace std;

int main(){
  // Create an empty STL map object.
  map<int, char> emptyMap;

  // Check if the map is empty using the .empty() member function and store the result in 'isEmpty'.
  bool isEmpty = emptyMap.empty();

  // Use the value stored in 'isEmpty' to display whether the map is empty or not.
  isEmpty ? printf("The map is empty.") : printf("The map is not empty.");

  return 0;
}
```

The code above produces the following output:

```shell
The map is empty.
```

## Codebyte Example

The following code creates two `STL` map objects, with one left empty and the other initialized with elements. The `.empty()` member function is then called on each map, returning a boolean indicating if the map is empty:

```codebyte/cpp
#include <map>
using namespace std;

int main() {
  // Create an empty map
  map<int, char> emptyMap;

  // Create a non-empty map using an initializer list
  map<int, char> notEmptyMap{{1, 'a'}, {2, 'b'}, {3, 'c'}};

  // Calling the .empty() function on an empty map.
  printf("Testing if emptyMap is empty:\n");
  if (emptyMap.empty()) {
    printf("The map is empty.\n");
  } else {
    printf("The map is not empty.\n");
  }

  // Calling the .empty() function on a map containing elements
  printf("Testing if notEmptyMap is empty:\n");
  if (notEmptyMap.empty()) {
    printf("The map is empty.\n");
  } else {
    printf("The map is not empty.\n");
  }

  return 0;
}
```
