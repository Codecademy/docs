---
Title: '.size()'
Description: 'Returns the number of elements in the queue.'
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

The **`.size()`** method returns the number of elements in the queue.

## Syntax

The `.size()` method is called on a queue using the following syntax:

```pseudo
queueName.size();
```

## Codebyte Example

The codebyte example below uses the `.size()` method on the `pizzas` queue:

```codebyte/cpp
#include <iostream>
#include <queue>

int main() {
  // Declaring a queue
  std::queue<std::string> pizzas;

  // Inserting elements
  pizzas.push("Margherita");
  pizzas.push("Sicilian");
  pizzas.push("Hawaiian");

  // Print out queue size
  std::cout << pizzas.size();
}
```
