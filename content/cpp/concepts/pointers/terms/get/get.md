---
Title: '.get()' 
Description: 'Returns a raw pointer to the managed object without transferring ownership.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Objects'
  - 'Pointers'
CatalogContent: 
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.get()`** function in C++ is used with smart pointers such as `std::unique_ptr` and `std::shared_ptr` to obtain the raw pointer to the managed object without transferring ownership. It is commonly used when working with legacy code or APIs that require raw pointers, or when there is a need to access the underlying object directly while still maintaining smart pointer ownership and automatic memory management.

## Syntax

```pseudo
ptr.get();
```

Here, `ptr` is a `std::unique_ptr<T>` or `std::shared_ptr<T>`.

**Parameters:**

- `.get()` does not take any parameters.

**Return value:**

- Returns the raw pointer (`T*`) to the managed object.
- Ownership remains with the smart pointer; the caller must not delete the returned pointer.

## Example

This example shows how the `.get()` method returns a raw pointer to a managed object without transferring ownership:

```cpp
#include <iostream>
#include <memory>

int main() {
  std::unique_ptr<int> uniq_ptr(new int(20));

  int* raw_ptr = nullptr;
  raw_ptr = uniq_ptr.get(); // returns pointer to a managed object without transferring ownership

  std::cout << "value at raw_ptr address: " << *raw_ptr << std::endl;
  return 0;
}
```

The output of this example is:

```shell
value at raw_ptr address: 20
```

In this example:

- The `uniq_ptr` manages a dynamically allocated `int` with a value of 20.
- The `.get()` method returns a raw pointer to the managed object, so `raw_ptr` points to the same memory location as `uniq_ptr`, but without taking ownership.
- `raw_ptr` can access (read or write) the value, while `uniq_ptr` still maintains exclusive ownership and will automatically delete the object when it goes out of scope.

## Codebyte Example

This example shows how `.get()` can be used to pass a raw pointer to a legacy function that does not accept smart pointers:

```codebyte/cpp
#include <iostream>
#include <memory>

void legacyPrint(int* ptr) {
    std::cout << "Value from legacy function: " << *ptr << std::endl;
}

int main() {
    std::unique_ptr<int> uniq_ptr(new int(42));
    legacyPrint(uniq_ptr.get()); // Passing raw pointer without giving up ownership
    return 0;
}
```
