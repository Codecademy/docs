---
Title: 'Exp()'
Description: 'Returns the value of e^x where x is the parameter.'
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

The **`Exp()`** function returns the value of *e^x* (*e* to the power of *x*), where *x* is the parameter.

## Syntax
```pseudo
import "math"

value := math.Exp(number)
```

Where `value` is the value of e raised to the power of `number` (e^number), and where number is a variable of type float64. 

- The result of `Exp(5)` is `148.413... or e^5`
- The result of `Exp(1)` is `2.718.. or e`
- The result of `Exp(0)` is `1`
- The result of `Exp(NaN)` is `NaN`

## Example

The following code calculates the value of e^3 (e to the power of 3) and prints the resulting value to the console. 

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  result := math.Exp(3)
  fmt.Printf("%.1f\n", result)
}
```

The output will be:

```shell
20.1
```
## Special cases

Exp(+Inf) returns +Inf, as e^infinity is an infinite number
Exp(NaN) returns NaN as well (Not a Number)

## Codebyte Example 

You can run the example below - it demonstrates what happens when you run Exp() with a value of 10.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  number := math.Exp(10)
  fmt.Printf("%.1f\n", number)
}
```
