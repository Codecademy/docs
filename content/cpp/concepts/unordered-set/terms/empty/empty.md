---
Title: '.empty()'
Description: 'Checks whether the unordered set is empty.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Functions'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.empty()`** method checks whether an `unordered_set` has no elements. It returns `true` if the container is empty (i.e., its size is 0) and `false` otherwise.

## Syntax

```pseudo
unordered_set_name.empty()
```

**Parameters:**

This method does not take any parameters.

**Return value:**

Returns `true` if the `unordered_set` is empty and `false` otherwise.

## Example

The following example demonstrates how to use the `.empty()` method with `std::unordered_set` in C++:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers;

  if (numbers.empty()) {
    std::cout << "Unordered set is empty\n";
  } else {
    std::cout << "Unordered set has elements\n";
  }

  numbers.insert(10);
  numbers.insert(20);
  numbers.insert(30);

  if (numbers.empty()) {
    std::cout << "Unordered set is empty\n";
  } else {
    std::cout << "Unordered set has elements\n";
  }

  return 0;
}
```

The output of the above code is:

```shell
Unordered set is empty
Unordered set has elements
```

## Codebyte Example

In this example, the `.empty()` method is used to control a loop that processes and removes elements from an `unordered_set` until it becomes empty:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers = {5, 10, 15, 20, 25};

  std::cout << "Processing elements: ";

  while (!numbers.empty()) {
    auto it = numbers.begin();
    std::cout << *it << " ";
    numbers.erase(it);
  }

  std::cout << "\n";
  std::cout << "Unordered set is now empty? - " << std::boolalpha << numbers.empty() << "\n";

  return 0;
}
```
