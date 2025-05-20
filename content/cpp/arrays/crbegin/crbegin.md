---
Title: "std::array::crbegin()"
Description: "Returns a const reverse iterator to the last element of a `std::array`."
Tags: ["C++", "Arrays", "Iterator", "STL"]
---

## Definition  
`std::array::crbegin()` returns a **const reverse iterator** that points to the first element of the array when traversed in reverse order — i.e., the element that is physically last in normal order.  
Because the iterator is *const*, it cannot be used to modify the underlying elements.

## Syntax
```cpp
std::array<T, N> arr;
auto it = arr.crbegin();   // it is std::array<T,N>::const_reverse_iterator
