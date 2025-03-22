---
Title: '.back()'
Description: 'Used to access the last element in a vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Vectors'
  - 'Programming'
  - 'Data Structures'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ **`.back()`** method is used to access the last element in a vector. It views or modifies the element without removing it from the vector. This method is primarily used to access the most recently added element.

## Syntax

```pseudo
vectorName.back();
```

## Example

The below example shows the use of `.back()` method in c++ vectors, here `numbers` is a vector which has 5 elements in it and it displays the last element in the vector with the help of the `.back()` method, then the last element in the vector is modifies and the modified value is displayed.

```cpp
#include <iostream>
#include<vector>
//This is compulsory to include vectors while using vectors.

int main(){
  std::vector<int>numbers = {10,20,40,50,60};
  std::cout<<"The last element in the vector is: "<< numbers.back()<< std::endl;
  numbers.back() = 80;
  std::cout <<"The last element in the vector after modification is: "<<numbers.back() <<std::endl;
  return 0;
  }
```

The output of the above code:

```shell
The last element in the vector is: 60
The last element in the vector after modification is: 80
```

## Codebyte Example

This codebyte example shows how a last element in the vector is accessed and modified using the `back()` method:

```codebyte/cpp
#include <iostream>
#include <vector>
int main() {
  std::vector<int> numbers = {100, 90, 80, 70, 60};
  std::cout << numbers.back() << std::endl;
  numbers.back() = 10;
  std::cout << numbers.back() << std::endl;
  return 0;
}
```
