---
Title: 'Interfaces'
Description: 'An interface is an abstract contract that defines methods and properties that must be implemented by any class that implements the interface.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Interface'
  - 'Syntax'
  - 'Abstraction'
  - 'Documentation'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

An **interface** in C# is a contract that defines a set of methods, properties, events, and indexers that a class or struct must implement. Interfaces cannot be instantiated directly, but they can be implemented by classes and structs. They are one of several tools for implementing object-oriented design in C#.

## Syntax

An interface in C# is created using the `interface` keyword. The syntax for defining an interface in C# is:

```
interface MyInterface
{
    void MyMethod();
    string MyProperty { get; set; }
    event EventHandler MyEvent;
}
```

To implement an interface in C#, you use the `:` symbol, followed by the name of the interface. The syntax for implementing an interface is as follows:

```
class MyClass : MyInterface
{
    public void MyMethod()
    {
        // implementation of MyMethod()
    }

    public string MyProperty
    {
        get { return "MyValue"; }
        set { }
    }

    public event EventHandler MyEvent;
}
```

## Example

The following example shows implementation of an interface:

```cs
using System;

// Create an interface called IAnimal
interface IAnimal
{
    // Define a method called Speak()
    void Speak();
}

// Create a class called Dog that implements the IAnimal interface
class Dog : IAnimal
{
    public void Speak()
    {
        Console.WriteLine("Woof!");
    }
}

// Create a class called Cat that implements the IAnimal interface
class Cat : IAnimal
{
    public void Speak()
    {
        Console.WriteLine("Meow!");
    }
}

// Create a main method to test the program
public class Program
{
    public static void Main(string[] args)
    {
        // Create a Dog object
        Dog dog = new Dog();

        // Call the Speak() method on the Dog object
        dog.Speak();

        // Create a Cat object
        Cat cat = new Cat();

        // Call the Speak() method on the Cat object
        cat.Speak();
    }
}
```

The output for the above code is:

```shell
Woof!
Meow!
```

## Use of Interfaces

Interfaces can be used in C# to achieve a number of different goals, including:

- `Abstraction`: Interfaces can be used to abstract away the implementation details of a class or struct. This can make code more modular and easier to understand.
- `Multiple inheritance`: C# does not support multiple inheritance of classes, but it does support multiple inheritance of interfaces. This allows a class to inherit the functionality of multiple different interfaces.
- `Plug-and-play`: Interfaces can be used to create a "plug-and-play" architecture. This means that different classes or structs can be easily swapped in and out, as long as they implement the same interfaces.
