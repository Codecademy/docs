---
Title: '.empty()'
Description: 'Returns true if the stack has no elements.'
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

The **`.empty()`** method returns `true` if the `stack` has no elements. Otherwise, it returns `false`.

## Syntax

The `.empty()` method can be called on a `stack` using the following syntax:

```pseudo
stackName.empty();
```

## Codebyte Example

The following example uses the `.empty()` method to [loop](https://www.codecademy.com/resources/docs/cpp/loops) through the values of `myStack` and [pop](https://www.codecademy.com/resources/docs/cpp/stacks/pop) off the next value until it is empty:

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
