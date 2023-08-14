---
Title: 'Sequences'
Description: 'Sequences are a type that provide similar features to collections, but process data in a lazy and efficient manner.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Constructors'
  - 'OOP'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**Sequences** are a type in Kotlin that provide similar features to other collections, but process data in a lazy and efficient manner. This lazy approach can be useful for processing collections, particularly when working with large amounts of data.

Unlike a `List` or an `Array`, which store all their elements in memory, a `Sequence` computes elements on-the-fly as they are requested.

## Syntax

Sequences can be created by multiple methods, the primary options are:

```pseudo
val numbers = sequenceOf(2, 8, 3, 7, 10)

val letters = listOf("A", "B", "C")
val lettersSequence = letters.asSequence()

val squaresSequence = generateSequence(2) { if(it < 20) it * it else null}
```

- A sequence can be created by passing elements to the `sequenceOf()` method.
- An existing collection, such as an array or a list, can be converted into a sequence using the `asSequence()` extension function.
- A sequence can also be generated using the `generateSequence()` function. This function takes a starting value or seed, and a lambda function.

> **Note:** In the example above the lambda expression terminates the sequence using `null`. A sequence generated without `null` is infinite and will result in an error if a function is called on the entire sequence.

## Example

In this example, `generateSequence()` function starts with an initial value of 2 and repeatedly applies a function that increments the value by 2 in each iteration. As a result, an infinite sequence of even numbers can be generated. However, to print the sequence's initial ten elements to the console, these elements are extracted using the `take(10)` function and stored in the variable `firstTenEven`.

```kotlin
fun main() {
  val evenNumbers = generateSequence(2) { it + 2 }
  val firstTenEven = evenNumbers.take(10).toList()
  println(firstTenEven)
}
```

The example will result in the following output:

```shell
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```
