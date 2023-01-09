---
Title: '.front()'
Description: 'Returns the next element within the queue.'
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

The **`.front()`** method returns the next element within the queue. This will be the oldest element of the queue or the element which was added the earliest.

## Syntax

The `.front()` method can be called on a queue using the following syntax:

```pseudo
queueName.front();
```

## Codebyte Example

The following codebyte example calls the `.front()` method on the `colors` queue:

```codebyte/cpp
#include <iostream>
#include <queue>

int main() {
  // Declaring a queue
  std::queue<std::string> colors;

  // Inserting elements
  colors.push("Red");
  colors.push("Blue");
  colors.push("Green");
  colors.push("Yellow");

  // Print out next element
  std::cout << colors.front();
}
```
