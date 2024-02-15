---
Title: 'Interfaces'
Description: 'Interfaces are abstract types describing methods and variables that should exist in any class that implements the interface.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'OOP'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Interfaces** are abstract types describing [methods](https://www.codecademy.com/resources/docs/java/methods) and [variables](https://www.codecademy.com/resources/docs/java/variables) that should exist in any [class](https://www.codecademy.com/resources/docs/java/classes) that implements the interface. The use of an interface is similar to class [inheritance](https://www.codecademy.com/resources/docs/java/inheritance) in that the class implementing the interface "inherits" its methods. But, unlike class inheritance, a given class can implement multiple interfaces at once.

When a variable is defined as having the [data type](https://www.codecademy.com/resources/docs/java/data-types) of an interface, it means it can hold any instance of a class implementing that interface, the interface itself can not be instantiated directly. Interfaces are classified as a [reference data type](https://www.codecademy.com/resources/docs/java/data-types#reference-data-types).

The following items are allowed in an interface definition:

- Constant variables: These are `public`, `static`, and `final` by definition.
- Abstract methods: These must be overridden by the class implementing the interface.
- Static methods: These are not overridden but accessed like any class static method.
- Default methods: These may be overridden, but if not, the definition in the interface is used.

**Note:** No interface method can be `protected` or `final`.

## Syntax

Below is the basic syntax defining an interface:

```pseudo
interface InterfaceName {
  String constantVariable = "value";

  int abstractMethod();

  static void staticMethod() {
    // Method body
  }

  default void defaultMethod() {
    // Method body
  }
}
```

The interface can have any number of each of these elements, but it must have at least one. It cannot be empty.

## Example

The following example uses a `Food` interface to demonstrate [polymorphism](https://www.codecademy.com/resources/docs/general/programming-paradigms/polymorphism), the ability of an object to take different forms at runtime:

```java
// Food.java
public interface Food {

  String name();

  default String kind() {
    return "Food";
  }
}
```

Next, a `Cabbage` class is defined, implementing the `Food` interface:

```java
// Cabbage.java
public class Cabbage implements Food {

  @Override
  public String name() {
    return "Cabbage";
  }

  @Override
  public String kind() {
    return "Vegetable";
  }
}
```

Define the `Sausage` class implementing `Food`:

```java
// Sausage.java
public class Sausage implements Food {

  @Override
  public String name() {
    return "Sausage";
  }

  @Override
  public String kind() {
    return "Meat";
  }
}
```

Multiple classes can implement the same interface, like with the `Pizza` class below:

```java
// Pizza.java
public class Pizza implements Food {

  @Override
  public String name() {
    return "Pizza";
  }
}
```

The following demonstrates the interface and all the classes implementing it:

```java
// Main.java
public class Main {
  public static void main(String[] args) {
    Collection<Food> foods = new ArrayList<Food>();
    foods.add(new Cabbage());
    foods.add(new Sausage());
    foods.add(new Pizza());

  for (Food food : foods) {
      System.out.println(food.name() + ": " + food.kind());
    }
  }
}
```

This outputs the following:

```shell
Cabbage: Vegetable
Sausage: Meat
Pizza: Food
```
