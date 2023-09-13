---
Title: 'Remainder()'
Description: 'Returns the remainder of two given values.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Arithmetic'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Remainder()`** function returns the remainder of two given values. The remainder may be a whole number or the IEEE 754 floating-point.

## Syntax

```pseudo
result := math.Remainder(num1, num2)
```

`math.Remainder()` returns the whole or IEEE 754 floating-point remainder of num1 divided by num2, except in five special cases:

- math.Remainder(±Inf, num2) returns NaN
- math.Remainder(NaN, num2) returns NaN
- math.Remainder(num1, 0) returns NaN
- math.Remainder(num1, ±Inf) returns num1
- math.Remainder(num1, NaN) returns NaN

## Example

This example divides two integer values and returns the remainder `result`.

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  result := math.Remainder(2, 35)
  fmt.Printf("%.1f\n", result)
}
```

This will return:

```shell
2.0
```

## Codebyte Example

The following example can be run and uses the `math.Remainder()` function to return the remainder of two given values. The second call is an example of a special case and returns `NaN`.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {

  result1 := math.Remainder(4, 102)
  result2 := math.Remainder(±Inf, 2)

  fmt.Printf("Result 1: %.1f\n", result_1)
  fmt.Printf("Result 2: %.1f\n", result_2)
}
```
