---
Title: 'Floor()'
Description: 'Returns the given decimal number rounded down to the nearest whole number.'
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

The **`Floor()`** function returns a given decimal number rounded down to the nearest whole number.

## Syntax

```pseudo
math.Floor(decimalNumber)
```

The `Floor()` function accepts a single parameter of type `float64` and rounds it down to the nearest whole number.

> **Note:** The returned value may appear to be an `int`, but it is a `float64` value.

<!---blank--->

> **Note:** Passing any of the following values: `±Inf`, `±0`, and `NaN` as an argument to the `Floor()` function, will result in the returned value being the same as the argument.

## Example

The following example demonstrates how to use the `Floor()` function to round down numbers and print the result:

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
