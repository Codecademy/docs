
---
Title: 'Functors'
Description: 'A functor is an object or struct that can be called like a function by overloading the function-call operator ().'

Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  
Tags:
  - 'Functors'
  - 'Classes'
  - 'Objects'
  - 'OOP'
  - 'Functions'

CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---


A **functor** is an object or struct that can be called like a function by overloading the function-call operator `()`. Public access must be granted to the overloading of the `()` operator in order to be used as intended. Functors can simplify tasks and improve efficiency in many cases.

## Syntax

For an object to be a functor, the class body must contain the following lines 

```cpp
class MyClass{
  public:
    type operator()(...) {
      // function body
    }
};
```

Where `type` is the [data type](https://www.codecademy.com/resources/docs/cpp/data-types) to be returned and `(...)`are the arguments to be given for the execution. Then, to use the functor just create an instance of the class and when needed call it passing the arguments required as

```cpp
 MyClass myclass;
 myclass(...);
```

## Example

The following code

```cpp
#include<iostream>
using namespace std;

class Hello{

    public:
        void operator()(int times){
            for (int i = 1; i <= times; i++)
               cout<<"Hello world!"<<endl;
        }
};

int main(){

    Hello salute;
    salute(3);

    return 0;
}
```

returns

```
Hello world!
Hello world!
Hello world!
```