---
Title: 'Generics'
Description: 'Generics are a programming feature that allows the programmer to write versatile and reusable code that operates on different data types.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Generics'
  - 'Data Types'
CatalogContent:
  - 'learn-go'
  - 'paths/back-end-engineer-career-path'
---

**Generics** are a powerful feature introduced in Go 1.18 that empowers developers to write versatile and reusable code that operates on different data types. Generics provide a new level of expressiveness and flexibility to the language, allowing the creation of functions, methods, and data structures that work seamlessly across a range of types.

## Syntax and Type Parameters

In Go, generics are defined using type parameters within function and method declarations. The syntax for declaring a generic function is as follows:

```pseudo
func FunctionName[T TypeConstraint](params) ReturnType {
  // Function body
}
```

- `T`: Represents the type parameter that can be replaced with actual types when using the function.
- `TypeConstraint`: An optional type constraint that specifies the characteristics the type parameter must satisfy.
- `params`: The parameters that the function accepts.
- `ReturnType`: The type the function returns.

## Type Constraints

Type constraints enable the specification of requirements for the types used with generics. Common constraints include:

- `comparable`: Types that can be compared using comparison operators (e.g., int, string).
- `numeric`: Numeric types that support arithmetic operations.
- `order`: Types that can be compared and ordered (e.g., numeric types, strings).

## Benefits of Generics

- Code Reusability: Generics allow the creation of functions and data structures that can work with multiple types, reducing the need for duplicated code.
- Type Safety: Compile-time type checking ensures that generic code is type-safe and minimizes runtime errors.
- Modularity: Generics promote modular design by enabling the creation of generic components that can be adapted to various contexts.

## Limitation and Considerations

- Generics are currently limited to functions and methods. They cannot be used with structs or interfaces.
- Generics in Go 1.18 have some differences compared to generics in other programming languages.
- Proper documentation and clear naming of type parameters are essential for code readability.

## Example

This code demonstrates a versatile function called `GenericMap` that applies given functions to items in a list of various types.

```go
package main

import (
  "fmt"
)

// GenericMap is a versatile function that applies another function to each item in a list.
func GenericMap[T any, U any](list []T, f func(T) U) []U {
  result := make([]U, len(list))
  for i, item := range list {
    result[i] = f(item)
  }
  return result
}

func main() {
  // Mapping integers to their squares
  intList := []int{1, 2, 3, 4, 5}
  squaredList := GenericMap(intList, func(x int) int {
    return x * x
  })
  fmt.Println("Squared integers:", squaredList)

  // Mapping strings to their lengths
  stringList := []string{"apple", "banana", "cherry"}
  lengthList := GenericMap(stringList, func(s string) int {
    return len(s)
  })
  fmt.Println("String lengths:", lengthList)

  // Mapping floats to their square roots
  floatList := []float64{1.0, 2.0, 3.0, 4.0, 5.0}
  sqrtList := GenericMap(floatList, func(x float64) float64 {
    return math.Sqrt(x)
  })
  fmt.Println("Square roots:", sqrtList)
}
```

`GenericMap` can take a list of numbers or words and give a new list where each number is replaced by its square or length, respectively.

This example results in the following output:

```shell
Squared integers: [1 4 9 16 25]
String lengths: [5 6 6]
Square roots: [1 1.4142135623730951 1.7320508075688772 2 2.23606797749979]
```
