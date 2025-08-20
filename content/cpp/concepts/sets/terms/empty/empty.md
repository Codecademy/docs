---
Title: 'empty()'
Description: 'Checks whether the set is empty.'
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

In C++, the **`empty()`** method for [`std::set`](https://www.codecademy.com/resources/docs/cpp/sets) determines whether the set contains no elements. It returns `true` if the container is empty and `false` otherwise.

## Syntax

```pseudo
set_name.empty()
```

**Parameters:**

This method does not take any parameters.

**Return Values:**

Returns `true` if the container is empty and `false` otherwise.

## Example: Using `empty()` with `std::set`

The code below demonstrates how to use the `empty()` method with `std::set` in C++, printing a message based on whether the set is empty or not:

```cpp
#include <iostream>
#include <set>

int main()
{
  std::set<int> my_set;

  if (my_set.empty())
    std::cout << "Set is empty\n";
  else
    std::cout << "Set has elements\n";

  std::set<int> my_other_set{2, 4, 3};

  if (my_other_set.empty())
    std::cout << "Set is empty\n";
  else
    std::cout << "Set has elements\n";

  return 0;
}
```

The output of the above code is:

```shell
Set is empty
Set has elements
```

## Codebyte Example: Using `empty()` to Calculate a Sum

In this example, `empty()` helps control a loop that sums and removes elements until the set becomes empty:

```codebyte/cpp
#include <iostream>
#include <set>

int main()
{
  int sum = 0;
  std::set<int> my_set{1, 6, 4, 5, 2, 9, 3};

  while (!my_set.empty())
  {
    sum += *my_set.begin();
    my_set.erase(my_set.begin());
  }

  std::cout << "Sum: " << sum << '\n';
  return 0;
}
```
