---
Title: 'Dim()'
Description: 'Returns the maximum of the difference between two arguments.'
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

The **`Dim()`** function takes two floating-point numbers (`x` and `y`), calculates the difference (_x - y_), and then returns either this value, or `0` (if the difference is negative). The result is a single floating-point number that represents the maximum difference between `x` and `y`.

## Syntax

```pseudo
difference := math.Dim(x, y)
```

The `Dim()` function returns a single value of type `float64`. If the difference (_x-y_) is greater than `0`, it is returned; else, `0` is returned.

Note these special cases:

- Passing `NaN` in this function will return `NaN`.
- Passing positive or negative `Inf` in this function will return `NaN`.

## Example

In this Go code example, we have a simple program that calculates and prints the positive difference between two numbers, 7.0 and 4.0, using the `Dim()` function from the `math` package.

```go
package main
import (
"fmt"
"math"
)

func  main() {
// Define two numbers
a := 7.0
b := 4.0

// Calculate the positive difference between a and b using math.Dim()
difference := math.Dim(a, b)
fmt.Printf("The positive difference between %.1f and %.1f is %.1f\n", a, b, difference)
}
```

The above code results in the following output:

```shell
The  positive  difference  between 7 and 4 = 3
```

## Codebyte Example

The example below is runnable and demonstrates the `Dim()` function.

```codebyte/golang

package main

import (
"fmt"
"math"
)

func main() {
val := math.Dim(5, math.NaN())
  fmt.Println(val)
}

```
