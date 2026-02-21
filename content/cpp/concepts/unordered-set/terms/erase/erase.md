---
Title: 'erase()'
Description: 'Removes one or more specified elements from the unordered_set.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Methods'
  - 'Sets'
CatalogContent: 
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`erase()`** function removes elements from an `unordered_set`. It can erase a single element by key, a single element by iterator, or a range of elements using two iterators, and only iterators pointing to erased elements are invalidated while the rest remain valid.

## Syntax

The `erase()` function removes elements from an `unordered_set` in three ways: by key, by iterator, or by a range of iterators:

```pseudo
set.erase(key);              // erase by key
set.erase(iterator);         // erase by iterator
set.erase(first, last);      // erase by range
```

**Parameters:**

- `key`: A value of the set’s key type. All elements matching this key are removed (at most one since `unordered_set` stores unique keys).
- `iterator`: An iterator pointing to the element to remove.
- `first`, `last`: A pair of iterators defining the range to erase. Removes all elements in `[first, last)`.

**Return value:**

- When erasing by key: returns the number of elements removed, as a `size_type`.
- When erasing by iterator: returns an iterator pointing to the element that follows the erased one.
- When erasing by range: returns an iterator pointing to the element that follows the last erased element.

## Example 1: Erasing by key, iterator, and range

In this example the program removes elements using all three `erase()` overloads and prints the remaining contents of the `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers = {1, 2, 3, 4, 5};

  // Erase by key
  numbers.erase(3);

  // Erase by iterator
  auto it = numbers.find(4);
  if (it != numbers.end()) {
    numbers.erase(it);
  }

  // Erase using a range
  auto first = numbers.begin();
  auto last = numbers.find(5);
  numbers.erase(first, last);

  for (int n : numbers) {
    std::cout << n << " ";
  }

  return 0;
}
```

The output of this code is:

```shell
5 2 1
```

> **Note:** The order and even the elements removed by a range erase depend on the internal bucket ordering of the `unordered_set`, which is not guaranteed. The final printed sequence may vary across systems.

## Codebyte Example

In this example the program demonstrates each `erase()` form and prints the set contents after every removal step:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> s = {1, 2, 3, 4, 5};

  // 1. Erase by key
  s.erase(3);
  std::cout << "After erasing 3: ";
  for (int v : s) std::cout << v << " ";
  std::cout << "\n";

  // 2. Erase by iterator
  auto it = s.find(4);
  if (it != s.end()) {
    s.erase(it);
  }
  std::cout << "After erasing iterator to 4: ";
  for (int v : s) std::cout << v << " ";
  std::cout << "\n";

  // 3. Erase by iterator range
  auto first = s.begin();
  auto last = s.end();
  s.erase(first, last);

  std::cout << "After erasing full range: ";
  for (int v : s) std::cout << v << " ";
  std::cout << "(empty)\n";

  return 0;
}
```
