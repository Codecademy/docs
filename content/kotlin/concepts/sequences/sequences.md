---
Title: 'Sequences'
Description: 'Sequences provide a way to process collections of data in a lazy and efficient manner.'
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

**Sequences** in Kotlin provides a lazy and efficient approach for processing collections, which can be particularly useful when working with large amounts of data.
Unlike a `List` or an `Array`, which store all their elements in memory, a `Sequence` computes elements on-the-fly as they are requested.

## Syntax

Sequences can be created from an existing collection or from a function using the `sequenceOf()`, `asSequence()` or `generateSequence` functions.

```pseudo
val numbers = sequenceOf(2, 8, 3, 7, 10)
val numbersSequence = numbers.asSequence()
val squaresSequence = generateSequence(1) { it * it }
```

- A sequence can be created from a list of predefined elements using `sequenceOf()`.
- An existing collection, such as an array or a list, can be converted into a sequence using the `asSequence()` extension function.
- A sequence can also be generated using the `generateSequence` function. This function takes a starting value and a lambda function.

## Example

In this example, `generateSequence` function starts with an initial value of 2 and repeatedly applies a function that increments the value by 2 in each iteration. As a result, an infinite sequence of even numbers is generated. However, to print the sequence's initial ten elements to the console, these elements are extracted using the `take(10)` function and stored in the variable `firstTenEven`.

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
