---
Title: 'Sinh()'
Description: 'Returns the hyperbolic sine of the given number.'
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

The **`Sinh()`** function returns the hyperbolic sine of a number.

## Syntax

```pseudo
result := math.Sinh(value)
```

Where `result` is the hyperbolic sine value of `value`, returned as a `float`.

## Example

The following calculates the hyperbolic sine of a value and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  value := 1.0
  hyperbolicSine := math.Sinh(value)
  fmt.Printf("%.2f\n", hyperbolicSine)
}
```

The output will be:

```shell
1.18
```

## Codebyte Example

The following example is runnable and shows how the `Sinh()` function handles infinite values.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  value := math.Inf(1)
  hyperbolicSine := math.Sinh(value)
  fmt.Printf("The hyperbolic sine of %.1f is: %.2f\n", value, hyperbolicSine)
}
```
