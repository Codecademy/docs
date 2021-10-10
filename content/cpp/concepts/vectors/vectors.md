---
Title: 'Vectors'
Description: 'A vector is a dynamic list of items, that can shrink and grow in size. It can only store values of the same type. To use vectors, it is necessary to #include the vector library. cpp  During the creation of a C++ vector, the data type of its elements must be specified. Once the vector is created, the type cannot be changed. cpp std::vector name;'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Vectors'
  - 'Arrays'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A vector is a dynamic list of items, that can shrink and grow in size. It can only store values of the same type.

## Different Ways to Create a Vector

To use vectors, it is necessary to `#include` the `vector` library.

```cpp
#include <vector>
```

During the creation of a C++ vector, the data type of its elements must be specified. Once the vector is created, the type cannot be changed.

```cpp
std::vector<type> name;
```

### Create a Vector with Size

```cpp
std::vector<int> grades(10);
```

### Create and Intitialize a Vector

```cpp
std::vector<double> order = {3.99, 12.99, 2.49};
```

## Index

An index refers to an element’s position within an ordered list, like a vector or an array. The first element has an index of 0.

A specific element in a vector or an array can be accessed using its index, like `name[index]`.

```cpp
std::vector<double> order = {3.99, 12.99, 2.49};

// What's the first element?
std::cout << order[0];

// What's the last element?
std::cout << order[2];
```

## Adding elements

There are two different ways to insert elements into the vector.

## push_back()

 It push the elements into a vector from the back
 
```cpp
std::vector<int> v = {1,2,3,4};
v.push_back(5);
int n = v.size();
cout << "\nThe last element is: " << v[n - 1];
```
 
## insert()

 It inserts new elements before the element at the specified position
 
 ```cpp
std::vector<int> v = {1,2,3,4};

//insert at beginning
v.insert(v.begin(), 0);
//insert at end
v.insert(v.end(),6);

cout << "\nThe first element is: " << v[0];  //outputs 0
cout << "\nThe last element is: " << v[5]; //outputs 6
```

## Codebyte Example

To create a vector named `grade` with 3 items and then add elements afterwards using push_back() and insert() functions:

```codebyte/cpp
#include <iostream>
#include <vector>

int main() {
  std::vector<int> grades(3);

  grades[0] = 90;
  grades[1] = 86;
  grades[2] = 98;

  std::cout << grades[0] << ", ";
  std::cout << grades[1] << ", ";
  std::cout << grades[2];
}
```
