---
Title: '.swap()'
Description: 'Swaps the values of two queues.'
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

The **`.swap()`** function swaps the values of two queues. The queues must have the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types), although size can differ.

## Syntax

The `.swap()` method can be used with the following syntax:

```pseudo
queue1.swap(queue2); // or swap(queue1, queue2);
```

## Example

This example demonstrates the usage of the swap method with string queues:

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
  // Declare queues
  queue<string> hello;
  queue<string> world;

  // Populate queues
  hello.push("hello");
  world.push("world");

  // Swap the values of the queues
  hello.swap(world);

  // Print queue values
  cout << hello.front() << " " << world.front();
}
```

The expected output would be:

```
world hello
```

## Codebyte Example

The following codebyte exapmle below uses `.swap()` on two int queues:

```codebyte/cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
  // Declare queues
  queue<int> a;
  queue<int> b;

  // Populate queues
  a.push(1);
  a.push(2);
  b.push(3);
  b.push(4);

  // Swap the values of a and b
  a.swap(b);

  // Print queue values
  cout << "a: " << a.front() << ", " << a.back() << endl;
  cout << "b: " << b.front() << ", " << b.back();
}
```
