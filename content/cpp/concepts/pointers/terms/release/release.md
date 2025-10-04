---
Title: '.release()'
Description: 'Releases ownership of the managed object from a `std::unique_ptr`, returning the raw pointer and leaving the `unique_ptr` empty.'
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

In C++, the **`.release()`** function is a member of the smart pointer class `std::unique_ptr`. It releases ownership of the managed object and returns a raw pointer to that object. After calling `.release()`, the `unique_ptr` becomes empty and holds `nullptr`.

## Syntax

If `ptr` is a `std::unique_ptr`, then:

```pseudo
ptr.release();
```

**Parameters:**

The function takes no parameters.

**Return value:**

Returns the raw pointer to the object managed by the `unique_ptr` before the call.

## Example

This example demonstrates how to use `.release()`:

```cpp
#include <iostream>
#include <memory>

int main() {
  // Create a unique_ptr managing a new int
  std::unique_ptr<int> auto_pointer(new int);

  // Assign value 10 to the managed object
  *auto_pointer = 10;

  // Release ownership and get the raw pointer
  int* manual_pointer = auto_pointer.release();

  // Output the value pointed to by manual_pointer
  std::cout << "manual_pointer now points to " << *manual_pointer << "\n";

  // Manually delete the raw pointer to avoid memory leak
  delete manual_pointer;

  return 0;
}
```

The output of this code is:

```shell
manual_pointer now points to 10
```

This code creates a `unique_ptr` managing an integer with value `10`. Calling `.release()` transfers ownership to `manual_pointer`, and the raw pointer must be manually deleted to prevent a memory leak.

## Codebyte Example

In this codebyte example, `std::unique_ptr` is used to manage a `FILE*`. When there is a need to pass the file pointer to a legacy C-style API that expects a raw `FILE*`, `.release()` is used to transfer ownership safely:

```codebyte/cpp
#include <iostream>
#include <memory>
#include <cstdio>

// A legacy C-style function that expects a raw FILE* and closes it
void legacyFileHandler(FILE* file) {
  if (file) {
    std::cout << "Legacy handler processing file...\n";
    // Simulate file operations...
    fclose(file);  // Manually close the file
    std::cout << "File closed by legacy handler.\n";
  }
}

int main() {
  // Use unique_ptr to manage the FILE* resource with fclose as deleter
  std::unique_ptr<FILE, decltype(&fclose)> file_ptr(fopen("example.txt", "w"), &fclose);

  if (!file_ptr) {
    std::cerr << "Failed to open file.\n";
    return 1;
  }

  // Release ownership and pass the raw pointer to legacy handler
  FILE* raw_file = file_ptr.release();

  // Legacy function now owns and closes the file
  legacyFileHandler(raw_file);

  return 0;
}
```
