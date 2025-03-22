---
Title: '.insert()'
Description: 'Inserts an element at a specified position in the deque.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Classes'
  - 'Containers'
  - 'Deques'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.insert()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) inserts an element at a specified position in the deque.

## Syntax

There are some variations in the syntax for the `.insert()` method:

```pseudo
dequeName.insert(iterator position, const value_type& val)
deque_name.insert(iterator position, size_type n, const value_type& val)
deque_name.insert(iterator position, InputIterator first, InputIterator last)
```

- `position`: An iterator pointing to the location where the new element(s) should be inserted.
- `val`: The element to be added to the deque. It can be of any [data type](https://www.codecademy.com/resources/docs/cpp/data-types) that `deque_name` holds.
- `n`: Specifies the number of elements to insert into the deque, each initialized to a copy of `val`.
- `first`: An iterator pointing to the beginning of a range of elements to be inserted into the deque.
- `last`: An iterator pointing to one past the last element in the range to be inserted, indicating that all elements from `first` (inclusive) to `last` (exclusive) will be added.

## Example

The example below showcases the use of the `.insert()` method:

```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of integers
  std::deque<int> numbers;

  // Add elements to the deque
  numbers.push_back(10);
  numbers.push_back(30);

  // Insert 20 at index 1 using .insert()
  numbers.insert(numbers.begin() + 1, 20);

  // Display the elements of the deque
  std::cout << "Deque contents: ";

  for (int num : numbers) {
    std::cout << num << " ";
  }

  std::cout << std::endl;

  return 0;
}
```

The above code generates the following output:

```shell
Deque contents: 10 20 30
```

## Codebyte Example

Run the following codebyte example to understand the use of the `.insert()` method:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  std::deque<std::string> myDeque;

  myDeque.push_back("A");
  myDeque.push_back("C");

  // Insert B at index 1
  myDeque.insert(myDeque.begin() + 1, "B");

  myDeque.push_back("D");

  for (const auto& value : myDeque) {
    std::cout << ' ' << value;
  }
}
```
