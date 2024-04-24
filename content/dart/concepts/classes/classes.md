---
Title: 'Classes'
Description: 'A class is a blueprint for creating objects.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Classes'
  - 'Objects'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
--- 

In Dart, **classes** are a blueprint for creating objects. They are an integral part of [object-oriented programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming). They define the methods, properties, and behavior of objects. For example, a class named `Phone` may have properties like `.color` and `.brand` as well as methods like `.call()` and `.text()`.

## Syntax

```pseudo
class ClassName {
  // Class body
  
  // Properties
  type propertyName;
  
  // Methods
  returnType methodName() {
    // Method body
  }
}
```

- `class`: The keyword used to create a class.
- `ClassName`: The name of the class. It follows the UpperCamelCase convention.

## Class Instances

In Dart, an object is an instance of a class that consists of properties and methods. It can only be created after creating a class.

A new object of a particular class can be created using the following syntax:

```pseudo
ClassName objectName = ClassName();
```

- `objectName`: The name of the object to be created.

### Example

Here is an example that creates an object of a specific class:

```dart
class House {
// Defining properties
  String? color;
  int? numberOfRooms;

// Defining a method
void houseInfo() {
  print("House color: $color");
  print("Number of rooms: $numberOfRooms");
  }
}

void main() {
  // Creating an object of the `House` class
  House house = House();
  house.color = "White";
  house.numberOfRooms = 5;
  house.houseInfo();
}
```

The output for the above example is as follows:

```shell
House color: White
Number of rooms: 5
```

## Abstract Classes

In Dart, a class can be declared as an abstract class using the `abstract` keyword. If a class is declared abstract, new objects cannot be instantiated from that class. The purpose of an abstract class is to allow other classes to inherit from it.

A class can be declared abstract using the following syntax:

```pseudo
abstract class ClassName {
  // Class body
  ...
}
```

## Abstract Methods

In Dart, an abstract method is defined as a method that is declared without implementation. Instead of a method body, an abstract method is declared using a semicolon (;). A non-abstract subclass that inherits from an abstract class must implement and override all of its abstract methods.

### Example

Following is an example that demonstrates the usage of an abstract method:

```dart
abstract class Pet {
  // Defining an abstract method
  void feed();
}

class Dog extends Pet {
  @override
  void feed() {
    print('Feeding dog...');
  }
}

class Cat extends Pet {
  @override
  void feed() {
    print('Feeding cat...');
  }
}

void main() {
  Dog dog = Dog();
  dog.feed();

  Cat cat = Cat();
  cat.feed();
}
```

The above code will produce the following output:

```shell
Feeding dog...
Feeding cat...
```
