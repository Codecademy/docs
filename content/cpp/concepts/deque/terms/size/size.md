---
Title: 'size()'
Description: 'Returns the number of elements in a deque container.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Deques'
  - 'Methods'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`size()`** function returns the number of elements currently stored in a `std::deque` container. It has constant time complexity (O(1)) and is marked noexcept since C++11.

## Syntax

```pseudo
deque_object.size();
```

**Parameters:**

This function does not take any parameters.

**Return value:**

Returns a value of type `size_type` (an unsigned integral type) representing the number of elements in the deque.

## Example 1

In this example, the size method is used to check the element count of an initially empty deque, then after `push_back` operations:

```cpp
#include <deque>
#include <iostream>

int main() {
  std::deque<int> d;
  std::cout << "Initial size: " << d.size() << "\n";

  for (int i = 0; i < 5; ++i) {
    d.push_back(i);
  }
  std::cout << "Size after push_back 5 elements: " << d.size() << "\n";

  return 0;
}
```

The output of this code is:

```shell
Initial size: 0
Size after push_back 5 elements: 5
```

## Example 2

In this example, the size method is used after insert and pop operations to illustrate dynamic changes in element count:

```cpp
#include <deque>
#include <iostream>

int main() {
  std::deque<int> d = {1, 2, 3};
  std::cout << "Initial size: " << d.size() << "\n";

  d.pop_front();
  d.pop_back();
  std::cout << "Size after two pops: " << d.size() << "\n";

  d.insert(d.begin(), 10);
  std::cout << "Size after one insert at front: " << d.size() << "\n";

  return 0;
}
```

The output of this code is:

```shell
Initial size: 3
Size after two pops: 1
Size after one insert at front: 2
```

## Codebyte Example

In this example, the size method is repeatedly checked in a loop until the deque becomes empty:

```codebyte/cpp
#include <iostream>
#include <deque>

int main() {
  std::deque<char> letters = {'A', 'B', 'C', 'D', 'E'};

  while (!letters.empty()) {
    std::cout << "Current size: " << letters.size() << " front element: " << letters.front() << "\n";
    letters.pop_front();
  }

  std::cout << "Final size after emptying: " << letters.size() << "\n";
  return 0;
}
```

## Frequently Asked Questions

### 1. What does `size()` do in C++?

The `size()` function in C++ returns the number of elements present in a container, such as a `std::deque`, `std::vector`, or `std::string`. It gives the current length of the container in constant time (O(1)) without modifying it.

### 2. What is a deque function in C++?

A deque (double-ended queue) in C++ is a Standard Template Library (STL) container that allows insertion and deletion of elements from both the front and back efficiently.

### 3. How to get the size of a deque in C++?

You can get the number of elements in a deque using the `size()` member function.
