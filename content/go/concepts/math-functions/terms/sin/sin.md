---
Title: 'The Sin() Function in Go'
Description: 'Learn how to use the Sin() function in Go to calculate the sine of an angle.'
Subjects:
  - 'Go'
  - 'Math'
Tags:
  - 'Go Functions'
  - 'Trigonometry'
CatalogContent:
  - 'learn-go'
---

The **Sin() function** in Go is used to calculate the sine of an angle. It returns the sine value of the specified angle in radians.

## Syntax

The syntax for using the Sin() function in Go is as follows:

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	angle := 45.0
	sineValue := math.Sin(angle * math.Pi / 180) // Convert angle to radians
	fmt.Println("Sine of", angle, "degrees is", sineValue)
}
