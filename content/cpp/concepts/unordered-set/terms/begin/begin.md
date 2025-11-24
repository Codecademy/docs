---
Title: '.begin()'
Description: 'Returns an iterator pointing to the first element in the unordered_set.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Unordered Sets'
  - 'Iterators'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.begin()`** method returns an iterator pointing to the first element in the `unordered_set` container. Since `unordered_set` is an unordered container, the "first" element is not determined by any particular order.

## Syntax

```cpp
unordered_set.begin();
```

The method takes no parameters and returns an iterator to the first element. If the container is empty, the returned iterator will be equal to `.end()`.

## Example

The following example demonstrates using `.begin()` to iterate through an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers = {10, 20, 30, 40, 50};
  
  std::cout << "Elements in the unordered_set: ";
  for (auto it = numbers.begin(); it != numbers.end(); ++it) {
    std::cout << *it << " ";
  }
  
  return 0;
}
```

This outputs the elements in the unordered_set (order may vary):

```
Elements in the unordered_set: 50 40 30 20 10
```

## Codebyte Example

The following runnable example shows how to use `.begin()` with an `unordered_set`:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> fruits = {"apple", "banana", "orange"};
  
  std::cout << "First fruit: " << *fruits.begin() << std::endl;
  
  std::cout << "All fruits: ";
  for (auto it = fruits.begin(); it != fruits.end(); ++it) {
    std::cout << *it << " ";
  }
  
  return 0;
}
```
