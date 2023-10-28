---
Title: '.regionMatches()'
Description: 'Checks if a specified region within a Kotlin String matches the content of another string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

**.regionMatches()** for char sequence checks if a specified region within a Kotlin char sequence matches the content of another char sequence. It also checks if a specified region within a Kotlin String matches the content of another string.

## Syntax (Char Sequence)

```pseudo
// regionMatches() method for CharSequence
fun CharSequence.regionMatches(
    thisOffset: Int,
    other: CharSequence,
    otherOffset: Int,
    length: Int,
    ignoreCase: Boolean = false
): Boolean
```

Returns true if the specified region in this char sequence is equal to the specified region in another char sequence.

Parameters:

- `thisOffset`: This is the starting position within the current character sequence for the substring being compared.
- `other`: This represents the string against which a substring comparison is carried out.
- `otherOffset`: This indicates the starting position within the other character sequence for the substring being compared.
- `length`: This specifies the length of the substring under comparison.

## Syntax (String)

```pseudo
// regionMatches() method for String
fun String.regionMatches(
    thisOffset: Int,
    other: String,
    otherOffset: Int,
    length: Int,
    ignoreCase: Boolean = false
): Boolean
```

Returns true if the specified region in this string is equal to the specified region in another string.

Parameters:

- `thisOffset`: The starting position in this string for the substring to be compared.
- `other`: The string to which a substring is compared.
- `otherOffset`: The starting position in the other string for the substring to be compared.
- `length`: The length of the substring to be compared.

## Example (Char Sequence)

The following example uses the `.regionMatches()` for char sequence. The result is then printed:

```kotlin
fun main() {
    val charSeq1: CharSequence = "Hello, CodeAcademy Members"
    val charSeq2: CharSequence = "code"

    val result = charSeq1.regionMatches(
        thisOffset = 7,
        other = charSeq2,
        otherOffset = 0,
        length = 4,
        ignoreCase = true
    )

    if (result) {
        println("The specified region in charSeq1 matches the content of charSeq2.")
    } else {
        println("The specified region in charSeq1 does not match the content of charSeq2.")
    }
}
```

This prints the following output:

```shell
The specified region in charSeq1 matches the content of charSeq2.
```

## Example (String)

The following example uses the `.regionMatches()` for string. The result is then printed:

```kotlin
fun main() {
    val str1: String = "Hello, CodeAcademy Members"
    val str2: String = "code"

    val result = str1.regionMatches(
        thisOffset = 7,
        other = str2,
        otherOffset = 0,
        length = 4,
        ignoreCase = true
    )

    if (result) {
        println("The specified region in str1 matches the content of str2.")
    } else {
        println("The specified region in str1 does not match the content of str2.")
    }
}
```

This prints the following output:

```shell
The specified region in str1 matches the content of str2.
```
