---
Title: 'empty()'
Description: 'Checks whether the unordered set is empty or not.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Sets'
  - 'STL'
  - 'Unordered Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`empty()`** method checks whether an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set) is empty (contains no elements). It returns `true` if the container has no elements, and `false` if it contains at least one element.

## Syntax

```pseudo
unordered_set_name.empty();
```

**Return value:**

Returns a boolean value:

- `true` if the `unordered_set` is empty (size is 0)
- `false` if the `unordered_set` contains one or more elements

## Example

This example demonstrates checking if an `unordered_set` is empty before and after adding elements:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> numbers;

  // Check if the set is initially empty
  if (numbers.empty()) {
    cout << "The set is empty.\n";
  }

  // Add elements to the set
  numbers.insert(10);
  numbers.insert(20);
  numbers.insert(30);

  // Check again after adding elements
  if (!numbers.empty()) {
    cout << "The set is not empty. It contains " << numbers.size() << " elements.\n";
  }

  // Clear the set
  numbers.clear();

  // Check if empty after clearing
  if (numbers.empty()) {
    cout << "The set is empty again after clearing.\n";
  }

  return 0;
}
```

The output of this code is:

```shell
The set is empty.
The set is not empty. It contains 3 elements.
The set is empty again after clearing.
```

## Codebyte Example

This example shows how `empty()` can be used to process all elements in an `unordered_set` safely:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>
using namespace std;

int main() {
  unordered_set<string> fruits = {"apple", "banana", "cherry"};

  cout << "Processing fruits:\n";

  // Process elements until the set is empty
  while (!fruits.empty()) {
    // Get an element (we can't predict which one due to unordered nature)
    auto it = fruits.begin();
    cout << "Processing: " << *it << "\n";

    // Remove the processed element
    fruits.erase(it);
  }

  // Verify the set is empty
  if (fruits.empty()) {
    cout << "All fruits have been processed!\n";
  }

  return 0;
}
```
