---
Title: '.max_size()'
Description: 'Returns the maximum number of elements the map container can theoretically hold.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Data Structures'
  - 'Methods'
  - 'Map'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.max_size()`** method in C++ for `std::map` returns the maximum number of elements that the container can theoretically hold. This value is determined by the system's memory limitations and the internal data structure used by the implementation (typically a balanced binary tree such as Red-Black Tree). It does not reflect the amount of memory currently available, but rather the upper bound imposed by the container's allocator and type limits.

## Syntax

```pseudo
map_name.max_size();
```

**Parameters:**

The `.max_size()` method does not take any parameters.

**Return value:**

The `.max_size()` method returns a `size_type` value representing the maximum number of elements the map can theoretically hold.

> **Note:** The `.max_size()` method is marked noexcept, meaning it is guaranteed not to throw any exceptions when called.
> **Note:** The `.max_size()` method has constant time complexity (O(1)), so it executes in the same fixed time regardless of the map’s size.

## Example

In this example, `std::map` stores key-value pairs where the key is an `int` and the value is a `std::string`:

```cpp
#include <iostream>
#include <map>

int main() {
  std::map<int, std::string> myMap;

  std::cout << "Max size of the map: " << myMap.max_size() << std::endl;

  return 0;
}
```

This code outputs a large number (system and implementation-dependent), for example:

```shell
Max size of the map: 256204778801521550
```

## Codebyte Example

Here's a compilable example demonstrating `.max_size()`:

```codebyte/cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
  map<char, int> exampleMap;

  cout << "Maximum possible size of the map: "
        << exampleMap.max_size() << endl;

  // Compare with actual size
  cout << "Current size of the map: "
        << exampleMap.size() << endl;
  return 0;
}
```

In this code, `.max_size()` returns a very large number (depending on system and implementation), while `.size()` shows 0 because the map is empty.
