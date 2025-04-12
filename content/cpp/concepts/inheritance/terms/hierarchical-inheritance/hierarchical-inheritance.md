---
Title: 'Hierarchical Inheritance'
Description: 'Hierarchical inheritance allows multiple derived classes to inherit from a single base class, sharing its properties and methods.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Inheritance'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, **hierarchical inheritance** is a type of inheritance where multiple derived classes inherit from a single base class, meaning one parent class has multiple child classes. This allows for code reusability, as common methods and properties in the base class can be shared across different derived classes.

## Syntax

The following syntax can be used to achieve hierarchical inheritance in C++:

```pseudo
class BaseClass {
  // Base class members (properties and methods)
};

class DerivedClass1 : accessSpecifier BaseClass {
  // Derived class 1 members
};

class DerivedClass2 : accessSpecifier BaseClass {
  // Derived class 2 members
};
```

## Example

The following example demonstrates hierarchical inheritance in C++:

```cpp
#include <iostream>
using namespace std;

// Base class
class Animal {
public:
  void eat() {
    cout << "This animal eats food." << endl;
  }
};

// Derived class 1
class Dog : public Animal {
public:
  void bark() {
    cout << "Dog barks." << endl;
  }
};

// Derived class 2
class Cat : public Animal {
public:
  void meow() {
    cout << "Cat meows." << endl;
  }
};

int main() {
  // Create object of Dog class
  Dog dog1;
  cout << "Dog Class:" << endl;
  dog1.eat();  // Inherited from Animal class
  dog1.bark(); // Dog's own function

  // Create object of Cat class
  Cat cat1;
  cout << "\nCat Class:" << endl;
  cat1.eat();  // Inherited from Animal class
  cat1.meow(); // Cat's own function

  return 0;
}
```

The output for the above code is:

```shell
Dog Class:
This animal eats food.
Dog barks.

Cat Class:
This animal eats food.
Cat meows.
```

In this example, the base class `Animal` has a function `eat()`. The derived classes `Dog` and `Cat` inherit from `Animal`, allowing them to access the `eat()` function. Each derived class also has its own unique function: `bark()` for `Dog` and `meow()` for `Cat`.

## Codebyte Example

Run the following codebyte to understand how hierarchical inheritance works in C++:

```codebyte/cpp
#include <iostream>

using namespace std;

// Base class
class Vehicle {
public:
  void startEngine() {
    cout << "Engine started." << endl;
  }
};

// Derived class 1
class Car : public Vehicle {
public:
  void playMusic() {
    cout << "Playing music in the car." << endl;
  }
};

// Derived class 2
class Bike : public Vehicle {
public:
  void kickStart() {
    cout << "Bike started with a kick." << endl;
  }
};

int main() {
  Car myCar;
  myCar.startEngine();  // Inherited from Vehicle
  myCar.playMusic();    // Car-specific function

  Bike myBike;
  myBike.startEngine(); // Inherited from Vehicle
  myBike.kickStart();   // Bike-specific function

  return 0;
};
```
