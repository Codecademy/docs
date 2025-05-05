---
Title: 'Vectors'
Description: 'A vector is a dynamic list of items that can shrink and grow in size.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Values'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, a **vector** is a dynamic list of items that can shrink and grow in size. It can only store values of the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types). It handles memory management internally and allows elements to be added or removed easily.

Vectors are widely used in real-world C++ applications, including game development (for managing game [objects](https://www.codecademy.com/resources/docs/cpp/objects)), financial modeling (to store [variable](https://www.codecademy.com/resources/docs/cpp/variables)-length time series), data processing (to handle datasets of unknown size), and competitive programming (due to their ease of use and dynamic nature).

## Creating a Vector

Vectors are defined using the `<vector>` library and are part of the `std` namespace:

```pseudo
#include <vector>

std::vector<type> name;
```

The data type of its elements must be specified when the vector is created. Afterwards, the type cannot be changed.

### Creating a Vector with Size

This example creates a vector named `grades` that can store 10 integer values:

```cpp
#include <vector>

std::vector<int> grades(10);
```

### Creating and Initializing a Vector

This example creates a vector named `order` that stores the given floating-point values:

```cpp
#include <vector>

std::vector<double> order = {3.99, 12.99, 2.49};
```

## Accessing and Modifying Elements in a Vector

The two primary ways to access and modify elements in a vector include:

- Using the index `[]` [operator](https://www.codecademy.com/resources/docs/cpp/operators)
- Using the `.at()` [function](https://www.codecademy.com/resources/docs/cpp/functions)

### Using the Index `[]` Operator

An index refers to an element’s position within an ordered list, like a vector or an [array](https://www.codecademy.com/resources/docs/cpp/arrays). The first element has an index of `0`.

A specific element in a vector can be accessed and modified via its index, using the index `[]` operator:

```cpp
#include <vector>
#include <iostream>

int main() {
  // Create a vector
  std::vector<double> order = {3.99, 12.99, 2.49};

  // Access the first element and modify its value
  order[0] = 4.23;

  std::cout << order[0];

  return 0;
}
```

Here is the output:

```shell
4.23
```

### Using the `.at()` Function

The `.at()` function provides a safer way of accessing and modifying elements in a vector. It performs bounds checking on the vector and will throw an [error](https://www.codecademy.com/resources/docs/cpp/errors) if there is an attempt to access an element that is out of bounds.

Here is an example of the `.at()` function:

```cpp
#include <vector>
#include <iostream>

int main() {
  // Create a vector
  std::vector<double> order = {3.99, 12.99, 2.49};

  // Access the first element and modify its value
  order.at(0) = 4.23;

  std::cout << order[0];

  return 0;
}
```

The output for the example will be:

```shell
4.23
```

The alternatives for the `.at()` function are `.size()`, `.capacity()`, `.front()`, and `.back()`.

## Adding Elements to a Vector

There are two different ways to insert elements into a vector:

- Using the `.push_back()` [method](https://www.codecademy.com/resources/docs/cpp/methods)
- Using the `.emplace_back()` method

### Using the `.push_back()` Method

The `.push_back()` method pushes elements to the back of a vector:

```cpp
#include <vector>
#include <iostream>

int main() {
  // Create a vector
  std::vector<int> v = {1,2,3,4};

  // Insert an element into the vector
  v.push_back(5);

  std::cout << "The last element is: " << v[4];

  return 0;
}
```

Here is the output:

```shell
The last element is: 5
```

### Using the `.emplace_back()` Method

The `.emplace_back()` method also pushes elements to the back of a vector, but instead of creating a temporary object, it directly creates an object in the vector itself:

```cpp
#include <vector>
#include <iostream>

int main() {
  // Create a vector
  std::vector<int> v = {1,2,3,4};

  // Insert an element into the vector
  v.emplace_back(5);

  std::cout << "The last element is: " << v[4];

  return 0;
}
```

Here is the output:

```shell
The last element is: 5
```

Besides `.push_back()` and `.emplace_back()`, the `.insert()` method also helps in inserting elements into a vector.

## Removing Elements from a Vector

The `.pop_back()` method can be used to remove the last element from a vector:

```cpp
#include <vector>
#include <iostream>

int main() {
  // Create a vector
  std::vector<int> v = {1,2,3,4};

  // Remove the last element
  v.pop_back();

  // Print the elements of the vector
  for (int i : v) {
    std::cout << i << " ";
  }

  return 0;
}
```

Here is the output:

```shell
1 2 3
```

## Iterating Over a Vector

The `foreach` loop is used to iterate over a vector:

```cpp
#include <vector>
#include <iostream>

int main() {
  // Create a vector
  std::vector<int> v = {1,2,3,4};

  // Traverse over the vector and print its elements
  for (int i : v) {
    std::cout << i << " ";
  }

  return 0;
}
```

Here is the output:

```shell
1 2 3 4
```

## Codebyte Example: Common Vector Operations

This codebyte example demonstrates the usage of the most common operations that can be performed with vectors in C++:

```codebyte/cpp
#include <iostream>
#include <vector>

int main() {
  // Create a vector
  std::vector<int> numbers;

  // Add elements to the vector
  numbers.push_back(10);
  numbers.push_back(20);
  numbers.push_back(30);

  // Print the elements of the vector
  std::cout << "Elements in the vector: ";
  for (int num : numbers) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  // Access specific elements in the vector
  std::cout << "First element (index): " << numbers[0] << std::endl;
  std::cout << "Second element (at): " << numbers.at(1) << std::endl;

  // Modify an element
  numbers[2] = 100;
  std::cout << "Modified third element: " << numbers[2] << std::endl;

  // Remove the last element
  numbers.pop_back();

  // Display the final vector
  std::cout << "Vector after pop_back: ";
  for (int num : numbers) {
      std::cout << num << " ";
  }
  std::cout << std::endl;

  // Check the size and capacity of the vector
  std::cout << "Size: " << numbers.size() << std::endl;
  std::cout << "Capacity: " << numbers.capacity() << std::endl;

  return 0;
}
```

## Frequently Asked Questions

### 1. What does vector `.size()` return in C++?

The `.size()` function returns the number of items currently stored in the vector. It does not reflect the capacity or allocated memory — just the actual count of elements:

```cpp
#include <vector>
#include <iostream>

int main() {
  // Create a vector
  std::vector<int> v = {1,2,3,4};

  // Check the size of the vector
  std::cout << "Size: " << v.size();

  return 0;
}
```

Here is the output:

```shell
Size: 4
```

### 2. Are C++ vectors ordered?

Yes, C++ vectors are ordered. The elements are stored and accessed in the order they were inserted. Index-based access maintains this order, making vectors suitable when the order of elements matters.

### 3. Are vectors thread-safe?

No. Vectors are not thread-safe by default. You need to use locks or synchronization mechanisms for concurrent access.
