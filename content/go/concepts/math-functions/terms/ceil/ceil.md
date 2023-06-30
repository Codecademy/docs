---
Title: 'Ceil()'
Description: 'Returns a given decimal number rounded up to the next highest integer.'
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

The **Ceil()** function returns a given decimal number rounded up to the next highest integer.

## Syntax

```pseudo
import "math"

roundedNumber := math.Ceil(floatingNumber)
```

The `Cei()` function receives a value of type `float64` and returns a single value of the same type. This returned value is the next highest integer equal to or greater than the argument.

- When passing `Ceil(±Inf)`, the returned value will be the same as the argument.
- When passing `Ceil(Nan)`, the returned value will be also `Nan`.
- When passing `Ceil(±0)`, the returned value will be exactly the same as the argument.

## Example

To use the `Ceil()` function, the `math` package needs to be imported.
Below is a simple example where the result will be the score, rounded up to the next highest integer.

```go
package main

import (
    "math"
    "fmt"
    )

func main(){
    score := 18.54
    result := math.Ceil(score)
    fmt.Print(score, " rounded up is ", result, ".")
    }
```

## Codebyte Example

The example below is runnable and shows how `Ceil()` handles negative numbers.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  x := -2.56
  result := math.Ceil(x)
  fmt.Println(x, " rounded with Ceil is ", result)
}
```
