---
Title: 'Log10()'
Description: 'Returns the base-10 logarithm of a given number.'
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

The **`Log10()`** function in the Go programming language calculates the base-10 logarithm of a given number. It returns the logarithm value as a floating-point number.

## Syntax

```pseudo
func Log10(x float64) float64
```

`Log10()` accepts an argument of type `float64` and returns a value of type `float64`.

Note these special cases:

- If the input number `x` is negative or `Nan`, the function will return `NaN` (not-a-number).
- For positive finite values of `x`, the result will be a finite floating-point number.

## Example

Example demonstrates the output of `Log10()`.

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	x := 10.0
	result := math.Log10(x)
	fmt.Printf("Log10(%f) = %f\n", x, result)
}
```

The above code results in the following output:

```shell
Log10(10.000000) = 1.000000
```

## Codebyte Example

The runnable example demonstrates the output of `Log10()`.

```codebyte/golang
package main

import (
	"fmt"
	"math"
)

func main() {
	numbers := []float64{2.0, 10.0, 0.5, 100.0}
	
	fmt.Println("Log10 Calculations:")
	for _, x := range numbers {
		result := math.Log10(x)
		fmt.Printf("Log10(%.2f) = %.2f\n", x, result)
	}
}
```
