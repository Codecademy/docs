---
Title: 'bucket_size()'
Description: 'Returns the number of elements stored in a specific bucket of an unordered set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`bucket_size()`** method returns the number of elements stored in a specific bucket of an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set). An `unordered_set` stores elements in a [hash table](https://www.codecademy.com/resources/docs/general/data-structures/hash-table), where values are distributed into buckets based on their hash. This method is useful for inspecting bucket distribution and understanding hash collisions.


## Syntax

```pseudo
unordered_set_name.bucket_size(n)
```

**Parameters:**

n: The bucket number to query. This value must be less than the total number of buckets returned by `bucket_count()`. It is of type `size_type`, which is an unsigned integral type.

**Return value:**

The `bucket_size()` method returns the number of elements in bucket `n` as an unsigned integer of type `size_type`.

## Example

This example shows how to inspect how elements are distributed across buckets in an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers = {10, 20, 30, 40, 50};

  std::size_t totalBuckets = numbers.bucket_count();
  std::cout << "Total buckets: " << totalBuckets << "\n";

  for (std::size_t i = 0; i < totalBuckets; i++) {
    std::cout << "Bucket " << i
              << " has " << numbers.bucket_size(i)
              << " elements\n";
  }

  return 0;
}
```
This example results in the following output:

```shell
Total buckets: 5
Bucket 0 has 5 elements
Bucket 1 has 0 elements
Bucket 2 has 0 elements
Bucket 3 has 0 elements
Bucket 4 has 0 elements
```

This output shows how many elements are placed in each bucket. Some buckets may be empty, while others may contain multiple elements depending on the hash distribution.

## Codebyte Example

This example demonstrates using `bucket_size()` to detect hash collisions by finding buckets that contain more than one element:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> values = {1, 2, 3, 4, 5, 6, 7, 8};

  std::size_t totalBuckets = values.bucket_count();

  std::cout << "Buckets with collisions:\n";

  for (std::size_t i = 0; i < totalBuckets; i++) {
    if (values.bucket_size(i) > 1) {
      std::cout << "Bucket " << i
                << " has " << values.bucket_size(i)
                << " elements\n";
    }
  }

  return 0;
}
```
