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

The **`.erase()`** [function](https://www.codecademy.com/resources/docs/cpp/functions) removes a single element or a range of elements from a specific position(s) in a vector. When it removes an element(s), the size of the vector decreases and the elements after the deleted one(s) are shifted to fill the gap. The position(s) of the element(s) to remove are identified using the `.begin()` and/or `.end()` functions.

## Syntax

The following syntax is used to remove a single element from a vector:

```pseudo
vector.erase(position);
```

- `vector`: The vector to be iterated.
- `position`: An iterator pointing to the position of the element to be removed.

Here is the syntax for eliminating a range of elements from the vector:

```pseudo
vector.erase(starting_position, ending_position);
```

- `starting_position`: An iterator indicating the beginning of the range to be removed.
- `ending_position`: An iterator indicating the end of the range to be removed.

## Examples

In the example below, the `.erase()` function removes a single element from a vector:

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

The output of the above code is:

```shell
Rooms available: 1 2 4 5 6 7 8 9 10
```

The following example uses `.erase()` to remove a range of elements from a vector:

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

The output of the above code is as follows:

```shell
Rooms available: 1 2 3 4 5 6 7
```
