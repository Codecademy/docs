---
Title: '.back()'
Description: 'Provides the reference to the last element in the vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Vectors'
  - 'Programming'
  - 'Data Structures'
  - 'Collections'
  - 'Methods'
  - 'Algorithms'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ **`.back()`** method is responsible for accessing the last element in the vector. It allows you to modify the data or element in the vector without actually removing it from the vector. It is mostly used to access the recently element added.

## Syntax

```pseudo
vectorName.back();
```
To use vectors, it is necessary to `#include` the `vector` library as the vector is a part of STL library.

The below example shows the use of `.back()` method in c++ vectors, here `numbers` is a vector which has 5 elements in it and it displays the last element in the vector with the help of the `.back()` method, then the last element in the vector is modifies and the modified value is displayed. 

## Example

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
```shell
The last element in the vector us: 60
The last element in the vector after modification is: 80
```

This codebyte example shows that how a last element in the vector in accessed and modified using the `back()` method.

## Codebyte Example

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