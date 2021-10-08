---
Title: 'Java: Inheritance'
Description: 'Inheritance is one of the basic Object Oriented Programming(OOP) concepts'
Subjects:
  - 'Computer Science'
Tags:
  - 'Inheritance'
  - 'OOP'
  - 'Parent-child'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Inheritance is one of the basic Object Oriented Programming(OOP) concepts. Inheritance is the concept by which we can pass `properties` and `behaviors` from parent class to child class.

In day to day life we might have already heard about inheritance, when something gets passed from parents to child we say that child inherited from parents. Similarly, in JAVA when some `properties` or `behaviors` get passed from parent class to the child class we say that child class inherited from parent class.

Child class can have properties and methods of its own. 

It can also override the behaviors(methods) of the parent class. This is called polymorphism, another OOP concept.

We can implement inheritance by using `extends` keyword.

## Syntax

Here's the basic syntax for implementing `inheritance`:
```java
public class Child extends Parent{
  ...
}
```
## Example 

```java
public class Vehicle {
  private int numWheels;
  private String engineNum; 
  private String maker;
  private String color;

  public int getNumWheels() {
    return numWheels;
  }
  public void setNumWheels(int wheels) {
    this.numWheels = wheels;
  }
  public String getEngineNum() {
    return engineNum;
  }
  public void setEngineNum(String engineNum) {
    this.engineNum = engineNum;
  }
  //Similarly for other properties
  ...
}
```
Here, `Vehicle` is a class which has above mentioned properties and behaviors. Now this is more of a generic class. While creating a specific class let's say `Car`, which has these properties and behaviors plus some extra properties, instead of defining all these properties again in the new class we can make use of inheritance to pass on the properties defined in `Vehicle` class and access them in `Car` class. This would make code written in `Vehicle` class reusable. Similarly, we can make another class let's say `Airplane` which can again access the properties present in `Vehicle` class.

Here's a `Car` class which inherits `Vehicle` class:

```java
public class Car extends Vehicle {
  //Vehicle class properties and methods accessible here
  private int airbagCount;
  
  public int getAirbagCount() {
    return airbagCount;
  }
  public void setAirbagCount(int airbagCount){
    this.airbagCount = airbagCount;
  }
  ...
}
```

Below is how you can access properties and methods of parent class
```java
public static void main(String args[]) {
  Car car = new Car();
  car.setNumWheels(4);  //Parent class method. This would set the wheel count to 4
  System.out.println(car.getNumWheels());//Parent class method. Prints numWheels

  car.setAirbagCount(2);  //Child class method. This would set the airbag count
  System.out.println(car.getAirbagCount()); //Child class method. Prints airbag count
  ...
}
```

## Types of Inheritance


- `Single Inheritance` When a child class `inherits` a parent class.

```java
public class Parent {
  // Parent class properties and methods
}

public class Child extends Parent{
  // Parent class properties and methods accessible here due to inheritance
  // Child class properties and methods
}
```
- `Multilevel Inheritance` When a child class `inherits` a parent class which in turn `inherits` another parent class.

```java
public class Parent {
  // Parent class properties and methods
}

public class Child extends Parent{
  // Parent class properties and methods accessible here due to inheritance
  // Child class properties and methods
}

public class GrandChild extends Child{
  // Parent class and Child class properties and methods accessible here due to inheritance
  // GrandChild class properties and methods
}
```
- `Hierarchical Inheritance` When a child class `inherits` a parent class and there is another sibling class that also `inherits` from same parent class.

```java
public class Parent {
  // Parent class properties and methods
}

public class Child extends Parent{
  // Parent class properties and methods accessible here due to inheritance
  // Child class properties and methods
}

public class Sibling extends Parent{
  // Parent class properties and methods accessible here due to inheritance
  // Child class properties and methods are not accessible here
  // Sibling class properties and methods
}
```
## Advantages of Inheritance
- `Code reusability` - Same properties and methods of a class can be used by inheriting that class.
- `Lower maintenance cost` - If a piece of code needs to be updated, it can be done at minimal place if inheritance is used.
- `Easier to add new features` - If a same new feature needs to be added to multiple classes, through inheritance it can be added in Parent class and all the child classes inheriting this Parent class would get that feature instantly.

