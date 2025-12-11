Title: 'end()'
Description: 'Returns an iterator that points to the past-the-end position of the unordered set or the end position in a specific bucket.'
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

The **`end()`** method returns an iterator that points to the past-the-end position of an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set). This iterator marks one past the last element and cannot be dereferenced. Because `unordered_set` does not maintain a defined order, iteration proceeds in the container’s internal hash-table order.

## Syntax

```pseudo
unordered_set_name.end();
```

**Return value:**

Returns an `iterator` pointing to the past-the-end position of the `unordered_set`.

Or, to work with a specific bucket:

```pseudo
unordered_set_name.end(n);
```

**Parameters:**

- `n` (size_type): The bucket index. Must be less than `bucket_count()`.

**Return value:**

A `local_iterator` pointing to the past-the-end position in bucket `n`. If the bucket is empty, `begin(n) == end(n)`.

## Example

This example shows iterating over an `unordered_set` using `begin()` and `end()`:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> unique_numbers = {10, 5, 20, 15};

  for (auto it = unique_numbers.begin(); it != unique_numbers.end(); ++it) {
    cout << *it << "\n";
  }

  return 0;
}
```

A sample output might be:

```shell
20
5
10
15
```

> **Note:** The iterator returned by `end()` marks the boundary for iteration and cannot be dereferenced.

## Codebyte Example

This example retrieves iterators for a specific bucket in the `unordered_set` and prints all elements stored in that bucket:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<string> words = {"cat", "dog", "rabbit", "lion"};

  size_t bucket = 0;

  auto it = words.begin(bucket);
  auto last = words.end(bucket);

  cout << "Elements in bucket " << bucket << ":\n";

  for (; it != last; ++it) {
    cout << "  " << *it << "\n";
  }

  return 0;
}
```

A sample output might be:

```shell
Elements in bucket 0:
  cat
  dog
  lion
```

Exact elements shown depend on the hash function and bucket count; your output may differ.
