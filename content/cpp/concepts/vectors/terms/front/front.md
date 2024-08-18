---
Title: '.front()'
Description: 'Returns a reference to the first element in the vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'Methods'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.front()`** method returns a reference to the first element in the vector. This allows you to access or modify the first element in the vector without needing to create another variable or removing it from the vector.

## Syntax

```pseudo
vector.front();
```
Before using vectors, you must first `#include` the `vector` library.

## Example

In the example below, `.front()` is used to print the first element of the `numbers` vector:

```cpp
#include <iostream>
#include <vector>

int main() {
    // Declaring a vector of integers
    std::vector<int> numbers = {1, 2, 3, 4};

    // Print out first element
    std::cout << numbers.front();

    return 0;
}
```

The output of the above code is:

```shell
1
```

This codebyte example uses `.front()` to both access and modify the first element of the vector.

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <vector>
int main() {
  // Declaring a vector of integers
  std::vector<int> numbers = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};

  // Printing out the first element
  std::cout << numbers.front() << std::endl;

  // Modifying the first element
  numbers.front() *= 2;

  //Printing out the first element again
  std::cout << numbers.front() << std::endl;
   
  return 0;
}
```
