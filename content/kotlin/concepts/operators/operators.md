---
Title: 'Operators'
Description: 'Operators are used to perform various operations on variables and values of various data types.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'kotlin'
CatalogContent:
  - 'learn-kotlin'
---

# Understanding Kotlin Operators

Operators are essential building blocks of any programming language, and Kotlin is no exception. Kotlin supports a wide range of operators that perform a variety od tasks, such as performing arithmetic operations, comparing values, and manipulating bits.

In this article, we'll dive into the world of Kotlin operators, explore their different types, and see how they can be used in code.

## Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations, such as addition, dubstraction, multiplication, and division. Kotlin supports the following arithmetic operators:

* '+' (addition)
* '-' (substraction)
* '*' (multiplication)
* '/' (division)
* '%' (module)

Here's an expample of how to use arithmetic operators in Kotlin:

```
val a = 10
val b = 5
val c = a + b // c is now 15
val d = a - b // d is now 5
val e = a * b // e is now 50
val f = a / b // f is now 2
val g = a % b // g is now 0
```

## Comparison Operators

Comparison operators are used to compare two values and determine wheter they are equal, not equal, greater than, less than, greater than or equal to, or less than or equal to. Kotlin supports the following comparison operators:

* '==' (equals to)
* '!=' (not equals to)
* '>' (greater than)
* '<' (less than)
* '>=' ()greater than or equals to)
* '<=' (less than or equals to)

Here's an example of how to use comparison operators in Kotlin:

```
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

Logical operators are used to combine two or mode conditions and determine the overall result. Kotlin supports the following logical operators:

* '&&' (and)
* '!!' (or)
* '!' (not)

Here's an example of how to use logical operators in Kotlin:

```
val a = 10
val b = 5
val c = 15

println(a > b && a < c) // true
println(a > b || a > c) // true
println(!(a > b)) // false
```

## Bitwise Operators

Bitwise operators are used to perform bitwise operations on binary values. Kotlin supports the following bitwise operators:

* 'and' (bitwise and)
* 'or' (bitwise or)
* 'xor' (bitwise xor)
* 'inv' (bitwise complement)

Here's an example of how to use bitwise operators in Kotlin:

```
val a = 0b1010
val b = 0b1100

println(a and b) // 0b1000
println(a or b) // 0b1110
println(a xor b) // 0b0110
println(b.inv()) // 0b0011
```

## Assignment Operators

Assignment operators are used to assign a value to a variable. Kotlin supports the following assignment operators:

* '=' (simple assignment) used to specify default values for parameters.
* '+=' (addition assignment)
* '-=' (substraction assignment)
* '*=' (multiplication assignment)
* '/*' (division assignment)
* '%=' (module assignment)

## Increment and decrement operators

* '++' (increment)
* '--' (decrement)
