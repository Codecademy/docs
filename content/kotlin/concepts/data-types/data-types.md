---
Title: 'Data Types'
Description: 'Data types are a classification of types of values that can be stored and manipulated in a program.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Integers'
  - 'Data Types'
  - 'Boolean'
  - 'Characters'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Data types** are a classification of types of data that determine possible values and operations that can be performed on that data.

Kotlin has primitive and non-primitive data types:

## Primitive Data Types

There are the following different types of primitive data types in Kotlin:

- Boolean
- Byte
- Char
- Double
- Float
- Int
- Long
- Short

### Boolean

In Kotlin, `Boolean` can hold either `true` or `false`. To declare a boolean variable, the `var` or `val` keyword can be used, followed by the variable name, and the assigned boolean value:

```kotlin
val isTrue: Boolean = true
val isFalse: Boolean = false
```

A boolean can be used to determine the outcome of `if...else` statements:

```kotlin
fun main(){
  val condition: Boolean = true

  if (condition) {
    // Code that gets executed if the variable is true
  } else {
    // Code that gets executed if the variable is false
  }
}
```

### Byte

A `Byte` is a data type that is similar to an integer data type, but it is only 8 bits in size. While an integer can be a different size depending on the system, a byte can only hold values from -128 to 127.

Bytes are commonly used to store small pieces of data, such as characters in a text file or colors in an image.

Here is an example of how to declare a byte variable in Kotlin:

```kotlin
fun main() {
  val a: Byte = 50
  val b: Byte = 25
  val c: Byte = a + b as Byte

  print(c)
}
```

The output will be:

```shell
75
```

Calculations that exceed the byte range will produce unexpected results:

```kotlin
fun main() {
  val a: Byte = 120
  val b: Byte = 120
  val c: Byte = a + b as Byte

  print(c)
}
```

The expected output is `240`, but since that exceeds the range for a byte, the output will be:

```shell
-88
```

### Char

`Char` represents a primitive data type that can hold any character from the Unicode character set, which includes letters, digits, symbols, and special characters.

Here is an example of how to declare a character variable in Kotlin:

```kotlin
val ch: Char = 'A'
```

### Double

`Double` represents a 64-bit floating-point number. It is a primitive data type that can hold values with a fractional component, such as 3.14 or 0.5.

Here is an example of how to declare a double variable in Kotlin:

```kotlin
fun main() {
  val a: Double = 3.14
  val b: Double = 2.71
  val c: Double = a * b as Double

  print(c)
}
```

The output of the above code will be:

```shell
8.5094
```

In this example, `c` will be assigned the value 8.5014, which is the result of 3.14 \* 2.71.

A double can be used to perform more advanced operations, such as calculating the square root of a number or raising a number to the power of another number. For example:

```kotlin
import kotlin.math.sqrt
import kotlin.math.pow

fun main() {
  val a: Double = 16.0
  val b: Double = sqrt(a)
  val c: Double = a.pow(2)

  println("The square root of $a is $b.")
  println("$a raised to the power of 2 is $c.")
}
```

The output will be:

```shell
The square root of 16.0 is 4.0.
16.0 raised to the power of 2 is 256.0.
```

### Float

`Float` represents a 32-bit floating-point number. It is a primitive data type that can hold values with a fractional component, such as 3.14 or 0.5.

Here is an example of how to declare a float in Kotlin:

```kotlin
fun main() {
  val a: Float = 3.14f
  val b: Float = 2.71f
  val c: Float = a * b as Float

  print(c)
}
```

The output will be:

```shell
8.5094
```

In this example, `c` will be assigned the value 8.5014, which is the result of 3.14 \* 2.71.

### Int

`Int` represents a 32-bit signed integer. It is a primitive data type that can hold values ranging from -2147483648 to 2147483647.

Here is an example of how to declare an integer variable in Kotlin:

```kotlin
fun main() {
  val a: Int = 50
  val b: Int = 25
  val c: Int = a + b

  print(c)
}
```

The output of the above code will be:

```shell
75
```

### Long

`Long` represents a 64-bit signed integer. It is a primitive data type that can hold values ranging from -9223372036854775808 to 9223372036854775807.

Here is an example of how to declare a long variable in Kotlin:

```kotlin
fun main() {
  val a: Long = 500000000
  val b: Long = 250000000
  val c: Long = a + b

  print(c)
}
```

The output for the above code will be:

```shell
750000000
```

In this example, `c` will be assigned the value 750000000, which is the result of 500000000 + 250000000.

### Short

`Short` represents a 16-bit signed integer. It is a primitive data type that can hold values ranging from -32768 to 32767.

Here is an example of how to declare a short variable in Kotlin:

```kotlin
fun main() {
  val a: Short = 50
  val b: Short = 25
  val c: Short = (a + b).toShort()

  print(c)
}
```

The output for the above code will be:

```shell
75
```

In this example, the `c` variable will be assigned the value 75, which is the result of 50 + 25. The `toShort()` function is used to convert the result to a `Short` type.

## Non-Primitive Data Types

The following are non-primitive data types in Kotlin:

- Any
- Arrays
- Class
- Enum
- List
- Map
- Nothing
- Set
- String
- Unit

### Arrays

An `Array` is a data structure that stores a fixed-size collection of elements of the same data type. They are non-primitive data types, which means they are derived from primitive data types or other non-primitive data types.

To declare an array in Kotlin, the `arrayOf()` function can be utilized, with the elements of the array specified within the parentheses. For instance:

```kotlin
fun main() {
  val numbers: Array<Int> = arrayOf(1, 2, 3, 4, 5)
}
```

In this example, the `numbers` variable is an array of integers that contains some numerical values. The type of the array is specified using the `Array<Int>` syntax, which indicates that the array contains elements of the `Int` type.

### String

In Kotlin, a `String` is a data type that represents a sequence of characters. A string can be used to store and manipulate text in a program.

Here is an example of how to declare and initialize a string in Kotlin:

```kotlin
fun main() {
  val message: String = "Hello, World!"
  print(message)
}
```

The output for the above code will be:

```shell
Hello, World!
```

Strings are also [immutable](https://kotlinlang.org/docs/native-immutability.html) in Kotlin.

The `+` operator can be used to concatenate strings or the `trim()` function to remove leading and trailing whitespace from a string. For example:

```kotlin
fun main() {
  val greeting: String = "Hello, "
  val name: String = "John"
  val fullMessage: String = greeting + name
  println(fullMessage.trim())
}
```

The output for the above code will be:

```shell
Hello, John
```

### Any

In Kotlin, the `Any` type is a supertype of all types in the language. It represents a general type that can hold any value.

Here is an example of how to declare a variable of type `Any` in Kotlin:

```kotlin
fun main() {
  val value: Any = 100
  val value2: Any = "Hello, World!"
  println(value)
  println(value2)
}
```

The output for the above code will be:

```shell
100
Hello, World!
```

### Nothing

`Nothing` is a special type that represents the absence of a value. It is a subtype of all types in the language and cannot be instantiated.

The `Nothing` type is used to indicate that a function never returns a value. For example, a function that throws an exception or terminates the program will have a return type of `Nothing`.

Here is an example of a function that has a return type of `Nothing`:

```kotlin
fun error(): Nothing {
  throw IllegalStateException("An error occurred.")
}
```

In the above, the `error()` function throws an exception and does not return a value, therefore, its return type is `Nothing`.

### Unit

In Kotlin, `Unit` is another special type that represents the absence of a value. It's similar to [`Void`](https://www.codecademy.com/resources/docs/general/data-types/void) in other programming languages and is used to indicate that a function does not return a value. `Unit` is also a subtype of `Any` which means that it can be used in place of any type.

The `Unit` type can be used to specify that a function has a return type of `Unit` when it is not possible to infer the return type from the function's body. For example:

```kotlin
fun doSomething(): Unit {
  // Perform some action here
}
```

In the above example, the `doSomething()` function performs some action and does not return a value. Therefore, its return type is `Unit`.

## Video Walkthrough

Watch this video to learn about various Kotlin data types, including variables, constants, strings, and arrays.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dLvzXnc-6xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
