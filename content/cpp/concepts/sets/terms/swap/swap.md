---
Title: 'swap()'
Description: 'Exchanges the contents of two sets.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`swap()`** method in C++ exchanges the contents of two [`std::set`](https://www.codecademy.com/resources/docs/cpp/sets) containers of identical type (same key type, comparator type, and allocator type). This operation is typically faster than copying or moving elements individually, as it swaps internal pointers and metadata without modifying or relocating the actual elements.

## Syntax of C++ `swap()`

```pseudo
set1.swap(set2);
```

Or using the non-member function:

```pseudo
std::swap(set1, set2);
```

**Parameters:**

- `set1`, `set2`: Two `std::set` containers of the same type (including the same key type, comparator, and allocator).

**Return value:**

- The `swap()` method does not return anything. It simply swaps the contents.

## Example

In this example, `std::swap()` is used to exchange the contents of two integer sets named `odds` and `evens`:

```cpp
#include <iostream>
#include <set>
#include <algorithm>

int main() {
  std::set<int> odds  {1, 3, 5, 7};
  std::set<int> evens {2, 4, 6, 8};

  std::cout << "Before swap → odds: ";
  for (int n : odds)  std::cout << n << ' ';
  std::cout << "| evens: ";
  for (int n : evens) std::cout << n << ' ';
  std::cout << '\n';

  std::swap(odds, evens);   // non‑member swap

  std::cout << "After  swap → odds: ";
  for (int n : odds)  std::cout << n << ' ';
  std::cout << "| evens: ";
  for (int n : evens) std::cout << n << ' ';
  std::cout << '\n';
}
```

The output of this code is:

```shell
Before swap → odds: 1 3 5 7 | evens: 2 4 6 8
After  swap → odds: 2 4 6 8 | evens: 1 3 5 7
```

## Codebyte Example

In this example, the member function `swap()` is used to swap the contents of two string sets, `a` and `b`:

```codebyte/cpp
#include <iostream>
#include <set>
#include <algorithm>

int main() {
  std::set<std::string> a {"apple", "banana"};
  std::set<std::string> b {"carrot", "date", "eggplant"};

  auto dump = [](const std::string& label, const std::set<std::string>& s){
    std::cout << label << ": ";
    for (const auto& v : s) std::cout << v << ' ';
    std::cout << '\n';
  };

  dump("a", a);
  dump("b", b);

  a.swap(b); // member swap

  std::cout << "\nAfter swap\n";
  dump("a", a);
  dump("b", b);
}
```

