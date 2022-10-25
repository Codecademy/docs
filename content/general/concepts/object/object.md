---
Title: 'Object'
Description: 'An object is a data  type, created by the developer, that has properties and methods.'
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

An object is a data type created by the developer that has properties and methods, representing its state and behavior. Objects are often used to represent real-world objects found in everyday life and can interact with other objects and other elements of the program.

Objects provide a structured programming approach and are the basic units of [Oject-Oriented-Programming](https://www.codecademy.com/resources/docs/general/object-oriented-programming) (OOP). By creating objects, the developer can easily create various identical objects and modify existing ones within the program.

Objects also provide `encapsulation`, meaning that the data within that object is protected from being altered or destroyed by other functions unless explicitly allowed.

## Memory allocation

Declaring an object doesn’t necessarily mean that memory is allocated for it. If an object is initialized with another object, it may just get a reference to the previously created object.

To allocate memory to an object at runtime, the use of the `new` keyword is needed and depending on the programming language, the memory can be allocated on Heap or Stack.

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

  // behavior or method
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

```java
// Creating the Car class
public class Car {

  // state or field
  int numberOfDoors;
  String color;
  String brand;
  boolean isOn;

  // constructor declaration of class
  public Car(int numberOfDoors, String color, String brand, boolean isOn) {
    this.numberOfDoors = numberOfDoors;
    this.color = color;
    this.brand = brand;
    this.isOn = isOn;
  }

  // behavior or method
  void turnOn() {
    isOn = true;
    System.out.println("The car has started? " + isOn);
  }
}

// Creating an object from the Car class
Car mercedes = new Car(5, "black", "mercedes", true);

// Access state
System.out.println(mercedes.numberOfDoors) // Output: 5

// Access behavior
System.out.println(mercedes.turnOn()); // sets the isOn variable to true and prints the output: The car has started? True
```

## Types of objects

Objects can be categorized based on what they do or how they work based on [design patterns](https://www.codecademy.com/resources/docs/general/creational-design-patterns), which represent repeatable solutions to common tasks or problems in programming.

Patterns themselves are **not** objects but are used to develop objects that solve general problems during software development.

## Objects in Different Languages

- [Objects in C++](https://www.codecademy.com/resources/docs/cpp/objects)
- [Objects in JavaScript](https://www.codecademy.com/resources/docs/javascript/objects)
