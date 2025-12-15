---
Title: 'clear()'
Description: 'Removes all elements from the unordered_set, leaving the container empty.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`clear()`** method is used to remove all elements from an `std::unordered_set`. After calling this method, the set will be empty, and its size will be zero.

The capacity of the set's internal storage (the number of buckets) is typically not reduced by `clear()`. The container’s bucket structure is typically preserved, while memory used by individual elements is released.

All iterators, pointers, and references pointing to elements within the set are invalidated after calling `clear()`.

## Syntax

```pseudo
unordered_set_name.clear();
```

**Parameters:**

The method takes no parameters.

**Return value:**

The method returns `void` (nothing).

## Example

In this example, `clear()` is used to remove all elements from an `unordered_set` and verify that its size becomes zero:

```cpp
#include <iostream>
#include <string>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> planets = {
    "Mercury",
    "Venus",
    "Earth",
    "Mars"
  };

  std::cout << "--- Before clear() ---\n";
  std::cout << "Size: " << planets.size() << "\n";

  // Call clear() to remove all elements
  planets.clear();

  std::cout << "\n--- After clear() ---\n";
  std::cout << "Size: " << planets.size() << "\n";

  if (planets.empty()) {
    std::cout << "The set is now empty.\n";
  }

  return 0;
}
```

The output of this code is:

```shell
--- Before clear() ---
Size: 4

--- After clear() ---
Size: 0
The set is now empty.
```

## Codebyte Example

In this example, `clear()` removes all elements from an `unordered_set`, after which new elements can still be inserted:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> data_points = {10, 20, 30, 40, 50};

  // Print initial size
  std::cout << "Initial size: " << data_points.size() << "\n";

  // Clear the set
  data_points.clear();

  // Print final size
  std::cout << "Final size: " << data_points.size() << "\n";

  // Attempting to insert a new element (the set is still valid)
  data_points.insert(999);
  std::cout << "Size after new insert: " << data_points.size() << "\n";

  return 0;
}
```
