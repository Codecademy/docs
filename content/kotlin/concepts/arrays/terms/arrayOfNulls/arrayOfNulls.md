---
Title: 'arrayOfNulls()'
Description: 'Creates an array of a specified size with all elements initialized as null.'
Subjects:
  - 'Code Foundations'
  - 'Mobile Development'
Tags:
  - 'Android'
  - 'Arrays'
  - 'Map'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, the **`arrayOfNulls()`** function creates an array of a specified size with all elements initialized as `null`. This method is useful when you need to create an array of a specific size but don't yet have the values to initialize it with. This allows you to assign values at a later point.

## Syntax

```pseudo
fun <T> arrayOfNulls(size: Int): Array<T?>
```

- `T`: The type of the elements in the array.
- `size`: An integer specifying the size of the array to create.

It returns an `Array<T?>` of the specified size, initialized with nulls.

## Example

The following example uses the `arrayOfNulls()` function:

```kotlin
fun main() {
    // Create an array of size 5 with all elements initialized as null
    val nullArray = arrayOfNulls<Int>(5)

    // Assign values to some elements in the array
    nullArray[0] = 2
    nullArray[1] = 4

    // Print the array after assigning values
    println(nullArray.contentToString())
}
```

The code above generates the following output:

```shell
[2, 4, null, null, null]
```
