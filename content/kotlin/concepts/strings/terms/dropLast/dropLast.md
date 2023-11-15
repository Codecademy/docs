---
Title: 'dropLast()'
Description: 'Returns a string with n characters removed.'
Subject:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The Kotlin method, **`.dropLast()`** removes the last character of a string or the last `n` number of characters from a string. This method does not modify the original list, it creates and returns a new list.

## Syntax

```pseudo
string.dropLast(2)
```

### Special Cases

`IllegalArguementException` error thrown if `n` is a negative number. A negative number of characters can not be removed.

## Example

The example below creates a string, `string`, then uses the `.dropLast()` method to return a string with the last five characters removed.

```kotlin
import kotlin.test.*
fun main(args: Array<String>) {
val string = "Example String"
println(string.dropLast(1))
println(string.dropLast(5))
}

```

The output will look like the following:

```shell
Example Strin
Example S
```
