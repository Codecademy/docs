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

## Syntax

```pseudo
val numbers = sequenceOf(2, 8, 3, 7, 10)
```

- To create a sequence, call the `sequenceOf()` function listing the elements as its arguments.

## Example

The following example demonstrates the creation of a sequence named `numbers`, which contains a list of integers. Multiple operations are then chained together using the sequence, showcasing the power of lazy evaluation and efficient data processing.

```kotlin
fun main() {
    val numbers = sequenceOf(2, 8, 3, 7, 10)

    val result = numbers
        .filter { it > 5 }
        .map { it * it }
        .sum()

    println(result)
}
```

The example will result in the following output:

```shell
123
```
