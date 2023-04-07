---
Title: 'Interface'
Description: 'Interface are like abstract class describing methods and variables that should exist in any class that implements the interface.'
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

An **interface** is a type that defines a set of methods and properties that a class can implement. It provides a way to define a contract between the implementing class and the calling code. An interface can be thought of as a blueprint for a class, where the class must implement all the methods and properties defined in the **interface**.

## Syntax

This is how the basic syntax of an **interface** can be created:

```kotlin
interface Shape {
    fun area(): Double
    fun perimeter(): Double
}
```

## Example

In the following code example we defined and implemented an interface name `MyListener` and a class named 'Name' which is inheriting the interface 'MyListener':

```kotlin
fun main(){
    var myObject = Name()
    println(myObject.name)
    myObject.name ="XYZ"
    println(myObject.name)
    myObject.EmptyFn()
}

interface Mylistener {
    var name: String  // The normal properties are by default abstract in nature so we cannot give them a body
    fun jump(){
        print("World")
    } // As you can notice here we gave the function it's body which shows that its `open` in nature
    fun EmptyFn() // methods are by default `open` and `public` in nature so if you want you can give the body for the function or call it in other class and override it to your own liking
}

class Name : Mylistener{ //
    override var name: String ="Hello"
    override fun EmptyFn() {
        println("Override Text")
    }

    override fun jump() {// Optional to override
    }
}
```

In above code the `Mylistener` interface declares two functions and a property i.e. `name` is a read-write property of type String, `jump()` is a function with a default implementation that prints the text "World", and `EmptyFn()` is a function without a body.

The output for the above code will be:

```shell
Hello
XYZ
Override Text
```
