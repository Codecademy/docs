---
Title: 'objects'
Description: 'Kotlin object declaration is a special type of declaration that allows the creation of a single instance of a class, commonly known as a Singleton.'
Subjects: 
  - 'Mobile Development'
Tags:
  - 'Android'
  - 'Kotlin'
  - 'Objects'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-kotlin'
  - 'paths/computer-science'
---
Kotlin **`object`** declaration is a special type of declaration that allows the creation of a single instance of a class, commonly known as a Singleton.

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
---
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
---
This example, shows an object called `HelloKitty` that contains a method called `sayHello`. The `sayHello` method takes a `String` parameter called `name` and displays the message `Hi, name!` on the console.
The following is printed to the console:

```shell
Hi, Liany<3!
```
