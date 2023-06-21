---
title: "Floor Function"
description: "Explanation and usage examples of the Floor() function in Go."

package main

import (
    "fmt"
    "math"
)

func main() {
    number := 3.7
    result := math.Floor(number)
    fmt.Println(result) // Output: 3.0
}
---

## Syntax
package main

import (
    "fmt"
    "math"
)

func main() {
    number := 3.7
    result := math.Floor(number)
    fmt.Println(result) // Output: 3.0
}

The syntax for the `Floor()` function is as follows:

package main

import (
    "fmt"
    "math"
)

func main() {
    number := 7.8
    result := math.Floor(number)
    fmt.Println(result)
}

```pseudo
Floor(number)