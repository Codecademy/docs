---
Title: 'at()'
Description: 'Accesses an element at a specified index in a deque with bounds checking.'
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

The **`at()`** function accesses the element at a given index in a deque while performing bounds checking. If the index is out of range, the function throws an `std::out_of_range` exception. This makes it a safer alternative to the subscript operator `[]`, which offers no safety checks.

## Syntax

```pseudo
deque.at(pos)
```

**Parameters:**

- `pos`: A zero-based index of the element to access. Must be within the valid range of the deque.

**Return value:**

Returns a reference to the element at the specified position.

**Exceptions:**

Throws `std::out_of_range` if `pos` is invalid.

## Example 1: Accessing Elements Safely

In this example, `at()` retrieves elements from valid positions in the deque:

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<int> numbers = {10, 20, 30, 40};

  cout << "Element at index 2: " << numbers.at(2) << endl;
  cout << "Element at index 0: " << numbers.at(0) << endl;

  return 0;
}
```

The output of this code is:

```shell
Element at index 2: 30
Element at index 0: 10
```

The `at()` function returns elements at positions 2 and 0 with built-in bounds checking.

## Example 2: Handling Out-of-Range Access

In this example, accessing index 5 triggers an exception because the index is outside the deque's valid range:

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<string> names = {"Ava", "Mira", "Leo"};

  try {
    cout << names.at(5) << endl;
  } catch (const out_of_range& e) {
    cout << "Error: " << e.what() << endl;
  }

  return 0;
}
```

The output of this code is:

```shell
Error: deque::_M_range_check: __n (which is 5)>= this->size() (which is 3)
```

## Codebyte Example

This example demonstrates safe element access and shows how `at()` behaves when an invalid index is used:

```codebyte/cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<char> letters = {'A', 'B', 'C', 'D'};

  cout << "First element: " << letters.at(0) << endl;
  cout << "Third element: " << letters.at(2) << endl;

  try {
    cout << letters.at(10) << endl;
  } catch (const out_of_range& e) {
    cout << "Caught exception: " << e.what() << endl;
  }

  return 0;
}
```

## Frequently Asked Questions

### 1. What is the use of deque in C++?

A deque (double-ended queue) stores elements in a dynamic sequence where insertions and deletions at both the front and back are efficient. It supports random access like a vector but provides faster operations at the beginning of the structure.

### 2. What is a std::deque?

`std::deque` is a standard container that provides a dynamic array-like structure with fast operations at both ends. It is implemented as segmented memory blocks, which allows it to grow without relocating all elements like a vector.

### 3. How to check if deque is empty in C++?

A deque can be checked for emptiness using the `.empty()` method, which returns `true` if it contains no elements and `false` otherwise. This check is constant time and works for all standard containers.
