---
Title: 'reverse()'
Description: 'Not supported for std::unordered_set; explains why and shows practical alternatives to iterate in reverse order.'
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

The **`reverse()`** operation is **not available** for [`std::unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set). Unordered containers do not define a stable ordering of elements, so reverse iteration and reverse iterators are not provided. If you need to process elements in the opposite of some observed iteration, use an ordered container (like `std::set`) or copy the elements into a sequence container (like `std::vector`) and reverse that sequence.

## Syntax

- Not available: `std::unordered_set` has no member `reverse()` and no reverse iterators (`rbegin()`/`rend()`).

Alternative using `std::reverse` on a sequence container:

```pseudo
std::reverse(first, last);
```

**Parameters:**

- `first` (BidirectionalIterator): Iterator to the beginning of the range.
- `last` (BidirectionalIterator): Iterator one past the end of the range.

**Return value:**

- `void` — reverses the elements in place within the given range.

**Notes:**

- Copying an `unordered_set` to a `std::vector` gives you a snapshot of its current internal iteration order; reversing that vector only reverses this unspecified order. For a predictable sorted order, use `std::set` (supports `rbegin()`/`rend()`).

## Example

This example copies elements from an `unordered_set` into a `std::vector`, then reverses the vector to iterate in the opposite order of the observed iteration:

```cpp
#include <iostream>
#include <unordered_set>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  unordered_set<int> numbers = {10, 5, 20, 15};

  cout << "Forward-like iteration:\n";
  for (auto it = numbers.begin(); it != numbers.end(); ++it) {
    cout << *it << "\n";
  }

  vector<int> snapshot(numbers.begin(), numbers.end());
  reverse(snapshot.begin(), snapshot.end());

  cout << "Reversed copy:\n";
  for (int x : snapshot) {
    cout << x << "\n";
  }

  return 0;
}
```

## Codebyte Example

This example demonstrates the same approach with strings:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
  unordered_set<string> words = {"alpha", "beta", "gamma", "delta"};

  vector<string> snapshot(words.begin(), words.end());
  reverse(snapshot.begin(), snapshot.end());

  for (const auto& w : snapshot) {
    cout << w << "\n";
  }

  return 0;
}
```
