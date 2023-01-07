---
Title: 'Variables'
Description: 'Variables are used whenever there’s a need to store a piece of data and ensures code re-usability.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Variable** is a storage location for a value that can be either mutable or read-only. The value stored in a variable can be of different types, such as numbers, characters, or strings.

## Declaring a Variable

A variable in Kotlin is declared using the `var` keyword for a mutable variable or the `val` keyword for a read-only variable. Here's an example of how to declare variables in Kotlin:

```pseudo
fun main() {
    // Declare a mutable variable
    var x: Int = 5
    // Declare a read-only variable
    val y: String = "Hello, World!"
}
```

The type of a `variable` is optional in Kotlin, as the type can be inferred from the value assigned to the variable. For example, the following declarations are equivalent to the ones above:

```kotlin
fun main() {
    // Declare a mutable variable with inferred type
    var x = 5
    // Declare a read-only variable with inferred type
    val y = "Hello, World!"
}
```

It's important to note that, unlike other programming languages, Kotlin doesn't have a `null` type. Instead, it has nullable and non-nullable types. A nullable type can hold a null value, while a non-nullable type cannot. To declare a nullable type, you can use the `?` operator after the type. For example:

```kotlin
fun main() {
    // Declare a nullable variable
    var z: String? = null
}
```

One thing that not many people know about `variables` in Kotlin is that they can have `delegated` properties. A `delegated` property is a special type of property that is computed automatically by a delegate object, rather than being stored directly in the class.

Here's an example of how to declare a delegated property in Kotlin:

```kotlin
import kotlin.reflect.KProperty
class Example {
    var prop: String by Delegate()
}
class Delegate {
    operator fun getValue(thisRef: Any?, property: KProperty<*>): String {
        return "$thisRef, thank you for delegating '${property.name}' to me!"
    }
    operator fun setValue(thisRef: Any?, property: KProperty<*>, value: String) {
        println("$value has been assigned to '${property.name}' in $thisRef.")
    }
}
```

In this example, the `prop` property of the `Example` class is delegated to an instance of the `Delegate` class. The `getValue` and `setValue` functions of the `Delegate` class define how the property is accessed and modified.

```kotlin
val example = Example()
example.prop = "Hello" // prints "Hello has been assigned to 'prop' in Example@1be83a0e."
println(example.prop) // prints "Example@1be83a0e, thank you for delegating 'prop' to me!"
```

In this example, the `prop` property is a `delegated` property. When you set the value of `prop`, it calls the `setValue` function of the `Delegate` class, which prints a message. When you get the value of prop, it calls the `getValue` function of the `Delegate` class, which returns a string.

`Delegated` properties are a powerful and flexible feature of Kotlin that can be used to implement various design patterns, such as the observer pattern or the proxy pattern. They can also be used to simplify code by abstracting away common property-related tasks, such as lazy initialization or thread-safe access.
