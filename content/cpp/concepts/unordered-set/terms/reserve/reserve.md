---
Title: 'reserve()'
Description: 'Requests capacity change for std::unordered_set so it can accommodate at least n elements without exceeding the maximum load factor.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Iterators'
  - 'Sets'
  - 'STL'
  - 'Algorithms'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`reserve()`** method requests a capacity change for an [`std::unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set). It sets the number of buckets to the amount needed to accommodate at least `n` elements without exceeding the container’s `max_load_factor()`. Calling `reserve(n)` may trigger a rehash; if it does, all iterators are invalidated, but references and pointers to elements remain valid. This operation does not sort or otherwise order elements.

## Syntax

```pseudo
unordered_set_name.reserve(n);
```

**Parameters:**

- `n` (size_type): Minimum number of elements the container should be able to accommodate without exceeding `max_load_factor()`.

**Return value:**

- `void`

**Notes:**

- Effectively calls `rehash(ceil(n / max_load_factor()))`.
- May invalidate iterators if a rehash occurs; references and pointers to elements remain valid.
- Use `rehash(k)` to set the bucket count directly; use `reserve(n)` to plan for element count.
- Does not impose ordering; iteration order remains implementation-defined.

## Example

This example shows bucket capacity before and after `reserve()`, and demonstrates that elements remain accessible with the same unordered iteration semantics:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> numbers = {10, 20, 30};

  cout << "Buckets before: " << numbers.bucket_count() << "\n";

  numbers.reserve(10);

  cout << "Buckets after: " << numbers.bucket_count() << "\n";
  cout << "Max load factor: " << numbers.max_load_factor() << "\n";
  cout << "Load factor: " << numbers.load_factor() << "\n";

  for (int i = 1; i <= 7; ++i) {
    numbers.insert(i * 5);
  }

  cout << "Size: " << numbers.size() << "\n";
  cout << "Buckets final: " << numbers.bucket_count() << "\n";

  return 0;
}
```

## Codebyte Example

This example demonstrates `reserve()` with strings, and prints capacity-related information:

```codebyte/cpp
#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<string> words = {"alpha", "beta", "gamma"};

  cout << "Before: buckets=" << words.bucket_count() << ", size=" << words.size() << "\n";

  words.reserve(10);

  cout << "After: buckets=" << words.bucket_count() << ", size=" << words.size() << "\n";

  words.insert("delta");
  words.insert("epsilon");
  words.insert("zeta");

  cout << "Load factor: " << words.load_factor() << "\n";
  cout << "Max load factor: " << words.max_load_factor() << "\n";

  for (const auto& w : words) {
    cout << w << "\n";
  }

  return 0;
}
```
