---
Title: 'Cbrt()'
Description: 'Returns the cube root of a given number of type float64.'
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

The **`Cbrt()`** function returns the cube root of a given number of type `float64`.

## Syntax

```pseudo
import math

cbrt = math.Cbrt(x)
```

Where `Cbrt()` function takes a single argument of type `float64`.

## Example

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Printf("Cube root of 27 = %f", math.Sqrt(27))
}
```

The output will be:

```shell
Cube root of 27 = 5.196152
```

## Codebyte Example

The following example is runnable and demonstrates the usage of `Cbrt()` in several different cases:

```codebyte/golang
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Printf("Cube root of   0 = %f \n", math.Sqrt(0))
    fmt.Printf("Cube root of  28 = %f \n", math.Sqrt(28))
    fmt.Printf("Cube root of -27 = %f \n", math.Sqrt(-27))
    fmt.Printf("Cube root of NaN = %f \n", math.Sqrt(math.NaN()))
}
```
