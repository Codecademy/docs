---
Title: 'Min()'
Description: 'Returns the minimum value of two specified numbers.'
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

The **`Min()`** function returns the minimum value of two specified numbers.

## Syntax

```pseudo
import "math"

result := math.Min(num1, num2)
```

`math.Min()` returns the minimum value from `num1` and `num2`.

## Example

The following example compares two integer values and prints out the minimum value `result`.

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  result := math.Min(6, 11)
  fmt.Printf("%.1f\n", result)
}
```

The output will be:

```shell
6.0
```

## Codebyte Example

The following example is runnable and uses the `math.Min()` method to return the minimum value from the two given numbers.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  num1 := 480.0
  num2 := 720.0

  result := math.Min(num1, num2)

  fmt.Printf("The min value of %.1f and %.1f is %.1f\n", num1, num2, result)
}
```
