---
Title: '.empty()'
Description: 'Returns a boolean indicating whether the vector is empty or not.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.empty()`** method returns `true` if the size of the vector is *0*. Otherwise, if the vector has at least one element, it returns `false`. It is used to check if the vector contains any elements and is commonly used in conditional statements.

## Syntax

The `.empty()` method requires no parameters and can be called on a vector using the following syntax:

```pseudo
myVector.empty();
```

- myVector: The vector on which the `.empty()` method is to be applied.

## Example

The following example initializes a `std::vector<int>` named `myvector` and populates it with integers from *1* to *10*. It then repeatedly removes the last element of the vector while it is not empty, adding each removed value to the variable `sum`. Finally, it prints the total sum of all elements:

```cpp
#include <iostream>
#include <vector>

int main ()
{
  std::vector<int> myvector;
  int sum (0);

  for (int i=1;i<=10;i++) myvector.push_back(i);

  while (!myvector.empty())
  {
     sum += myvector.back();
     myvector.pop_back();
  }

  std::cout << "total: " << sum << '\n';

  return 0;
}
```

The code above produces the following output:

```shell
total: 55
```
