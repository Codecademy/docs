---
Title: '.lowercase()'
Description: 'The lowercase method in Kotlin is used to convert the characters of a string to lowercase.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
 
  - 'Strings'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The `lowercase()` method in Kotlin is used to convert the characters of a string to lowercase. 

## Syntax

```pseudo
fun String.lowercase(locale: Locale = Locale.getDefault()): String
```

- `locale` (optional): A `Locale` object representing the language and region-specific rules for case conversion. The default value is `Locale.getDefault()`.

## Examples
Let's dive into some examples to see how the `.lowercase()` method can be used:


```
println("Iced frappé!".lowercase()) // iced frappé!
```

The output of this code will be:

```shell
hello, world!
```

Let's take a look at an example where we specify the locale:

```pseudo
println("KOTLIN".lowercase()) 
val turkishLocale = Locale.forLanguageTag("tr")
println("KOTLIN".lowercase(turkishLocale))
```

The output of this code will be:

```shell
kotlin
kotlın
```