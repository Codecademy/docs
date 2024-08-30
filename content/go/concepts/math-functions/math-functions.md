---
Title: 'Math Functions'
Description: 'Go supports many different math functions through the math package.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

Go supports many different **math functions** through the `math` package. The `math` package must be imported before using these functions, as in the example below:

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  number := math.Round(-2.55)
  fmt.Printf("%.1f\n", number)
}
```

Below is a list of math functions usable through the `math` package.
