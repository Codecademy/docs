---
Title: '.compareTo()'
Description: 'Compares two strings lexicographically.'
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

The **`.compareTo()`** method in Kotlin is used to compare two strings lexicographically, meaning it compares the strings character by character based on their Unicode values. It helps determine the relative order of two strings in a dictionary or alphabetically. This method is commonly employed for sorting strings or performing string comparisons.

## Syntax

```pseudo
stringOne.compareTo(stringTwo)
```

- `stringOne`: The first string to be compared.
- `stringTwo`: The second string to be compared.

If `stringOne` comes before `stringTwo` lexicographically, `.compareTo()` returns a negative value. If they are equal, it returns `0`. If `stringOne` comes after `stringTwo` lexicographically, `.compareTo()` returns a positive value.

## Example

This example shows how to use the `.compareTo()` method to two strings:

```kotlin
fun main() {
  val stringOne = "apple"
  val stringTwo = "banana"

  val result = stringOne.compareTo(stringTwo)

  if (result < 0) {
      println("$stringOne comes before $stringTwo")
  } else if (result == 0) {
      println("$stringOne and $stringTwo are the same")
  } else {
      println("$stringOne comes after $stringTwo")
  }
}
```

The code will return the following output:

```shell
apple comes before banana
```
