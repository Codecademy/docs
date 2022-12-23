---
Title: 'Sets'
Description: 'Sets are associative containers that store unique elements which can be referenced by the value of the element.'
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

**Sets** are associative containers which store unique elements that can be referenced by an element's value. The value, which is itself the key to access an element in the set, is constant. Once assigned it cannot be changed. However, existing values can be removed or new values can be added.

## Syntax

```pseudo
std::set<dataType> setName;
```

A set can be created by using the `set` keyword and declaring a [data type](https://www.codecademy.com/resources/docs/cpp/data-types) and name.

## Example

The example below initiates a set, inserts values into it using the [.insert()](https://www.codecademy.com/resources/docs/cpp/sets/insert) method, and then prints out the set:

```cpp
#include <iostream>
#include <set>

int main() {
  // Initiate set
  std::set<int> numSet;

  // Insert values into set
  numSet.insert(25);
  numSet.insert(42);
  numSet.insert(10);
  numSet.insert(19);

  // Print out set
  std::set<int> :: iterator iter;
  for (iter = numSet.begin(); iter != numSet.end(); iter++) {
  std::cout<< *iter << " ";
  }
}
```

This outputs the following:

```shell
10 19 25 42
```

By default, values of the set are sorted in ascending order.

## Setting a Different Comparison Function

The comparison function can be changed from the default to `std::greater<dataType>` in order to sort the values in descending order.

### Syntax

```pseudo
std::set<dataType, std::greater<dataType> > setName;
```

The `dataType` for the comparison function must match the data type of the `set`.

### Codebyte Example

Setting the previous example's comparison function to `std::greater<int>`:

```codebyte/cpp
#include <iostream>
#include <set>

int main() {
  // Initiate set
  std::set<int, std::greater<int> > numSet;

  // Insert values into set
  numSet.insert(25);
  numSet.insert(42);
  numSet.insert(10);
  numSet.insert(19);

  // Print set
  std::set<int> :: iterator iter;

  for (iter = numSet.begin(); iter != numSet.end(); iter++) {
    std::cout<< *iter << " ";
  }
}
```
