---

| Issue # | 6790 |
| ----------- | ----------- |
| Title | std::array::crbegin() |
| Description | Returns a const reverse iterator to the last element of a `std::array`. |
| Subjects | "Codecademy Learn Git Course", "C++" |
| Tags | "C++", "Arrays", "Iterator", "STL" |
| CatalogContent | "learn-cpp" |

---

## Definition
`std::array::crbegin()` returns a **const reverse iterator** that points to the first element of the array when traversed in reverse order — i.e., the element that is physically last in normal order.  
Because the iterator is *const*, it cannot be used to modify the underlying elements.

## Syntax
```cpp
std::array<T, N>::const_reverse_iterator crbegin() const noexcept;
```
| Parameter | Description |
| ----------- | ----------- |
| T | Type stored in the array |
| N | Number of elements in the array |

**Return value: `cont_reverrse_iterator` pointing to element `N-1`.**

## Example
```cpp
#include <array>
#include <iostream>

int main() {
  std::array<int, 5> nums = {10, 20, 30, 40, 50};

  // Print the array in reverse using crbegin / crend
  for (auto it = nums.crbegin(); it != nums.crend(); ++it) {
      std::cout << *it << ' ';
  }
  std::cout << '\n';
}
```
### Output
```
50 40 30 20 10
```


## Codebyte Example
```codebyte/cpp
#include <array>
#include <iostream>

int main() {
  std::array<char, 4> letters = {'A', 'B', 'C', 'D'};

  // crbegin() points to the last element (index 3)
  std::cout << "Last letter: " << *letters.crbegin() << '\n';
  return 0;
}
```

