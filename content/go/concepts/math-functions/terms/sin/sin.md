---
Title: 'Sin()'
Description: 'Used to calculate the sine of an angle.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Trigonometry'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Sin()`** function in Go is used to calculate the sine of an angle. It returns the sine value of the specified angle given in radians.

## Syntax

The syntax for using the `Sin()` function in Go is as follows:

```pseudo
import "math"

result := math.Sin(angle)
```

Where `result` is the sine of `angle`.

## Example

The following example demonstrates a basic implementation of the `Sin()` function:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  angle := 45.0
  sineValue := math.Sin(angle * math.Pi / 180) // Convert 45(in degrees) to radians
  fmt.Println("Sine of", angle, "degrees is", sineValue)
}
```

This code will print the following output:

```
Sine of 45 degrees is 0.70710678118
```
