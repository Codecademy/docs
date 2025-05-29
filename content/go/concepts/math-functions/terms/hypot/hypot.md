---
Title: '.Hypot()'
Description: 'Returns the square root of the sum of squares of two numbers, avoiding overflow and underflow issues.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Algorithms'
  - 'Functions'
  - 'Geometry'
  - 'Math'
CatalogContent:
  - 'learn-go'
  - 'paths/computer-science'
---

The **`.Hypot()`** function in Go calculates the Euclidean distance (hypotenuse) between two points in a coordinate system. It returns the square root of the sum of the squares of two given numbers, mathematically expressed as `sqrt(x² + y²)`. This function is particularly useful in geometric calculations, distance measurements, and mathematical computations where precision and overflow handling are crucial.

The `.Hypot()` function is commonly used in computer graphics, game development, physics simulations, navigation systems, and any application requiring distance calculations between two points. It provides a robust implementation that handles edge cases like infinite values and `NaN` (Not a Number) gracefully, making it reliable for production applications.

## Syntax

```pseudo
math.Hypot(x, y)
```

**Parameters:**

- `x`: The first floating-point number representing one side of the right triangle
- `y`: The second floating-point number representing the other side of the right triangle

**Return value:**

The function returns a `float64` value representing the hypotenuse of the right triangle formed by the two input parameters.

**Special Cases:**

- `Hypot(±Inf, y)` returns `+Inf`
- `Hypot(x, ±Inf)` returns `+Inf`
- `Hypot(NaN, y)` returns `NaN`
- `Hypot(x, NaN)` returns `NaN`

## Example 1: Basic Hypotenuse Calculation

This example demonstrates the basic usage of `math.Hypot()` to calculate the hypotenuse of a right triangle:

```go
package main

import (
    "fmt"
    "math"
)

func main() {
  // Calculate hypotenuse for a right triangle with sides 3 and 4
  side1 := 3.0
  side2 := 4.0

  // Using math.Hypot() function
  hypotenuse := math.Hypot(side1, side2)

  fmt.Printf("Side 1: %.1f\n", side1)
  fmt.Printf("Side 2: %.1f\n", side2)
  fmt.Printf("Hypotenuse: %.1f\n", hypotenuse)

  // Verify with manual calculation
  manual := math.Sqrt(side1*side1 + side2*side2)
  fmt.Printf("Manual calculation: %.1f\n", manual)
}
```

The output of this code is:

```shell
Side 1: 3.0
Side 2: 4.0
Hypotenuse: 5.0
Manual calculation: 5.0
```

This example shows how `math.Hypot(3, 4)` correctly returns `5.0`, which is the hypotenuse of a classic 3-4-5 right triangle.

## Example 2: Distance Between Two Points

This example demonstrates using `math.Hypot()` to calculate the distance between two points in a 2D coordinate system:

```go
package main

import (
    "fmt"
    "math"
)

func main() {
  // Define two points in 2D space
  x1, y1 := 1.0, 2.0  // Point A
  x2, y2 := 4.0, 6.0  // Point B

  // Calculate the differences
  deltaX := x2 - x1
  deltaY := y2 - y1

  // Calculate distance using math.Hypot()
  distance := math.Hypot(deltaX, deltaY)

  fmt.Printf("Point A: (%.1f, %.1f)\n", x1, y1)
  fmt.Printf("Point B: (%.1f, %.1f)\n", x2, y2)
  fmt.Printf("Delta X: %.1f\n", deltaX)
  fmt.Printf("Delta Y: %.1f\n", deltaY)
  fmt.Printf("Distance between points: %.2f\n", distance)

  // Alternative calculation for comparison
  alternative := math.Sqrt(deltaX*deltaX + deltaY*deltaY)
  fmt.Printf("Alternative calculation: %.2f\n", alternative)
}
```

The output of this code is:

```shell
Point A: (1.0, 2.0)
Point B: (4.0, 6.0)
Delta X: 3.0
Delta Y: 4.0
Distance between points: 5.00
Alternative calculation: 5.00
```

This example shows how to use `math.Hypot()` to calculate the Euclidean distance between two points in a coordinate system, which is essential for navigation and graphics applications.

## Example 3: Handling Special Cases

This example demonstrates how `math.Hypot()` handles special cases including infinite values and `NaN`:

```go
package main

import (
    "fmt"
    "math"
)

func main() {
  // Test with normal values
  fmt.Printf("Normal case - Hypot(3, 4): %.2f\n", math.Hypot(3, 4))

  // Test with positive infinity
  fmt.Printf("Positive infinity - Hypot(+Inf, 5): %.2f\n",
    math.Hypot(math.Inf(1), 5))

  // Test with negative infinity
  fmt.Printf("Negative infinity - Hypot(-Inf, 5): %.2f\n",
    math.Hypot(math.Inf(-1), 5))

  // Test with NaN (Not a Number)
  fmt.Printf("NaN case - Hypot(NaN, 5): %.2f\n",
    math.Hypot(math.NaN(), 5))

  // Test with zero values
  fmt.Printf("Zero case - Hypot(0, 0): %.2f\n", math.Hypot(0, 0))

  // Test with large numbers (overflow protection)
  largeNum := 1e200
  fmt.Printf("Large numbers - Hypot(%.0e, %.0e): %.2e\n",
    largeNum, largeNum, math.Hypot(largeNum, largeNum))
}
```

The output of this code is:

```shell
Normal case - Hypot(3, 4): 5.00
Positive infinity - Hypot(+Inf, 5): +Inf
Negative infinity - Hypot(-Inf, 5): +Inf
NaN case - Hypot(NaN, 5): NaN
Zero case - Hypot(0, 0): 0.00
Large numbers - Hypot(1e+200, 1e+200): 1.41e+200
```

This example illustrates how `math.Hypot()` gracefully handles edge cases, returning appropriate values for infinite inputs and NaN values while providing overflow protection for very large numbers.

## Frequently Asked Questions

### 1. What's the difference between using `math.Hypot()` and manually calculating `math.Sqrt(x*x + y*y)`?

`math.Hypot()` provides better precision and handles overflow/underflow cases more robustly. For very large or very small numbers, manual calculation might result in overflow or loss of precision, while `math.Hypot()` is specifically designed to avoid these issues.

### 2. Can I use `math.Hypot()` with integer values?

Yes, but `math.Hypot()` only accepts `float64` values. While numeric literals like `math.Hypot(3, 4)` are automatically treated as `float64`, you’ll need to explicitly convert integer variables using `float64()` before passing them to the function.

### 3. Is `math.Hypot()` suitable for calculating distances in 3D space?

`math.Hypot()` only accepts two parameters, so it's designed for 2D calculations. For 3D distance calculations, you would need to use `math.Sqrt(x*x + y*y + z*z)` or combine multiple calls to `math.Hypot()`.
