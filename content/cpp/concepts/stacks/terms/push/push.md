---
Title: '.push()'
Description: 'Adds an element to the top of the stack.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
  - 'Stacks'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.push()`** method adds an element to the top of the stack..

## Syntax

The `.push()` method is called on a stack using the following syntax:

```pseudo
stackName.push(value);
```

The `value` must be the [data type](https://www.codecademy.com/resources/docs/cpp/data-types) that `stackName` was defined with.

## Codebyte Example

The codebyte example below uses `.push()` to add several items to `myStack`:

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

  while (!myStack.empty()) {
    std::cout << ' ' << myStack.top();
    myStack.pop();
  }
}
```
