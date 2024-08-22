---
Title: '.emplace()'
Description: 'Directly constructs an element in place within a C++ vector at a specified position.'
Subjects:
    - 'Computer Science'
    - 'Programming'
Tags:
    - 'Data Types'
    - 'Functions'
    - 'Vectors'
    - 'Methods'
CatalogContent:
    - 'learn-c-plus-plus'
    - 'paths/computer-science'
---

## Introduction

The `.emplace()` function is a member of the `std::vector` class in C++. It allows for the direct construction of an element within the vector at a specified position. Introduced in C++11, `.emplace()` enhances performance by avoiding unnecessary copying of elements.

## Syntax

```pseudo
vector.emplace(position, element);
```

- `position`: An iterator to the position where the new element will be inserted.
- `element`: Elements to be inserted in the vector container.

## Example

```cpp
#include <iostream>
#include <vector>

class MyClass {
public:
    MyClass(int x, int y) : x(x), y(y) {
        std::cout << "MyClass constructed with x=" << x << " and y=" << y << std::endl;
    }
private:
    int x, y;
};

int main() {
    std::vector<MyClass> myVector;
    myVector.emplace(myVector.begin(), 10, 20);

    return 0;
}
```

```shell
MyClass constructed with x=10 and y=20
```

In this example, an object of `MyClass` is directly constructed at the beginning of the vector using `.emplace()`, with the arguments `10` and `20`. This method is more efficient than `.push_back()` because it constructs the object in place, avoiding the overhead of creating a temporary object.
