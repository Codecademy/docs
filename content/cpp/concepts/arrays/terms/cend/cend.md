---
Title: '.cend()'
Description: 'Returns a constant iterator that points to the element after the last element in the array.' 
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Arrays'
  - 'Iterators'
CatalogContent: 
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**`cend()`** takes no parameters and returns a constant iterator pointing to the element 
after the last element in the array

## Syntax
```pseudo
array.cend();
```

## Example: Using cend to get Last Element

This example prints the last element using cend()

```cpp

#include <iostream>
#include <array>

int main() {
    std::array<int,2> array = {1,2};
    //gets iterator after last element
    auto it = array.cend();
    //uses iterator to get last element 2
    std::cout << *(std::prev(it)) << "\n";
    return 0;
}
```

The output of the program above will be:

```shell
2
```

## Codebyte Example: Using Cend to print array

The following code makes an array and uses cend to print out all of its elements.

```codebyte/cpp
#include <iostream>
#include <array>

int main() {
  std::array<int,4> array = {1, 2, 3, 4};

  //prints all elements in array
  for(auto i = array.cbegin(); i != array.cend(); ++i){
    std::cout << *i << " ";
  }

  return 0;
}
```
The output of the program above will be
```shell
1 2 3 4
```