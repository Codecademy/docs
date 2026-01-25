---
Title: 'cend()'
Description: 'Returns a constant iterator pointing just past the last element of the unordered set.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Iterators'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`cend()`** method returns a constant iterator that points to the past-the-end position of an `unordered_set`. This iterator marks the end of the container’s range and cannot be dereferenced.

Because `unordered_set` does not maintain a defined order, iteration using [`cbegin()`](https://www.codecademy.com/resources/docs/cpp/unordered-set/cbegin) and `cend()` follows the container’s internal hash-table order.

## Syntax

```pseudo
const_iterator cend() const noexcept;
```

Or, to work with a specific bucket:

```pseudo
unordered_set_name.cend(n);
```

**Parameters:**

- `n` (size_type, optional): The bucket index. Must be less than `bucket_count()`.

**Return value:**

Returns a `const_iterator` pointing to the past-the-end position of the `unordered_set`.

Example 1: Iterating with constant iterators

In this example, `cbegin()` and `cend()` are used to iterate over an `unordered_set` without allowing modification of elements:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> values = {4, 8, 15, 16, 23};

  for (auto it = values.cbegin(); it != values.cend(); ++it) {
    cout << *it << "\n";
  }

  return 0;
}
```

The output of this code is:

```shell
16
15
23
8
4
```

## Example 2: Using `cend()` with a bucket

In this example, `cend(n)` is used to mark the end of iteration for a specific bucket:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> nums = {1, 2, 3, 4, 5};

  size_t bucket = 0;

  for (auto it = nums.cbegin(bucket); it != nums.cend(bucket); ++it) {
    cout << *it << " ";
  }

  return 0;
}
```

The output of this code is:

```shell
5
```

## Codebyte Example

In this example, `cend()` is used to safely iterate through an `unordered_set` when only read access is required:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<string> animals = {"cat", "dog", "horse"};

  for (auto it = animals.cbegin(); it != animals.cend(); ++it) {
    cout << *it << " ";
  }

  return 0;
}
```

> **Note:** The output order may vary because unordered_set does not store elements in a defined sequence.

## Frequently Asked Questions

### 1. What is the end function in unordered set?

The `end()` function returns an iterator pointing to the position just past the last element of an `unordered_set`, marking the end of the container’s range.

### 2. Why use `unordered_set` in C++?

`unordered_set` provides fast average-case lookup, insertion, and deletion by using hash tables instead of ordered structures.

### 3. Difference between end and cend?

`end()` returns a modifiable iterator, while `cend()` returns a constant iterator that does not allow modification of elements.
