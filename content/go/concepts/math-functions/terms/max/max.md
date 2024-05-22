---
Title: 'Max()'
Description: 'Returns the maximum value of two specified numbers.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Max()`** function returns the maximum value of two specified numbers.

## Syntax

```pseudo
import "math"

result := math.Max(num1, num2)
```

`math.Max()` returns the maximum value from `num1` and `num2`.

## Example

The following example compares two integer values and prints out the maximum value `result`.

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  result := math.Max(27, 28)
  fmt.Printf("%.1f\n", result)
}
```

The output will be:

```shell
28.0
```

## Codebyte Example

The following example is runnable and uses the `math.Max()` method to return the maximum value from the two given numbers.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  num1 := 800.0
  num2 := 700.0

  result := math.Max(num1, num2)

  fmt.Printf("The max value of %.1f and %.1f is %.1f\n", num1, num2, result)
}
```
