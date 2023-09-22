---
Title: 'Trunc()'
Description: 'Returns the integer value of the given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Trunc()`** function returns the integer value of a given number by cutting off the decimals. For example, `10.4` and `10.6` would both be truncated to `10`.

## Syntax

```pseudo
result := math.Trunc(x)
```

Where `result` is the integer value of `x` returned as a `float64`, except under the following circumstances:

- `Trunc(math.Inf(1))` yields `+Inf`.
- `Trunc(math.Inf(-1))` yields `-Inf`.
- `Trunc(NaN)` yields `NaN`.
- `Trunc(0)` yields `0`.

## Example

The following example implements the `math.Trunc()` method:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Printf("%f\n", math.Trunc(5.6789))
  fmt.Printf("%v\n", math.Trunc(-math.Pi))
}
```

The output will be:

```shell
5.000000
-3
```

## Codebyte Example

The following example is runnable and shows how the `Trunc()` function can be used in a Go program.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  x := 5.9
  y := 6.6
  fmt.Printf("%.1f\n", math.Trunc(x) + math.Trunc(y))
}
```
