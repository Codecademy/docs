---
Title: '.prependIndent()'
Description: 'Adds indentation to a string.'
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

The **`.prependIndent()`** method in Kotlin is used to add indentation to a `string`. It is useful for formatting text, especially when it's needed to align or indent lines within a `string`.

## Syntax

```pseudo
fun String.prependIndent(indent: String = " "): String
```

- `String`: The string to add indentation to.
- `indent: String`: The indentation to add to the string.

## Example

This example shows how to use the `.prependIndent()` method to add three spaces of indentation to the beginning of the `string`:

```kotlin
fun main() {
    val originalText = "'This is an indented string.'"

    val indentedText = originalText.prependIndent("  ")
    println(indentedText)
}
```

The above code will return the following output:

```shell
   'This is an indented string.'
```
