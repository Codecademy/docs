---
Title: 'use_count()'
Description: 'Returns the number of shared_ptr objects that share ownership of the same managed object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Memory'
  - 'Methods'
  - 'Objects'
  - 'Pointers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`use_count()`** method is a member function of `std::shared_ptr` that returns the number of `shared_ptr` objects that share ownership of the same managed object. This function provides a way to check how many shared pointers are currently referencing the same resource, which is useful for debugging, resource management, and understanding object lifetime in shared ownership scenarios.

## Syntax

```pseudo
long use_count() const noexcept;
```

**Parameters:**

This method takes no parameters.

**Return value:**

Returns a `long` integer representing the number of `std::shared_ptr` instances that share ownership of the managed object. If the `shared_ptr` is empty (does not manage any object), it returns `0`.

## Example 1: Basic Usage of `use_count()`

This example demonstrates the fundamental usage of `use_count()` to track shared ownership:

```cpp
#include <iostream>
#include <memory>

int main() {
  // Create a shared_ptr managing an integer
  std::shared_ptr<int> ptr1 = std::make_shared<int>(42);
  std::cout << "After creating ptr1: " << ptr1.use_count() << std::endl;

  // Create another shared_ptr sharing the same object
  std::shared_ptr<int> ptr2 = ptr1;
  std::cout << "After creating ptr2: " << ptr1.use_count() << std::endl;
  std::cout << "ptr2 use_count: " << ptr2.use_count() << std::endl;

  // Create a third shared_ptr
  std::shared_ptr<int> ptr3 = ptr2;
  std::cout << "After creating ptr3: " << ptr1.use_count() << std::endl;

  return 0;
}
```

This example creates multiple `shared_ptr` objects that share ownership of the same integer. Each time a new `shared_ptr` is created that shares the same object, the reference count increases. All `shared_ptr` instances sharing the same object will report the same use count.

The output of this code is:

```shell
After creating ptr1: 1
After creating ptr2: 2
ptr2 use_count: 2
After creating ptr3: 3
```

## Codebyte Example: Resource Management in Classes Using `use_count()`

This example shows how `use_count()` can be used in a real-world scenario for resource management within a class:

```codebyte/cpp
#include <iostream>
#include <memory>
#include <vector>

class ResourceManager {
private:
  std::shared_ptr<std::vector<int>> data;

public:
  ResourceManager() : data(std::make_shared<std::vector<int>>(1000, 0)) {
    std::cout << "ResourceManager created. Initial use_count: " << data.use_count() << std::endl;
  }

  // Copy constructor shares the resource
  ResourceManager(const ResourceManager& other) : data(other.data) {
    std::cout << "ResourceManager copied. New use_count: " << data.use_count() << std::endl;
  }

  // Method to get current reference count
  long getReferenceCount() const {
    return data.use_count();
  }

  // Method to check if resource is uniquely owned
  bool isUniqueOwner() const {
    return data.use_count() == 1;
  }

  void processData() {
    if (isUniqueOwner()) {
      std::cout << "Safe to modify data - unique ownership" << std::endl;
      // Modify data safely
    } else {
      std::cout << "Data is shared among " << getReferenceCount() << " owners" << std::endl;
      // Be careful with modifications or create a copy
    }
  }
};

int main() {
  ResourceManager rm1;
  rm1.processData();

  ResourceManager rm2 = rm1;  // Share the resource
  rm1.processData();
  rm2.processData();

  return 0;
}
```

This example demonstrates a practical use case where `use_count()` helps determine whether it's safe to modify shared resources. The `ResourceManager` class uses `shared_ptr` to manage a large vector, and `use_count()` helps determine if the resource is uniquely owned or shared.

## Frequently Asked Questions

### 1. What is the count function in shared_ptr?

The count function in `shared_ptr` is `use_count()`, which returns the number of `shared_ptr` objects that share ownership of the same managed object.

### 2. How do you get the reference count in C++?

You can get the reference count of a `shared_ptr` by calling the `use_count()` method. For example: `long count = my_shared_ptr.use_count();`.

### 3. What is the use of a shared pointer in C++?

A shared pointer (`std::shared_ptr`) allows multiple pointers to share ownership of the same object. It automatically manages memory using reference counting and deletes the object when the last `shared_ptr` is destroyed.
