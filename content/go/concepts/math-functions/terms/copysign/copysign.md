---
Title: 'Copysign()'
Description: 'Returns a value with the magnitude of a parameter and a sign of another parameter'
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

The **`Copysign()`** of the `math` package is an inbuilt function that takes two parameters and returns a value containing magnitude of the first parameter and a sign of the second parameter.

## Syntax

```pseudo
import "math"

CpSgnXY = math.Copysign(x, y)
```

Where `CpSgnXY` is the value of the magnitude of `x` and the sign of `y`, it is of type `float64`.

## Example

The following Golang program calculates the magnitude of `x` and the sign of `y` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Println(math.Copysign(4.9, -1))
}
```

The output will be:

```shell
-4.9
```

## Codebyte Example

The following example shows how the `Copysign()` function handles float64 arguments.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  var x float64
  var y float64
  var CpSgnXY float64

  x = 8.7
  y = -2.1
  CpSgnXY = math.Copysign(x, y)
  fmt.Println("Copysigned value of x, y, = ", CpSgnXY)

  x = 25
  y = -2.5
  CpSgnXY = math.Copysign(x, y)
  fmt.Println("Copysigned value of x, y, = ", CpSgnXY)

  x = -5
  y = -6
  CpSgnXY = math.Copysign(x, y)
  fmt.Println("Copysigned value of x, y, = ", CpSgnXY)
}
```
