---
Title: '.max-size()'
Description: 'The .max_size() method returns the maximum number of elements that a deque container can theoretically hold as content.'
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

In C++, the **`.max_size()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) returns the maximum number of elements in the deque. This is the maximum potential size the container can reach due to known system or library implementation limitations, but the container is by no means guaranteed to be able to reach that size: it can still fail to allocate storage at any point before that size is reached.

## Syntax

`container.max_size()`

Member function of standard containers like:
std::deque, std::vector, std::list, std::map, etc.

## Example

```cpp
#include <iostream>
#include <deque>

int main() {
    std::deque<int> mydeque;

    std::cout << "Maximum possible elements: " << mydeque.max_size() << '\n';
}
```
Example output on a 64-bit system:
```shell
Maximum possible elements: 4611686018427387903
```

## Codebyte Example

Here, member `max_size` is used to check beforehand whether the requested size will be allowed by `resize`.

```codebyte/cpp

// deque::max_size
#include <iostream>
#include <deque>

int main ()
{
  unsigned int i;
  std::deque<int> mydeque;

  std::cout << "Enter number of elements: ";
  std::cin >> i;

  if (i<mydeque.max_size()) mydeque.resize(i);
  else std::cout << "That size exceeds the limit.\n";

  return 0;
}

```