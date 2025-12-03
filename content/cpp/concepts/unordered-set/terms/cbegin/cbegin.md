---
Title: 'cbegin()'
Description: 'Returns a constant iterator pointing to either the first element of the unordered set or the first element in a specific bucket.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Iterators'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`cbegin()`** method returns a constant iterator that points to the first element of an [`std::unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set). A constant iterator allows read-only access to elements and prevents modification. Because `unordered_set` does not maintain any defined order, the element returned by `cbegin()` depends on its internal hash table structure.

## Syntax

```pseudo
unordered_set_name.cbegin(n);
```

**Return value:**

Returns a `const_iterator` (constant iterator) pointing to the first element in the `unordered_set`.

Or, alternatively:

```pseudo
unordered_set_name.cbegin(n);
```

**Parameters:**

- `n` (size_type): The bucket index. Must be less than `bucket_count()`.

**Return value:**

A `const_local_iterator` pointing to the first element in bucket `n`. If the bucket is empty, the returned iterator equals `cend(n)`.

## Example

This example demonstrates obtaining the starting element of an `unordered_set` using `cbegin()`:

```cpp
#include <iostream>
#include <string>
#include <unordered_set>

int main() {
  std::unordered_set<int> unique_numbers = {10, 5, 20, 15};

  auto it = unique_numbers.cbegin();

  std::cout << "The first element in internal order is: " << *it << "\n";

  ++it;
  if (it != unique_numbers.cend()) {
    std::cout << "The second element is: " << *it << "\n";
  }

  // *it = 99; // Error: cannot modify through const_iterator

  return 0;
}
```

A sample output of this code is:

```shell
The first element in the set's internal order is: 20
The second element is: 5
```

> **Note:** Attempting to modify the element pointed to by the `const_iterator` would result in a compilation error.

## Codebyte Example

In this example, the code retrieves a constant iterator for a specific bucket in the unordered_set and prints all elements stored in that bucket:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> words = {"cat", "dog", "rabbit", "lion"};

  size_t bucket = 0;

  auto it = words.cbegin(bucket);
  auto end = words.cend(bucket);

  std::cout << "Elements in bucket " << bucket << ":\n";

  for (; it != end; ++it) {
    std::cout << "  " << *it << "\n";
  }

  return 0;
}
```
