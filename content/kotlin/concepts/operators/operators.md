---
Title: 'Operators'
Description: 'Operators are used to perform various operations on variables and values of various data types.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Operators'
  - 'Conditionals'
  - 'Kotlin'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

Operators are essential building blocks of any programming language, and Kotlin is no exception. Kotlin supports a wide range of operators that perform a variety of tasks, such as performing arithmetic, comparing values, and manipulating bits.

The sections that follow will review the main categories of Kotlin operators and demonstrate their basic implementation in code.

## Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations, such as addition, subtraction, multiplication, and division. Kotlin supports the following arithmetic operators:

- `+` Addition: Returns the sum of the two arguments.
- `-` Subtraction: Returns the difference of the two arguments.
- `\*` Multiplication: Returns the product of the two arguments.
- `/` Division: Returns the quotient of the two arguments.
- `%` Modulo: Returns the remainder based on the division of the two arguments.

Here's an example of how to use arithmetic operators in Kotlin:

```kotlin
val a = 10
val b = 5
val c = a + b // c is now 15
val d = a - b // d is now 5
val e = a * b // e is now 50
val f = a / b // f is now 2
val g = a % b // g is now 0
```

## Comparison Operators

Comparison operators are used to compare two values and determine whether they are equal, not equal, greater than, less than, greater than or equal to, or less than or equal to. Kotlin supports the following comparison operators:

- `==` Equals to: Returns `true` if the arguments are equivalent.
- `!=` Not equals to: Returns `true` if the arguments are not equivalent.
- `>` Greater than: Returns `true` when the argument on the left is greater than the value on the right.
- `<` Less than: Returns `false` when the argument on the left is greater than the value on the right.
- `>=` Greater than or equals to: Returns `true` when the argument on the left is greater than or equal to the value on the right.
- `<=` Less than or equals to: Returns `true` when the argument on the left is less than or equal to the value on the right.

Here's an example of how to use comparison operators in Kotlin:

```kotlin
val a = 10
val b = 5
val c = 10
val d = 15

println(a == b) // false
println(a != b) // true
println(a > b) // true
println(a < b) // false
println(a >= c) // true
println(d <= b) // false
```

## Logical Operators

Logical operators are used to combine two or more conditions and determine the overall result. Kotlin supports the following logical operators:

- `&&` And: Returns `true` when the argument or expression on either side of the operator are both `true`.
- `||` Or: Returns `true` when one of the arguments or expressions in the statement are `true`.
- `!` Not: Returns `true` when the argument or expression is `false`, otherwise `true`.

Here's an example of how to use logical operators in Kotlin:

```kotlin
val a = 10
val b = 5
val c = 15

println(a > b && a < c) // true
println(a > b || a > c) // true
println(!(a > b)) // false
```

## Bitwise Operators

Bitwise operators are used to perform bitwise operations on binary values. Kotlin supports the following bitwise operators:

- `and` Bitwise and: Returns 1 when the both of the compared bits are 1, otherwise 0.
- `or` Bitwise or: Returns 1 when one of the bits compared is 1, otherwise 0.
- `xor` Bitwise xor: Returns 1 when one of the bits compared is 1 and the other is 0, if both bits are equivalent (0 or 1) 0 is returned.

Here's an example of how to use bitwise operators in Kotlin:

```kotlin
val a = 0b1010
val b = 0b1100

println(a and b) // 8
println(a or b) // 14
println(a xor b) // 6
println(b.inv()) // -13
```

## Assignment Operators

Assignment operators are used to assign a value to a variable. Kotlin supports the following assignment operators:

- `=` Simple assignment: Used to specify default values for a parameters or the variable on the left.
- `+=` Addition assignment: Adds a value and assigns the new total to the variable.
- `-=` Subtraction assignment: Subtracts a value and assigns the new total to the variable.
- `*=` Multiplication assignment: Takes the product of the arguments and assigns the new total to the variable.
- `/=` Division assignment: Takes the quotient of the arguments and assigns the new total to the variable.
- `%=` Modulo assignment: Takes the remainder of a division of the arguments and assigns the new total to the variable.

Here's an example of how to use assignment operators in Kotlin:

```kotlin
var a = 10
var b = 5
a += b // 15
a -= b // 10
a *= b // 50
a /= b // 5
a %= b // 0
```

## Increment and Decrement Operators

- `++` Increment: Add one to the given value.
- `--` Decrement: Subtract one from the given value.

Here's an example of how to use the increment and decrement operators in Kotlin:

```kotlin
var a = 10
a ++ // 11
a -- // 10
```
