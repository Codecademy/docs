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

In C++, the **`.begin()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns an iterator that points to the first element in the `unordered_set` container. Because `unordered_set` does not maintain sorted order, the element returned by `.begin()` is simply the first element in its internal bucket structure, not the "smallest" or "first" in any logical sense.

## Syntax

```pseudo
mySet.begin(n);
```

**Parameters:**

- `n` (Optional): The index of the bucket whose first element is to be accessed (must be in the range `0` to `mySet.bucket_count() - 1`).

**Return value:**

- `.begin()`: Returns an iterator that refers to the first element in the container. If the container is empty, the iterator equals `.end()`.
- `.begin(n)`: Returns a local iterator that refers to the first element in bucket `n`. If the bucket is empty, the iterator equals `.end(n)`.

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

This outputs the elements in the `unordered_set` (order may vary):

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
