---
Title: 'Remainder()'
Description: 'Returns the remainder of the division of two given values.'
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

The **`Remainder()`** function returns the remainder of the division of two given values. The remainder may be a whole or a floating-point number.

## Syntax

```pseudo
result := math.Remainder(num1, num2)
```

`math.Remainder()` returns the whole or IEEE 754 floating-point remainder of num1 divided by num2, except in four special cases:

- If `num1` equals `+-Inf` the function will return `NaN`.
- If `num2` equals `+-Inf` the function returns `num1`.
- If either argument is `NaN` the function will return `NaN`.
- If `num2` equals `0` the function will return `NaN`.

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
  result2 := math.Remainder(math.Inf(1), 2)

  fmt.Printf("Result 1: %.1f\n", result1)
  fmt.Printf("Result 2: %.1f\n", result2)
}
```
