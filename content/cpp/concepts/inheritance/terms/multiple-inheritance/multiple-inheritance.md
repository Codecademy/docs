---
Title: 'Multiple Inheritance'
Description: 'Allows classes to inherit characteristics from more than one base class.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Abstraction'
  - 'Classes'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Multiple inheritance** is a type of [inheritance](https://www.codecademy.com/resources/docs/cpp/inheritance) where classes can inherit from more than one class.

## Syntax
The syntax for multiple inheritance is similar to the syntax for [single inheritance](https://www.codecademy.com/resources/docs/cpp/inheritance).
```cpp
class DerivedClass : public BaseClass1, public BaseClass2 {
    // Derived class members
};
```
Classes can inherit from as many base classes as necessary and, as with single inheritance, access modifiers can be used to modify access to inherited members.

The ordering of base classes affects the ordering of calls to [constructors](https://www.codecademy.com/resources/docs/cpp/constructors) and [destructors](https://www.codecademy.com/resources/docs/cpp/destructors). Virtual base class constructors are called first, from left to right, followed by direct base class constructors from left to right. Destructors are called in reverse order to constructors.

## Examples

### Basic multiple inheritance
```cpp
class Bat { 
  public: 
    void fly();
}; 

class Man { 
  public: 
      void run();
};

class ManBat : public Man, public Bat { 
  // run() and fly() are both available as they're inherited from Man and Bat 
}; 
```
### Ambiguity errors
With multiple inheritance, a class can inherit from multiple classes with identical member names. This can cause ambiguity errors as it won't be obvious which ancestor's members are being referred to. One way to fix these errors is with the scope resolution operator (::).
```cpp
class Dancer { 
  public: 
    void jump();
}; 

class Frog { 
  public: 
      void jump();
};

class DancingFrog : public Dancer, public Frog { 
  // jump() is inherited from Dancer and Frog
}; 

int main () {
  DancingFrog df;
  df.jump(); // This will cause an ambiguity error as it isn't clear which ancestor's jump() we mean
  df.Dancer::jump(); // This won't cause an ambiguity error as the scope resolution operator explicitly references Dancer
  return 0;
}   
```
Ambiguity errors can also occur if multiple base classes inherit from a common ancestor. This is known as the Diamond Problem.
```cpp
class Vehicle {
  public:
    void weight();
};

class Car : public Vehicle {
  // Inherits weight() from Vehicle
  public:
      void drive();
};

class Plane : public Vehicle { 
  // Inherits weight() from Vehicle
  public:
      void fly();
}; 

class CarPlane : public Car, public Plane {
  // Inherits drive() from Car and fly() from Plane
  // Inherits weight() twice, once from Car and once from Plane, as each will have their own Vehicle object
  public:
      void switchMode();
};

int main () {
  CarPlane cp;
  cp.weight(); // Causes an ambiguity error as CarPlane as there are two Vehicle ancestor objects
  return 0;
}
```
One way to fix the diamond problem is to use virtual inheritance in the intermediate classes.
```cpp
class Vehicle {
  public:
    void weight();
};

class Car : virtual Vehicle {
  // Inherits weight() from Vehicle
  public:
      void drive();
};

class Plane : virtual Vehicle { 
  // Inherits weight() from Vehicle
  public:
      void fly();
}; 

class CarPlane : public Car, public Plane {
  // Inherits drive() from Car and fly() from Plane
  // Inherits weight() once, as Car and Plane both reference the same Vehicle ancestor object
  public:
      void switchMode();
};

int main () {
  CarPlane cp;
  cp.weight(); // This won't cause an ambiguity error as there is only one Vehicle ancestor object
  return 0;
}
```
