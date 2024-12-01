---
Title: '.upper_bound()'
Description: 'Returns an iterator to the first element that is greater than the specified key.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.upper_bound()`** function in a map returns an iterator pointing to the first element whose key is greater than the given key. If no such key exists, the iterator points to the map's `.end()`.

## Syntax

```pseudo
mapName.upper_bound(key);
```

- `key`: The key whose upper bound is needed.

## Example

The example below demonstrates using `.upper_bound()` to find the first student with a roll number greater than a specified value:

```cpp
#include <iostream>
#include <map>

int main() {
    // Map with roll numbers as keys and student names as values
    std::map<int, std::string> students;

    students[101] = "John";
    students[103] = "Alice";
    students[105] = "Bob";

    // Find the first student with a roll number greater than 102
    auto it = students.upper_bound(102);

    if (it != students.end()) {
        std::cout << "The student with roll number greater than 102 is: " << it->second << " (Roll No: " << it->first << ")" << std::endl;
    } else {
        std::cout << "No student found with roll number greater than 102." << std::endl;
    }

    return 0;
}
```

The code above produces the following output:

```shell
The student with a roll number greater than 102 is: Alice (Roll No: 103)
```

## Codebyte Example

The following codebyte example demonstrates how `.upper_bound()` works by returning iterators to keys greater than 11, 13, and 17 in a map of integers:

```codebyte/cpp
#include <iostream>
#include <map>

int main() {
  // Initializing map
  std::map<int, int> mp;

  // Adding elements
  mp.insert({12, 30});
  mp.insert({11, 10});
  mp.insert({15, 50});
  mp.insert({14, 40});

  // Upper bound when the key is present
  auto it = mp.upper_bound(11);
  std::cout << "The upper bound of key 11 is " << it->first << " " << it->second << std::endl;

  // Upper bound when the key is absent
  it = mp.upper_bound(13);
  std::cout << "The upper bound of key 13 is " << it->first << " " << it->second << std::endl;

  // Upper bound when key exceeds maximum key
  it = mp.upper_bound(17);
  if (it == mp.end()) {
    std::cout << "The upper bound of key 17 points to end()." << std::endl;
  }

  return 0;
}
```
