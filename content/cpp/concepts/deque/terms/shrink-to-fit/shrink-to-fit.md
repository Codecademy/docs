---
Title: '.shrink_to_fit()'
Description: 'Requests the deque to reduce its capacity to match its size.'
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

In C++, the **`.shrink_to_fit()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) requests the [deque](https://www.codecademy.com/resources/docs/python/deque) to reduce its capacity to match its size. This can help free up unused memory, but does not guarantee that the container will actually shrink. The implementation may choose to ignore this request.

## Syntax

```pseudo
dequeName.shrink_to_fit();
```

**Parameters:**

This method does not take any parameters.

**Return value:**

This method does not return a value, it simply requests that the deque reduce its capacity.

## Example

The example below showcases the use of the `.shrink_to_fit()` method:

```cpp
#include <iostream>
#include <deque>

int main() {
  // Create a deque of integers
  std::deque<int> numbers;

  // Add elements to the deque
  for (int i = 0; i < 100; ++i) {
    numbers.push_back(i);
  }

  std::cout << "Size: " << numbers.size() << std::endl;

  // Remove many elements
  while (numbers.size() > 10) {
    numbers.pop_back();
  }

  std::cout << "Size after removal: " << numbers.size() << std::endl;

  // Request to shrink capacity
  numbers.shrink_to_fit();

  // Display the elements
  std::cout << "Final deque contents: ";
  for (int num : numbers) {
    std::cout << num << " ";
  }

  std::cout << std::endl;

  return 0;
}
```

The above code generates the following output:

```shell
Size: 100
Size after removal: 10
Final deque contents: 0 1 2 3 4 5 6 7 8 9
```

## Codebyte Example

The following codebyte demonstrates the use of the `.shrink_to_fit()` method after removing elements from the deque:

```codebyte/cpp
#include <iostream>
#include <deque>
#include <string>

int main() {
  std::deque<std::string> myDeque;

  myDeque.push_back("Apple");
  myDeque.push_back("Banana");
  myDeque.push_back("Cherry");
  myDeque.push_back("Date");
  myDeque.push_back("Elderberry");

  std::cout << "Original size: " << myDeque.size() << std::endl;

  // Remove some elements
  myDeque.pop_back();
  myDeque.pop_back();
  myDeque.pop_back();

  std::cout << "After removal: " << myDeque.size() << std::endl;

  // Request to shrink capacity
  myDeque.shrink_to_fit();

  std::cout << "Final contents:";
  for (const auto& value : myDeque) {
    std::cout << ' ' << value;
  }
  std::cout << std::endl;
}
```
