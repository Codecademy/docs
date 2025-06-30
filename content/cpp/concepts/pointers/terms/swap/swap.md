---
Title: '.swap()'
Description: 'Exchanges the values of two pointers or container elements, allowing efficient data manipulation without deep copies.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Memory'
  - 'Pointers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.swap()`** function in C++ is used to exchange the values or contents of two [variables](https://www.codecademy.com/resources/docs/cpp/variables), including [pointers](https://www.codecademy.com/resources/docs/cpp/pointers) and [objects](https://www.codecademy.com/resources/docs/cpp/objects). When used with pointers, `std::swap()` simply exchanges the memory addresses they store, not the values pointed to. It is especially useful for efficiently reassigning ownership of dynamically allocated memory or switching references between data structures.

Swapping pointers is a common practice in algorithms (e.g., linked lists, trees), memory management, and system-level programming. It provides an efficient way to manipulate references without copying or reallocating the underlying data.

## Syntax

```pseudo
std::swap(ptr1, ptr2);
```

**Parameters:**

- `ptr1`, `ptr2`: Two pointer variables (e.g., `int*`, `char*`, `MyClass*`, etc.)
  - These must be of the same type.
  - After swapping, the memory addresses stored in `ptr1` and `ptr2` are exchanged.

**Return value:**

No return value. The swap is done in-place by modifying the pointer variables.

## Example 1: Swapping Integer Pointers

In this example, `std::swap()` is used to exchange the memory addresses stored in two integer pointers, changing which variables the pointers reference:

```cpp
#include <iostream>
#include <utility> // For std::swap

int main() {
  int a = 10, b = 20;
  int* ptr1 = &a;
  int* ptr2 = &b;

  std::cout << "Before swap:\n";
  std::cout << "ptr1 points to: " << *ptr1 << "\n";
  std::cout << "ptr2 points to: " << *ptr2 << "\n";

  std::swap(ptr1, ptr2);

  std::cout << "After swap:\n";
  std::cout << "ptr1 points to: " << *ptr1 << "\n";
  std::cout << "ptr2 points to: " << *ptr2 << "\n";

  return 0;
}
```

The output of this code is:

```shell
Before swap:
ptr1 points to: 10
ptr2 points to: 20
After swap:
ptr1 points to: 20
ptr2 points to: 10
```

Here, the memory addresses stored in `ptr1` and `ptr2` were swapped, so the variables they point to were exchanged without moving or modifying the original data.

## Example 2: Swapping Pointers in Dynamic Memory

In this example, `std::swap()` is applied to pointers referencing dynamically allocated memory, enabling efficient exchange of their targets without copying values:

```cpp
#include <iostream>
#include <utility>

int main() {
  int* p1 = new int(5);
  int* p2 = new int(15);

  std::cout << "Before swap: *p1 = " << *p1 << ", *p2 = " << *p2 << "\n";

  std::swap(p1, p2);

  std::cout << "After swap: *p1 = " << *p1 << ", *p2 = " << *p2 << "\n";

  delete p1;
  delete p2;

  return 0;
}
```

The output of this code is:

```shell
Before swap: *p1 = 5, *p2 = 15
After swap: *p1 = 15, *p2 = 5
```

This shows that the values pointed to by the two heap-allocated pointers are swapped efficiently. Always ensure proper memory cleanup using `delete` or smart pointers.

## Codebyte Example: Swapping Class Pointers

In this example, two pointers to `Student` class instances are swapped using `std::swap()`, transferring ownership of the object references without modifying the objects themselves:

```codebyte/cpp
#include <iostream>
#include <string>
#include <utility>

class Student {
public:
  std::string name;
  Student(std::string n) : name(n) {}
  void display() const {
    std::cout << "Student: " << name << std::endl;
  }
};

int main() {
  Student* s1 = new Student("Alice");
  Student* s2 = new Student("Bob");

  std::cout << "Before swap:\n";
  s1->display();
  s2->display();

  std::swap(s1, s2);

  std::cout << "After swap:\n";
  s1->display();
  s2->display();

  delete s1;
  delete s2;

  return 0;
}
```

This demonstrates pointer swapping with class objects. The actual student objects are untouched—only the pointers are exchanged.

## Frequently Asked Questions

### 1. Is `.swap()` a member function of pointers?

No, raw pointers do not have a `.swap()` member function. You should use `std::swap()` from the `<utility>` header to swap them.

### 2. What’s the difference between swapping pointers vs. values?

Swapping pointers exchanges memory addresses, not the values pointed to. To swap actual values, dereference the pointers:
`std::swap(*ptr1, *ptr2);`

### 3. Can I use `.swap()` with smart pointers?

Yes, `std::swap()` works with `std::unique_ptr`, `std::shared_ptr`, and other smart pointers. These types may also provide their own `.swap()` member methods for more efficient swapping.
