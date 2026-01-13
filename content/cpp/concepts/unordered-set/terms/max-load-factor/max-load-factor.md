---
Title: 'max_load_factor()'
Description: 'Gets or sets the maximum load factor of the unordered set.'
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

The **`max_load_factor()`** method gets or sets the maximum load factor of an `unordered_set`. The load factor is defined as the ratio of the number of elements to the number of buckets:

`load_factor = number_of_elements / number_of_buckets`

When the current load factor exceeds the maximum load factor, the container automatically rehashes to increase the number of buckets and maintain efficient lookup performance.

## Syntax

```pseudo
unordered_set_name.max_load_factor(value);
```

**Parameters:**

- `value` (float, optional): The new maximum load factor to set for the container.

**Return value:**

- When called without arguments, returns the current maximum load factor as a `float`.
- When called with an argument, sets the maximum load factor and returns nothing (`void`).

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

The output of this code:

```shell
Initial maximum load factor: 1
Initial buckets: 2

After inserting 5:
max_load_factor = 0.5
size            = 1
bucket_count    = 23
load_factor     = 0.0434783
```

> **Note:** Actual bucket counts may vary depending on the standard library implementation.

## Codebyte Example

This example sets a custom maximum load factor before inserting elements, ensuring the container maintains lower collision density as it grows:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> values;

  // Set a stricter maximum load factor
  values.max_load_factor(0.7f);

  std::cout << "Max load factor set to: "
            << values.max_load_factor() << "\n";

  // Insert multiple elements
  for (int i = 0; i < 20; ++i) {
    values.insert(i);
  }

  std::cout << "Size: " << values.size() << "\n";
  std::cout << "Bucket count: " << values.bucket_count() << "\n";
  std::cout << "Current load factor: "
            << values.load_factor() << "\n";

  return 0;
}
```
