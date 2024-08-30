---
Title: 'Log()'
Description: 'Returns the natural logarithm of a given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Log()`** function returns the natural logarithm of a given number of type `float64`. The `math` library must be imported in order to use this function.

## Syntax

```pseudo
import math

result := math.Log(number)
```

Where `result` is the logarithmic value of `number`, returned as type `float64`, except under the following circumstances:

- The result of `Log(+Inf)` is +Inf
- The result of `Log(0)` is -Inf
- The result of `Log(x < 0)` is `NaN`
- The result of `Log(NaN)` is `NaN`

## Example

The following calculates the logarithm of `number` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  number := 4.2
  result := math.Log(number)
  fmt.Printf("%.1f\n", result)
}
```

The above code results in the following output:

```shell
1.4
```

## Codebyte Example

The following example is runnable and shows how the `Log()` function handles special cases where zero or a negative number are supplied as arguments.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  zeroNumber := 0.0
  negativeNumber := -4.2

  logZeroNumber := math.Log(zeroNumber)
  logNegativeNumber := math.Log(negativeNumber)

  fmt.Printf("The logarithm of 0.0 = %f\n", logZeroNumber)
  fmt.Printf("The logarithm of -4.2 = %f\n", logNegativeNumber)
}
```
