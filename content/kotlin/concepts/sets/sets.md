---
Title: 'Sets'
Description: 'A collection to store and manage unique elements.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Sets'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**`Sets`** are versatile collections designed to store a unique selection of elements. They are valuable tools when there is a need to work with a group of values without duplicates. Unlike lists, which allow repeated elements and maintain order, sets prioritize uniqueness and do not guarantee a specific order for their elements.

A set can be used with a wide range of data types and can be implemented for storing and managing elements in various scenarios. Kotlin's `Set` type is versatile, accommodating diverse data types like `Int`, `String`, `Double`, `Boolean`, and custom classes. A set is useful for managing data groups, and preventing duplicates.

## Types of Sets

Kotlin offers two main types of sets, mutable sets and immutable.

### 1. Mutable Set

A mutable set is a dynamic collection that allows the programmer to add, remove, or modify its elements after creation. It is implemented using the `mutableSetOf()` function.

The following code example demonstrates creating an empty mutable set, creating a mutable set with predefined values, performing add and remove operations on the mutable set, and finally, printing the updated set values:

```kotlin
fun main() {
    // Creating an empty mutable set
    val emptySet: MutableSet<Int> = mutableSetOf()

    // Creating a mutable set with initial values
    val mutableFruits: MutableSet<String> = mutableSetOf("apple", "banana", "orange")

    // Modifying a mutable set
    mutableFruits.add("grape")      // Adds an element to the set
    mutableFruits.remove("banana")  // Removes an element from the set

    // Printing the updated mutable set
    println("Fruit Set: $mutableFruits")
}
```

Parameters of `mutableSetOf()`:

The `mutableSetOf()` function takes zero or more initial elements as its parameters. A comma-separated list of elements can be used to initialize a mutable set. If no elements are provided, an empty mutable set is created.

> **Note:** The `mutableSetOf()` function will only contain unique elements. If you attempt to add the same item multiple times, only one copy will be stored.

### 2. Immutable Set

An immutable set is a static collection whose elements cannot be modified once the set is created. It is implemented using the `setOf()` function.

The following code snippet shows how to create an empty immutable set and an immutable set with predefined number values:

```kotlin
fun main() {
    // Creating an empty immutable set
    val emptySet: Set<Int> = setOf()

    // Creating an immutable set with numbers
    val numbers: Set<Int> = setOf(1, 2, 3, 4, 5)
}
```

Parameters of `setOf()`:

The `setOf()` function, similar to `mutableSetOf()`, takes zero or more initial elements as its parameters.
It initializes the immutable set with the provided elements. If no elements are provided, an empty immutable set is created.

The following code demonstrates how to create sets, add and remove elements, check for element existence, iterate over elements, retrieve the set size, and convert sets to lists and arrays. The iteration process is also correctly executed:

## Example

```kotlin
import java.util.*

fun main() {
    // Creating a mutable set
    val mutableFruits = mutableSetOf("apple", "banana", "orange")

    // Adding Elements to the Mutable Set
    mutableFruits.add("grape")
    mutableFruits.add("apple")

    // Removing Elements from the Mutable Set
    mutableFruits.remove("banana")

    // Checking Element Existence
    val containsApple = mutableFruits.contains("apple")
    println("Mutable Set Contains 'apple': $containsApple")

    // Iterating Over Elements in the Mutable Set
    println("Mutable Set Elements:")
    for (fruit in mutableFruits) {
        println(fruit)
    }

    // Set Size
    val mutableSize = mutableFruits.size
    println("Mutable Set Size: $mutableSize")

    // Converting Mutable Set to List
    val mutableToList = mutableFruits.toList()
    println("Mutable Set converted to list: $mutableToList")

    // Creating an immutable set
    val immutableFruits = setOf("apple", "banana", "orange")

    // Checking Element Existence in the Immutable Set
    val containsOrange = immutableFruits.contains("orange")
    println("Immutable Set Contains 'orange': $containsOrange")

    // Iterating Over Elements in the Immutable Set
    println("Immutable Set Elements:")
    for (fruit in immutableFruits) {
        println(fruit)
    }

    // Set Size
    val immutableSize = immutableFruits.size
    println("Immutable Set Size: $immutableSize")

    // Converting Immutable Set to List
    val immutableToList = immutableFruits.toList()
    println("Immutable Set converted to list: $immutableToList")

    // Converting Immutable Set to Array
    val immutableToArray = immutableFruits.toTypedArray()
    println("Immutable Set converted to array: ${immutableToArray.contentToString()}")
}

```

The output for the above code will be:

```shell
Mutable Set Contains 'apple': true
Mutable Set Elements:
apple
grape
orange
Mutable Set Size: 3
Mutable Set converted to list: [apple, grape, orange]
Immutable Set Contains 'orange': true
Immutable Set Elements:
apple
banana
orange
Immutable Set Size: 3
Immutable Set converted to list: [apple, banana, orange]
Immutable Set converted to array: [apple, banana, orange]
```
