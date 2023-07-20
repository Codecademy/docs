---
Title: 'Inheritance'
Description: 'Inheritance in object-oriented programming (OOP) is the concept of creating new classes based on existing classes'
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

**Inheritance** in object-oriented programming (OOP) is the concept of creating new classes based on existing classes. In C#, we have parent classes and child classes. 

Child classes, similar to real-life relationships, can inherit properties, methods, and behaviors from their parent class by default and can also introduce their own unique characteristics.

In summary, a child class in C# inherits the attributes and functionalities of its parent class, while also having the flexibility to define its specific characteristics. 

Additionally, a child class can modify or override the characteristics of its parent class, providing a new implementation for methods already defined in the parent class. This process is known as polymorphism, another fundamental concept in OOP.

We use the `:` symbol in C# to implement inheritance, showing the child class's derivation from the parent class.


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
```

```cs
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

```

```cs
public class LandLinePhone : Phone
{
    // LandLine phones don't have internet browsing functionality or message functionality
    
}

```

In this example, we have two child classes, `SmartPhone` and `LandLinePhone`, both inheriting from the base class `Phone`. As a result, they have access to the common properties, Brand and Model, and the call method, Call(), defined in the `Phone` class.

The `SmartPhone` class has two additional methods, `BrowseInternet()` and `SendMessage()`, which are specific to smartphones. These methods enable smartphones to browse the internet and send messages. Those functionalities are not present in the parent `Phone` class. 

On the other hand, the `LandLinePhone` class does not have any additional methods because landline phones are typically used only for calling, and this functionality is already inherited from the parent class.



## implementation

The following example uses an enum to identify whether a given place is a city, country, or planet.

```cs
public class Program
{
    public static void Main()
    {
        Smartphone smartphone = new Smartphone
        {
            Brand = "Apple",
            Model = "Iphone 14"
        };

        LandlinePhone landlinePhone  = new LandlinePhone landlinePhone 
        {
             Brand = "Panasonic",
             Model = "KX-TG3411SX"
        };

        smartphone.Call("4259638547");  // Output: "Calling 4259638547..."
        smartphone.SendMessage("2589634712", "Hi! I'm a new contributor of codecademy"); // Output: "Sending message to 2589634712: Hi! I'm a new contributor of codecademy"
        smartphone.BrowseInternet();   // Output: "Browsing the internet..."

        landlinePhone.Call("4384938752");  // Output: "Calling 4384938752..."
    }
}

```


## Types of Inheritance


### Single Inheritance

Single inheritance is when a child class inherits the charactreristics of only one parent class.

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

Multilevel inheritance is when a child class inherits from a parent class which in turn inherits from another parent class. This forms a chain of  of inheritance. A commom example in real life is the grand-parent, parent and grand-children relationship,
where parent inherits from the grand-parents and the children inherit from both parent and grand-parent

```cs
public class Vehicle {
  // Vehicle class properties and methods
}

public class Car : Vehicle {
  // Vehicle class properties and methods accessible here due to inheritance
  // Car class properties and methods
}
public class SportCar : Car {
  // Vehicle class properties and methods accessible here due to inheritance
  // Car class properties and methods accessible here due to inheritance
  // SportCar class properties and methods
}

```


### Hierarchical Inheritance

Hierarchical inheritance is when a single parent class has mutiple children.

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

In C# access modifiers are keywords used to set the accesibility level of a propertie, method or field in a C# program.   

Keyword	Description
public	Available to all classes.
protected	Available only to the current class or to derived classes.
internal	Available only to classes in the current assembly.
protected internal	Available only to the current class, derived classes, or classes in the current assembly.
private	Available only to the containing class.

| Keyword          | Description                                            |
|------------------|--------------------------------------------------------|
| public           | Available anywhere in the program.                              |
| protected        | Available only to the current class or child classes that inherit from that class.|
| internal         | Available only to classes in the current project where it is defined.     |
| protected internal | Available to the current class, child classes that inherit from that class, or classes in the current project where it is defined. |
| private          | Only available within the class where it is declared.                 |
| private protected | Only available to the classes in the current project where it is defined and also to the children of all classes that inherit from the parent class within  the same project.   |

