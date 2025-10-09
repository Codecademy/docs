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

The **`.swap()`** [method] (https://www.codecademy.com/resources/docs/cpp/methods) exchanges the contents of one deque with another deque of the same type. After the swap, each deque contains the elements that were originally stored in the other. 

## Syntax

```pseudo
deque1.swap(deque2);
```

- `deque1`: The first deque that is going to take the content of deque2.
- `deque2`: The second deque whose contents are exchanged with deque1.

## Example

The following code demonstrates how to swap two integer variables using `.swap()`:

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
  // Create two deques of integers
  std::deque<int> deque1 = {1, 2, 3};
  std::deque<int> deque2 = {10, 20, 30, 40};

  // Display elements before swapping
  std::cout << "Before swap:" << std::endl;
  std::cout << "Deque 1: ";
  for (int num : deque1) std::cout << num << " ";
  std::cout << std::endl;

  std::cout << "Deque 2: ";
  for (int num : deque2) std::cout << num << " ";
  std::cout << std::endl;

  // Swap contents
  deque1.swap(deque2);

  // Display elements after swapping
  std::cout << "\nAfter swap:" << std::endl;
  std::cout << "Deque 1: ";
  for (int num : deque1) std::cout << num << " ";
  std::cout << std::endl;

  std::cout << "Deque 2: ";
  for (int num : deque2) std::cout << num << " ";
  std::cout << std::endl;

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

The following codebyte shows a quick example of using the .swap() method with two deques of strings:

We can currently support:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  std::deque<std::string> dequeA = {"apple", "banana"};
  std::deque<std::string> dequeB = {"cherry", "date"};

  dequeA.swap(dequeB);

  std::cout << "Deque A:";
  for (const auto& value : dequeA) std::cout << ' ' << value;

  std::cout << "\nDeque B:";
  for (const auto& value : dequeB) std::cout << ' ' << value;
}

```
