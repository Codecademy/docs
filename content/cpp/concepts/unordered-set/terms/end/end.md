---
Title: 'end()'
Description: 'Returns an iterator pointing just past the last element of the unordered set, marking the end of the container’s range.'
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

The **`end()`** method returns an iterator that points to the past-the-end position of an `unordered_set`. This iterator marks one past the last element and cannot be dereferenced. Because `unordered_set` does not maintain a defined order, iteration proceeds in the container’s internal hash-table order.

## Syntax

```pseudo
unordered_set_name.end(n);
```

**Parameters:**

- `n` (size_type, optional): The bucket index. Must be less than `bucket_count()`.

**Return value:**

- If `n` isn't provided, returns an iterator pointing to the past-the-end position of the `unordered_set`.
- If `n` is provided, returns a `local_iterator` pointing to the past-the-end position in bucket `n`. If the bucket is empty, `begin(n) == end(n)`.

## Example

In this example, iteration runs from `begin()` to `end()` to print every element in the `unordered_set`:

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

Here is a possible output:

```shell
20
5
10
15
```

> **Note:** The output order may vary because `unordered_set` does not store elements in any defined sequence.

## Codebyte Example

This example retrieves iterators for a specific bucket in the `unordered_set` and prints all elements stored in that bucket:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>

using namespace std;

int main() {
  unordered_set<string> words = {"cat", "dog", "rabbit", "lion"};

  size_t bucket = 1;

  auto it = words.begin(bucket);
  auto last = words.end(bucket);

  cout << "Elements in bucket " << bucket << ":\n";

  for (; it != last; ++it) {
    cout << "  " << *it << "\n";
  }

  return 0;
}
```
