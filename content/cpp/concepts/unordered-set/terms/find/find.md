---
Title: '.find()'
Description: 'Searches the container for an element with a specific key and returns an iterator to it if found.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Methods'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.find()`** method searches an `std::unordered_set` for a specific key. If the key is found, the method returns an iterator pointing to that element. If the key is not found, it returns an iterator equal to `unordered_set::end()`, which represents the past-the-end position in the container.

## Syntax

```pseudo
set_name.find(key);
```

**Parameters:**

- `key`: The value to search for in the `unordered_set`.

**Return value:**

Returns an iterator to the element with a key equivalent to key, if such an element exists. Otherwise, it returns an iterator equal to `end()`.

## Example: Using `.find()` to Locate an Existing and Missing Key

In this example, `.find()` checks whether specific fruit names exist in the set:

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

## Codebyte Example: Using `.find()` to Validate Presence of Colors

In this example, `.find()` tests for a valid color and then checks a color that does not exist:

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
