---
Title: 'Exp()'
Description: 'Returns the value of e raised to the power of the parameter x.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Exp()`** function returns the value of _e^x_ (_e_ to the power of _x_), where _x_ is the parameter.

## Syntax

```pseudo
import "math"

value := math.Exp(number)
```

Where `value` is the value of _e_ raised to the power of `number`, and where `number` is a variable of type float64.

Special cases:

- `Exp(+Inf)` returns `+Inf`
- `Exp(NaN)` returns `NaN` as well (Not a Number)

## Example

The following code calculates the value of _e_ to the power of 3, and prints the resulting value to the console.

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  result := math.Exp(math.Inf(1))
  fmt.Printf("%.1f\n", result)
}
```

The output will be:

```shell
+Inf
```

## Codebyte Example

The following code is runnable and demonstrates the use of the `Exp()` function.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  number := math.Exp(0)
  fmt.Printf("%.1f\n", number)
}
```
