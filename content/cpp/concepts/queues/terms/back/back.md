---
Title: '.back()'
Description: 'Returns a reference to the element at the back of the queue.' 
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

The C++ **`.back()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) is used to access the element at the back of the [queue](https://www.codecademy.com/resources/docs/cpp/queues) without removing it.

## C++ `.back()` Syntax

```pseudo
queueName.back();
```

**Parameters:**

The C++ `.back()` method takes no parameters.

**Return value:**

Returns a reference to the element at the end of the queue.

## Example 1: Basic usage of C++ `.back()`

This example uses C++ `.back()` to access the last element of the queue:

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
  // Declaring a queue
  queue<int> q;

  // Inserting int elements into the queue
  q.push(10);
  q.push(20);
  q.push(30);

  // Print the last element of the queue
  cout <<"Last element: " << q.back() << endl;
}
```

Here is the output of this code:

```shell
Last element: 30
```

## Example 2: Using C++ `.back()` with `.push()`

This example uses C++ `.back()` to return the last element of the queue after we used [`.push()`](https://www.codecademy.com/resources/docs/cpp/queues/push):

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main () {
  queue<string> q;

  q.push("Jhon");
  q.push("Bob");
  q.push("Doe");

  cout <<"Last element: " << q.back() << endl;
  q.push("Alice");
  cout <<"Last element after push: " << q.back() << endl;
}
```

Here is the output of this code:

```shell
Last element: Doe
Last element after push: Alice
```

## Codebyte Example: Modifying the Last Element Using C++ `.back()`

This codebyte example uses C++ `.back()` to modify the last element of the queue:

```codebyte/cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
  queue<int> q;

  q.push(10);
  q.push(20);

  // Print the last element
  cout << "Last element before modification: " << q.back() << endl;

  // Modify the last element
  q.back() = 100;

  // Print the modified last element
  cout << "Last element after modification: " << q.back() << endl;

  return 0;
}
```
