---
Title: '.erase()'
Description: 'Removes a single element or a range of elements from a vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.erase()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) removes a single element or a range of elements from a vector. When it removes an element, the size of the vector decreases and the elements after the deleted one are shifted to fill the gap. In case of removing multiple elements, the positions of the elements to be removed are specified using the `.begin()` and/or `.end()` functions.

## Syntax

```pseudo
vector.erase(position); // Removing an element
vector.erase(starting_position, ending_position); // Removing multiple elements
```

**Parameters:**

- `position`: An iterator pointing to the position of the element to be removed.
- `starting_position`: An iterator indicating the beginning of the range of elements to be removed.
- `ending_position`: An iterator indicating the end of the range of elements to be removed.

**Return value:**

The `.erase()` function doesn't return any value.

## Example 1: Removing an Element Using `.erase()`

In this example, the `.erase()` function removes a single element from a vector:

```cpp
#include <iostream>
#include <vector>

int main()
{
  // Declare a vector
  std::vector<int> room;

  // Add values
  for(int i=1; i<=10; i++) room.push_back(i);

  // Remove the 3rd element
  room.erase(room.begin()+2);

  // Print the remaining elements in the vector
  std::cout << "Rooms available:";

  for (unsigned i=0; i<room.size(); ++i)
    std::cout << ' ' << room[i];
  std::cout << '\n';

  return 0;
}
```

The output for this code is:

```shell
Rooms available: 1 2 4 5 6 7 8 9 10
```

## Example 2: Removing Multiple Elements Using `.erase()`

This example uses `.erase()` to remove a range of elements from a vector:

```cpp
#include <iostream>
#include <vector>

int main()
{
  // Declare a vector
  std::vector<int> room;

  // Add values
  for(int i=1; i<=10; i++) room.push_back(i);

  // Remove the last 3 elements
  room.erase(room.begin()+7, room.end());

  // Print the remaining elements in the vector
  std::cout << "Rooms available:";

  for (unsigned i=0; i<room.size(); ++i)
    std::cout << ' ' << room[i];
  std::cout << '\n';

  return 0;
}
```

The output for this code is:

```shell
Rooms available: 1 2 3 4 5 6 7
```

## Codebyte Example: Using `.erase()` with a Map

This codebyte example uses `.erase()` to remove a key-value pair from a [map](https://www.codecademy.com/resources/docs/cpp/maps):

```codebyte/cpp
#include <iostream>
#include <map>

int main() {
  std::map<std::string, int> age = {
    {"Alice", 25},
    {"Bob", 30},
    {"Charlie", 35}
  };

  // Erase an element by key
  age.erase("Bob");

  for (auto& pair : age) {
    std::cout << pair.first << ": " << pair.second << "\n";
  }

  return 0;
}
```

Here, the key-value pair in which the key is "Bob" will be removed.

## Frequently Asked Questions

### 1. Can I use `.erase()` inside a loop?

Yes, you can use `.erase()` inside a loop, but with caution. When erasing while iterating, always update the iterator correctly to avoid invalidation issues.

### 2. What happens if I try to erase a non-existing key from a map using `.erase()`?

Nothing — no error will occur if you try to erase a non-existing key from a map using `.erase()`. The size remains unchanged.

### 3. How efficient is `.erase()`?

The efficiency of `.erase()` depends on what it is applied on:

- Vector/String: Linear time _O(n)_ since elements may need to shift.
- Map/Set: Logarithmic time _O(log n)_ due to tree structure.
- Unordered map/Unordered set: Average constant time _O(1)_.
