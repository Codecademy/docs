---
Title: 'Sets'
Description: 'Sets are associative containers that store unique elements which can be referenced by their value.'
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

Sets are associative containers which store unique elements that can be referenced by an element's key. The keys are the values of the elements and they are constant, meaning they cannot be changed once assigned. However, existing elements can be removed or new elements can be added.

## Creating a Set

A set can be created by using the `set` keyword and declaring a [data type](https://www.codecademy.com/resources/docs/cpp/data-types) and name:

```pseudo
std::set<datatype> setName;
```

## Inserting Values

Values can be inserted using the `.insert()` method after a set has been declared.

```cpp
#include <iostream>
#include <set>

int main(){
  // Initiate set
  std::set<int> numbers;

  // Insert values into set
  numbers.insert(90);
  numbers.insert(34);
  numbers.insert(2);
  numbers.insert(101);

  // Print out set
  std::set<int> :: iterator iter;
  for(iter = numbers.begin() ; iter != numbers.end() ; iter++){
    std::cout<< *iter << " ";
  }
}
```

The example above outputs the following:

```shell
2 34 90 101
```

By default, values of the set are sorted in ascending order.

## Setting a Different Comparison Function

The comparison function can be changed from the default to `std::greater<int>` in order to sort the values in descending order:

```psuedo
std::set<int, std::greater<int> > setName;
```

The following example shows this in use:

```cpp
#include <iostream>
#include <set>

int main(){
  // Initiate set
  std::set<int, std::greater<int> > numbers;

  // Insert values into set
  numbers.insert(25);
  numbers.insert(42);
  numbers.insert(10);
  numbers.insert(19);

  // Print out set
  std::set<int> :: iterator iter;
  for(iter = numbers.begin() ; iter != numbers.end() ; iter++)
  {
  std::cout<< *iter << " ";
  }
}
```

The example above outputs the following:

```shell
42 25 19 10
```

## Removing Values

The `.erase()` method can be used to remove a single value from a set:

```codebyte/cpp
#include <iostream>
#include <set>

int main(){
  // Initiate set
  std::set<int>  numbers;

  // Insert values into set
  numbers.insert(29);
  numbers.insert(10);
  numbers.insert(36);
  numbers.insert(15);

  // Remove values from the set
  numbers.erase(10);
  numbers.erase(36);

  // Print out set
  std::set<int> :: iterator iter;
   for(iter = numbers.begin() ; iter != numbers.end() ; iter++)
  {
  std::cout<< *iter << " ";
  }
}
```

`.clear()` can be used to remove all values from the set:

```cpp
numbers.clear()
```

This will destroy every value and the container will be of size 0.
