---
Title: 'Stacks'
Description: 'A stack is a linear data structure that stores elements in a last-in-first-out (LIFO) order.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Data Types'
  - 'Stacks'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, a **stack** is a useful data structure that stores elements in a last-in-first-out (LIFO) order. This means the last element added to the stack is the first one to be removed.

Stacks are implemented as a container adaptor, a [class](https://www.codecademy.com/resources/docs/cpp/classes) that uses another container class as its underlying container. The underlying container class can be a [`vector`](https://www.codecademy.com/resources/docs/cpp/vectors), [`deque`](https://www.codecademy.com/resources/docs/cpp/deque), or [`list`](https://www.codecademy.com/resources/docs/cpp/list).

## Creating a Stack

To create a stack in C++, the `<stack>` header and the `std` namespace need to be included:

```pseudo
#include <stack>
using namespace std;

stack<dataType> stackName;
```

In the syntax:

- `dataType`: The data type of the elements to be stored in the stack.
- `stackName`: The name of the stack.

For example:

```cpp
#include <stack>
using namespace std;

// Create a stack of integers
stack<int> myStack;
```

## Adding Elements to a Stack

The `.push()` method can be used to append an element to the top of a stack:

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
  // Create a stack of integers
  stack<int> myStack;

  // Add elements to the stack
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);

  // Print the elements of the stack
  while(!myStack.empty()) {
    cout << myStack.top() << "\n";

    myStack.pop();
  }

  return 0;
}
```

Here is the output:

```shell
30
20
10
```

## Accessing Elements in a Stack

The `.top()` method can be used to access the top element of a stack:

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
  // Create a stack of integers
  stack<int> myStack;

  // Add elements to the stack
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);

  // Print the top element of the stack
  cout << myStack.top() << "\n";

  return 0;
}
```

Here is the output:

```shell
30
```

## Removing Elements from a Stack

The `.pop()` method can be used to delete or remove an element from the top of a stack:

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
  // Create a stack of integers
  stack<int> myStack;

  // Add elements to the stack
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);

  // Remove the top element of the stack
  myStack.pop();

  // Print the elements of the stack
  while(!myStack.empty()) {
    cout << myStack.top() << "\n";

    myStack.pop();
  }

  return 0;
}
```

Here is the output:

```shell
20
10
```

## Getting the Size of a Stack

The `.size()` method can be used to get the size of a stack:

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
  // Create a stack of integers
  stack<int> myStack;

  // Add elements to the stack
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);

  // Get the size of the stack
  cout << myStack.size() << "\n";

  return 0;
}
```

Here is the output:

```shell
3
```

## Checking if a Stack is Empty

The `.empty()` method is used for checking if a stack is empty. If it is, the method returns `1`. Otherwise, it returns `0`:

```codebyte/cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
  // Create a stack of integers
  stack<int> myStack;

  // Add elements to the stack
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);

  // Check if the stack is empty
  cout << myStack.empty() << "\n";

  return 0;
}
```

## Frequently Asked Questions

### 1. What is the time complexity of stack operations in C++?

All major stack operations—`.push()`, `.top()`, `.pop()`, `.size()`, and `.empty()`—have constant time complexity _O(1)_.

### 2. Is `std::stack` thread-safe?

No, `std::stack` is not thread-safe. You must use synchronization (like `mutex`) in multithreaded applications.

### 3. When should I use a stack in C++?

Stacks are ideal for:

- Reversing data
- Undo features
- Expression evaluation
- Depth-first search (DFS)
- Function call tracking (Recursion)
