---
Title: 'swap()'
Description: 'Exchanges the contents of two unordered sets in constant time.'
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

The **`swap()`** method exchanges the contents of one [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set) with another. This operation runs in constant time because it swaps internal structures rather than moving individual elements.

After the swap, both containers take ownership of each other's elements. Iterators and references remain valid but now refer to elements stored in the opposite container.

The two unordered sets need not have the same size but should have the same template parameters.

## Syntax

The `swap()` method can be used with the following syntax:

1. Member Function

```pseudo
unordered_set_first.swap(unordered_set_second);
```

1. Non-Member Function

```pseudo
swap(unordered_set_first, unordered_set_second);
```

**Parameters:**

- `unordered_set_second`: Another `unordered_set` with the same template parameters(element type, hash, predicate, allocator) as `unordered_set_first`.

**Return Value:**
This method returns nothing (`void`).

## Example

This example demonstrates swapping contents between two `unordered_set` containers:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> setA = {1, 2, 3};
  unordered_set<int> setB = {10, 20};

  cout << "Before swap:\n";
  cout << "setA contents: ";
  for (int x : setA) cout << x << " ";
  cout << "\n";

  cout << "setB contents: ";
  for (int x : setB) cout << x << " ";
  cout << "\n";

  setA.swap(setB);

  cout << "\nAfter swap:\n";
  cout << "setA contents: ";
  for (int x : setA) cout << x << " ";
  cout << "\n";

  cout << "setB contents: ";
  for (int x : setB) cout << x << " ";
  cout << "\n";

  return 0;
}

```

The expected output of this code is:

```
Before swap:
setA contents: 3 2 1
setB contents: 20 10

After swap:
setA contents: 20 10
setB contents: 3 2 1

```

## Codebyte Example

In this example, the code swaps the contents of two `unordered_set` containers and prints their updated elements:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<string> fruits = {"apple", "banana"};
  unordered_set<string> colors = {"red", "blue", "green"};

  cout << "Before swap:\n";
  cout << "fruits: ";
  for (const auto& f : fruits) cout << f << " ";
  cout << "\n";

  cout << "colors: ";
  for (const auto& c : colors) cout << c << " ";
  cout << "\n\n";

  fruits.swap(colors);

  cout << "After swap:\n";
  cout << "fruits: ";
  for (const auto& f : fruits) cout << f << " ";
  cout << "\n";

  cout << "colors: ";
  for (const auto& c : colors) cout << c << " ";
  cout << "\n";

  return 0;
}

```
