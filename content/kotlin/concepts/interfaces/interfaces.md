---
Title: 'Interfaces'
Description: 'Interfaces are an abstract class describing methods and variables that should exist in any class that implements the interface.'
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

An **interface** is a type that defines a set of methods and properties that a class can implement. It provides a way to define a contract between the implementing class and the calling code. An interface can be thought of as a blueprint for a class, where the class must implement all the methods and properties defined in the interface.

## Creating An Interface

This is how the basic syntax of an interface can be created:

```pseudo
interface Name {
  // Properties and functions go here in the body.
}
```

## Example

In the following code example, an interface named `MyListener` is defined and a class named `Name` which inherits it:

```kotlin
fun main() {
  var myObject = Name()
  println(myObject.name)

  myObject.name ="XYZ"
  println(myObject.name)

  myObject.EmptyFn()
}

interface Mylistener {
  var name: String  // The normal properties are by default abstract in nature it cannot be given a body.

  fun jump() {
    print("World")
  } // The function's body shows that its `open` in nature.

  fun EmptyFn() // Methods are by default `open` and `public` in nature so it can give the body for the function or call it in other class and override it.
}

class Name : Mylistener {
  override var name: String = "Hello"

  override fun EmptyFn() {
    println("Override Text")
  }

  override fun jump() {} // Optional to override.
}
```

In the code above, the `Mylistener` interface declares a property and two functions:

- `name` is a read-write property of type `String`.
- `jump()` is a function with a default implementation that prints the text `"World"`.
- `EmptyFn()` is a function without a body.

The `Name` class implements the `Mylistener` interface and overrides its two functions and property. The name property is initialized to `"Hello"` and is made writable in the `Name` class. The `EmptyFn()` function is also overridden with a new implementation that prints the text `"Override Text"`. The `jump()` function is optional to override but is done so here, so the `print("World")` in the interface will not run.

The output for the above code will be:

```shell
Hello
XYZ
Override Text
```
