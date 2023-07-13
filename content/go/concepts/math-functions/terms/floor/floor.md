---
Title: 'Floor()'
Description: 'Returns the given decimal number rounded down to the nearest lower value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
  - 'Numbers'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Floor()`** function returns a given decimal number rounded down to the nearest lower value.

## Syntax

```pseudo
math.Floor(decimalNumber float64) float64
```

The `Floor()` function accepts a single parameter of type float64 and rounds it down to the nearest lower value.
Take notice that the returned value may appear to be an `int`, but it is a `float64` value.

In some exceptional cases, passing any of the following values: `±Inf`, `±0`, and `NaN` as an argument to the `Floor()` function, will result in the returned value being the same as the argument.

## Example

```go
package main

import(
  "fmt"
  "math"
)

func main() {
  float_number1 := 8.99
  float_number2 := -3.11
  exp_case := math.NaN()

  floored_number1 := math.Floor(float_number1)
  floored_number2 := math.Floor(float_number2)
  floored_number3 := math.Floor(exp_case)

  fmt.Println("The floored value of 8.99 is:", floored_number1)
  fmt.Println("The floored value of -3.11 is:", floored_number2)
  fmt.Print("The floored value of NaN is:", floored_number3)
}
```

The output will be:

```shell
The floored value of 8.99 is: 8
The floored value of -3.11 is: -4
The floored value of NaN is: NaN
```

## Codebyte Example

The provided example is executable and demonstrates the usage of the `Floor()` function.

```codebyte/golang
package main

import (
  "fmt"
  "math"
  "reflect"
)

func main() {
  floored_number := math.Floor(0.68)
  fmt.Println(floored_number)
  fmt.Print("The data type is: ", reflect.TypeOf(floored_number))
}
```
