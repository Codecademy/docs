---
Title: 'floor()'
Description: 'Returns the nearest integer that is lower than or equal to the value passed.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Methods'
  - 'Floor'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`floor()`** function takes a value and returns the nearest integer that is lower than or equal to the value given.

The result returns a value type of `float`.

## Syntax

```pseudo
Math.floor(x:Double)
```

Where `x` is the number to be rounded down to the nearest integer.

## Example

```kotlin
println(Math.floor(3.4))
// Output: 3
```

The result will be a float value of `3` as the function rounds `3.4` down to `3`.

## Codebyte Example

Using `floor()` to return the value of 5 after rounding down`:

```codebyte/kotlin
<?kotlin
  println(Math.floor(5.6));
?>
```

