---
Title: 'enum'
Description: 'Defines a special class that represents a group of named constants in Java.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Classes'
  - 'Data Types'
  - 'OOP'
  - 'Switch'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **`enum`** in Java is a special [data type](https://www.codecademy.com/resources/docs/java/data-types) used to define a collection of named constants—unchangeable, type-safe values. Enums are used when all possible values are known at compile time, such as days of the week, directions, or states in a process. They make code more readable, safer, and less error-prone.

## Java Enum Syntax

```pseudo
enum EnumName {
  CONSTANT1,
  CONSTANT2,
  CONSTANT3
}
```

**Parameters:**

- `EnumName`: The name of the enum (should follow Java naming conventions)
- `CONSTANT1, CONSTANT2, CONSTANT3`: Enum constants (should be in uppercase)

**Return value:**

Java enum constants are objects of the enum type and can be accessed using the dot notation.

## Example 1: Java Enum Declaration

The following example demonstrates how to declare `enum` in Java, both outside and inside a class:

```java
// Java enum declared outside any class
enum Priority {
  LOW,
  MEDIUM,
  HIGH
}

public class TaskManager {
  // Java enum declared inside a class
  enum Status {
    PENDING,
    IN_PROGRESS,
    COMPLETED
  }

  public static void main(String[] args) {
    // Using java enum constants
    Priority taskPriority = Priority.HIGH;
    Status taskStatus = Status.PENDING;

    System.out.println("Task Priority: " + taskPriority);
    System.out.println("Task Status: " + taskStatus);
  }
}
```

This example results in the following output:

```shell
Task Priority: HIGH
Task Status: PENDING
```

The java enum constants `Priority.HIGH` and `Status.PENDING` are accessed using dot notation and can be assigned to variables of their respective java enum type.

## Example 2: Looping Through Java Enum Constants

Enum in java provides a built-in `values()` method that returns an array of all enum constants, making it easy to iterate through them:

```java
enum Color {
  RED,
  GREEN,
  BLUE,
  YELLOW
}

public class ColorPrinter {
  public static void main(String[] args) {
    System.out.println("Available colors:");

    // Loop through all java enum constants
    for (Color color : Color.values()) {
      System.out.println("- " + color);
    }
  }
}
```

This example results in the following output:

```shell
Available colors:
- RED
- GREEN
- BLUE
- YELLOW
```

The `values()` method returns all java enum constants as an array, which can be iterated using an enhanced for loop.

## Example 3: Using Java Enums in a Switch Statement

Java enum works seamlessly with [switch statements](https://www.codecademy.com/resources/docs/java/switch), providing a clean way to handle different cases based on enum in java values:

```java
enum OrderStatus {
  PLACED,
  PROCESSING,
  SHIPPED,
  DELIVERED,
  CANCELLED
}

public class OrderManager {
  public static void processOrder(OrderStatus status) {
    switch (status) {
      case PLACED:
        System.out.println("Order has been placed. Processing soon.");
        break;
      case PROCESSING:
        System.out.println("Order is being processed.");
        break;
      case SHIPPED:
        System.out.println("Order has been shipped.");
        break;
      case DELIVERED:
        System.out.println("Order delivered successfully!");
        break;
      case CANCELLED:
        System.out.println("Order has been cancelled.");
        break;
      default:
        System.out.println("Unknown order status.");
        break;
    }
  }

  public static void main(String[] args) {
    OrderStatus currentStatus = OrderStatus.SHIPPED;
    processOrder(currentStatus);
  }
}
```

This example results in the following output:

```shell
Order has been shipped.
```

Switch statements with java enum are type-safe and don't require the enum class name prefix within case labels.

## Example 4: Java `enum` with Constructor and Methods

Enum in java can have constructors, fields, and methods, making them powerful tools for organizing related data and behavior:

```java
enum Planet {
  MERCURY(3.303e+23, 2.4397e6),
  VENUS(4.869e+24, 6.0518e6),
  EARTH(5.976e+24, 6.37814e6),
  MARS(6.421e+23, 3.3972e6);

  private final double mass;   // in kilograms
  private final double radius; // in meters

  // Java enum constructor
  Planet(double mass, double radius) {
    this.mass = mass;
    this.radius = radius;
  }

  // Method to calculate surface gravity
  public double surfaceGravity() {
    final double G = 6.67300E-11;
    return G * mass / (radius * radius);
  }

  // Method to calculate weight on this planet
  public double surfaceWeight(double otherMass) {
    return otherMass * surfaceGravity();
  }
}

public class PlanetCalculator {
  public static void main(String[] args) {
    double earthWeight = 70.0; // 70 kg on Earth

    System.out.println("Weight on different planets:");
    for (Planet planet : Planet.values()) {
      double weight = planet.surfaceWeight(earthWeight);
      System.out.printf("Weight on %s: %.2f kg%n", planet, weight);
    }
  }
}
```

This example results in the following output:

```shell
Weight on different planets:
Weight on MERCURY: 26.36 kg
Weight on VENUS: 63.34 kg
Weight on EARTH: 70.00 kg
Weight on MARS: 26.54 kg
```

The java enum type constructor is called automatically for each constant, allowing enums to store data and provide methods that operate on that data.

## Frequently Asked Questions

### 1. Why is java enum required in Java?

Java enum provides type safety and prevents invalid values from being assigned. They make code more readable by using meaningful names instead of numeric constants, reduce bugs by eliminating magic numbers, and enable compile-time checking of valid values.

### 2. How to name java enum in Java?

Java enum names should follow Java class naming conventions (PascalCase), while enum in java constants should be in uppercase with underscores separating words (UPPER_SNAKE_CASE). For example: `enum HttpStatus { OK, NOT_FOUND, INTERNAL_SERVER_ERROR }`.

### 3. What is the difference between java enum and constant in Java?

Java enum are type-safe and provide additional functionality like methods and constructors, while constants are simply final variables. Enum in java prevents invalid assignments and provides built-in methods like `values()` and `valueOf()`, whereas constants offer no such protection or functionality.
