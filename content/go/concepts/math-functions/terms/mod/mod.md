---
Title: 'Mod()'
Description: 'Returns the floating-point remainder of dividing "x" by "y".'
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

The **`Mod()`** function returns the floating-point remainder of dividing **x** by **y**. The result has the same sign as **x** and a magnitude less than the magnitude of **y**.

Mod function operates exclusively with floating-point numbers.
If the numbers involved in the operation are of integer type, the **%** modulus operator should be used instead. The % operator works with integers, while math.Mod operates with floating-point numbers.

## Syntax

```pseudo
math.Mod(x,y)
```

The `Mod()` function takes two arguments of type 'float64'.

<!---blank--->


### Some special cases:
1. If the argument has a **+Inf** value, the return value will be **0**:
 
   If the argument has a value of +Inf (positive infinity), the return value will be 0. This reflects the mathematical truth that dividing any number by positive infinity results in a remainder of 0.
2. If the value of **x** is either **(±)Inf** or **NAN**, the return value will be **NAN**.

    If the value of x is either (±)Inf or NaN (Not a Number), the return value will be NaN. This is because using infinite or NaN values to calculate the remainder is mathematically undefined and yields an indeterminate result.
3. The return value is **NAN** if the value of the second argument is either **0** or **NAN**.

    The return value is NaN if the value of the second argument is either 0 or NaN. Division by zero or NaN in the modulus operation is mathematically meaningless, resulting in a NaN (Not a Number) value.

4. If **(±)Inf** is passed as the second argument, the return value is **x (first argument)**.

    If (±)Inf is passed as the second argument, the return value is x (the first argument). This is because dividing any number by positive or negative infinity results in the number itself as the remainder.

## Examples

The following example demonstrates how to use the `Mod()` function  and print the result:

```go
package main

import(
  "fmt"
  "math"
)

func main() {
  a:= 23.5
  b:= 5.2

  modResult := math.Mod(a, b)
  fmt.Printf("%.2f mod %.2f = %.2f, a,b, modResult")
}
```

The output will be:

```shell
23.50 mod 5.20 = 2.70
```
>**Note:**
In this example, **math.Mod()** calculates the remainder of dividing **23.5** by **5.2**, resulting in **2.7**. It's essential to note that the math.Mod function operates exclusively with **floating-point** numbers. If the numbers involved in the operation are of integer type, the **%** modulus operator should be used instead. The **%** operator works with integers, while math.Mod operates with floating-point numbers.



#### Exceptions Examples 1.
```go
package main

import (
    "fmt"
    "math"
)

func main() {
    x := math.Inf(1) // Positive infinity
    result := math.Mod(10, x)
    fmt.Println(result)
}
```
The output will be:

```shell
0
```

#### Exceptions Examples 2.
```go
package main

import (
    "fmt"
    "math"
)

func main() {
    x := math.Inf(1) // Positive infinity
    y := math.NaN()  // Not a Number (NaN)
    result := math.Mod(x, y)
    fmt.Println(result)
}
```
The output will be:

```shell
NaN
```
### Exceptions Examples 3.
```go
package main

import (
    "fmt"
    "math"
)

func main() {
    x := 10.0
    y := 0.0
    result := math.Mod(x, y)
    fmt.Println(result)
}
```
The output will be:

```shell
NaN
```
#### Exceptions Examples 4.
```go
package main

import (
    "fmt"
    "math"
)

func main() {
    x := 5.0
    y := math.Inf(1) // Positive infinity
    result := math.Mod(x, y)
    fmt.Println(result)
}
```
The output will be:

```shell
5
```
## Codebyte Example

The provided example is executable and demonstrates the usage of the `Mod()` function.

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
}
```
