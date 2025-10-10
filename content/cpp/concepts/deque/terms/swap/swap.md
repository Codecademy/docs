---
Title: '.swap()' 
Description: 'Exchanges the contents of one deque with another of the same type and size.' 
Subjects: 
 - 'Code Foundations'
 - 'Computer Science'
Tags: 
  - 'Classes'
  - 'Containers'
  - 'Deques'
  - 'Data Structures"
CatalogContent: 
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.swap()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) exchanges the contents of one [`deque`](https://www.codecademy.com/resources/docs/cpp/deque) with another deque of the same type. After the swap, each deque holds the elements that were originally in the other.

## Syntax

```pseudo
deque1.swap(deque2);
```

**Parameters:**

- `deque2`: The deque whose contents will be exchanged with `deque1`.

**Return value:**

This method does not return a value.

## Example

This example demonstrates swapping the contents of two integer deques using `.swap()`:

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<int> deque1 = {1, 2, 3};
  deque<int> deque2 = {10, 20, 30, 40};

  cout << "Before swap:" << endl;
  cout << "Deque 1: ";
  for (int num : deque1) cout << num << " ";
  cout << endl;

  cout << "Deque 2: ";
  for (int num : deque2) cout << num << " ";
  cout << endl;

  deque1.swap(deque2);

  cout << "\nAfter swap:" << endl;
  cout << "Deque 1: ";
  for (int num : deque1) cout << num << " ";
  cout << endl;

  cout << "Deque 2: ";
  for (int num : deque2) cout << num << " ";
  cout << endl;

  return 0;
}
```

The output of this code is:

```shell
Before swap:
Deque 1: 1 2 3
Deque 2: 10 20 30 40

After swap:
Deque 1: 10 20 30 40
Deque 2: 1 2 3
```

## Codebyte Example

This example swaps the contents of two deques containing strings:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>
using namespace std;

int main() {
  deque<string> dequeA = {"apple", "banana"};
  deque<string> dequeB = {"cherry", "date"};

  cout << "Before swap:" << endl;
  cout << "Deque A:";
  for (const auto& value : dequeA) cout << ' ' << value;
  cout << "\nDeque B:";
  for (const auto& value : dequeB) cout << ' ' << value;

  dequeA.swap(dequeB);

  cout << "\n\nAfter swap:" << endl;
  cout << "Deque A:";
  for (const auto& value : dequeA) cout << ' ' << value;
  cout << "\nDeque B:";
  for (const auto& value : dequeB) cout << ' ' << value;
}
```
