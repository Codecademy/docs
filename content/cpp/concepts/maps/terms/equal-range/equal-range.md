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

### Parameters

- **`key`**: The value for which the range is to be found.
- **`iterator`**: The type of iterator used in the set or multiset.
- **`pair`**: A pair of iterators representing the range of elements equivalent to the specified value.

### Return Value

The function returns a pair of iterators. The first iterator points to the first element in the range that is equivalent to the specified value, and the second iterator points to the first element that is greater than the specified value (i.e., the end of the range).

### Example

```cpp
#include <iostream>
#include <set>

int main() {
    std::set<int> mySet = {1, 2, 3, 4, 5};

    // Find the range of elements equal to 3
    auto range = mySet.equal_range(3);

    std::cout << "Elements equal to 3: ";
    for (auto it = range.first; it != range.second; ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

Output:

```shell
Elements equal to 3: 3 
```

### Explanation

In this example, we create a set of integers and use the `equal_range()` function to find the range of elements equal to 3. Since sets do not allow duplicate elements, the range will contain only one element (3) in this case.

If you were to use a `std::multiset`, which allows duplicate elements, the range could contain multiple elements if they are equal to the specified value.
