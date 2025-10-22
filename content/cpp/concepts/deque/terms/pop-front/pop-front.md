---
Title: 'pop_front()'
Description: 'Removes the first element from a deque container in C++.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Deques'
  - 'Methods'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`pop_front()`** method in C++ deque removes or pops the first (front) element from the deque, reducing its size by one.

## Syntax

```pseudo
deque_name.pop_front();
```

**Parameters:**

This method does not take any parameters.

**Return value:**

`pop_front()` does not return anything and removes the first element from the deque

## Example

In this example, the first element of an integer deque is removed, and the updated deque is printed:

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<int> numbers = {10, 20, 30, 40};

  // Remove the first element
  numbers.pop_front(); // Removes 10

  cout << "Deque after pop_front(): ";
  for (int num : numbers) {
    cout << num << " ";
  }

  return 0;
}
```

The output of this code is:

```shell
Deque after pop_front(): 20 30 40
```

## Codebyte Example

In this example, the first element of a string deque is removed, and the new front element is displayed:

```codebyte/cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<string> names = {"Alice", "Bob", "Charlie"};

  // Removes the first element
  names.pop_front(); // Removes "Alice"

  cout << "Front element after pop_front(): " << names.front() << endl;
  return 0;
}
```
