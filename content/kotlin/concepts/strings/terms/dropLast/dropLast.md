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

The Kotlin method, **`.dropLast()`** returns a string with the last `n` characters removed.

## Syntax

```pseudo
println(string.dropLast())
```

### Special Cases

`IllegalArguementException` error thrown if `n` is a negative number.

## Example

The example below creates a string, `string`, then uses the `.dropLast()` method to return astring with the last character and a string the last five characters removed.

```kotlin
import java.util.Locale
import kotlin.test.*
fun main(args: Array<Strings> {
value string = "<<<Example String>>>"
println(string.dropLast())
println(string.dropLast(5))
}
```

The output will look like the following:

```shell
Example Strin
Example S
```
