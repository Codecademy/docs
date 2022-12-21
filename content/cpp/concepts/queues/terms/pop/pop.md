---
Title: '.pop()'
Description: 'Removes the element at the front of the queue.'
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

The **`.pop()`** method removes the element at the front of the queue. This will be the oldest element in the queue or the element which was added the earliest.

## Syntax

The `.pop()` method is called on a queue using the following syntax:

```pseudo
queueName.pop();
```

## Codebyte Example

The codebyte example below shows `.pop()` being used on the `utensils` queue:

```codebyte/cpp
#include <iostream>
#include <queue>

int main() {
  // Declaring a queue
  std::queue<std::string> utensils;

  // Inserting elements
  utensils.push("fork");
  utensils.push("knife");
  utensils.push("spoon");

  // Pop next element
  utensils.pop();

  // Print out queue size
  std::cout << utensils.size();
}
```
