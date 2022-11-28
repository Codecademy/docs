---
Title: 'Object'
Description: 'An object is associative data that commonly takes the form of a data structure, function, method, variable, or class.'
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

An **object** is associative data that commonly takes the form of a data structure, [function](https://www.codecademy.com/resources/docs/general/function), [method](https://www.codecademy.com/resources/docs/general/method), variable, or [class](https://www.codecademy.com/resources/docs/general/class).

Objects provide a structured programming approach and are the core units of [object-oriented-programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming). Developers can easily create various identical objects and modify existing ones within the program.

Objects also provide [encapsulation](https://www.codecademy.com/resources/docs/general/encapsulation), meaning that the data within that object is protected from being altered or destroyed by other functions unless explicitly allowed.

## Memory allocation

Declaring an object doesn’t necessarily mean that memory is allocated for it. If an object is initialized with another object, it may just get a reference to the previously created object.

To allocate memory to an object at [runtime](https://www.codecademy.com/resources/docs/general/runtime), the use of the `new` keyword is needed and, depending on the programming language, the memory can be allocated to a heap or stack.

## Java Example

In Java, [classes](https://www.codecademy.com/resources/docs/java/classes) are the blueprints for creating objects, which is required in object-orientation/unified modeling language (OO/UML).

The following snippet is an example of a defined class being used to instantiate new objects (instances of that class):

```java
// Employee.java
class Employee {
  // State or field
  int id;
  String firstName;
  String lastName;
  char middleInitial;
  float years;

  // Behavior or method
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

In the example above, the `new` keyword was used to create five object instances of the `Employee` class according to the class constructor.

## Accessing Fields and Methods

Since objects are class instances in Java, they can use the `.` operator to access fields and methods in a class.

```java
// Car.java
public class Car {
  // state or field
  int numberOfDoors;
  String color;
  String brand;
  boolean isOn;

  // Constructor declaration of class
  public Car(int numberOfDoors, String color, String brand, boolean isOn) {
    this.numberOfDoors = numberOfDoors;
    this.color = color;
    this.brand = brand;
    this.isOn = isOn;
  }

  // Behavior or method
  void turnOn() {
    isOn = true;
    System.out.println("The car has started? " + isOn);
  }
}

// Create object or class instance
Car mercedes = new Car(5, "black", "mercedes", true);

// Access state
System.out.println(mercedes.numberOfDoors)

// Access behavior
System.out.println(mercedes.turnOn());
```

In the snippet above, a new `Car` object called `mercedes` is created with its `isOn` field set to `true`. When the `.turnOn()` is invoked with the `mercedes` object and its `numberOfDoors` field is accessed, the following is printed:

```shell
5
The car has started? True
```

## Types of Objects

Objects can be categorized based on what they do or how they work based on [design patterns](https://www.codecademy.com/resources/docs/general/creational-design-patterns), which represent repeatable solutions to common tasks or problems in programming.

> **Note:** Patterns themselves are not objects but are used to develop objects that solve general problems during software development.

## Objects in Different Languages

- [Objects in C++](https://www.codecademy.com/resources/docs/cpp/objects)
- [Objects in JavaScript](https://www.codecademy.com/resources/docs/javascript/objects)
