---
Title: '.max_size()'
Description: 'Returns the maximum number of elements the map container can theoretically hold.'
Subjects:
  - 'AI'
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

The `.max_size()` method in C++ maps returns the maximum number of elements the `std::map` container can theoretically hold based on system/library implementation constraints. This value depends on the system's available memory and the implementation's internal structures.

## Syntax

```cpp
size_type max_size() const noexcept;
```

- **Return Value**: An unsigned integer (`size_type`) representing the maximum potential size the map can reach.
- **Noexcept**: Guaranteed not to throw exceptions.
- **Complexity**: Constant time O(1).

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

The above code returns the following output:

```shell
Max size of the map: 256204778801521550
```

## Codebyte Example

Here's a compilable example demonstrating `.max_size()`:

```codebyte/cpp
#include <iostream>
#include <map>

int main() {
  std::map<char, int> exampleMap;

  std::cout << "Maximum possible size of the map: " 
        << exampleMap.max_size() << "\n";

  // Compare with actual size
  std::cout << "Current size of the map: " 
        << exampleMap.size() << "\n";

  return 0;
}
```

In the above code, `.max_size()` returns a huge number (system-dependent), while `.size()` shows `0` for the empty map. 
