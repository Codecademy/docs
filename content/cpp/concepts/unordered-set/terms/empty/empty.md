---
Title: 'empty()'
Description: 'Checks whether the unordered set is empty.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Functions'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`empty()`** method for [`std::unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set) determines whether the unordered set contains no elements. It returns `true` if the container is empty and `false` otherwise.

## Syntax

```pseudo
unordered_set_name.empty()
```

**Parameters:**

This method does not take any parameters.

**Return Values:**

Returns `true` if the container is empty and `false` otherwise.

## Example

The code below demonstrates how to use the `empty()` method with `std::unordered_set` in C++, printing a message based on whether the unordered set is empty or not:

```cpp
#include <iostream>
#include <unordered_set>

int main()
{
  std::unordered_set<int> my_set;

  if (my_set.empty())
    std::cout << "Unordered set is empty\n";
  else
    std::cout << "Unordered set has elements\n";

  std::unordered_set<int> my_other_set{2, 4, 3};

  if (my_other_set.empty())
    std::cout << "Unordered set is empty\n";
  else
    std::cout << "Unordered set has elements\n";

  return 0;
}
```

The output of the above code is:

```shell
Unordered set is empty
Unordered set has elements
```

## Codebyte Example

In this example, the `empty()` method helps control a loop that sums and removes elements until the unordered set becomes empty:

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main()
{
  int sum = 0;
  std::unordered_set<int> my_set{1, 6, 4, 5, 2, 9, 3};

  while (!my_set.empty())
  {
    sum += *my_set.begin();
    my_set.erase(my_set.begin());
  }

  std::cout << "Sum: " << sum << '\n';
  return 0;
}
```
