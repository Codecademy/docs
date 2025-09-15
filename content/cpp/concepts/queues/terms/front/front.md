---
Title: '.front()'
Description: 'Returns a reference to the element at the front of the queue.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Methods'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ **`.front()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) is used to access the element at the front of the queue. Unlike `.back()`, which gives the last element, `.front()` allows programmers to directly work with the element at the beginning without removing it.

## C++ `.front()` Syntax

```pseudo
queueName.front();
```

**Parameters:**

The C++ `.front()` method takes no parameters.

**Return value:**

Returns a reference to the element at the front of the queue.

## Example 1: Basic Usage of C++ `.front()`

This example uses C++ `.front()` to access the first element of the queue:

```cpp
#include <iostream>
#include <queue>

int main() {
  // Declaring a queue
  std::queue<std::string> colors;

  // Inserting elements into the queue
  colors.push("Red");
  colors.push("Blue");
  colors.push("Green");
  colors.push("Yellow");

  // Print the first element of the queue
  std::cout << colors.front();
}
```

Here is the output:

```shell
Red
```

## Example 2: Using C++ `.front()` with `.pop()`

Until the queue is empty, this example uses C++ `.front()` to return the first element of the queue before it is removed using [`.pop()`](https://www.codecademy.com/resources/docs/cpp/queues/pop):

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
  queue<string> q;

  q.push("Alice");
  q.push("Bob");
  q.push("Charlie");

  while (!q.empty()) {
    cout << q.front() << endl;

    // Remove the first element of the queue
    q.pop();
  }

  return 0;
}
```

Here is the output:

```shell
Alice
Bob
Charlie
```

## Codebyte Example: Modifying the First Element Using C++ `.front()`

This codebyte example uses C++ `.front()` to modify the first element of the queue:

```codebyte/cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
  queue<int> q;

  q.push(5);
  q.push(15);

  cout << q.front() << endl;

  // Modify the first element of the queue
  q.front() = 100;

  cout << q.front() << endl;

  return 0;
}
```

## Frequently Asked Questions

### 1. What is the `.front()` function of queue in C++?

The `.front()` function of queue in C++ returns the element at the beginning of the queue without removing it.

### 2. How do you get the front of the queue in C++?

To get the front of the queue in C++, the `.front()` method can be used:

```cpp
q.front();
```

### 3. What does C++ `.front()` return?

The C++ `.front()` method returns the first element of the queue, which can then be used and modified.
