---
Title: 'Classes'
Description: 'A class is a blueprint or a template for an object. Blueprints detail the general structure (information and behavior) about an object. java public class Cat { String name; String color; int age; public static void main(String[] args) {'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Data Types'
  - 'Constructors'
  - 'Methods'
  - 'OOP'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A class is a blueprint or a template for an object. Blueprints detail the general structure (information and behavior) about an object.

## Syntax

```java
public class Cat {
  String name;
  String color;
  int age;

  public static void main(String[] args) {
    Cat myCat = new Cat();

    System.out.println("Name: " + myCat.name);
    System.out.println("Color: " + myCat.color);
    System.out.println("Age: " + myCat.age);
  }
}
```

## Java Instance

Java instances are objects that are based on classes. For example, `Bob` and `Alice` may each be an instance of the class `Person`.

Every instance has access to its own set of variables which are known as _instance fields_, which are variables declared within the scope of the instance. Values for instance fields are assigned within the constructor method.

```java
public class Person {
  int age;
  String name;

  // Constructor method
  public Person(int age, String name) {
    this.age = age;
    this.name = name;
  }

  public static void main(String[] args) {
    Person Bob = new Person(31, "Bob");
    Person Alice = new Person(27, "Alice");
  }
}
```

## Creating a New Class Instance

In Java, we use the `new` keyword followed by a call to the class constructor in order to create a new instance of a class.

The constructor can be used to provide initial values to instance fields.

```java
public class Person {
  int age;
  // Constructor
  public Person(int a) {
    this.age = a;
  }

  public static void main(String [] args) {
    // Here, we create a new instance of the Person class:
    Person p = new Person(28);
    System.out.println("Age is " + p.age);
    // Output: Age is 28
  }
}
```
