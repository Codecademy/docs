---
Title: 'Data Types'
Description: 'Data types are a classification of types of values that can be stored and manipulated in a program.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Primitive Data-Type'
  - 'Non Primitive Data-Type'
  
CatalogContent:
  - 'learn-Kotlin'
  - 'paths/computer-science'
---

**Data types** are a classification of types of data that determine the possible values and operations that can be performed on that data.

Kotlin has both primitive and non-primitive data types.

## Primitive Data-type

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

In Kotlin, the `Boolean` is a primitive data type and can hold only one of the two possible values: `true` or `false`.

Here is an example of how to declare a `Boolean` variable in Kotlin:

```kotlin
val isTrue: Boolean = true
val isFalse: Boolean = false
// here we can see that if a variable is wrong we can written false and true if its right
```

The `Boolean` data type can be used to determine the outcome of `if ... then` statements:

```kotlin
fun main(){
    val condition: Boolean = true

    if (condition) {
        // write a code that you want to execute if the variable is given as true 
    } else {
        // write a code for the false variable 
    }
}
```

### Byte

A `Byte` is a data type that is similar to an integer data type, but it is only 8 bits in size, whereas an integer can be a different size depending on the system. A byte can hold values from -128 to 127.

A `Byte` is a way to represent a small whole number. It is commonly used to store small pieces of data, such as characters in a text file or colors in an image.

Here is an example of how to declare a `Byte` variable in Kotlin:

```kotlin
fun main(){
    val a: Byte = 50
    val b: Byte = 25
    val c: Byte = a + b as Byte
    print(c)

}
```

The output will be:

```
75
```

The range of the `Byte` data type is -128 to 127. Calculations that exceed this range will produce unexpected results:

```kotlin
fun main(){
    val a: Byte = 120
    val b: Byte = 120
    val c: Byte = a + b as Byte
    print(c)
}
```
Here the output will be:
```
-88
```

In the above example, the value of c will be -88, because the result of 120 + 120 is 240, which exceeds the valid range for a Byte type.

### Char

In Kotlin, the `Char` data type represents a primitive data type that can hold any character from the Unicode character set, which includes letters, digits, symbols, and special characters.

Here is an example of how to declare a `Char` variable in Kotlin:

```kotlin
fun main(){
    val ch: Char = 'A'
    print(ch)
}
```

The output will be:

```
A
```

### Double 

In Kotlin, the `Double` data type represents a 64-bit floating-point number. It is a primitive data type that can hold values with a fractional component, such as 3.14 or 0.5.

Here is an example of how to declare a `Double` variable in Kotlin:

```kotlin 
fun main(){
    val a: Double = 3.14
    val b: Double = 2.71
    val c: Double = a * b as Double 
    print(c)
}
```

The output of the above code will be:

```
8.5094
```

In this example, the c variable will be assigned the value 8.5014, which is the result of 3.14 * 2.71.

The `Double` data type can be used to perform more advanced operations, such as calculating the square root of a number or raising a number to a power in Kotlin. For example:

```kotlin

import kotlin.math.sqrt
import kotlin.math.pow
fun main(){


val a: Double = 16.0
val b: Double = sqrt(a)
val c: Double = a.pow(2)

println("The square root of $a is $b.")
println("$a raised to the power of 2 is $c.")

}
```

The output will be:

```
The square root of 16.0 is 4.0.
16.0 raised to the power of 2 is 256.0.
```

### Float

In Kotlin, the `Float` data type represents a 32-bit floating-point number. It is a primitive data type that can hold values with a fractional component, such as 3.14 or 0.5.

Here is an example of how to declare a Float variable in Kotlin:

```kotlin
fun main(){
    val a: Float = 3.14f
    val b: Float = 2.71f
    val c: Float = a * b as Float
    print(c)

}
```

The output will be :

```
8.5094
```
In this example, the c variable will be assigned the value 8.5014, which is the result of 3.14 * 2.71.

### Int

In Kotlin, the `Int` data type represents a 32-bit signed integer. It is a primitive data type that can hold values ranging from -2147483648 to 2147483647.

Here is an example of how to declare an `Int` variable in Kotlin:

```kotlin 
fun main(){
    val a: Int = 50
    val b: Int = 25
    val c: Int = a + b
    print(c)
}
```

The output of the above code will be:
```
75
```

### Long 

In Kotlin, the `Long` data type represents a 64-bit signed integer. It is a primitive data type that can hold values ranging from -9223372036854775808 to 9223372036854775807.

Here is an example of how to declare a `Long` variable in Kotlin:

```kotlin 
fun main(){
    val a: Long = 500000000
    val b: Long = 250000000
    val c: Long = a + b
    print(c)
}
```
The output for the above code will be :
```
750000000
```
In this example, the c variable will be assigned the value 750000000, which is the result of 500000000 + 250000000.

### Short

In Kotlin, the `Short` data type represents a 16-bit signed integer. It is a primitive data type that can hold values ranging from -32768 to 32767.

Here is an example of how to declare a `Short` variable in Kotlin:

```kotlin
fun main(){
    val a: Short = 50
    val b: Short = 25
    val c: Short = (a + b).toShort()
    print(c)
}
```
The output for the above code will be:
```
75
```
In this example, the c variable will be assigned the value 75, which is the result of 50 + 25. The `toShort()` function is used to explicitly convert the result to a `Short` type.

## Non-Primitive Data Types 

The following are non-primitive data types in Kotlin :

-Arrays 
-String 
-Any
-Nothing 
-Unit 

### Arrays

In Kotlin, an `Array` is a data structure that stores a fixed-size collection of elements of the same data type. Arrays are non-primitive data types, which means they are derived from primitive data types or other non-primitive data types.

To declare an `Array` in Kotlin, you can use the `arrayOf()` function and specify the elements of the array within the parentheses. For example:

```kotlin 
fun main(){
    val numbers: Array<Int> = arrayOf(1, 2, 3, 4, 5)
}
```

In this example, the `numbers` variable is an array of integers that contains the values 1, 2, 3, 4, and 5. The type of the array is specified using the `Array<Int>` syntax, which indicates that the array contains elements of the `Int` type.

If you want to know how to print the array then you can check [Arrays]

### String 

In Kotlin, a `String` is a data type that represents a sequence of characters. You can use a string to store and manipulate text in your program.

Here is an example of how to declare and initialize a string in Kotlin:

```kotlin
fun main(){
    val message: String = "Hello, World!"
    print(message)
}
```
The output for the above code will be :
```
Hello, World!
```
Strings are also [immutable](https://kotlinlang.org/docs/native-immutability.html) in Kotlin.

You can use the '+' operator to concatenate strings, or the trim() function to remove leading and trailing whitespace from a string. For example:

```kotlin 
fun main(){
    val greeting: String = "Hello, "
    val name: String = "John"
    val fullMessage: String = greeting + name
    println(fullMessage.trim()) 
}
```
The output for the above code will be :
```
Hello, John
```

### Any 

In Kotlin, the `Any` type is a supertype of all types in the language. It represents a general type that can hold any value.

Here is an example of how to declare a variable of type `Any` in Kotlin:

```kotlin
fun main(){
    val value: Any = 100
    val value2: Any = "Hello, World!"
    println(value)
    println(value2)
}
```
  
The output for the above code will be :
```
100
Hello, World!
```

### Nothing

In Kotlin, the `Nothing` type is a special type that represents the absence of a value. It is a subtype of all types in the language and cannot be instantiated.

The `Nothing` type is used to indicate that a function never returns a value. For example, a function that throws an exception or terminates the program will have a return type of `Nothing`.

Here is an example of a function that has a return type of `Nothing`:

```kotlin
fun error(): Nothing {
    throw IllegalStateException("An error occurred.")
}
```

In the above, the `error()` function throws an exception and does not return a value. Therefore, its return type is `Nothing`.

###Unit 

In Kotlin, the `Unit` type represents the absence of a value, similar to the `void` type in other programming languages. It is a special type that is used to indicate that a function does not return a value.

The `Unit` type can be used to specify that a function has a return type of `Unit` when it is not possible to infer the return type from the function's body. For example:

```kotlin 
fun main(){
    
}
fun doSomething(): Unit {
    // perform some action that you want to do
}
```
In the above example, the doSomething() function performs an action and does not return a value. Therefore, its return type is `Unit`.
