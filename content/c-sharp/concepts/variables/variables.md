---
Title: 'Variables'
Description: 'Variables are used to store and manipulate data. In C#, each variable has a type that determines the values it can store.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Variables** are used to store and manipulate data. In C#, each variable has a type that determines the values it can store.

## Types of variables

In C#, there are five distinct types of variables:

| Name               | Description                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Local variables    | Variables declared within a method, constructor, or code block, accessible only within that scope.                               |
| Instance variables | Non-static fields in a class, storing data unique to each instance of the class.                                                 |
| Static Variables   | Variables shared across all instances of a class, belonging to the class itself.                                                 |
| Constant Variables | Immutable values initialized at the time of declaration, typically declared with const and behaving similarly to static members. |
| Readonly Variables | Values that can be assigned during declaration or in a constructor but cannot be modified afterward.                             |

## Syntax

```pseudo
type name = value;
```

- `type`: The data type of a variable, defining the kind of data it can hold.
- `name`: The identifier for the variable, used to reference it in the code.
- `value`: An optional initial value for the variable. If omitted, it must be assigned a value before use.

## Examples

### Local variables

In this example, `localVariable` can only be used within the `MyMethod()` function:

```cs
void MyMethod()
{
  int localVariable = 10;  // This variable is only accessible inside MyMethod
}
```

### Instance variables

The example demonstrates an instance variable (`name`) within a class (`Person`). Each instance of `Person` will have its own copy of `name`:

```cs
class Person
{
  public string name;  // Instance variable

  public Person(string personName)
  {
    name = personName;  // Initialize instance variable
  }
}
```

### Static Variables

Here, `wheels` is a static variable, meaning it belongs to the `Car` class and is shared by all instances. Note that static variables can be modified unless marked as `const`:

```cs
class Car {
  public static int wheels = 4;  // Static variable
}
```

### Constant Variables

In this example, `Pi` is a constant variable, meaning its value cannot be changed after declaration and is shared across all instances:

```cs
class Circle
{
  public const double Pi = 3.14159;  // Constant variable

  public double CalculateArea(double radius)
  {
    return Pi * radius * radius;  // Using the constant variable
  }
}
```

### Readonly Variables

In this example, `length` and `width` are readonly variables assigned in the `Rectangle` constructor. Their values cannot be changed after the instance is created:

```cs
class Rectangle
{
  public readonly double length;  // Readonly variable
  public readonly double width;   // Readonly variable

  public Rectangle(double l, double w)
  {
    length = l;  // Assigning value in the constructor
    width = w;   // Assigning value in the constructor
  }
}
```

## Codebyte Example

Here’s an example showcasing the use of various types of variables:

```codebyte/csharp
using System;

class Car
{
  // Instance variable
  public string model;

  // Static variable
  public static int wheels = 4; // Shared across all instances

  // Constant variable
  public const string fuelType = "Gasoline"; // Cannot be changed

  // Readonly variable
  public readonly string vin; // Must be assigned in constructor

  // Constructor to initialize instance and readonly variables
  public Car(string model, string vin)
  {
    this.model = model;
    this.vin = vin; // Assigning the readonly variable
  }

  public void DisplayInfo()
  {
    // Local variable
    string message = $"Car Model: {model}, VIN: {vin}, Wheels: {wheels}, Fuel Type: {fuelType}";

    // Displaying the message
    Console.WriteLine(message);
  }
}

class Factory
{
  static void Main()
  {
    // Creating instances of Car
    Car car1 = new Car("Toyota Camry", "1HGCM82633A123456");
    Car car2 = new Car("Honda Accord", "1HGCM82633A654321");

    // Displaying info for each car
    car1.DisplayInfo();
    car2.DisplayInfo();

    // Modifying static variable
    Car.wheels = 5; // All instances will see this change

    // Displaying info again to see the updated static variable
    car1.DisplayInfo();
    car2.DisplayInfo();

    // Trying to modify readonly variable (will cause compile-time error)
    // car1.vin = "1HGCM82633A111111"; // Uncommenting this line will cause an error
  }
}
```
