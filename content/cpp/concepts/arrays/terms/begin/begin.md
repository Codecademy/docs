---
Title: 'begin()'
Description: 'Returns an iterator pointing to the first element of an array container'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Iterators'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`begin()`** function is a member function used with C++ array containers and the standard `std::begin()` function that returns an iterator pointing to the first element of an array or array-like container. It provides a standardized way to access the beginning of containers, enabling iteration through elements and compatibility with range-based `for` [loops](https://www.codecademy.com/resources/docs/cpp/loops) and STL algorithms.

## Syntax

For `std::array` containers:

```pseudo
arrayname.begin()
```

For regular arrays using `std::begin()`:

```pseudo
std::begin(arrayname)
```

**Parameters:**

No parameters are required

**Returns:**

Returns an iterator (random-access for `std::array`) pointing to the first element.

## Example 1: Basic Iterator Usage with `begin()`

This example demonstrates the basic usage of `begin()` with `std::array` to iterate through elements:

```cpp
#include <iostream>
#include <array>

int main() {
  // Create an array with 5 elements
  std::array<int, 5> numbers = {10, 20, 30, 40, 50};

  // Use begin() to get iterator to first element
  auto it = numbers.begin();

  std::cout << "First element: " << *it << std::endl;

  // Iterate through all elements using begin() and end()
  for (auto iter = numbers.begin(); iter != numbers.end(); ++iter) {
    std::cout << *iter << " ";
  }
  std::cout << std::endl;

  return 0;
}
```

The output of this code is:

```shell
First element: 10
10 20 30 40 50
```

## Example 2: Range-Based For Loop With `begin()`

This example shows how `begin()` works behind the scenes with range-based for loops in real-world scenarios like processing student grades:

```cpp
#include <iostream>
#include <array>

int main() {
  // Student test scores
  std::array<int, 6> scores = {85, 92, 78, 96, 88, 91};

  // Calculate average using range-based for loop
  // (which internally uses begin() and end())
  int total = 0;
  for (const auto& score : scores) {
    total += score;
  }

  double average = static_cast<double>(total) / scores.size();

  std::cout << "Student Scores: ";
  for (const auto& score : scores) {
    std::cout << score << " ";
  }
  std::cout << std::endl;
  std::cout << "Average Score: " << average << std::endl;

  return 0;
}
```

The output of this code is:

```shell
Student Scores: 85 92 78 96 88 91
Average Score: 88.33
```

## Codebyte Example: Using `std::begin()` with Regular Arrays

This example demonstrates using `std::begin()` with traditional C-style arrays for compatibility with STL algorithms:

```codebyte/cpp
#include <iostream>
#include <algorithm>

int main() {
  // Regular C-style array
  int temperatures[] = {72, 75, 68, 80, 77, 73, 69};
  int size = sizeof(temperatures) / sizeof(temperatures[0]);

  // Use std::begin() and std::end() for compatibility
  std::cout << "Daily temperatures: ";
  for (auto it = std::begin(temperatures); it != std::end(temperatures); ++it) {
    std::cout << *it << "F ";
  }
  std::cout << std::endl;

  // Find maximum temperature using STL algorithm
  auto max_temp = std::max_element(std::begin(temperatures), std::end(temperatures));
  std::cout << "Highest temperature: " << *max_temp << "F" << std::endl;

  // Sort temperatures
  std::sort(std::begin(temperatures), std::end(temperatures));
  std::cout << "Sorted temperatures: ";
  for (const auto& temp : temperatures) {
    std::cout << temp << "F ";
  }
  std::cout << std::endl;

  return 0;
}
```

## Frequently Asked Questions

### 1. What is the difference between `std::array` data and begin?

`data()` returns a pointer to the underlying array data, providing direct access to the raw array elements. `begin()` returns an iterator to the first element, which is designed for safe iteration and compatibility with STL algorithms.

### 2. What does arr `begin()` return?

For `std::array`, `begin()` returns a random-access iterator, not just a bidirectional iterator. Random-access iterators are more powerful and support additional operations.

### 3. What does begin do in C++ array?

`begin()` provides a standardized way to obtain an iterator to the first element of an array container. It enables iteration through elements, compatibility with range-based for loops, and integration with STL algorithms for operations like sorting, searching, and transforming data.
