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

## Adding Elements

There are two different ways to insert elements into the vector.

### `.push_back()`

This method pushes elements to the back of a vector.

```cpp
std::vector<int> v = {1,2,3,4};

v.push_back(5);

int n = v.size();

std::cout << "The last element is: " << v[n - 1];
// Output: The last element is: 5
```

### `.insert()`

This method inserts new elements before the element at the specified position.

```cpp
std::vector<int> v = {1,2,3,4};

// Insert at beginning
v.insert(v.begin(), 0);

// Insert at end
v.insert(v.end(),6);

std::cout << "The first element is: " << v[0] << "\n";
// Output: The first element is: 0
std::cout << "The last element is: " << v[5] << "\n";
// Output: The last element is: 6
```

## Codebyte Example

To create a vector named `grade` with 3 items and then insert elements to the last of the vector using .push_back() and .insert() functions :

```codebyte/cpp
#include <iostream>
#include <vector>

int main() {
  // Initializes an array of size 3
  std::vector<int> grades(3);

  // Assign the values to the vector elements
  grades[0] = 20;
  grades[1] = 30;
  grades[2] = 40;

  // Display all 3 vector elements
  std::cout << grades[0] << ", ";
  std::cout << grades[1] << ", ";
  std::cout << grades[2] << "\n";

  grades.push_back(50);
  std::cout << grades[3] << "\n";

  grades.insert(grades.end(),60);
  std::cout << grades[4] << "\n";
}
```
