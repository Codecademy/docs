---
Title: '.begin()'
Description: 'Returns an iterator pointing to the first element in the unordered_set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Iterators'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.begin()`** method returns an iterator pointing to the first element in the `unordered_set` container. Because `unordered_set` does not maintain sorted order, the element returned by `.begin()` is simply the first element in its internal bucket structure, not the "smallest" or "first" in any logical sense.

## Syntax

```pseudo
unordered_set.begin();
```

**Parameters:**

The `.begin()` method takes no parameters.

**Return value:**

Returns an iterator to the first element. If the container is empty, the iterator equals `.end()`.

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

```shell
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
