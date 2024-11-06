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

In Kotlin, the **`arrayOfNulls()`** function creates an array of a specified size with all elements initialized as `null`. This method is useful for creating an array with a defined size when the initial values are not yet available, allowing for value assignment at a later point.

## Syntax

```pseudo
fun <T> arrayOfNulls(size: Int): Array<T?>
```

- `T`: Represents the type of elements in the array.
- `size`: An integer specifying the size of the array to create.

It returns an `Array<T?>` of the specified size, initialized with `null`.

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
## Output
This example results in the following output:
## Output
```shell
[2, 4, null, null, null]
```
