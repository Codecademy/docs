---
Title: '.size()'
Description: 'Returns the number of elements in the stack.'
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

The **`.size()`** method returns the number of elements in the `stack`.

## Syntax

The `.size()` method is called on a `stack` using the following syntax:

```pseudo
stackName.size();
```

## Codebyte Example

The following example uses the `.size()` method on `myStack`:

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

  std::cout << myStack.size() << '\n';

  myStack.pop();
  myStack.pop();

  std::cout << myStack.size() << '\n';

  while (!myStack.empty()) {
    myStack.pop();
  }

  std::cout << myStack.size() << '\n';
}
```
