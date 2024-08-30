---
Title: 'Vectors'
Description: 'A vector is a dynamic list of items that can shrink and grow in size.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Vectors'
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **vector** is a dynamic list of items that can shrink and grow in size. It can only store values of the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types).

## Syntax

```pseudo
#include <vector>

std::vector<type> name;
```

To use vectors, it is necessary to `#include` the `vector` library.

The data type of its elements must be specified when the vector is created. Afterwards, the type cannot be changed.

### Create a Vector with Size

```cpp
std::vector<int> grades(10);
```

### Create and Initialize a Vector

```cpp
std::vector<double> order = {3.99, 12.99, 2.49};
```

## Getting Information

Since a vector is dynamic and can grow and shrink it's size to accommodate new elements, the language gives us a few methods to get information from the vector.

### Index

An index refers to an element’s position within an ordered list, like a vector or an [array](https://www.codecademy.com/resources/docs/cpp/arrays). The first element has an index of 0.

A specific element in a vector or an array can be accessed via index, using a `name[index]` syntax:

```cpp
std::vector<double> order = {3.99, 12.99, 2.49};

// What's the first element?
std::cout << order[0];

// What's the last element?
std::cout << order[2];
```

### `.size()`

Due to the dynamic nature of vectors, it can be hard to keep track of the number of elements they hold at a point in time manually. Luckily, vectors come with a helpful method to solve this problem called `.size()`:

```cpp
// Number of elements in the vector
std::cout << order.size();
```

### `.capacity()`

`.capacity()` is used to retrieve the current capacity of a `std::vector`. The capacity of a vector represents the number of elements it can hold without needing to allocate additional memory. The vector may have more capacity than its current size to reduce the need for frequent reallocations and copying when elements are added.

Initially, the capacity is likely to be small, but as elements are added using `.push_back()`, the capacity will grow to accommodate the added elements. The exact growth behavior may vary depending on the C++ implementation, but it's typically designed to minimize reallocations and copying.

```cpp
// Check the initial capacity
std::cout << "Initial capacity: " << order.capacity() << std::endl;

// Add elements to the vector
for (int i = 0; i < 10; ++i) {
    order.push_back(i);
}
// Check the capacity after adding elements
std::cout<< "Capacity after adding elements: "<< order.capacity()<< std::endl;
```

### `.at()`

The `.at()` function provides a safer way of accessing elements in a vector. It performs bounds checking on the vector and will throw an [error](https://www.codecademy.com/resources/docs/cpp/errors) if there is an attempt to access an element that is out of bounds:

```cpp
// First element
std::cout << order.at(0);

// Last element
std::cout << order.at(2);

// Out of bounds
std::cout << order.at(100);
```

The code above will print the following error:

```shell
terminate called after throwing an instance of 'std::out_of_range'
what():  vector::_M_range_check: __n (which is 100) >= this->size() (which is 3)
Aborted (core dumped)
```

Alternatives to the `.at()` method include dedicated methods for retrieving the first or the last element of a vector.

### `.front()`

The `.front()` returns a reference to the first element of the vector:

```cpp
// The first element of a vector
std::cout << order.front();
```

### `.back()`

The `.back()` returns a reference to the last element of the vector:

```cpp
// The last element of a vector
std::cout << order.back();
```

## Adding Elements

There are two different ways to insert elements into the vector.

### `.push_back()`

This method pushes elements to the back of a vector:

```cpp
std::vector<int> v = {1,2,3,4};

v.push_back(5);

int n = v.size();

std::cout << "The last element is: " << v[n - 1];
// Output: The last element is: 5
```

### `.emplace_back()`

This method also pushes elements to the back of a vector, but instead of creating a temporary object it directly creates an object in the vector itself.

```cpp
std::vector<int> v = {1,2,3,4};

v.emplace_back(5);

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

To create a vector named `grade` with three items and then insert elements to the last of the vector using `.push_back()` and `.insert()` functions:

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
