---
Title: '.get()'
Description: 'Returns the raw pointer held by a smart pointer in C++.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Pointers'
  - 'Memory'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.get()`** method in C++ is used with smart pointers (such as `std::unique_ptr` and `std::shared_ptr`) to access the raw pointer they manage. It allows code to interface with functions or APIs that require traditional pointers, while still preserving the ownership and automatic memory management provided by the smart pointer.

> **Note:** Calling `.get()` returns the raw pointer managed by the smart pointer, but does not transfer ownership. The smart pointer still retains responsibility for managing and deleting the memory.

## Syntax

```pseudo
ptr.get()
```

Where `ptr` is a smart pointer such as `std::unique_ptr<T>` or `std::shared_ptr<T>`.

**Parameters:**

- The `.get()` method takes no parameters.

**Return value:**

- Returns a raw pointer of type `T*` to the managed object.
- The returned pointer does not transfer ownership — the smart pointer still controls the object's lifetime.

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
