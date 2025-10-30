---
Title: '.get_allocator()'
Description: 'Returns a copy of the allocator that is assigned to deque.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Containers'
  - 'Deques'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.get_allocator()`** method of a C++ `deque` returns a copy of the allocator object used by the [deque](https://www.codecademy.com/resources/docs/cpp/deque) to manage memory for its elements. This allows allocation and deallocation of raw memory for objects of the deque’s type. Modifications made through the allocator affect only the allocated memory and not the deque itself.

## Syntax

```pseudo
dequeName.get_allocator();
```

**Parameters:**

This method does not take any arguments.

**Return value:**

Returns a copy of the allocator object (`allocator_type`) used by the deque to allocate and deallocate memory for its elements.

> **Note:** The allocator only handles raw memory allocation and deallocation. It does not construct or initialize objects. Use placement `new` to construct objects in allocated memory if needed.

## Example 1: Basic Memory Allocation

In this example, a copy of the deque’s allocator is used to allocate memory for three integers, which are then assigned values and deallocated manually:

```cpp
#include <iostream>
#include <deque>

int main() {

  // Define a deque and an allocator pointer
  std::deque<int> d;
  int *p;

  // Get a copy of d's allocator
  auto a= d.get_allocator();

  // Allocate memory for 3 elements
  p=a.allocate(3);

  // Assign values manually
  p[0] = 1;
  p[1] = 2;
  p[2] = 3;

  // Print values
  std::cout << p[0] << ", " << p[1] << ", "<< p[2];

  // Deallocate memory
  a.deallocate(p,3);

  return 0;
}
```

The above code generates the following output:

```shell
1, 2, 3
```

## Codebyte Example: Using Allocator with Loop and Temporary Access

In this example, the deque’s allocator is used directly to allocate memory for multiple elements, which are initialized in a loop and then deallocated:

```codebyte/cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<int> d;
  int *p;

  // Allocate memory for 3 elements using a temporary allocator copy
  p = d.get_allocator().allocate(3);

  // Assign values using a loop
  for(int i = 0; i < 3; i++)
    p[i] = i;

  // Print values
  for(int i = 0; i < 3; i++)
    cout << p[i] << ", ";
  cout << endl;

  // Deallocate memory
  d.get_allocator().deallocate(p, 3);

  return 0;
}
```
