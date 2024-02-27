---
Title: '.filter()'
Description: 'Filters elements from a collection based on a given predicate.'
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

The **`filter()`** function is used to filter elements from a collection based on a given `predicate`. It returns a new collection containing only elements that meet the given condition.

## Syntax

```pseudo
str.filter(predicate)
```

The `filter()` method only allows the selective characters based on the specified `predicate` which is passed as an argument.

- The `predicate` is a lambda function that takes an element of the collection as an argument and returns a `Boolean` value. The `filter()` method will return a collection composed of all the elements that evaluated to `true`.

## Example

This example extracts all the alphabetic characters from `str` with the `string.filter()` method.

```kotlin
fun main(args: Array<String>) {
    val str = "Hello, World!"
    val result = str.filter({ it -> it.isLetter() })
    println("Filtered String : " + result)
}
```

The above code will output:

```shell
Filtered String : HelloWorld
```
