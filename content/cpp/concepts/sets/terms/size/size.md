---
Title: '.size()'
Description: 'Returns the number of elements in the set.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Data Types'
  - 'Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.size()`** method is used to determine the number of elements currently stored in a `std::set`.

## Syntax

```pseudo
setName.size();
```

**Parameters:**

This method does not take any parameters.

**Return value:**

Returns the current number of elements in the set as an unsigned integer (`size_type`).

## Example: Calculating the Average of Set Elements

In this example, a set is created, values are inserted, and the average of the elements is calculated using `.size()` to get the count:

```cpp
#include <iostream>
#include <set>

int main() {
  // Initialize set
  std::set<int> numbers;

  // Insert values into set
  numbers.insert(24);
  numbers.insert(26);
  numbers.insert(30);
  numbers.insert(20);

  int sum = 0;
  for (int num : numbers) {
    sum += num;
  }

  // Calculate and print average
  std::cout << "The average of the integers in the set is: "
            << sum / numbers.size() << "\n";

  return 0;
}
```

The output of this code is:

```shell
The average of the integers in the set is: 25
```

## Codebyte Example

The following Codebyte example creates a `grades` set of type `int`, inserts several values, and prints the number of elements:

```codebyte/cpp
#include <iostream>
#include <set>

int main() {
  // Initialize set
  std::set<int> numbers;

  // Insert values into set
  numbers.insert(90);
  numbers.insert(34);
  numbers.insert(2);
  numbers.insert(101);

  // Print number of elements in the set
  std::cout << "The set contains " << numbers.size() << " elements.\n";

  return 0;
}
```
