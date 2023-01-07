---
Title: '.push()'
Description: 'Adds an element to the back of the queue.'
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

The **`.push()`** method adds an element to the back of the queue.

## Syntax

The `.push()` method is called on a queue using the following syntax:

```pseudo
queueName.push(value);
```

The `value` must be the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types) as `queueName`.

## Codebyte Example

The codebyte example below uses `.push()` to insert several even integers into the `even` queue:

```codebyte/cpp
#include <iostream>
#include <queue>

int main() {
  // Declaring a queue
  std::queue<int> even;

  // Inserting elements
  even.push(16);
  even.push(58);
  even.push(24);
  even.push(62);

  // Printing size of queue
  std::cout << even.size();
}
```
