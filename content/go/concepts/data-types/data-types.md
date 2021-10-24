---
Title: 'Data Types'
Description: 'Data types are the classifications we give to the different kinds of data that we use in programming. In Go, there are seven fundamental data types: Number, String, Boolean, Array, Struct, Slices, Pointers.'
Subjects:
  - 'Computer Science'
  - 'Go'
Tags:
  - 'Arrays'
  - 'Integers'
  - 'Booleans'
  - 'Strings'
  - 'Slices'
  - 'Structs'
  - 'Pointers'
CatalogContent:
  - 'introduction-to-go'
---

Data types are the classifications we give to the different kinds of data that we use in programming. In Go, there are seven fundamental data types:

## Number

In Go any number is regarded as number, but there are 3 sub-categories: Integers (signed and unsigned Integers), floating-point numbers and complex numbers.

### Integers

Integers can come as signed(ϵ Natural Numbers) or unsigned(ϵ Integers). Signed integers are declared with int and unsigned integers are declared with uint. Each comes in 4 different memory sizes.

| Data Type   | Description                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `int8 / uint8`    | 8-bit                                                                         |
| `int16 / uint16`    | 16-bit                                  |
| `int32 / uint32`    | 32-bit |
| `int64 / uint64`   | 64-bit                                                                       |
| `int / uint`      | depending on the system architecture it will  be 32- or 64-bit                                       |
| `rune`      | synonym for int32 and also represents Unicode code points                                       |
| `byte`      | synonym for int8                                       |
| `uintptr`      | unsigned integer type with undefined width. Can hold all bits of a pointer value                                       |

### Floating-Point Numbers

floating-point numbers can contain a decimal point. There are 2 different sizes.

| Data Type   | Description                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `float32`    | 32-bit                                                                         |
| `float64`    | 64-bit                                  |

### Complex Numbers

Complex numbers consist of a real and an imaginary number. The real number is either a float. There are 2 different sizes.

| Data Type   | Description                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `complex64`    | 32-bit float + imaginary number                                                                         |
| `complex128`    | 64-bit float + imaginary number                                  |
