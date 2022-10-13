---
Title: 'Object'
Description: 'An object is a data  type, created by the developer, that has its properties and methods.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Objects'
  - 'Inheritance'
  - 'Methods'
  - 'Structure'
  - 'Encapsulation'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

An object is a data type created by the developer that has its properties and methods. Objects are often used to represent real-world objects found in everyday life and can interact with other objects and other elements of the program.

Objects provide a structured programming approach and are the basic units of [Oject-oriented-programming](https://www.codecademy.com/resources/docs/general/object-oriented-programming) (OOP).

## Memory allocation

Declaring an object doesn’t necessarily mean that memory is allocated for it. If an object is initialized with another object, it may just get a reference to the previously created object.

To allocate memory to an object, the use of the `new` keyword is needed and depending of the programming language, the memory can be allocated on Heap or Stack.

## Object Example in Java

In Java, an object is created using the `new` keyword. The `new` keyword tells the compiler to create a new instance of a class and allocate memory for it.

```java
// Creating the Employee class
class Employee {
  int id;
  String firstName;
  String lastName;
  char middleInitial;
  float years;
}

// Creating five different objects from the Employee class
Employee tina = new Employee();
Employee louise = new Employee();
Employee linda = new Employee();
Employee bob = new Employee();
Employee gene = new Employee();
```

In the above example, five different objects were created from the class `Employee`.

## Objects in Java vs objects in JavaScript

## Types of objects

Objects can be categorized based on what they do or how they work based on [design paterns](https://www.codecademy.com/resources/docs/general/creational-design-patterns), which represent repeatable solutions to common tasks or problems in programming.

Patterns themselves are **not** objetcs but are used to develop objects that solve general problems during software development.

## Objects in Different Languages

- [Objects in C++](https://www.codecademy.com/resources/docs/cpp/objects)
- [Objects in JavaScript](https://www.codecademy.com/resources/docs/javascript/objects)
