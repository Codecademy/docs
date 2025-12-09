---
Title: 'erase()'
Description: 'removes elements from an unordered set'
Subjects: 
    - 'Computer Science'
Tags: 
    - 'Methods'
    - 'unordered-sets'
CatalogContent: 
    - 'learn-C++'
    - 'paths/computer-science'
---

# 'C++ Unordered-sets: erase()'

The 'erase()' function removes elements from an unordered set.
It can erase a single element by key, a single element by iterator, or a range of elements using two iterators.
Only iterators pointing to erased elements are invalidated; all others remain valid.

## Syntax

Erase by Key
```
size_t erase(const Key& key);
```

Erase by Iterator
```
iterator erase(const_iterator pos);
```

Erase a Range of Iterators
```
iterator erase(const_iterator first, const_iterator last);
```

Erase by Key: Removes all elements matching `key` (in an `unordered_set`, that's at most one). Returns the number of elements removed.

Erase by Iterator: Removes the element at `pos`. Returns an iterator to the element that followed the erased one.

Erase a Range of Iterators: Removes all elements in the half-open range `[first, last]`. Returns an iterator to the element that followed the last removed one.

## Example

```cpp
#include <iostream>
#include <unordered_set>

int main() {
    std::unordered_set<int> numbers = {1, 2, 3, 4, 5};

    // Erase by key
    numbers.erase(3);

    // Erase by iterator
    auto it = numbers.find(4);
    if (it != numbers.end()) {
        numbers.erase(it);
    }

    // Erase using a range
    auto first = numbers.begin();
    auto last = numbers.find(5);
    numbers.erase(first, last);

    for (int n : numbers) {
        std::cout << n << " "; // expected output: 5
    }
}
```
## Codebyte

The following example creates an `unordered_set<int>`, then demonstrates all three `erase()` overloads:  
* Erasing by key  
* Erasing by iterators  
* Erasing by iterator range  

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
    std::unordered_set<int> s = {1, 2, 3, 4, 5};

    // 1. Erase by key
    s.erase(3);  
    // set is now {1, 2, 4, 5}

    // 2. Erase by iterator
    auto it = s.find(4);
    if (it != s.end()) {
        s.erase(it);
    }
    // set is now {1, 2, 5}

    // 3. Erase by iterator range
    auto first = s.begin();
    auto last = s.end();
    // this removes everything in the set
    s.erase(first, last);

    // set is now empty

    return 0;
}
```
