# `.get()` method under Pointers in C++

The **`.get()`** member function is used with smart pointers in C++, namely `std::unique_ptr` and `std::shared_ptr`. It returns the raw pointer managed by the smart pointer without relinquishing ownership. This allows direct access to the managed object when needed, especially for interoperability with legacy or third-party code that expects traditional pointers.

## Syntax

### For `std::unique_ptr`:

```cpp
T* get() const noexcept;
```

- Returns the stored pointer.
- Does not release ownership.

### For `std::shared_ptr`:

```cpp
T* get() const noexcept;
```

- Returns the stored pointer.
- Does not change the reference count or ownership.

## Example 1: Using `.get()` with `std::unique_ptr`

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

## Example 2: Using `.get()` with `std::shared_ptr`

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

## Codebyte

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

## Notes

- `.get()` gives access to the raw pointer without transferring or modifying ownership.
- The smart pointer still controls the resource's lifetime.
- Avoid passing the raw pointer to code that might delete or store it, as this can lead to undefined behavior.
- Always make sure the smart pointer outlives the use of the raw pointer.
