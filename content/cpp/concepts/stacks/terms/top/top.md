---
Title: '.top()'
Description: 'Returns the element on the top of the stack.'
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

The **`.top()`** method returns the top element on the `stack`. This will be the most recently added element on the `stack` since they follow a last-in first-out (LIFO) insertion order.

## Syntax

The `.top()` method can be called on a `stack` using the following syntax:

```pseudo
stackName.top();
```

## Codebyte Example

The following example calls the `.top()` method to print successive entries from `myStack`:

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

  while (!myStack.empty()) {
    std::cout << ' ' << myStack.top();
    myStack.pop();
  }
}
```
