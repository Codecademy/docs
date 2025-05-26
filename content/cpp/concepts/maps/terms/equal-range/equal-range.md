---
Title: '.equal_range()'
Description: 'Returns a pair of iterators defining the range of elements with the given key'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Iterators'
  - 'Map'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.equal_range()`** function returns a pair of iterators that define the range of elements matching a given key in an associative container. It is especially useful with `multimap`, where multiple elements can have the same key, allowing you to retrieve all of them efficiently. In a `map`, where keys are unique, the returned range will contain at most one element.

### Syntax

```pseudo
mapName.equal_range(key);
```

**Parameters:**

- `key`: The key value to search for in the map.

**Return value:**
- Returns a `std::pair` of iterators:

  - The first iterator points to the first element equal to the key (or the position where it would be inserted).
  - The second iterator points to the element just past the last element equal to the key.

### Example

```cpp
#include <iostream>
#include <map>

int main() {
  std::map<int, std::string> myMap = {
    {1, "apple"},
    {2, "banana"},
    {3, "cherry"},
    {4, "date"},
    {5, "elderberry"}
  };

  // Find the range of elements with key 3
  auto range = myMap.equal_range(3);

  if (range.first != range.second) {
    std::cout << "Elements with key 3:" << std::endl;
      for (auto it = range.first; it != range.second; ++it) {
        std::cout << it->first << " => " << it->second << std::endl;
      }
  } else {
    std::cout << "No elements with key 3 found." << std::endl;
  }

  return 0;
}
```

Output:

```shell
Elements with key 3:
3 => cherry
```

### Explanation

In this example, we create a set of integers and use the `equal_range()` function to find the range of elements equal to 3. Since sets do not allow duplicate elements, the range will contain only one element (3) in this case.

If you were to use a `std::multiset`, which allows duplicate elements, the range could contain multiple elements if they are equal to the specified value.
