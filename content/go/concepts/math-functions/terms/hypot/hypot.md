```shell
---
Title: 'Hypot()'
Description: 'Returns the square of the sum of two squares'
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
```

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

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```