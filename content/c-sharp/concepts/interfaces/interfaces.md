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

The following example defines the interface with default implementations. This feature is available from C# 8.0 version onwards:

```cs
public interface IAnimal
{
    void MakeSound();
    
    string Name { get; set; }
    
    // Default implementation
    void Move()
    {
        Console.WriteLine("This is a default animal action.");
    }
    
    // Default implementation
    void Eat()
    {
        Console.WriteLine("Also a default animal action.");
    }
}

```

The output for the above code is:

```shell
This is a default animal action.
Also a default animal action.
```

## Implementing the Interface

The following code implements the above interface in a class named Dog:

```cs
public class Dog : IAnimal
{
    public string Name { get; set; }

    public Dog(string name)
    {
        Name = name;
    }

    public void MakeSound()
    {
        Console.WriteLine("The dog barks when he is happy to see me.");
    }

    public void Move()
    {
        Console.WriteLine("The dog moves when he sees his best friend.");
    }
}

public class Cat : IAnimal
{
    public string Name { get; set; }

    public Cat(string name)
    {
        Name = name;
    }

    public void MakeSound()
    {
        Console.WriteLine("The cat purrs when I scratch his head.");
    }
    public void Move()
    {
        Console.WriteLine("The cat only moves when there is food in his bowl.");
    }
    // Uses default implementations for MakeSound and Move
}

```
## Codebyte

```codebyte/csharp
using System;

public interface IAnimal
{
    void MakeSound();
    string Name { get; set; }
    
    void Move()
    {
        Console.WriteLine("This is a default animal movement.");
    }    
   
}

public class Dog : IAnimal
{
    public string Name { get; set; }

    public Dog(string name)
    {
        Name = name;
    }

    public void MakeSound()
    {
        Console.WriteLine("The dog barks when he is happy to see me.");
    }

    public void Move()
    {
        Console.WriteLine("The dog moves when he sees his best friend.");
    }
}

public class Cat : IAnimal
{
    public string Name { get; set; }

    public Cat(string name)
    {
        Name = name;
    }

    public void MakeSound()
    {
        Console.WriteLine("The cat purrs when I scratch his head");
    }
    public void Move()
    {
        Console.WriteLine("The cat only moves when there is food in his bowl.");
    }
    
}

public class Program
{
    public static void Main()
    {
        IAnimal dog = new Dog("Spot");
        IAnimal cat = new Cat("Mittens");

        Console.WriteLine($"{dog.Name} actions:");
        dog.MakeSound();
        dog.Move();
        

        Console.WriteLine($"{cat.Name} actions:");
        cat.MakeSound();
        cat.Move(); // Uses default implementation
        
    }
}

```

## Use of Interfaces

Interfaces can be used in C# to achieve a number of different goals, including:

- `Abstraction`: Interfaces can be used to abstract away the implementation details of a class or struct. This can make code more modular and easier to understand.
- `Multiple inheritance`: C# does not support multiple inheritance of classes, but it does support multiple inheritance of interfaces. This allows a class to inherit the functionality of multiple different interfaces.
- `Plug-and-play`: Interfaces can be used to create a "plug-and-play" architecture. This means that different classes or structs can be easily swapped in and out, as long as they implement the same interfaces.
