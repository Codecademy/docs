---
Title: 'RoundToEven()'
Description: 'Rounds a floating-point number to the nearest even integer.'
Subjects:
  - 'Code Foundation'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`RoundToEven()`** function in Go takes a floating-point number as input and rounds it to the nearest even integer. This function is particularly useful in scenarios where precise rounding of floating-point numbers is required.

## Syntax

```pseudo
rounded := math.RoundToEven(number)
```

The `RoundToEven()` function returns a single value of type `float64`, which represents the input number rounded to the nearest even integer.

Note these special cases:

- Passing an already even integer will return the same even integer.
- Passing `NaN` (Not-a-Number) will return `NaN`.
- Passing positive or negative `Inf` will return value with the same sign as the argument.

## Example

This Go code example demonstrates a basic implementation of the `RoundToEven()` function.

```go
package main
import (
"fmt"
"math"
)

func  main() {
// Define a floating-point number
x := 3.5

// Round x to the nearest even integer
rounded := math.RoundToEven(x)
fmt.Printf("%v rounded to the nearest even integer yields: %v\n", x, rounded)
}
```

The above code results in the following output:

```shell
3.5 rounded to the nearest even integer yields: 4
```

## Codebyte Example

The example below is runnable and demonstrates the `RoundToEven()` function.

```codebyte/golang
package main

import (
"fmt"
"math"
)

func main() {
  val := math.RoundToEven(5.5)
  fmt.Println(val)
}
```
