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

### Example

The following example demonstrates how to create an object in Dart:

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

In Dart, an abstract method is a method declared without any implementation details. Instead of providing a method body, an abstract method is defined only by its signature, followed by a semicolon (`;`). Therefore, subclasses must provide the implementation details for abstract methods when they inherit from an abstract class.

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

## Mixin Classes

In Dart, `mixins` are classes intended to be used for reusable methods that other classes can use.

## Syntax for Mixin Class

```pseudo
mixin MixinName {
  // Mixin body
  ...
}

class ClassName with MixinName {
  // Class body
  ...
}
```

### Example

Following is an example that demonstrates the usage of a mixin class:

```dart
// Define mixins for specific behaviors
mixin Swim {
  void swim() {
    print('Swim');
  }
}

mixin Fly {
  void fly() {
    print('Fly');
  }
}

mixin Walk {
  void walk() {
    print('Walk');
  }
}

// Define classes that use these mixins

// The Duck class can swim, fly, and walk
class Duck with Swim, Fly, Walk {
  void display() {
    print('Ducks can:');
  }
}

// The Human class can swim and walk but cannot fly
class Human with Swim, Walk {
  void display() {
    print('Humans can:');
  }
}

void main() {
  // Create a Duck instance
  Duck duck = Duck();
  duck.display();
  duck.swim();
  duck.fly();
  duck.walk();

  // Create a Human instance
  Human human = Human();
  human.display();
  human.swim();
  human.walk();
}
```

The above code will produce the following output:

```shell
Ducks can:
Swim
Fly
Walk
Humans can:
Swim
Walk
```
