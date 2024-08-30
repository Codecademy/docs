---
Title: 'Smart Pointers'
Description: 'A smart pointer is a class that holds and manages a pointer through RAII.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Pointers'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **smart pointer** is a class that holds and manages a [pointer](https://www.codecademy.com/resources/docs/cpp/pointers) through a popular C++ technique called "Resource Acquisition is Initialization" (RAII). It allows developers to not worry about freeing a pointer, and it also allows pointers to be exception-safe.

## Ownership

When referring to memory, ownership answers the question: "Who is in charge of freeing the given resource?"

There are three standard smart pointers defined in the `<memory>` header file:

- `std::unique_ptr<T>` A unique pointer does not share ownership, and will free the resource at the end of the scope.
- `std::shared_ptr<T>` A shared pointer does share ownership, and will only free the resource when there are no other owners counted and it has reached the end of the scope.
- `std::weak_ptr<T>` A weak pointer is used with a shared pointer, but it does not add to the reference counter like a shared pointer does.

Both `unique_ptr` and `shared_ptr` have a corresponding function to create their respective pointers:

- `std::make_unique<T>(value)` for `unique_ptr`
- `std::make_shared<T>(value)` for `shared_ptr`

## Unique Pointers

```cpp
#include <iostream>
#include <memory>

int main() {
  auto ptr = std::make_unique<int>(10);
} // The ptr reaches end of scope, no memory leaks
```

## Shared Pointers

```cpp
#include <iostream>
#include <memory>

int main() {
  auto ptr = std::make_shared<int>(10);

  std::cout << ptr.use_count() << "\n"; // Prints the reference count (1)
  {
    auto ptr2 = ptr; // Reference count is now 2
    std::cout << ptr2.use_count() << '\n'; // Prints the reference count (2)
  } // The ptr2 reaches end of scope, reference count is 1 so resource not freed

  std::cout<< *ptr << "\n";
} // The ptr reaches end of scope, reference count is 0 so resource is freed
```

## Exception Safety

```cpp
#include <iostream>
#include <memory>

void unsafe_pointer() {
  int* ptr = new int(10);

  if (*ptr == 10) {
    throw;
  }

  delete ptr; // The ptr not freed because the function throws beforehand
}

void safe_pointer() {
  auto ptr = std::make_unique<int>(10);

  if (*ptr == 10) {
    throw;
  }
} // The ptr freed because destructors are called automatically when leaving scope
```
