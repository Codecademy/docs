---
Title: '.filter()'
Description: 'Filters elements from collection based on a given predicate.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Collections'
  - 'Filter'
  - 'Strings'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`filter()`** function is used to filter elements from a collection based on a given `predicate`. It returns a new collection containing only elements which satisfies a specified condition.

## Syntax

```pseudo
str.filter(predicate: (char) -> Boolean)
```

When working with the string `str` above, the `filter()` method only allows the selective characters based on the specified predicate which is passed as an argument.

- `Predicates` are lambda functions that takes an element of the collection as an argument and returns a `Boolean` value. The **`filter()`** function will include the elements for which the predicate returns `true` in the resulting collection.

## Example

In this example, the goal is to filter only letters from the string `str` by using the `string.filter()` method.

```kotlin
fun main(args: Array<String>) {
    val str = "Hello, World!"
    val result = str.filter({ it -> it.isLetter() })
    println("Filtered String : " + result)
}
```

Output of the above code will be:

```shell
Filtered String : HelloWorld
```
