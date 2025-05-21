---
Title: '.begin()'
Description: 'Returns an iterator pointing to the first element of a C++ array or container.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Iterators'
  - 'Pointers'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.begin()`** method in C++ returns an iterator pointing to the first element of a container, such as `std::array`, or of a C-style array when used with the free function `std::begin()`. This iterator can be used to access or iterate through the array elements.

## Syntax

The usage of begin() depends on the type of array:

For `std::array` (a container class introduced in C++11):
```pseudo
std_array_object.begin()
```
- **Return Value:** Returns an iterator of the appropriate type, pointing to the first element of the `std_array_object`. If the array is empty, the returned iterator will be equal to the iterator returned by `end()`.

For C-style arrays (using `std::begin` from the `<iterator>` header):
```pseudo
std::begin(c_style_array_name)
```
- **Parameters:**
    - `c_style_array_name`: The name of the C-style array.
- **Return Value:** Returns a pointer (which acts as an iterator for C-style arrays) to the first element of `c_style_array_name`. For an empty C-style array (0 elements, though less common), its behavior is specific to how such an array is defined.

## Example

Here's how you can use `begin()` with an `std::array`:

```cpp
#include <iostream>
#include <array> // Required for std::array
#include <iterator> // Required for std::begin (for C-style arrays example)

int main() {
  // Example with std::array
  std::array<int, 5> numbers = {10, 20, 30, 40, 50};

  // Get an iterator to the first element
  std::array<int, 5>::iterator it = numbers.begin();
  // Or using auto for type deduction:
  // auto it = numbers.begin();

  // Access the first element
  if (it != numbers.end()) { // Good practice: check if the array is not empty
    std::cout << "First element of std::array: " << *it << std::endl;
  }

  // Example with a C-style array using std::begin()
  int c_style_numbers[] = {5, 15, 25};
  int* ptr_begin = std::begin(c_style_numbers);

  // Access the first element
  // (Assuming c_style_numbers is not empty)
  std::cout << "First element of C-style array: " << *ptr_begin << std::endl;
}
```

This example would output:

```shell
First element of std::array: 10
First element of C-style array: 5
```

## Codebyte Example

The following example demonstrates the use of `std::array::begin()` to access and print the first element of an `std::array`.

```codebyte/cpp
#include <iostream>
#include <array>    // Required for std::array

int main() {
  std::array<int, 3> myArray = {100, 200, 300};

  // Get an iterator to the beginning of the array
  auto it = myArray.begin();

  // Check if the array is not empty and print the first element
  if (it != myArray.end()) {
    std::cout << "The first element is: " << *it << std::endl;
  } else {
      std::cout << "The array is empty." << std::endl;
  }

  // You can also use the iterator to traverse the array
  std::cout << "Array elements: ";
  for (auto current_it = myArray.begin(); current_it != myArray.end(); ++current_it) {
    std::cout << *current_it << " ";
  }
  std::cout << std::endl;

  return 0;
}
```
