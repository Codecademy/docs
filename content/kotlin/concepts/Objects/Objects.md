---
Title: 'objects'
Description: 'Concept for objects declaration in Kotlin language'
Subjects: 
  - 'Mobile Development'
Tags:
  - 'android'
  - 'kotlin'
  - 'object'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-kotlin'
  - 'www.codecademy.com/learn/learn-kotlin'
---

**Kotlin object** declaration is a special type of declaration in Kotlin that allows you to create a single instance of a *class*, commonly known as a **Singleton**

## Syntax
**Pseudocode**
~~~
object MiObject {
    val property: Type = value

    fun myFunction() {
        // Function Implementation
    }
}

// Use of the object
MyObject.property
MyObject.myFunction()
~~~
The object declaration combines the definition of the class and the creation of its instance into a concise and powerful construct.
---

## 
**Example**

object HelloKitty {
  fun sayHello(name: String) {
    println("Hi, $name!")
      }
        }
        
fun main() {
   HelloKitty.sayHello("Liany<3")
    }

In this example, we have an object called "HelloKitty" that contains a method called "sayHello". The "sayHello" method takes a String parameter called "name" and displays the message "Hi, name!" on the console.
The console print:

Hi, Liany<3!
