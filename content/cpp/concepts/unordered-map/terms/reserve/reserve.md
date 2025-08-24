---
Title: '.reserve()'
Description: 'Reserves space for at least the specified number of elements in an unordered map.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Map'
  - 'Memory'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.reserve()`** method reserves space for at least the specified number of elements in an unordered map, helping optimize performance by reducing costly rehash operations during bulk insertions.

## Syntax

```pseudo
mapName.reserve(count);
```

**Parameters:**

- `count`: The minimum number of elements to reserve space for.

**Return value:**

This is a `void` method. It doesn’t return a value but affects the internal capacity of the unordered map.

## Example

This example demonstrates the use of the `.reserve()` method with an unordered map to optimize performance when adding student grades:

```cpp
#include <iostream>
#include <unordered_map>

int main() {
  // Initializing unordered_map and reserving space for 10 elements
  std::unordered_map<std::string, int> studentGrades;
  studentGrades.reserve(10);

  // Adding student grades
  studentGrades["Alice"] = 95;
  studentGrades["Bob"] = 87;
  studentGrades["Charlie"] = 92;
  studentGrades["Diana"] = 88;

  std::cout << "Student grades after reservation:\n";
  for (const auto& student : studentGrades) {
    std::cout << student.first << ": " << student.second << std::endl;
  }

  std::cout << "Bucket count: " << studentGrades.bucket_count() << std::endl;

  return 0;
}
```

Here is the output:

```shell
Student grades after reservation:
Charlie: 92
Bob: 87
Diana: 88
Alice: 95
Bucket count: 11
```

## Codebyte Example

This codebyte example demonstrates the use of the `.reserve()` method with an unordered map to store employee information efficiently:

```codebyte/cpp
#include <iostream>
#include <unordered_map>

int main() {
  // Initializing unordered_map with employee IDs and names
  std::unordered_map<int, std::string> employees;

  // Reserve space for 8 employees to optimize performance
  employees.reserve(8);

  // Adding employee data
  employees[101] = "John";
  employees[102] = "Sarah";
  employees[103] = "Mike";
  employees[104] = "Emma";

  std::cout << "Employee roster:\n";
  for (const auto& emp : employees) {
    std::cout << "ID " << emp.first << ": " << emp.second << std::endl;
  }

  std::cout << "Reserved bucket count: " << employees.bucket_count() << std::endl;

  return 0;
}
```
