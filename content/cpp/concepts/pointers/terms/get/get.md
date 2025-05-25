---
Title: '.get()'
Description: 'Returns the raw pointer held by a smart pointer in C++.'
Subjects:
  - 'C++'
  - 'Pointers'
Tags:
  - 'cpp'
  - 'pointers'
  - 'smart pointers'
  - 'memory management'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.get()`** method in C++ is used with smart pointers (such as `std::unique_ptr` and `std::shared_ptr`) to access the raw pointer they manage. This allows code to interact with APIs or functions that require a traditional pointer, while still maintaining ownership and automatic memory management provided by the smart pointer.

> **Note:** Using the raw pointer returned by `.get()` does not transfer ownership. The smart pointer remains responsible for deleting the memory.

## Syntax

```pseudo
smart_pointer.get()
```

- `smart_pointer` is an instance of a smart pointer type (e.g., `std::unique_ptr`, `std::shared_ptr`).
- Returns the underlying raw pointer of type `T*`, where `T` is the type managed by the smart pointer.
- Does not affect ownership or reference count.

## Example

The following example demonstrates how `.get()` is used to access the underlying pointer managed by a `std::unique_ptr`:

```cpp
#include <iostream>
#include <memory>

void printValue(int* ptr) {
  if (ptr) {
    std::cout << "Value: " << *ptr << std::endl;
  }
}

int main() {
  std::unique_ptr<int> uptr = std::make_unique<int>(42);

  // Pass the raw pointer to a function that expects an int*
  printValue(uptr.get());

  return 0;
}
```

This example results in the following output:

```shell
Value: 42
```

## Codebyte Example

The following codebyte creates a `std::shared_ptr`, retrieves the raw pointer using `.get()`, and prints its value:

```codebyte/cpp
#include <iostream>
#include <memory>

int main() {
  std::shared_ptr<int> sptr = std::make_shared<int>(99);

  // Use .get() to access the raw pointer
  int* rawPtr = sptr.get();

  if (rawPtr) {
    std::cout << "Shared pointer value: " << *rawPtr << std::endl;
  }

  return 0;
}
```