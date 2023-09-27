---
Title: 'Objects'
Description: 'In Kotlin there are two main statement types for the creation of class objects: expressions and declarations.'
Subjects:
  - 'Mobile Development'
Tags:
  - 'Android'
  - 'Kotlin'
  - 'Objects'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin there are two main statement types for the creation of class **objects**: expressions and declarations.

## Object Expressions

An object expression is a statement that creates an object from an anonymous class (classes that aren't explicitly declared). These kinds of classes are very useful for one-time use.

## Expression Syntax

```pseudo
fun main() {
    val myObject = object {
        val valueOne = L
        val valueTwo = A
        fun sum() {
            val result = valueOne + valueTwo
            println("The sum is: $result")
        }
    }

    myObject.sum()
}
```

An example of an object expression:

```kotlin
fun main() {
    val myAnonymousObject = object { //create an anonymous object using the object expression *object*.
        val name = "Princess"
        val color = "pink"
        fun presentation() {
            println("Hi, I'm $name, and I like $color.")
        }
    }

    myAnonymousObject.presentation()
}
```

The example shows an object without a explicit class declaration. The following is printed to the console:

```shell
"Hi, I'm Princess and I like pink."
```

## Object Declarations

Object declarations allow for the creation of a single instance of a class, commonly known as a Singleton.

## Declaration Syntax

```pseudo
object MyObject {
    val property: Type = value

    fun myFunction() {
        // Function Implementation
    }
}

// Use of the object
MyObject.property
MyObject.myFunction()
```

The object declaration combines the definition of the class and the creation of its instance into a concise and powerful construct.

The following code demonstrates the implementation of an object declaration:

```kotlin
object HelloKitty {
  fun sayHello(name: String) {
    println("Hi, $name!")
      }
        }

fun main() {
   HelloKitty.sayHello("Liany<3")
    }
```

This example, shows an object called `HelloKitty` that contains a method called `sayHello`. The `sayHello` method takes a `String` parameter called `name` and displays the message `Hi, name!` on the console.

The following is printed to the console:

```shell
Hi, Liany<3!
```
