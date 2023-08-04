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

Creating an empty mutable set:

```kotlin
val emptySet: MutableSet<Int> = mutableSetOf()
```

Creating a mutable set:

```kotlin
val mutableFruits: MutableSet<String> = mutableSetOf("apple", "banana", "orange")
```

#### Modifying a MutableSet

```kotlin
mutableFruits.add("grape")      // Adds an element to the set
mutableFruits.remove("banana")  // Removes an element from the set
```

#### Parameters of `mutableSetOf()`

The `mutableSetOf()` function takes zero or more initial elements as its parameters. A comma-separated list of elements can be used to initialize a mutable set. If no elements are provided, an empty mutable set is created.

> **Note:** The `mutableSetOf()` function will only contain unique elements. If you attempt to add the same item multiple times, only one copy will be stored.

### 2. Immutable Set

An immutable set is a static collection whose elements cannot be modified once the set is created. It is implemented using the `setOf()` function.

#### Creating an Empty Immutable Set

```kotlin
val emptySet: Set<Int> = setOf()
```

#### Creating an Immutable Set

```kotlin
val number: Set<Int> = setOf(1, 2, 3, 4, 5)
```

#### Parameters of `setOf()`

The `setOf()` function, similar to `mutableSetOf()`, takes zero or more initial elements as its parameters.
It initializes the immutable set with the provided elements. If no elements are provided, an empty immutable set is created.

## Common Operations on Sets

Kotlin sets support a variety of common operations, making them versatile tools for data manipulation:

### Adding and Removing Elements

```kotlin
mutableFruits.add("kiwi")          // Adds an element to the mutable set
mutableFruits.remove("apple")      // Removes an element from the mutable set
```

### Checking Element Existence

```kotlin
val containsApple = mutableFruits.contains("apple")
```

### Iterating Over Elements

```kotlin
for (fruit in mutableFruits) {
    println(fruit)
}
```

Retrieving set size:

```kotlin
for (fruit in mutableFruits) {
    println(fruit)
}
```

Converting a set to a list or array:

```kotlin
val fruitList = mutableFruits.toList()
val fruitArray = mutableFruits.toTypedArray()
```

## Examples

```kotlin
import java.util.*

fun main() {
    val mutableSet = mutableSetOf("apple", "banana", "orange")

    // Adding Elements
    mutableSet.add("grape")
    mutableSet.add("apple")

    // Removing Elements
    mutableSet.remove("banana")

    // Checking Element Existence
    val containsApple = mutableSet.contains("apple")
    println("Contains 'apple': $containsApple")

    // Iterating Over Elements
    println("Elements in the set:")
    for (fruit in mutableSet) {
        println(fruit)
    }

    // Set Size
    val setSize = mutableSet.size
    println("Size of the set: $setSize")

    // Converting Set to List
    val setToList = mutableSet.toList()
    println("Set converted to list: $setToList")

    // Converting Set to Array
    val setToArray = mutableSet.toTypedArray()
    println("Set converted to array: ${setToArray.contentToString()}")
}
```

The output for the above code will be:

```shell
Contains 'apple': true
Elements in the set:
apple
orange
grape
Size of the set: 3
Set converted to list: [apple, orange, grape]
Set converted to array: [apple, orange, grape]
```
