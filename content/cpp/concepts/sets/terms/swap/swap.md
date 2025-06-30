---
Title: 'swap() (C++ set)'
Description: 'Exchanges the contents of two std::set containers in constant time.'
Subjects:
  - 'C++'
  - 'Sets'
  - 'Standard Library'
Tags:
  - 'cpp'
  - 'set'
  - 'swap'
CatalogContent:
  - 'learn-cplusplus'
  - 'paths/c-plus-plus'
---

**swap() exchanges the contents of two std::set containers (or two compatible ordered associative containers). Swapping is typically faster than moving elements one by one because it only exchanges internal pointers and metadata, keeping the elements themselves untouched.**.

## Syntax

**Non‑member overload (preferred)**

using std::swap; 
// (since C++11)
template< class Key, class Compare, class Alloc >
void swap( std::set< Key, Compare, Alloc >& lhs,
           std::set< Key, Compare, Alloc >& rhs );

**Parameters**

- lhs, rhs — sets whose contents will be exchanged.

**Complexity** — Amortized O(1); pointers to elements remain valid.

**Exceptions** — noexcept if the allocator's propagate‑on‑swap trait is true or the allocators compare equal.

**Member function**

set::swap( set& other );   // (since C++11)

**Parameters**

- other — the set whose contents will be exchanged with *this.

**Complexity** — Constant.

**Exceptions** — Same conditions as above.

## Example

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

Output

Before swap → odds: 1 3 5 7 | evens: 2 4 6 8
After  swap → odds: 2 4 6 8 | evens: 1 3 5 7

## Codebyte Example (if applicable)

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

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
