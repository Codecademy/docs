---
Title: 'Forward List'
Description: 'Like vectors and arrays, a forward list is a data structure capable of storing a sequential list of elements in C++.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Lists'
  - 'Vectors'
  - 'Arrays'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Like vectors and arrays, a **forward list** is a lightweight  data structure capable of storing a sequential list of elements in C++. The main difference between an array and a forward list is that an array is index based, while a forward list is not.

A forward list works by storing a memory address to the first element of the list, and by having each element store data and a pointer to the memory location of the next element. Compared to arrays, forward lists offers quicker insertions and deletions at the start of the list, at the cost of direct access to elements by index.

## Creating a Forward List

To use `foward_list`, the header `<forward_list>` must be included.

```cpp
#include <forward_list>
```
To create an empty `forward_list`, all that is needed is the data type. Here is an example using the `int` data type:

```cpp
std::forward_list<int> list;
```

The list can also be initialized with values:

```cpp
std::forward_list<int> list = {1,2,3,4,5};
```

## Iterating a Forward List

Unlike arrays, forward lists do not support direct access to elements through indices. This means that in order to access a certain element, all elements before that element must be iterated over. To iterate through a forward list, an iterator must be used:

```cpp
std::forward_list<int> list = {1,2,3,4,5};

std::cout << "Output:" << std::endl;

for(auto it = list.begin(); it != list.end(); ++it) {
  std::cout << *it << " ";
}
std::cout << std::endl;
```
```shell
Output:
1 2 3 4 5 
```

A simpler and more modern approach introduced in C++11 can also be used to iterate through a forward list:

```cpp
std::forward_list<int> list = {1,2,3,4,5};

std::cout << "Output:" << std::endl;

for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;
```
```shell
Output:
1 2 3 4 5 
```

## Useful Functions

Forward lists includes a number of useful functions to access and modify the list:

`.empty()` returns true (1) if the list is empty, false (0) otherwise.

`.clear()` removes all elements from the list.

```cpp
std::forward_list<int> list = {1,2,3,4,5};

std::cout << "Elements of list: ";
for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;

std::cout << "list.empty(): ";
std::cout << list.empty() << std::endl;

std::cout << "Calling list.clear()" << std::endl;
list.clear();

std::cout << "Elements of list: ";
for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;

std::cout << "list.empty(): ";
std::cout << list.empty() << std::endl;
```
```shell
Elements of list: 1 2 3 4 5 
list.empty(): 0
Calling list.clear()
Elements of list: 
list.empty(): 1
```

`.front()` returns the value of the first element.

```cpp
std::forward_list<int> list = {1,2,3,4,5};

std::cout << "Output: " << list.front() << endl;

```
```shell
Output: 1
```

`.push_front()` inserts the provided value at the front of the list.

```cpp
std::forward_list<int> list = {1,2,3,4,5};

list.push_front(0);

std::cout << "Output:" << std::endl;

for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;
```
```shell
Output:
0 1 2 3 4 5 
```

`.pop_front()` removes the first element from the list.

```cpp
std::forward_list<int> list = {1,2,3,4,5};

list.pop_front();

std::cout << "Output:" << std::endl;

for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;
```
```shell
Output:
2 3 4 5 
```

`.insert_after()` inserts an element after an iterator pointer.

`.erase_after()` removes the element after an iterator pointer.

```cpp
std::forward_list<int> list = {2,5,8,10,12};

std::cout << "Elements of list: ";
for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;

auto iter = list.begin(); //Points to the first element (2)
iter++; //Now points to the second element (5)

std::cout << "Calling list.insert_after(iter, 6) while iter points to 5" << std::endl;
list.insert_after(iter, 6);

std::cout << "Elements of list: ";
for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;

iter++; //Now points to the third element (6)

std::cout << "Calling list.erase_after(iter) while iter points to 6" << std::endl;
list.erase_after(iter);

std::cout << "Elements of list: ";
for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;
```
```shell
Elements of list: 2 5 8 10 12 
Calling list.insert_after(iter, 6) while iter points to 5
Elements of list: 2 5 6 8 10 12 
Calling list.erase_after(iter) while iter points to 6
Elements of list: 2 5 6 10 12 
```

`.assign()` replaces the current list with a new list.

```cpp
std::forward_list<int> list = {1,2,3,4,5};

std::cout << "Elements: ";
for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;

std::cout << "Calling list.assign({6, 7})" << std::endl;
list.assign({6, 7});


std::cout << "Elements: ";
for (const auto& element : list) {
  std::cout << element << " ";
}
std::cout << std::endl;
```
```shell
Elements: 1 2 3 4 5 
Calling list.assign({6, 7})
Elements: 6 7 
```
