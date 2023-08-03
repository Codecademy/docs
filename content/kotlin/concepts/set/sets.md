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

**`Sets`**  are versatile collections designed to store a unique selection of elements. They are valuable tools when there is a need to work with a group of values without duplicates. Unlike lists, which allow repeated elements and maintain order, sets prioritize uniqueness and do not guarantee a specific order for their elements.

Set can be used with a wide range of data types and is versatile for storing and managing elements in various scenarios.

The Set data type in Kotlin can be used for essentially any data type, and it can store elements of various types. Set is useful when you want to manage a group of data and prevent duplicate items. For instance, basic data types like Int, String, Double, Boolean, as well as complex data types like custom classes, can be used within a Set.

Here are examples of some data types that can be used with Set:
```pseudo
    Basic Data Types:
        Set<Int>: A set containing integer numbers.
        Set<String>: A set containing text strings.
        Set<Double>: A set containing decimal numbers.
        Set<Boolean>: A set containing boolean values.

    Custom Classes:
        Set<MyClass>: A set containing instances of your custom-defined class.
        Set<Person>: A set containing people's names, ages, etc.

    Complex Data Types:
        Set<Pair<String, Int>>: A set containing combinations of pairs.
        Set<Map<String, Any>>: A set containing key-value pairs in a map.
```

## Types of Sets

Kotlin offers two main types of Sets:
### 1. Mutable Set
A Mutable Set is a dynamic collection that allows you to add, remove, or modify its elements after creation. It is implemented using the **`mutableSetOf()`** function.

#### Creating an empty MutableSet
```pseudo
val emptySet: MutableSet<Int> = mutableSetOf()
```
#### Creating a MutableSet
```pseudo
val mutableFruits: MutableSet<String> = mutableSetOf("apple", "banana", "orange")
```
#### Modifying a MutableSet:
```pseudo
mutableFruits.add("grape")      // Adds an element to the set
mutableFruits.remove("banana")  // Removes an element from the set
```
#### Parameters of `mutableSetOf()`
The **`mutableSetOf()`** function takes zero or more initial elements as its parameters. You can provide a comma-separated list of elements to initialize the mutable set. If no elements are provided, an empty mutable set is created.
>NOTE: The **`mutableSetOf()`** function will only contain unique elements. If you attempt to add the same item multiple times, only one copy will be stored.
### 2. Immutable Set
An Immutable Set is a static collection whose elements cannot be modified once the set is created. It is implemented using the **`setOf()`** function.
#### Creating an empty Immutable Set
```pseudo
val emptySet: Set<Int> = setOf()
```
#### Creating a Immutable Set
```pseudo
val number: Set<Int> = setOf(1, 2, 3, 4, 5)
```
#### Parameters of `setOf()`
The **`setOf()`** function, similar to **`mutableSetOf()`**, takes zero or more initial elements as its parameters.
It initializes the immutable set with the provided elements. If no elements are provided, an empty immutable set is created.

## Common Operations on Sets
Kotlin Sets support a variety of common operations, making them versatile tools for data manipulation:

### Adding and Removing Elements
```kotlin
mutableFruits.add("kiwi")          // Adds an element to the mutable set
mutableFruits.remove("apple")      // Removes an element from the mutable set
```
### Checking Element Existence
```kotlin
val containsApple = mutableFruits.contains("apple")
```
### Iteraring Over Elements
```kotlin
for (fruit in mutableFruits) {
    println(fruit)
}
```
### Set Size
```kotlin
for (fruit in mutableFruits) {
    println(fruit)
}
```
### Converting Set to List or Array
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
