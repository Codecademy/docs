---
Title: 'Dim()'
Description: 'Calculates the maximum of the difference between two arguments.'
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

The **`Dim()`** function takes two floating-point numbers (x and y), calculates their difference (difference := x - y), and then finds the maximum between this difference and 0 using the `math.Max()` function. The result is a single floating-point number that represents the maximum of the difference between x and y or 0.

**## Syntax**

```pseudo
difference := math.Dim(x, y)
```

The `Dim()` function returns a single value of type `float64`. This value represents the difference between the two arguments (`x`-`y`) and 0. If the difference is greater than 0, it is returned; else, 0 is returned.

Note these special cases:
- If you pass `NaN` in this function `Dim(a, NaN)` or `Dim(NaN, b)`, then this function will return NaN.
- if you pass `inf` in the function `Dim(+inf,inf)` the function will return NaN.
- If you pass `-Inf` in this function `Dim(-Inf, -Inf)`, then this function will return NaN.

  

**## Example**
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

**## Codebyte Example**
The example below is runnable and demonstrates `dim()` function.
```codebyte/golang

package main

import (
"fmt"
"math"
)

func main() {
x := math.Dim(5,2)
fmt.Println(x)
}

```