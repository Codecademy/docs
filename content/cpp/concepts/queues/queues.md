---
Title: 'Queues'
Description: 'Queues are container adaptors that store elements in a first-in-first-out order.'
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

**Queues** are container adaptors that store elements in a first-in-first-out (FIFO) order. Elements inserted into the queue first are removed first.

## Syntax

```pseudo
#include <queue>

queue<type> queueName;
```

`type` is the [data type](https://www.codecademy.com/resources/docs/cpp/data-types) that will be stored in the queue.

## Codebyte Example

The following codebyte example creates an empty queue, adds elements using the [`.push()`](https://www.codecademy.com/resources/docs/cpp/queues/push) method, and then prints the elements from the queue:

```codebyte/cpp
#include <iostream>
#include <queue>

int main() {
  // Declaring a queue
  std::queue<std::string> subjects;

  // Inserting elements
  subjects.push("Math");
  subjects.push("English");
  subjects.push("History");

  // Print Queue
  while (!subjects.empty()) {
    std::cout << subjects.front() << "\n";
    subjects.pop();
  }
}
```
