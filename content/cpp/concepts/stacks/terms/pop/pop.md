---
Title: '.pop()'
Description: 'Removes the last item added to the top of the stack.'
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

The **`.pop()`** method removes the last item added to the top of the `stack`, reducing its size by one.

## Syntax

The `.pop()` method is called on a stack using the following syntax:

```pseudo
stackName.pop();
```

## Codebyte Example

The following example features a stack `myStack` that is initially populated with values. The top two are removed with the `.pop()` method:

```codebyte/cpp
#include <iostream>
#include <stack>
#include <string>

int main() {
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
