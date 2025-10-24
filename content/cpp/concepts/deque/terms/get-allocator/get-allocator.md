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

In C++, allocators lets us allocate (assign) and deallocate (release) the memory space and deque is the container that stores data in this allocation. The **`get_allocator()`** function returns a copy of the allocator assigned to the deque.

## Syntax

```pseudo
dequeName.get_allocator();
```

- `dequeName`: Name of the deque whose copy of allocator is needed.

## Example

This example shows the use of get_allocator()

```cpp
#include <iostream>
#include <deque>

int main() {

    //Define a deque and a pointer
    std::deque<int> d;
    int *p;

    // get a copy of d's allocator
    auto a= d.get_allocator();

    // allocate memory for 3 elements
    p=a.allocate(3);

    //insert values
    p[0] = 1;
    p[1] = 2;
    p[2] = 3;

    //print them
    std::cout << p[0] << ", " << p[1] << ", "<< p[2];

    //deallocate memory for 3 elements
    //it should match the number of elements allocated initially
    a.deallocate(p,3);

    return 0;
}
```

It generates the following output:

```shell
1, 2, 3
```

## Codebyte Example

The following example uses `get_allocator()` in the program.

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {

     deque<int> d;
    int *p;
    int i;

    p = d.get_allocator().allocate(3);

    //insert values
    for(i=0;i<3;i++)
    p[i]=i;

    //print them
    for(i=0;i<3;i++)
    cout << p[i] << ", ";

    d.get_allocator().deallocate(p,3);

    return 0;
}
```
