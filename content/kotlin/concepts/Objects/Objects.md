---
Title: 'Objects'
Description: 'In kotlin the concept of Objects have two possible use: expression and declarations.'
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

**`Object expression`**   
Its a kind of expression that create an object of anonymous classes (classes that aren't explicitly declared with the class).
This kind of classes are very useful for one-time use.

## Syntax

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

## Example:

```
fun main() {
    val myAnonymusObject = object { //create an anonymous object using the object expression *object*.
        val name = "Princess"
        val color = "pink"
        fun presentation() {
            println("Hi, I'm $name, and I like $color.")
        }
    }

    myAnonymusObject.presentation()
}
```

The example shows an object without a explicitly class declaration.

The following is printed to the console:  
```shell
"Hi, I'm Princess and I like pink."
```
- - -

**`Object declaration`**  
Is a special type of declaration that allows the creation of a single instance of a class, commonly known as a Singleton.

## Syntax

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

## Example

```
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
