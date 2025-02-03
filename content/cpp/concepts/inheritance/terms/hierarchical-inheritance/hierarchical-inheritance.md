---
Title: 'C++ Inheritance: Hierarchical Inheritance'
Description: 'Hierarchical Inheritance in C++ is a type of inheritance where multiple derived classes inherit from a single base class'
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

**Hierarchical Inheritance in C++** is a type of inheritance where multiple derived classes inherit from a single base class. Thus this means that one parent (base) class has multiple child (derived) classes.

## Syntax

You can use the following syntax to achieve Hierarchical Inheritance in C++:

```pseudo
class base_class {

}

class first_derived_class: public base_class {

}

class second_derived_class: public base_class {
    
}
```

## Example

```cpp
// C++ program to demonstrate hierarchical inheritance

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

Here, the base class `Animal` has a function `eat()`. The `Dog` class and `Cat` class both inherit from `Animal`. Objects of both derived classes (`Dog` and `Cat`)  can access the `eat()` function from the base class. Each derived class has its own unique function (`bark()` for `Dog` and `meow()` for `Cat`).
