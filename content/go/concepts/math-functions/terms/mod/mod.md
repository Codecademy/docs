---
Title: 'Mod()'
Description: 'Returns the floating-point remainder of dividing x by y.'
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

The **`Mod()`** function returns the floating-point remainder of dividing _x_ by _y_. The result has the same sign as _x_ and a magnitude less than the magnitude of _y_.

The `Mod()` function operates exclusively with floating-point numbers.

> **Note:** If the numbers involved in the operation are of integer type, the `%` modulus operator should be used instead. The `%` operator works with integers, while `math.Mod()` operates with floating-point numbers.

## Syntax

```pseudo
math.Mod(x,y)
```

The `Mod()` function takes two arguments of type 'float64'.

Please be aware of the following special cases:

1. If the argument has a `+Inf` value, the return value will be `0`:
2. If the value of `x` is either `(±)Inf` or `NAN`, the return value will be `NaN`.
3. The return value is `NAN` if the value of the second argument is either `0` or `NAN`.
4. If `(±)Inf` is passed as the second argument, the return value is `x (first argument)`.

## Example

The following example demonstrates how to use the `Mod()` function and print the result:

```go
package main

import(
  "fmt"
  "math"
)

func main() {
  a:= 23.50
  b:= 5.20

  modResult := math.Mod(a, b)
  fmt.Printf("The modulus of %.2f and %.2f = %.2f", a, b, modResult)
}
```

The output will be:

```shell
The modulus of 23.50 and 5.20 = 2.70
```

## Codebyte Example

The provided example is executable and demonstrates special cases in the use of the `Mod()` function:

```codebyte/golang
package main

import (
  "fmt"
  "math"
  "reflect"
)

func main() {
  mod_number := math.Mod(15.0, 2.75)
  fmt.Println(mod_number)
  fmt.Print("The data type is: ", reflect.TypeOf(mod_number))

    x := math.Inf(1) // Positive infinity
    result := math.Mod(10, x)
    fmt.Println(result)

    a := math.Inf(1) // Positive infinity
    b := math.NaN()  // Not a Number (NaN)
    result_2 := math.Mod(a, b)
    fmt.Println(result_2)

    c := 10.0
    d := 0.0
    result_3 := math.Mod(c, d)
    fmt.Println(result_3)

    f := 5.0
    g := math.Inf(1) // Positive infinity
    result_4 := math.Mod(f, g)
    fmt.Println(result_4)
}
```
