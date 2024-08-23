---
Title: '.emplace()'
Description: 'Constructs and inserts an element in place at a specified position'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Functions'
  - 'Methods'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.emplace()`** function is a member of the `std::vector` class in C++. It allows for the direct construction of an element within the vector at a specified position. Introduced in C++11, `.emplace()` enhances performance by avoiding unnecessary copying of elements.

## Syntax

```pseudo
vector.emplace(position, Args&&... args);
```

- `position`: An iterator to the position before which the new element will be inserted.
- `args...`: The arguments used to directly construct the new element within the vector.

## Example

In the example below, an object of `MyClass` is directly constructed at the beginning of the vector using `.emplace()` with the arguments *10* and *20*. This function enhances efficiency by constructing the object in place, eliminating the need for any unnecessary temporary object creation.

```cpp
#include <iostream>
#include <vector>

class MyClass {
 public:
 // Constructor that takes two integers x and y
  MyClass(int x, int y) : x(x), y(y) {
    std::cout << "MyClass constructed with x=" << x << " and y=" << y << std::endl;
  }

 private:
  int x, y;
};

int main() {
  std::vector<MyClass> myVector;

  // Use emplace() to directly construct a MyClass object in place at the beginning of the vector
  // This will call the MyClass constructor with the arguments 10 and 20
  myVector.emplace(myVector.begin(), 10, 20);
  return 0;
}
```

The above code produces the output as follows:

```shell
MyClass constructed with x=10 and y=20
```
