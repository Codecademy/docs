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

An object is a data type created by the developer that has its properties and methods, representing it's state and behavior. Objects are often used to represent real-world objects found in everyday life and can interact with other objects and other elements of the program.

Objects provide a structured programming approach and are the basic units of [Oject-oriented-programming](https://www.codecademy.com/resources/docs/general/object-oriented-programming) (OOP). By creating objects, the developer can easily create various identical objects and modify existing ones within the program.

Objects also provide `encapsulation`, meaning that the data within that object is protected from being altered or destroyed by other functions unless explicitly allowed.

## Memory allocation

Declaring an object doesn’t necessarily mean that memory is allocated for it. If an object is initialized with another object, it may just get a reference to the previously created object.

To allocate memory to an object, the use of the `new` keyword is needed and depending of the programming language, the memory can be allocated on Heap or Stack.

## Class and Object Example in Java

In Java, an object is created from a class. The class is a blueprint for creating objects and it's required in classical OO/UML (C++/Java/C# etc.) objects.

```java
// Creating the Employee class
class Employee {

  // state or field
  int id;
  String firstName;
  String lastName;
  char middleInitial;
  float years;

  // behavior or methods
  void cookingBread() {
    System.out.println("Cooking some delicious bread.");
  }
}

// Creating five different objects from the Employee class
Employee tina = new Employee();
Employee louise = new Employee();
Employee linda = new Employee();
Employee bob = new Employee();
Employee gene = new Employee();
```

In the example above, five different objects were created from the class `Employee`. An object is called an instance of a class. `Tina`, `Louise`, etc, are objects of the class `Employee`. The `new` keyword has been used along with the constructor of the class to create the object.

## Access fields and methods of a Class

By using the name of the objects, along with the `.` operator, it's possible to access members of a class.

## Objects in Java vs objects in JavaScript

## Types of objects

Objects can be categorized based on what they do or how they work based on [design paterns](https://www.codecademy.com/resources/docs/general/creational-design-patterns), which represent repeatable solutions to common tasks or problems in programming.

Patterns themselves are **not** objetcs but are used to develop objects that solve general problems during software development.

## Objects in Different Languages

- [Objects in C++](https://www.codecademy.com/resources/docs/cpp/objects)
- [Objects in JavaScript](https://www.codecademy.com/resources/docs/javascript/objects)
