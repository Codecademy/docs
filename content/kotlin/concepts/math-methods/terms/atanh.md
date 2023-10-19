---
Title: 'atanh()'
Description: 'Returns the inverse hyperbolic arc tangent of a value'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Double'
  - 'Float'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

The **`atanh()`** function returns the inverse hyperbolic arc tangent of a number between -1 and 1.

## Syntax

```pseudo
atanh(x)
```

The function requires a parameter `x`, of datatype `Double` or `Float`.

## Example

The example below returns the value of the inverse hyperbolic arc tangent of `-0.1`.

```kotlin
import kotlin.math.atanh
fun main() {
	// Calculate inverse hyperbolic arc tangent and save as result
	val result = atanh(-0.1)

	// Print results
	println(result)
}
```

It will output:

```shell
-0.100335348
```
