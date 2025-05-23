---
Title: '.rbegin()'
Description: 'Returns a reverse iterator pointing to the last element of the container.'
Subjects:
  - 'C++'
  - 'C++ STL'
Tags:
  - 'C++'
  - 'C++ STL'
  - 'C++ Maps'
  - 'C++ Reverse Iterators'
---

In C++, the **`rbegin()`** function is used to obtain a reverse iterator pointing to the last element of a container, such as a vector or a map. This allows for iterating over the elements in reverse order, from the last element to the first.

The `rbegin()` function is commonly used in conjunction with the `rend()` function, which returns a reverse iterator pointing to one element before the first element of the container.

## Syntax

```pseudo
container.rbegin();
```

## Parameters

- **`container`**: The container for which the reverse iterator is to be obtained. This can be a vector, list, deque, or any other standard container that supports reverse iteration.

## Return Value

The function returns a reverse iterator pointing to the last element of the container. If the container is empty, the returned iterator will be equal to `rend()`, which indicates that there are no elements to iterate over.

## Example

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

## Output

```shell
Elements in reverse order:
three: 3
two: 2
one: 1
```

### Explanation

The `rbegin()` function is used to obtain a reverse iterator pointing to the last element of the map. The loop iterates over the elements in reverse order, printing each key-value pair. The output shows the elements in reverse order compared to their original insertion order.

## Codebyte Example

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
