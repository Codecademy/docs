---
Title: 'Hypot()'
Description: 'Returns the square root of the sum of two squares.'
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Math'
  - 'Arithmatic'
  - 'Functions'
CatalogContent: 
  - 'learn-go'
  - 'paths/computer-science'
---

The **'Hypot()'** function returns the square root of the sum of two squares.

## Syntax

```pseudo 
import math

hypot = math.Sqrt((x * x) + (y * y))
```
'Hypot()' accepts two arguments of type 'float64' and returns a value of type 'float64'.

Note:
- If either argument is negative, the result is positive.
- If both arguments are negative, the result is positive.
- If '0' is passed as both arguments, the result is '0'.
- If either argument is passed as '0', the result is the other argument.


## Example

```go
package main

import("fmt"
      "math")

func main(){
    fmt.Printf("Hypot of 3 and 4 = %f\n", math.Sqrt((3 * 3)+(4 * 4)))
    fmt.Printf("Hypot of -1.5 and -1.5 = %f\n", math.Sqrt((-1.5 * -1.5)+(-1.5 * -1.5)))
    
}
```
The above example results in the following output:

```shell
Hypot of 3 and 4 = 5.000000
Hypot of -1.5 and -1.5 = 2.121320
```

## Codebyte Example (if applicable)

The runnable example of the 'Hypot()' function of the cases where '0' or a negative number is at least one of the arguments. 

```codebyte/golang
package main

import("fmt"
       "math")
       
func main(){
      fmt.Printf("Hypot of -6 and 8 = %f\n", math.Sqrt((-6 * -6)+(8 * 8)))
      fmt.Printf("Hypot of 12 and 0 = %f\n", math.Sqrt((12 * 12)+(0 * 0)))
}
```