---
Title: 'Deque'
Description: 'A dynamic data structure from the STL that allows fast insertion and deletion of elements from both the front and back.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **deque** (double-ended queue) in C++ is a sequence container that allows adding and removing elements from both the front and back efficiently. Unlike a vector, which only allows fast insertions and deletions at the back, a deque provides constant time complexity for insertions and deletions at both ends. This is useful for scenarios like implementing queues, stacks, or sliding window algorithms.

## Syntax

```pseudo
std::deque<datatype> name;
```

- `datatype`: The type of elements the deque will hold (e.g., int, float, string, etc.).
- `name`: The name of the deque.

## Example

The following code inserts elements (`13` & `8`) at the front and back and access them.

```cpp
#include <deque>
#include <iostream>

int main() {
  std::deque<int> myDeque;  // Declare a deque of integers

  myDeque.push_back(13);    // Insert element at the back
  myDeque.push_front(8);    // Insert element at the front

  std::cout << "Front: " << myDeque.front() << std::endl;
  std::cout << "Back: " << myDeque.back() << std::endl;

  return 0;
}
```

The output of the above program will be:

```shell
Front: 8
Back: 13
```

## Equivalent Methods in Stack, Queue, and Deque

| Operation   | Stack                                                                     | Queue                                                                             | Deque                         |
| ----------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------- |
| Insert      | [`push()`](https://www.codecademy.com/resources/docs/cpp/stacks/push)     | [`push()`](https://www.codecademy.com/resources/docs/cpp/queues/push) (back)      | `push_back()`, `push_front()` |
| Remove      | [`pop()`](https://www.codecademy.com/resources/docs/cpp/stacks/pop) (top) | [`pop()`](https://www.codecademy.com/resources/docs/cpp/queues/pop) (front)       | `pop_back()`, `pop_front()`   |
| Access      | [`top()`](https://www.codecademy.com/resources/docs/cpp/stacks/top)       | [`front()`](https://www.codecademy.com/resources/docs/cpp/queues/front), `back()` | `front()`, `back()`           |
| Check Empty | [`empty()`](https://www.codecademy.com/resources/docs/cpp/stacks/empty)   | [`empty()`](https://www.codecademy.com/resources/docs/cpp/queues/empty)           | `empty()`                     |
