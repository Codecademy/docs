---
Title: 'List'
Description: 'In C++, a list is a sequential container that stores elements in non-contiguous memory locations.'
Subjects:
  - 'Game Development'
  - 'Mobile Development'
Tags:
  - 'Data Structures'
  - 'Doubly Linked Lists'
  - 'Elements'
  - 'Lists'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, a **list** is a sequential container that stores elements in non-contiguous memory locations. It is included in the Standard Template Library (STL) and is implemented as a doubly linked list, allowing efficient insertion and deletion of elements at any known position with average constant time complexity. It is widely used in task scheduling systems, simulation engines, and real-time systems where deterministic performance is crucial.

## Creating a List

In C++, a list is defined in the `<list>` header and is part of the `std` namespace:

```pseudo
#include <list>

std::list<data-type> name_of_list = {value1, value2, ...}
```

In the syntax:

- `data-type`: Specifies the [data type](https://www.codecademy.com/resources/docs/cpp/data-types) of the elements to be stored in the list (e.g., `int`, `double`, or user-defined data types).
- `name_of_list`: The [variable](https://www.codecademy.com/resources/docs/cpp/variables) name for the list instance, used to reference and manipulate the list within the code.
- `value1, value2, ...`: The values to be stored in the list.

### Example

This example demonstrates the usage of lists in C++:

```cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
  // Create a list
  list<int> nums = {13, 24, 35, 46, 57, 68};

  // Print the elements of the list
  for(int num : nums) {
    cout << num << " ";
  }

  return 0;
}
```

Here is the output:

```shell
13 24 35 46 57 68
```

## Adding Elements to a List

In C++, there are two [methods](https://www.codecademy.com/resources/docs/cpp/methods) to add elements to a list:

- `.push_front()`: Adds the given element to the start of the list.
- `.push_back()`: Adds the given element to the end of the list.

Here is the syntax for these methods:

```pseudo
list_name.push_front(element);
list_name.push_back(element);
```

**Parameters:**

- `element`: The element to be added to the list.

### Example

This example demonstrates the usage of the `.push_front()` and `.push_back()` methods in C++:

```cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
  // Create a list
  list <int> myList;

  // Add elements to the list
  myList.push_front(5);
  myList.push_front(10);
  myList.push_back(15);
  myList.push_back(20);

  // Print the elements of the list
  for(int num : myList) {
    cout << num << " ";
  }

  return 0;
}
```

Here is the output:

```shell
10 5 15 20
```

## Accessing Elements in a List

In C++, there are two methods to access elements in a list:

- `.front()`: Returns the first element in the list.
- `.back()`: Returns the last element in the list.

Here is the syntax for these methods:

```pseudo
list_name.front();
list_name.back();
```

### Example

This example demonstrates the usage of the `.front()` and `.back()` methods in C++:

```cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
  // Create a list
  list<int> nums = {13, 24, 35, 46, 57, 68};

  // Display the first element in the list
  cout << " " << nums.front() << endl;

  // Display the last element in the list
  cout << " " << nums.back();

  return 0;
}
```

Here is the output:

```shell
13
68
```

## Removing Elements from a List

In C++, there are three methods to remove elements from a list:

- `.pop_front()`: Removes the starting element from the list.
- `.pop_back()`: Removes the ending element from the list.
- `.remove()`: Removes all occurrences of the given element from the list.

Here is the syntax for these methods:

```pseudo
list_name.pop_front();
list_name.pop_back();
list_name.remove(element);
```

**Parameters:**

- `element`: The element to be deleted from the list.

### Example

This example demonstrates the usage of the `.pop_front()`, `.pop_back()`, and `.remove()` methods in C++:

```cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
  // Create a list
  list <int> myList;

  // Add elements to the list
  myList.push_front(5);
  myList.push_front(10);
  myList.push_back(15);
  myList.push_back(20);

  // Remove elements from the list
  myList.pop_front();
  myList.pop_back();
  myList.remove(5);


  // Print the elements of the list
  for(int num : myList) {
    cout << num << " ";
  }

  return 0;
}
```

Here is the output:

```shell
15
```

## Iterating a List

In C++, the `foreach` loop can be used to iterate a list:

```cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
  // Create a list
  list <int> myList;

  // Add elements to the list
  myList.push_front(15);
  myList.push_front(20);
  myList.push_back(25);
  myList.push_back(30);

  // Print the elements of the list
  for(int num : myList) {
    cout << num << " ";
  }

  return 0;
}
```

Here is the output:

```shell
20 15 25 30
```

## Codebyte Example: Basic List Operations

This codebyte example performs some basic operations on a list:

```codebyte/cpp
#include <iostream>
#include <list>

using namespace std;

int main() {
  // Create a list
  list<int> numbers = {10, 20, 30};

  // Add elements to the list
  numbers.push_front(5);
  numbers.push_back(40);

  // Print the elements of the list
  cout << "List elements: ";
  for (int num : numbers) {
    cout << num << " ";
  }

  // Remove an element from the list
  numbers.remove(20);

  // Print the elements of the list
  cout << "\nAfter removing 20: ";
  for (int num : numbers) {
    cout << num << " ";
  }

  return 0;
}
```

## Frequently Asked Questions

### 1. Which is better, list or vector in C++?

It depends on your use case. Use `std::list` when you need frequent insertions/deletions in the middle of the sequence. Use [`std::vector`](https://www.codecademy.com/resources/docs/cpp/vectors) for better performance when random access and contiguous memory are needed.

### 2. Is a list an array in C++?

No, a list is not an [array](https://www.codecademy.com/resources/docs/cpp/arrays) in C++. A `std::list` is a doubly linked list, while an array is a contiguous block of memory. Their performance characteristics and use cases differ significantly.

### 3. What is the difference between an array and a list?

An array offers fast indexed access but resizing is costly. A list allows efficient insertions/deletions at any position but doesn’t support direct access to elements by index.
