---
Title: 'Abs()'
Description: 'Returns the absolute value of a given number.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Numbers'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **Abs()** function returns the absolute value of a given number.

## Syntax

```pseudo
import "math"

result := math.Abs(number)
```

Where `result` is the absolute value of `number`.

- The result of `Abs(-Inf)` is `+Inf`
- The result of `Abs(+Inf)` is `+Inf`
- The result of `Abs(NaN)` is `NaN`

## Example

The following calculates the absolute value of `-255` and prints out the result:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  number := math.Abs(-255)
  fmt.Printf("%.1f\n", number)
}
```

The output will be:

```shell
255.0
```

## Codebyte Example

The following example is runnable and shows the `Abs()` function handling an infinite value.

```codebyte/golang
package main

import (
  "fmt"
  "math"
)

func main() {
  number := math.Abs(math.Inf(-1))
  fmt.Printf("%.1f\n", number)
}
```
