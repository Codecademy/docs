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

In C++, a **vector** is a dynamic list of items that can shrink and grow in size. It can only store values of the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types). Memory management is handled internally, and elements can be added or removed efficiently.

Vectors are widely used in real-world C++ applications, including game development (for managing game [objects](https://www.codecademy.com/resources/docs/cpp/objects)), financial modeling (to store [variable](https://www.codecademy.com/resources/docs/cpp/variables)-length time series), data processing (to handle datasets of unknown size), and competitive programming (due to their ease of use and dynamic nature).

## Creating a Vector

Vectors are defined using the `<vector>` library and are part of the `std` namespace:

```cpp
#include <vector>

std::vector<type> name;
```

When a vector is created, the data type of its elements must be specified. The type cannot be changed afterward.

### Creating a Vector with Size

```cpp
#include <vector>

std::vector<int> grades(10);
```

### Creating and Initializing a Vector

```cpp
#include <vector>

std::vector<double> order = {3.99, 12.99, 2.49};
```

## Accessing and Modifying Elements in a Vector

Elements in a vector can be accessed and modified using:

- The index `[]` [operator](https://www.codecademy.com/resources/docs/cpp/operators)
- The `.at()` [function](https://www.codecademy.com/resources/docs/cpp/functions)

### Using the Index `[]` Operator

```cpp
#include <vector>
#include <iostream>

int main() {
  std::vector<double> order = {3.99, 12.99, 2.49};
  order[0] = 4.23;

  std::cout << order[0];
  return 0;
}
```

**Output:**

```shell
4.23
```

### Using the `.at()` Function

```cpp
#include <vector>
#include <iostream>

int main() {
  std::vector<double> order = {3.99, 12.99, 2.49};
  order.at(0) = 4.23;

  std::cout << order[0];
  return 0;
}
```

**Output:**

```shell
4.23
```

Alternatives to `.at()` include `.size()`, `.capacity()`, `.front()`, and `.back()`.

## Adding Elements to a Vector

Elements can be inserted into a vector using:

- `.push_back()` [method](https://www.codecademy.com/resources/docs/cpp/methods)
- `.emplace_back()` method

### Using the `.push_back()` Method

```cpp
#include <vector>
#include <iostream>

int main() {
  std::vector<int> v = {1,2,3,4};
  v.push_back(5);

  std::cout << "The last element is: " << v[4];
  return 0;
}
```

**Output:**

```shell
The last element is: 5
```

### Using the `.emplace_back()` Method

```cpp
#include <vector>
#include <iostream>

int main() {
  std::vector<int> v = {1,2,3,4};
  v.emplace_back(5);

  std::cout << "The last element is: " << v[4];
  return 0;
}
```

**Output:**

```shell
The last element is: 5
```

The `.insert()` method is another alternative for inserting elements.

## Removing Elements from a Vector

The `.pop_back()` method removes the last element:

```cpp
#include <vector>
#include <iostream>

int main() {
  std::vector<int> v = {1,2,3,4};
  v.pop_back();

  for (int i : v) {
    std::cout << i << " ";
  }

  return 0;
}
```

**Output:**

```shell
1 2 3
```

## Iterating Over a Vector

The `foreach` loop can be used to iterate over a vector:

```cpp
#include <vector>
#include <iostream>

int main() {
  std::vector<int> v = {1,2,3,4};

  for (int i : v) {
    std::cout << i << " ";
  }

  return 0;
}
```

**Output:**

```shell
1 2 3 4
```

## Codebyte Example: Common Vector Operations

```codebyte/cpp
#include <iostream>
#include <vector>

int main() {
  std::vector<int> numbers;

  numbers.push_back(10);
  numbers.push_back(20);
  numbers.push_back(30);

  std::cout << "Elements in the vector: ";
  for (int num : numbers) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  std::cout << "First element (index): " << numbers[0] << std::endl;
  std::cout << "Second element (at): " << numbers.at(1) << std::endl;

  numbers[2] = 100;
  std::cout << "Modified third element: " << numbers[2] << std::endl;

  numbers.pop_back();

  std::cout << "Vector after pop_back: ";
  for (int num : numbers) {
      std::cout << num << " ";
  }
  std::cout << std::endl;

  std::cout << "Size: " << numbers.size() << std::endl;
  std::cout << "Capacity: " << numbers.capacity() << std::endl;

  return 0;
}
```

## Frequently Asked Questions

### 1. What does vector `.size()` return in C++?

The `.size()` function returns the number of items stored in the vector:

```cpp
#include <vector>
#include <iostream>

int main() {
  std::vector<int> v = {1,2,3,4};

  std::cout << "Size: " << v.size();
  return 0;
}
```

**Output:**

```shell
Size: 4
```

### 2. Are C++ vectors ordered?

Yes. Elements are stored and accessed in the order they were inserted.

### 3. Are vectors thread-safe?

No. Vectors are not thread-safe by default. Synchronization mechanisms must be used for concurrent access.
