---
title: .reset()
description: Releases ownership of the managed object and optionally takes ownership of a new object.
---

### .reset()

The `.reset()` method is used with **smart pointers** in C++ (such as `std::unique_ptr` and `std::shared_ptr`). It releases ownership of the currently managed object and, optionally, replaces it with a new one.

This method helps prevent memory leaks by ensuring the previously managed object is properly deleted when it's no longer needed.

---

## Syntax

```cpp
smart_pointer.reset();              // Releases ownership of the current object
smart_pointer.reset(new Type());    // Deletes current object and takes ownership of the new one
```

---

## Example

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

In this example, a `std::unique_ptr` manages an `int` with a value of 42.  
After calling `.reset()`, the pointer releases ownership of the object and becomes null.  
The check `if (!ptr)` confirms the pointer was successfully reset.

---

## Codebyte

Here’s a compilable example using `.reset()` with a `std::shared_ptr`:

```codebyte/cpp
#include <iostream>
#include <memory>

int main() {
    std::shared_ptr<std::string> message = std::make_shared<std::string>("Hello from Codecademy!");
    std::cout << "Message: " << *message << std::endl;

    message.reset(); // Releases ownership of the managed string

    if (!message) {
        std::cout << "The pointer has been reset." << std::endl;
    }

    return 0;
}
```

---

## References

- [`std::unique_ptr::reset()` - cppreference.com](https://en.cppreference.com/w/cpp/memory/unique_ptr/reset)
- [Codecademy C++ Course](https://www.codecademy.com/learn/learn-c-plus-plus)


