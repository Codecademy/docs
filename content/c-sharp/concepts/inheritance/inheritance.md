---
Title: 'Inheritance'
Description: 'Inheritance in object-oriented programming (OOP) is the concept of creating new classes based on existing classes.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Inheritance'
  - 'OOP'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Inheritance** in object-oriented programming (OOP) is the concept of creating new classes based on existing classes. In C#, there are parent classes and child classes.

Child classes, similar to real-life relationships, can inherit properties, methods, and behaviors from their parent class by default and can also introduce their own unique characteristics.

In summary, a child class in C# inherits the attributes and functionalities of its parent class, while also having the flexibility to define its specific characteristics. A child class can modify or override the characteristics of its parent class, providing a new implementation for methods already defined in the parent class. This process is known as polymorphism, another fundamental concept in OOP.

The `:` symbol is used in C# within the declaration of the child class to specify the parent or origin class.

## Syntax

```cs
public class Phone
{
    public string Brand { get; set; }
    public string Model { get; set; }

    public void Call(string phoneNumber)
    {
        Console.WriteLine($"Calling {phoneNumber}...");
    }
}
public class SmartPhone : Phone
  {
    public void BrowseInternet()
    {
          Console.WriteLine("Browsing the internet...");
    }


    public void SendMessage(string phoneNumber, string message)
    {
        Console.WriteLine($"Sending message to {phoneNumber}: {message}");
    }
  }

public class LandLinePhone : Phone
{
    // LandLine phones don't have internet browsing functionality or message functionality

}
```

In this example there are two child classes, `SmartPhone` and `LandLinePhone`. Both inherit from the base class or parent class `Phone`. As a result, they have access to the common properties, `Brand` and `Model`, and the call method, `Call()`, defined in the `Phone` class.

The `SmartPhone` class has two additional methods, `BrowseInternet()` and `SendMessage()`, which are specific to smartphones. These methods enable smartphones to browse the internet and send messages. Those functionalities are not present in the parent `Phone` class.

On the other hand, the `LandLinePhone` class does not have any additional methods because landline phones are typically used only for calling, and this functionality is already inherited from the parent class.

## Implementation

The following example implements the classes created earlier in the main method.

```cs
public class Program
{
    public static void Main()
    {
        SmartPhone cellPhone = new SmartPhone
        {
            Brand = "Apple",
            Model = "Iphone 14"
        };

        LandLinePhone housePhone  = new LandLinePhone
        {
             Brand = "Panasonic",
             Model = "KX-TG3411SX"
        };

        cellPhone.Call("4259638547");  // Output: "Calling 4259638547..."
        cellPhone.SendMessage("2589634712", "Hi! I'm a new contributor of codecademy"); // Output: "Sending message to 2589634712: Hi! I'm a new contributor of codecademy"
        cellPhone.BrowseInternet();   // Output: "Browsing the internet..."

        housePhone.Call("4384938752");  // Output: "Calling 4384938752..."
    }
}
```

## Types of Inheritance

### Single Inheritance

Single inheritance is when a child class inherits the characteristics of only one parent class.

```cs
public class Vehicle {
  // Vehicle class properties and methods
}

public class Car : Vehicle {
  // Vehicle class properties and methods accessible here due to inheritance
  // Car class properties and methods
}
```

### Multilevel Inheritance

Multilevel inheritance is when a child class inherits from a parent class which in turn inherits from another parent class. This forms a chain of inheritance. A common example in real life is the grand-parent, parent and grand-children relationship.

```cs
public class Vehicle {
  // Vehicle class properties and methods
}

public class Car : Vehicle {
  // Vehicle class properties and methods accessible here due to inheritance
  // Car class properties and methods
}
public class SportsCar : Car {
  // Vehicle class properties and methods accessible here due to inheritance
  // Car class properties and methods accessible here due to inheritance
  // SportsCar class properties and methods
}

```

### Hierarchical Inheritance

Hierarchical inheritance is when a single parent class has multiple children.

```cs
public class Animal {
  // Parent class properties and methods
}

public class Dog : Animal{
  // Animal class properties and methods accessible here due to inheritance
  // Dog class properties and methods
}

public class Cat : Animal{
  // Animal class properties and methods accessible here due to inheritance
  // Cat class properties and methods
}
public class Lion : Animal{
  // Animal class properties and methods accessible here due to inheritance
  // Lion class properties and methods
}
public class Mouse : Animal{
  // Animal class properties and methods accessible here due to inheritance
  // Mouse class properties and methods
}
```

## Access Modifiers

In C#, access modifiers are used as keywords to determine the accessibility level (visibility) of properties, methods, or fields within a C# program.

| Keyword              | Description                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public`             | Available anywhere in the program.                                                                                                                                           |
| `protected`          | Available only to the current class or child classes that inherit from that class.                                                                                           |
| `internal`           | Available only to the classes in the current project where it is defined.                                                                                                    |
| `protected internal` | Available to the current class, child classes that inherit from that class, or classes in the current project where it is defined.                                           |
| `private`            | Only available within the class where it is declared.                                                                                                                        |
| `private protected`  | Only available to the classes in the current project where it is defined and also to the children of all classes that inherit from the parent class within the same project. |
