---
Title: '.prependIndent()'
Description: 'Prepends indent to every line of the original string.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`.prependIndent()`** method in Kotlin is used to add indentation to a string. It is useful for formatting text, especially when we need to align or indent lines within a string.

## Syntax

```pseudo
fun String.prependIndent(indent: String = " "): String
```

- `String`: The string we are adding indentation to.
- `indent: String`: The indentation we want to add to the string.

## Example

This example shows how to use the `.prependIndent()` method to add indents to a string:

```kotlin
fun main() {
    val originalText = "'This is an indented string.'"

    // Adds three spaces of indentation to the beginning of the string
    val indentedText = originalText.prependIndent("  ")
    println(indentedText)
}
```

The code will return the following output:

```shell
   'This is an indented string.'  
```
