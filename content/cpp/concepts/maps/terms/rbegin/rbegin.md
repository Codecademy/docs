---
Title: '.rbegin()'
Description: 'Returns a reverse iterator pointing to the last element of the map.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Iterators'
  - 'Maps'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.rbegin()`** function is used to obtain a reverse iterator pointing to the last element of a container, such as a vector, map, or other standard containers. This allows iteration from the end toward the beginning of the container. The `.rbegin()` function is typically used in conjunction with the `.rend()` function, which returns a reverse iterator pointing just before the first element of the container (i.e., the reverse end).

## Syntax

```pseudo
container.rbegin();
```

**Parameters:**

The `.rbegin()` function takes no parameters.

**Return value:**

The function returns a reverse iterator that points to the last element of the container. If the container contains no elements, the returned iterator will be equal to `.rend()`, indicating that there are no elements to iterate over in reverse.

## Example

The following example demonstrates the usage of the `.rbegin()` function:

```cpp
#include <iostream>
#include <map>

int main() {
  std::map<std::string, int> myMap = {{"one", 1}, {"two", 2}, {"three", 3}};
  std::cout << "Elements in reverse order:\n";
  for (auto it = myMap.rbegin(); it != myMap.rend(); ++it) {
    std::cout << it->first << ": " << it->second << "\n";
  }
  return 0;
}
```

The output of this code will be:

```shell
Elements in reverse order:
three: 3
two: 2
one: 1
```

The `.rbegin()` function is used to obtain a reverse iterator that refers to the last element of the map. The loop iterates over the elements in reverse order, printing each key-value pair. The output shows the elements in reverse order compared to their original insertion order.

## Codebyte Example

Run the following code to understand how the `.rbegin()` function works:

```codebyte/cpp
#include <iostream>
#include <map>

int main() {
  std::map<std::string, int> myMap = {{"one", 1}, {"two", 2}, {"three", 3}};
  for (auto it = myMap.rbegin(); it != myMap.rend(); ++it) {
    std::cout << it->first << ": " << it->second << "\n";
  }
  return 0;
}
```
