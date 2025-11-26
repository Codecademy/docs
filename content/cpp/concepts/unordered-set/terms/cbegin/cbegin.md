---
Title: '.cbegin()'
Description: 'Returns a constant iterator pointing to the first element of the unordered_set.'
Subjects:
  - 'Computer Science'
  - 'Programming'
Tags:
  - 'C++'
  - 'Unordered Set'
  - 'STL'
  - 'Iterators'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.cbegin()`** method returns a **constant iterator** that points to the first element in an `std::unordered_set`.

The key feature of a constant iterator (`const_iterator`) is that it allows you to **read** the elements but **prevents** you from modifying them. This is a best practice when iterating over a set to ensure data integrity. Since `unordered_set` does not guarantee any specific order, the element returned by `cbegin()` depends on the internal hash table structure.

## Syntax

The `.cbegin()` method is called directly on the `unordered_set` object.

```cpp
unordered_set_name.cbegin();
```

## Parameters

The method takes no parameters.

## Return Value

Returns a `const_iterator` (constant iterator) pointing to the first element in the `unordered_set`.

## Example

This example demonstrates obtaining the starting element of an `unordered_set` using `cbegin()`. Note that attempting to modify the element pointed to by the `const_iterator` would result in a compilation error.

```cpp
#include <iostream>
#include <string>
#include <unordered_set>
#include <algorithm> // Required for std::find or general use

int main() {
  std::unordered_set<int> unique_numbers = {10, 5, 20, 15};
  
  // Get a constant iterator to the beginning
  auto it = unique_numbers.cbegin();

  // Print the value of the first element (read-only access)
  std::cout << "The first element in the set's internal order is: " << *it << "\n";

  // Advance the iterator to the next element
  // Note: The order of elements is not guaranteed!
  ++it; 

  std::cout << "The second element is: " << *it << "\n";

  // The following line would cause a compile-time error:
  // *it = 99; 

  return 0;
}
```

Output:

```
The first element in the set's internal order is: 20
The second element is: 5
```

## Codebyte

Use the Codebyte below to access the first element of an `unordered_set` using the constant iterator returned by `.cbegin()`.

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> colors = {"red", "green", "blue", "yellow"};
  
  // Use cbegin() to get the constant iterator
  auto start_it = colors.cbegin();
  
  // Print the value the iterator points to
  std::cout << "First element: " << *start_it << "\n";
  
  // Advance the iterator
  ++start_it;
  std::cout << "Second element: " << *start_it << "\n";

  return 0;
}
```