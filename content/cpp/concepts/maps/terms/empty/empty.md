---
Title: '.empty()'
Description: 'Checks if a given map is empty.'
Subjects:
  - 'Computer Science'
  - 'Game Deelopment'
Tags:
  - 'Data Structures'
  - 'Documentation'
  - 'Functions'
  - 'Map'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In the C++ Standard Template Library (STL), the **`.empty()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) is a member function under the `std::map` [class](https://www.codecademy.com/resources/docs/cpp/classes) that checks if an STL map [object](https://www.codecademy.com/resources/docs/cpp/objects) contains any key-value pairs. It returns `true` if the map is empty and `false` otherwise.

## Syntax

```pseudo
myMap.empty();
```

- `myMap`: The map to be checked.

## Example

The following example calls the `.empty()` function, stores its return value in a boolean [variable](https://www.codecademy.com/resources/docs/cpp/variables) and uses this value to display whether the map is empty or not:

```cpp
#include <map>
#include <cstdio>
using namespace std;

int main(){
  // Create an empty STL map object
  map<int, char> emptyMap;

  // Check if the map is empty using the .empty() function and store the result
  bool isEmpty = emptyMap.empty();

  // Use the value stored in 'isEmpty' to display whether the map is empty or not
  isEmpty ? printf("The map is empty.") : printf("The map is not empty.");

  return 0;
}
```

The code above produces the following output:

```shell
The map is empty.
```

## Codebyte Example

The following code creates two STL map objects with one left empty and the other initialized with elements. The `.empty()` function is then called on each map, returning a boolean indicating if the map is empty:

```codebyte/cpp
#include <map>
#include <cstdio>
using namespace std;

int main() {
  // Create an empty map
  map<int, char> emptyMap;

  // Create a non-empty map using an initializer list
  map<int, char> notEmptyMap{{1, 'a'}, {2, 'b'}, {3, 'c'}};

  // Call the .empty() function on the empty map
  printf("Testing if emptyMap is empty:\n");
  if (emptyMap.empty()) {
    printf("The map is empty.\n");
  } else {
    printf("The map is not empty.\n");
  }

  // Call the .empty() function on the map containing elements
  printf("Testing if notEmptyMap is empty:\n");
  if (notEmptyMap.empty()) {
    printf("The map is empty.\n");
  } else {
    printf("The map is not empty.\n");
  }

  return 0;
}
```
