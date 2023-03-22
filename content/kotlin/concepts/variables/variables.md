---
Title: 'Variables'
Description: 'Variables are used to store a piece of data to be reused later in the program.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Variables** are used to store pieces of data that can be either mutable or read-only. The value stored in a variable can be of different [data types](https://www.codecademy.com/resources/docs/kotlin/data-types) (e.g., numbers, characters, strings).

## Syntax

```pseudo
var x: Type = mutableValue
val y = readOnlyValue
```

In Kotlin, the `var` keyword is used to declare mutable variable while the `val` keyword is used for a read-only variable. The variable can either be explicitly typed, as shown with `x`. The type can also be inferred, as shown with `y`.

> **Note:** Unlike other programming languages, Kotlin doesn't have a `null` type. Instead, it has nullable and non-nullable types. A nullable type can hold a `null` value, while a non-nullable type cannot. To declare a nullable type, the `?` operator is used after the type. For example:
>
> ```kotlin
> fun main() {
>   // Declare a nullable variable
>   var z: String? = null
> }
> ```

## Delegated properties

In Kotlin, variables can have `delegated` properties that are computed automatically by a delegate object rather than being stored directly in the class. Here's an example of how to declare a delegated property in Kotlin:

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

### Example

The following example applies the `Example` and `Delegate` classes from the previous section. The `prop` property of the `Example` class is delegated to an instance of the `Delegate` class. The `getValue` and `setValue` functions of the `Delegate` class define how the property is accessed and modified.

```kotlin
fun main() {
  val example = Example()
  example.prop = "Hello"
  println(example.prop)
}
```

This prints the following output:

```shell
Hello has been assigned to 'prop' in Example@1be83a0e.
Example@1be83a0e, thank you for delegating 'prop' to me!
```

When value of `prop` is set, it calls the `setValue` function of the `Delegate` class, which prints a message. After the `prop` value is retrieved, the `getValue()` function is called and a string is returned.

`Delegated` properties are a powerful and flexible feature of Kotlin that can be used to implement various design patterns, such as the observer pattern or the proxy pattern. They can also be used to simplify code by abstracting away common property-related tasks, such as lazy initialization or thread-safe access.
