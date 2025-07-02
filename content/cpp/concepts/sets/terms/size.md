---
Title: '.size()'
Description: 'Returns the amount of elements in the set.'
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

The **`.size()`** method is used to determine the amount of elements that are currently stored in a set.

## Syntax

```pseudo
setName.size();
```

## Example

## Obtaining the median of the numbers in a set

```cpp
#include <iostream>
#include <set>

int main() {
  // Initiate set
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

  // Print amount of elements in set "numbers"
  std::cout << "the median of the integers in the set is: " << sum/numbers.size() << "\n";

}

```

### prints: 
```shell
the median of the integers in the set is: 25
```

## Codebyte Example

The following codebyte example creates a `grades` set of type `int` and inserts several values before being printed:

```codebyte/cpp
#include <iostream>
#include <set>

int main() {
  // Initiate set
  std::set<int> numbers;

  // Insert values into set
  numbers.insert(90);
  numbers.insert(34);
  numbers.insert(2);
  numbers.insert(101);

  // Print amount of elements in set "numbers"
  std::cout << "The set contains " << numbers.size() << " elements.\n";

}
```
