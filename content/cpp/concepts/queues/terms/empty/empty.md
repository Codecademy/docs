---
Title: '.empty()'
Description: 'Checks if a queue has no elements.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.empty()`** method returns `true` if the [size](https://www.codecademy.com/resources/docs/cpp/queues/size) of the queue is 0. Otherwise, it returns `false`.

## Syntax

The `.empty()` method can be called on a queue using the following syntax:

```pseudo
queueName.empty();
```

## Codebyte Example

The following codebyte example checks whether the `temperatures` queue is empty and prints `"The queue is empty."` if it is. Else, it prints `"The queue is not empty."`.

```codebyte/cpp
#include <iostream>
#include <queue>

int main() {
  // Declare queue
  std::queue<int> temperatures;

  // Insert elements
  temperatures.push(10);
  temperatures.push(28);
  temperatures.push(39);
  temperatures.push(83);

  // Check if queue is empty
  if (temperatures.empty()) {
    std::cout << "The queue is empty.";
  }
  else {
    std::cout << "The queue is not empty.";
  }
}
```
