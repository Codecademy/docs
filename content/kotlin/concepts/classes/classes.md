---
Title: 'Classes'
Description: 'A class is a blueprint for creating objects in Kotlin.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Data Types'
  - 'Constructors'
  - 'Methods'
  - 'OOP'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, **classes** are a blueprint for creating objects. They can contain properties (data) and functions (behavior).

## Syntax

The syntax for a class definition consists of the class keyword, followed by the name of the class, and a block of code enclosing the properties and functions of the class:

```pseudo
class ClassName {
  // properties
  // functions
}
```

Here are some rules for defining classes in Kotlin:

- The name of a class should start with a capital letter and should be a noun (e.g. Dog, Person, BankAccount).
- A class can have properties (data) and functions (behavior).
- Properties and functions of a class can be made public (accessible from anywhere) or private (accessible only within the class). By default, they are public in Kotlin.
- A class can have a primary constructor and/or one or more secondary constructors. The primary constructor is defined in the class header, and the secondary constructors are defined using the `constructor` keyword.
- A class can have an `open`, `abstract`, `sealed`, or `final` modifier. The `open` modifier allows the class to be subclassed, the `abstract` modifier allows the class to have abstract (unimplemented) functions, the `sealed` modifier allows the class to have subclasses, but only in the same file, and the `final` modifier prevents the class from being subclassed.
- A class can have an `inner`, `nested`, or `static` nested modifier. The `inner` modifier allows the class to access the members of the outer class, the `nested` modifier allows the class to be a `static` nested class, and the `static` nested modifier allows the class to be a static nested class and access only static members of the outer class.
- A class can have a companion object, which is a singleton object associated with the class.
- A class can extend one or more superclasses and implement one or more interfaces.
- A class can override and/or overload functions and properties of its superclass and/or interfaces.

## Examples

The following example creates a `Dog` class with the properties `name`, `breed`, and `age` and a function `bark()`:

```kotlin
class Dog {
  var name: String = ""
  var breed: String = ""
  var age: Int = 0
  fun bark() {
    println("Woof!")
    }
}
```

To create an object of this class, the `constructor` can be used. The properties and functions of the object can be accessed using the dot notation:

```kotlin
fun main(){
  // Constructor
  val myDog = Dog()

  // Accessing properties and functions
  myDog.name = "Fido"
  myDog.breed = "Labrador"
  myDog.age = 3
  myDog.bark() // Output: Woof!
}
```

A primary constructor can also be defined in the class header:

```kotlin
class Dog(var name: String, var breed: String, var age: Int) {
  fun bark() {
    println("Woof!")
  }
}

fun main(){
  val myDog = Dog("Fido", "Labrador", 3)
}
```

This eliminates the need to define default values for the properties and allows the creation of objects of the class using the concise `constructor` syntax shown above.

Secondary constructors can also be defined in a class by using the `constructor` keyword:

```kotlin
class Dog {
  var name: String
  var breed: String
  var age: Int

  constructor(name: String, breed: String, age: Int) {
    this.name = name
    this.breed = breed
    this.age = age
  }

  constructor(name: String, breed: String) {
    this.name = name
    this.breed = breed
    this.age = 0
  }

  fun bark() {
    println("Woof!")
  }
}

fun main(){
  val myDog = Dog("Fido", "Labrador", 3)
  val myPuppy = Dog("Buddy", "Golden Retriever")
}
```

This allows the creation of objects of the class using different sets of arguments.
