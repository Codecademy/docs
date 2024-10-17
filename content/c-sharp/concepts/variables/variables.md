---
Title: 'Variables'
Description: 'Variables are used to store and manipulate data. In C#, each variable has a type that determines the values it can store.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Variables** are used to store and manipulate data. In C#, each variable has a type that determines the values it can store.

## Types of variables

In **C#**, there are five distinct types of variables:

| Name               | Description                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Local variables    | are variables that are declared within a method, constructor, or block of code.                                           |
| Instance variables | are non-static fields in a class. They store data unique to each instance of a class.                                     |
| Static Variables   | are shared across all instances of a class. They belong to the class itself rather than any instance.                     |
| Constant Variables | are immutable after declaration and must be initialized at the time of declaration. They are typically static by default. |
| Readonly Variables | can only be assigned during declaration or within the constructor of the class.                                           |

## Syntax

A variable is declared by specifying a **type**, a **name** and a **value** (if it is to be initialized):

- **Type**: The data type of a variable, defining the kind of data it can hold.
- **Name**: The identifier for the variable, used to reference it in the code.
- **Value**: The data assigned to the variable, representing the information it stores.

```pseudo
type name = value;
```

## Examples

### Local variables

In this example, `localVariable` can only be used within the `MyMethod()` function.

```cs
void MyMethod()
{
  int localVariable = 10;  // This variable is only accessible inside MyMethod
}
```

### Instance variables

In this example, `name` is an instance variable, and each `Person` instance created will have its own `name` value.

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

In this example, the `wheels` variable is static, meaning that all instances share the same value for `wheels`, which cannot be modified afterward.

```cs
class Car {
  public static int wheels = 4;  // Static variable
}
```

### Constant Variables

In this example, `Pi` is a constant variable, meaning its value cannot be changed.

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

In this example, `length` and `width` are readonly variables assigned in the `Rectangle` constructor. Their values cannot be changed after the instance is created.

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

Here’s an example showcasing the use of various types of variables. Feel free to experiment with it. Happy coding!

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
    car1.DisplayInfo();  // Output: Car Model: Toyota Camry, VIN: 1HGCM82633A123456, Wheels: 4, Fuel Type: Gasoline
    car2.DisplayInfo();  // Output: Car Model: Honda Accord, VIN: 1HGCM82633A654321, Wheels: 4, Fuel Type: Gasoline

    // Modifying static variable
    Car.wheels = 5; // All instances will see this change

    // Displaying info again to see the updated static variable
    car1.DisplayInfo();  // Output: Car Model: Toyota Camry, VIN: 1HGCM82633A123456, Wheels: 5, Fuel Type: Gasoline
    car2.DisplayInfo();  // Output: Car Model: Honda Accord, VIN: 1HGCM82633A654321, Wheels: 5, Fuel Type: Gasoline

    // Trying to modify readonly variable (will cause compile-time error)
    // car1.vin = "1HGCM82633A111111"; // Uncommenting this line will cause an error
  }
}
```
