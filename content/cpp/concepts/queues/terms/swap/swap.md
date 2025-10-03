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
a.swap(b); // or swap(a, b);
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