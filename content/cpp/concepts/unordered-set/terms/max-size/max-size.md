---
Title: 'max_size()'
Description: 'Returns the maximum number of elements that an unordered_set can theoretically hold.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Methods'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.max_size()`** member [function](https://www.codecademy.com/resources/docs/cpp/functions) returns the maximum number of elements an `unordered_set` can theoretically hold. This limit depends on the system and the implementation of the standard library, not on actual available memory.

## Syntax

```pseudo
unordered_set_name.max_size()
```

**Parameters:**

This function takes no parameters.

**Return value:**

The method returns a value of type `size_type`, representing the theoretical maximum number of elements.

## Example 1: Basic Usage

In this example, the program prints the maximum number of elements an `unordered_set` can theoretically hold:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers;

  std::cout << "Maximum size: " << numbers.max_size() << std::endl;

  return 0;
}
```

The output will be:

```shell
Maximum size: 1152921504606846975
```

> **Note:** The actual value may vary depending on the system and implementation.

## Example 2: Using Different Data Types

In this example, the `max_size()` value is shown for `unordered_set` containers holding different [data types](https://www.codecademy.com/resources/docs/cpp/data-types):

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> int_set;
  std::unordered_set<double> double_set;
  std::unordered_set<char> char_set;

  std::cout << "int max size: " << int_set.max_size() << std::endl;
  std::cout << "double max size: " << double_set.max_size() << std::endl;
  std::cout << "char max size: " << char_set.max_size() << std::endl;

  return 0;
}
```

The output will be:

```shell
int max size: 1152921504606846975
double max size: 1152921504606846975
char max size: 1152921504606846975
```

## Codebyte Example

In this example, the program compares the current size of an `unordered_set` with its theoretical maximum:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> fruits = {"apple", "banana", "cherry"};

  std::cout << "Current size: " << fruits.size() << std::endl;
  std::cout << "Maximum size: " << fruits.max_size() << std::endl;
  std::cout << "Available capacity: " << fruits.max_size() - fruits.size() << std::endl;

  return 0;
}
```
