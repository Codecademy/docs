---
Title: '.find()'
Description: 'Searches the container for an element with a specific key and returns an iterator to it if found.'
Subjects:
  - 'Computer Science'
  - 'Programming'
Tags:
  - 'C++'
  - 'Unordered Set'
  - 'STL'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.find()`** method searches an `std::unordered_set` for a specific
key.

If the key is found, `.find()` returns an iterator pointing to that
element. If it is not found, the method returns an iterator equal to
`unordered_set::end()`, representing the position past the last element
in the container.

## Syntax

```pseudo
set_name.find(key);
```

**Parameters:**

- `key`: The value to search for in the `unordered_set`.

**Return value:**

Returns an iterator pointing to the matching element if found.\
If the key is not present, it returns an iterator equal to `end()`.

## Example

The example below demonstrates using `.find()` with an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> fruits = {"apple", "banana", "cherry"};

  // Search for "banana"
  auto search = fruits.find("banana");

  if (search != fruits.end()) {
    std::cout << "Found: " << *search << "\n";
  } else {
    std::cout << "Not found\n";
  }

  // Search for "grape"
  if (fruits.find("grape") == fruits.end()) {
    std::cout << "grape not found in the set.\n";
  }

  return 0;
}
```

The output of this code is:

```shell
Found: banana
grape not found in the set.
```

## Codebyte Example

The following runnable example shows how to use `.find()` to look up
elements in an `unordered_set`:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> colors = {"red", "green", "blue", "yellow"};

  // Search for "green"
  auto it = colors.find("green");

  if (it != colors.end()) {
    std::cout << "Found: " << *it << "\n";
  } else {
    std::cout << "Not found\n";
  }

  // Attempt to search for a missing color
  auto missing = colors.find("purple");

  if (missing == colors.end()) {
    std::cout << "purple not found in the set.\n";
  }

  return 0;
}
```
