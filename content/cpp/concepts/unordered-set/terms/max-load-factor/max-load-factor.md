---
Title: 'max_load_factor()'
Description: 'Get or set the maximum load factor for the unordered set'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`max_load_factor()`** method has two forms:

1. A version that takes no arguments and returns the current maximum load factor of the [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set).

2. A version that takes one argument and sets it as the new maximum load factor. This version does not return a value.

The **load factor** is defined as:
`load_factor = number_of_elements / number_of_buckets`

If multiple elements are placed into the same bucket, hash collisions may occur. To limit this, the container uses the **maximum load factor** as a threshold. When inserting an element would cause the load factor to exceed this value, the container automatically increases the number of buckets and performs a **rehash**.

By default, the maximum load factor of an `unordered_set` is **1.0**.


## Syntax

```pseudo
unordered_set_name.max_load_factor(); // returns the maximum load factor

unordered_set_name.max_load_factor(double z); // sets z as the maximum load factor
```

## Example

This example demonstrates how to read and modify the maximum load factor and how it affects the number of buckets in the container.
Most standard library implementations pre-allocate a relatively large number of buckets, so `rehash()` is used here to force the container to start small and make the effect visible.

```cpp
#include <iostream>
#include <unordered_set>

int main() {
    std::unordered_set<int> s;
    std::cout << "Initial maximum load factor: " << s.max_load_factor() << "\n";
    s.rehash(1); // Forces the container to start with 1 bucket
    s.max_load_factor(0.5f);

    std::cout << "Initial buckets: " << s.bucket_count() << "\n\n";

    s.insert(5);

    std::cout << "After inserting 5:\n";
    std::cout << "max_load_factor = " << s.max_load_factor() << "\n";
    std::cout << "size            = " << s.size() << "\n";
    std::cout << "bucket_count    = " << s.bucket_count() << "\n";
    std::cout << "load_factor     = " << s.load_factor() << "\n";
}

```
Even though `rehash(1)` was called, the insertion caused the container to increase the number of buckets to satisfy the constraint:

`size / bucket_count <= max_load_factor`

Since `max_load_factor = 0.5`, at least two buckets are required for one element, and the implementation chose 23.

Output of this code:

```shell
Initial maximum load factor: 1
Initial buckets: 2

After inserting 5:
max_load_factor = 0.5
size            = 1
bucket_count    = 23
load_factor     = 0.0434783
```

## Codebyte Example

Test and modify the code below:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
    std::unordered_set<int> s;
    std::cout << "Initial maximum load factor: " << s.max_load_factor() << "\n";
    s.rehash(1); // Forces the container to start with 1 bucket
    s.max_load_factor(0.5f);

    std::cout << "Initial buckets: " << s.bucket_count() << "\n\n";

    s.insert(5);

    std::cout << "After inserting 5:\n";
    std::cout << "max_load_factor = " << s.max_load_factor() << "\n";
    std::cout << "size            = " << s.size() << "\n";
    std::cout << "bucket_count    = " << s.bucket_count() << "\n";
    std::cout << "load_factor     = " << s.load_factor() << "\n";
}

```
