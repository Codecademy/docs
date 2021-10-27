---
Title: 'Data Types'
Description: 'Classifications of data used in everyday programming. In Go, there are seven fundamental data types: Numbers, Strings, Booleans, Arrays, Structs, Slices, and Pointers.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Go'
CatalogContent:
  - 'introduction-to-go'
  - 'paths/back-end-engineer-career-path'
---

Data types are the classifications given to the different kinds of values used in everyday programming. In Go, there are seven fundamental data types:

- [Numbers](#Numbers)
- [Strings](#Strings)
- [Booleans](#Booleans)
- [Arrays](#Arrays)
- [Structs](#Structs)
- [Slices](#Slices)
- [Pointers](#Pointers)

## Number

In Go, any number is regarded as number, but there are 3 sub-categories:

- Integers (signed and unsigned)
- Floating-point numbers
- Complex numbers

### Integers

Integers can come as signed(ϵ Natural Numbers) or unsigned(ϵ Integers). Signed integers are declared with int and unsigned integers are declared with uint. Each comes in 4 different memory sizes.

| Data Type        | Description                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| `int8 / uint8`   | 8-bit                                                                            |
| `int16 / uint16` | 16-bit                                                                           |
| `int32 / uint32` | 32-bit                                                                           |
| `int64 / uint64` | 64-bit                                                                           |
| `int / uint`     | depending on the system architecture it will be 32- or 64-bit                    |
| `rune`           | synonym for int32 and also represents Unicode code points                        |
| `byte`           | synonym for int8                                                                 |
| `uintptr`        | unsigned integer type with undefined width. Can hold all bits of a pointer value |

### Floating-Point Numbers

floating-point numbers can contain a decimal point. There are 2 different sizes.

- 32-bit: `float32`
- 64-bit: `float64`

### Complex Numbers

Complex numbers are composed of a real number and an imaginary number. The real number is either a float. There are two different sizes:

| Data Type    | Description                     |
| ------------ | ------------------------------- |
| `complex64`  | 32-bit float + imaginary number |
| `complex128` | 64-bit float + imaginary number |

## String

A String represents a sequence of characters. Strings are immutable; once they are created they can't be modified.

```go
  var s string
  s = "Hello, World!"
```

## Booleans

A Boolean can hold 2 possible values, either `true` or `false`.

```go
  var isValid bool
  isValid = true
  isValid = false
```

## Arrays

Arrays are list with static capacity. They can't change their capacity after the declaration.

```go
  // declare and initialize an arraz of capacity 5 and fill it with elements
  someArray := [5]int{0,2,3,4,5}
```

## Slices

Slices can change their capacity dynamically even after their declaration. Under the hood a slice references an array. If the array changes, so does the slice.

```go
  // copy the elements from index 0 until (excluding) index 3 into a slace
  var slice []int = someArary[0:3]
```

## Structs

In Go, a Struct is a more complex type that can contain custom fields. It's similar to an [object in JavaScript](https://www.codecademy.com/resources/docs/javascript/objects) or a [dictionary in Python](https://www.codecademy.com/resources/docs/python/dictionaries). The fields of a Struct can be accessed with a dot "."

```go
  // declaration with "type ... struct" keywords
  type Box struct {
    X int
    Y int
  }
```

```go
  // Initialization
  b := Box{1,2}
```

## Pointers

Pointers contain the memory address of the variable they are based on. Pointers used "\*".

```go
  // declaration of a Pointer with *
  var p *int
```

```go
  someInteger := 42

  // create Pointer from Variable using "&"
  p = &someInteger
```
