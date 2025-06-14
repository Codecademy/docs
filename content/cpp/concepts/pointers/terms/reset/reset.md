---
Title: '.reset()'
Description: 'Releases ownership of the managed object and optionally takes ownership of a new object.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Pointers'
CatalogContent:
  - 'learn-c++'
  - 'paths/computer-science'
---

The **`.reset()`** method is used with smart pointers in C++ (such as `std::unique_ptr` and `std::shared_ptr`). It releases ownership of the currently managed object (deleting it if this is the last owner) and optionally takes ownership of a new object passed as a raw pointer.

This method safely manages dynamic memory by deleting the previously managed object (if any), thereby helping to prevent memory leaks.

## Syntax

```pseudo
ptr.reset();              // Releases ownership and deletes the managed object
ptr.reset(raw_ptr);       // Releases current object and takes ownership of raw_ptr
```

## Example

This example demonstrates how `.reset()` releases ownership of the managed object, deletes it, and sets the pointer to null:

```cpp
#include <iostream>
#include <memory>

int main() {
  std::unique_ptr<int> ptr(new int(42));
  std::cout << "Value before reset: " << *ptr << std::endl;

  ptr.reset(); // Releases ownership and deletes the managed object

  if (!ptr) {
    std::cout << "Pointer is null after reset." << std::endl;
  }
  return 0;
}
```

The output of this code is:

```shell
Value before reset: 42
Pointer is null after reset.
```

In this example:

- A `std::unique_ptr` manages an `int` with a value of 42.
- After calling `.reset()`, the managed object is deleted and the pointer becomes null.
- The check `if (!ptr)` confirms the pointer was successfully reset.

## Codebyte Example

Run the following example to understand how the `.reset()` method works:

```codebyte/cpp
#include <iostream>
#include <memory>
#include <string>

class TV {
public:
  TV(std::string brand) : brand_(brand) {
    std::cout << brand_ << " TV is turned ON.\n";
  }
  ~TV() {
    std::cout << brand_ << " TV is turned OFF.\n";
  }
  void watch() const {
    std::cout << "Watching " << brand_ << " TV.\n";
  }

private:
  std::string brand_;
};

int main() {
  std::unique_ptr<TV> remote(new TV("Samsung"));  // Remote controls Samsung TV
  remote->watch();

  // Replace old TV with a new LG TV
  remote.reset(new TV("LG"));  // Old TV turned off, now controlling LG TV
  remote->watch();

  // Put down the remote, no TV controlled now
  remote.reset();  // LG TV turned off, remote controls nothing

  if (!remote) {
    std::cout << "Remote controls no TV now.\n";
  }

  return 0;
}
```
