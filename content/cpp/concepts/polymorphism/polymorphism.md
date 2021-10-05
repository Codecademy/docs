---
Title: 'Polymorphism'
Description: 'The word Polymorphism means having many form. Polymorphism is an important concept of object-oriented programming. It simply means more than one form. That is, the same entity (function or operator) can behave differently in different scenarios.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Function'
  - 'Polymorphism'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Polymorphism is an important concept of object-oriented programming. It simply means more than one form. That is, the same entity (function or operator) can operate differently under different situations.

In C++ we have two types of polymorphism:

- Compile time Polymorphism – This is also called as static (or early) binding.
- Runtime Polymorphism – This is also called as dynamic (or late) binding.

## Compile time Polymorphism

Compile time polymorphism is perfect for **function overloading** as well as **operator overloading**.

### Compile time Polymorphism Example

In below example, we have two functions with same name but different number of arguments. Based on the number of parameters we pass during function invocation (function calling) determines which function is to be called, this is why it is considered as an example of **polymorphism** because in different conditions the output is different. Since, the call is determined during **compile time** thats why it is called **compile time polymorphism**.

```cpp
#include <iostream>
using namespace std;

class Add {
  public:
    // function sum with 2 parametes
    int sum(int num1, int num2){
      return num1 + num2;
    }

    // function sum with 3 parametes
    int sum(int num1, int num2, int num3){
      return num1 + num2 + num3;
    }
};

int main() {
  // create object of Add class
  Add obj;

  //This will call the first variant of sum function (sum function with 2 parameters)
  cout<<"Output: "<<obj.sum(10, 20)<<endl;

  //This will call the second variant of sum second function (sum function with 3 parameters)
  cout<<"Output: "<<obj.sum(11, 22, 33);
  return 0;
}
```

Above code snippet will generated below output.

```cpp
Output: 30 // result of first function invocation
Output: 66 // result of second function invocation
```

## Runtime Polymorphism

**Function overriding** is an example of Runtime polymorphism.

### Function overriding

It is a concept when child class declares a method, which is already present in the parent class then this is called function overriding, here child class overrides the parent class.

In case of function overriding we have two definitions of the same function, one is parent class and one in child class. The call to the function is determined at **runtime** to decide which definition of the function is to be called, thats the reason it is called **runtime polymorphism**.

### Runtime Polymorphism Example

```cpp
#include <iostream>
using namespace std;

class A {
  public:
    void print(){
      cout<<"Output: Parent Class Function"<<endl;
    }
};

class B: public A{
  public:
    void print(){
      cout<<"Output: Child Class Function";
    }
};

int main() {
  //Parent class object
  A obj;
  obj.print();

  //Child class object
  B obj2;
  obj2.print();

  return 0;
}
```

Above code snippet will generated below output.

```cpp
Output: Parent Class Function // result of parent print() function invocation
Output: Child Class Function // result of child print() function invocation
```
