---
Title: 'Atan()'
Description: 'Returns the arctangent of the given value.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Math'
  - 'Trigonometry'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`Atan()`** function returns the arctangent, in radians, of a given value.

## Syntax

```pseudo
result := math.Atan(x)
```

Notes on the parameter:

- `x` is the value whose arctangent value is to be found.
- The range must be between between -π/2 to π/2 radians.
- If the parameter is either less than -π/2 or greater than π/2 it returns NaN.
- The value returned will be of type `float64`.

## Example

The following code calculates the arctangent and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Println(math.Atan(33))
  fmt.Println(math.Atan(math.NaN()))
}
```

The output will be:

```shell
1.5405025668761214
NaN
```
