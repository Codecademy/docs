Title: '.reset()'  
Description: 'Releases ownership of the managed object and optionally takes ownership of a new object.'  
Subjects:  
'Code Foundations'  
'Computer Science'  
Tags:  
'Containers'  
'Pointers'  
CatalogContent:  
'learn-c++'  
'paths/computer-science'  

The **`.reset()`** method is used with smart pointers in C++ (such as `std::unique_ptr` and `std::shared_ptr`). It releases ownership of the currently managed object and optionally takes ownership of a new one.

This method safely manages dynamic memory by deleting the previously managed object (if any), thereby helping to prevent memory leaks.

---

## Syntax

```pseudo
ptr.reset();                   // Releases ownership and deletes the managed object
ptr.reset(new_ptr);      // Replaces the managed object with a new one
```

## Example

This example demonstrates how `.reset()` releases ownership of the managed object, safely deleting it and setting the pointer to null.

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

```shell 
Value before reset: 42 
Pointer is null after reset. 
```

In this example, a `std::unique_ptr` manages an `int` with a value of 42.  
After calling `.reset()`, the pointer releases ownership of the object and becomes null.  
The check `if (!ptr)` confirms the pointer was successfully reset.

## Codebyte Example

Here’s a compilable example using `.reset()` with a `std::shared_ptr`:

```codebyte/cpp
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
