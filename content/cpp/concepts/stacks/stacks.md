---
Title: 'Stacks'
Description: 'Stacks are a container that stores elements in a last-in first-out (LIFO) order.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Types'
  - 'Collections'
  - 'Stacks'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **`stack`** is a container that stores elements in a last-in first-out (LIFO) order. They are implemented as a container adaptor, a class that uses another container class as its underlying container. The underlying container class can be a `vector`, `deque` or a `list`. If none is specified when creating a `stack` instance, the default `deque` is used.

## Syntax

```pseudo
std::stack<dataType> stackName;

std::stack<dataType, containerType<dataType>> stackName;
```

A `stack` requires a [data type](https://www.codecademy.com/resources/docs/cpp/data-types) specified. A container type can be specified, but it must use the same data type. If a container type is not specified, the default `deque<dataType>` is used.

## Codebyte Example

The following example creates a `stack` and [pushes](https://www.codecademy.com/resources/docs/cpp/stacks/push) and [pops](https://www.codecademy.com/resources/docs/cpp/stacks/pop) elements off the stack:

```codebyte/cpp
#include <iostream>
#include <stack>
#include <string>

int main(){

  std::stack<std::string> myStack;
  myStack.push("A");
  myStack.push("B");
  myStack.push("C");
  myStack.push("D");
  
  myStack.pop();
  myStack.pop();
  
  while (!myStack.empty()) {
    std::cout << ' ' << myStack.top();
    myStack.pop();
  }
}
```
