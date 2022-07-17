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

The **`.pop()`** method removes the last item addted to the top of the [`stack`](https://www.codecademy.com/resources/docs/cpp/stacks), reducing its size bt one.

## Syntax

The `.pop()` method is called on a stack using the following syntax:

```pseudo
stackName.pop();
```

## Codebyte Example

The following example cerates a stack `myStack` and after adding some elements, removes them with the `.pop()` method. Note at the end, `myStack` is empty.

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
