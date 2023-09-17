---
Title: 'Tan()'
Description: 'Returns the tangent of the given angle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Trigonometry'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Tan()`** function returns the tangent of an angle given in radians. The `math` library must be imported in order to use this function.

## Syntax

```pseudo
result := math.Tan(angle)
```

Where `result` is the tangent value of `angle`, returned as a float, except under the following circumstances:

- The result of `Tan(math.Inf(+1))` is `NaN`
- The result of `Tan(math.Inf(-1))` is `NaN`
- The result of `Tan(NaN)` is `NaN`

## Example

The following calculates the tangent of `angle` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  angle := math.Pi / 6
  tangent := math.Tan(angle)
  fmt.Printf("%.1f\n", tangent)
}
```

The output will be:

```shell
0.6
```

## Codebyte Example

The following example is runnable and shows how the `Tan()` function handles infinite values.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
	fmt.Println(math.Tan(math.Inf(+1)))
	fmt.Println(math.Tan(math.Inf(-1)))
	fmt.Println(math.Tan(math.NaN()))
}
```
