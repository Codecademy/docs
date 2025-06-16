---
Title: '.get()'
Description: 'Retrieves the raw pointer managed by a smart pointer without releasing ownership.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Memory'
  - 'Pointers'
  - 'Programming'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.get()`** member function is used with smart pointers in C++, namely `std::unique_ptr` and `std::shared_ptr`. It returns the raw pointer managed by the smart pointer without relinquishing ownership. This allows direct access to the managed object when needed, especially for interoperability with legacy or third-party code that expects traditional pointers.

## Syntax

```pseudo
smart_pointer.get();
```

**Parameters:**

The `.get()` function does not take any parameters.

**Return value:**

Returns the raw pointer managed by the smart pointer (e.g., `std::unique_ptr` or `std::shared_ptr`), allowing read-only or non-owning access to the resource.

## Example 1: Using `.get()` with `std::unique_ptr`

In this example, `.get()` is used to access the raw pointer managed by a `unique_ptr` to read the stored value:

```cpp
#include <iostream>
#include <memory>

int main() {
  std::unique_ptr<int> ptr = std::make_unique<int>(42);
  int* rawPtr = ptr.get();
  std::cout << "Value: " << *rawPtr << std::endl;
  return 0;
}
```

The output of this code is:

```shell
Value: 42
```

## Example 2: Using `.get()` with `std::shared_ptr`

In this example, `.get()` retrieves the raw pointer from a `shared_ptr` to access the value it manages:

```cpp
#include <iostream>
#include <memory>

int main() {
  std::shared_ptr<int> ptr = std::make_shared<int>(99);
  int* rawPtr = ptr.get();
  std::cout << "Value: " << *rawPtr << std::endl;
  return 0;
}
```

The output of this code is:

```shell
Value: 99
```

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <memory>

void printRawPointer(int* ptr) {
  std::cout << "Inside function: " << *ptr << std::endl;
}

int main() {
  std::unique_ptr<int> uniquePtr = std::make_unique<int>(100);
  int* raw = uniquePtr.get();

  printRawPointer(raw);
  std::cout << "Back in main: " << *raw << std::endl;

  return 0;
}
```
