---
Title: 'release'
Description: 'Releases ownership of the managed object from a std::unique_ptr.'
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

The **`release()`** function is a member function of smart pointer class `std::unique_ptr`. It releases ownership of the managed object and returns the raw pointer to that object. After calling `release()` the smart pointer becomes empty and holds `nullptr`. 

## Syntax

```cpp
std::unique_ptr<int> ptr(new int(10));
int* raw_pointer = ptr.release();
```

The code snippet above creates a `unique_ptr` managing a new integer with a value of 10. Calling `release()` relinquishes ownership and returns the raw pointer, which is assigned to `raw_pointer`.

### Parameters

The function takes no parameters.

### Return value

Returns the raw pointer to the object managed by the `unique_ptr` before the call.

### Notes

After calling `release()`, the caller is responsible for managing the lifetime of the returned raw pointer, including deleting it when no longer needed to prevent memory leaks.

## Example

The following demonstrates how to use `release()`:

```cpp
#include <iostream>
#include <memory>

int main() {

  // Create a unique_ptr managing a new int
  std::unique_ptr<int> auto_pointer (new int);

  // Raw pointer to hold the released pointer
  int* manual_pointer;

  // Assign value 10 to the managed object
  *auto_pointer = 10;

  // Release ownership and get the raw pointer
  manual_pointer = auto_pointer.release();

  // Output the value pointed to by manual_pointer
  std::cout << "manual_pointer now points to " << *manual_pointer << "\n";

  // Manually delete the raw pointer to avoid memory leak
  delete manual_pointer;

  return 0;
} 
```

This example creates a unique_ptr called auto_pointer. It manages a dynamically allocated integer and assigns a value of 10 to the object. `Release()` is then used to relinquish ownership and assign the raw pointer to `manual_pointer`. The program prints the value and then manually deletes the raw pointer to avoid a memory leak.

