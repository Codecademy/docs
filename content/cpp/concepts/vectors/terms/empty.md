---
Title: '.empty()'
Description: 'Returns a boolean representing whether the vector is empty (i.e. whether its size is 0)'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Vectors'
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.empty()`** method returns `true` if the size of the vector is 0. Otherwise, if it has at least one element, returns `false`.

## Syntax

The `.empty()` method requires no parameters and can be called on a vector using the following syntax:

```pseudo
myVector.empty();
```

## Codebyte Example

The following example initializes a vector containing a sequence of numbers from 1 to 10. It then pops each element one by one until it's **empty**, accumulating their values in the variable `sum` and finally printing it.

```codebyte/cpp
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

**Output:** `55`
