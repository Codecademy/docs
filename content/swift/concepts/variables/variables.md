---
Title: 'Variables'
Description: 'In Swift values are stored in two types of containers, var for variables and let for constants. Variables can be reassigned later in the program while constants cannot.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Data Types'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In Swift, values to be stored in two types of containers: `var` for **variables** and `let` for **constants**.

As the names imply, a variable's value can change or reassigned later in the program, while a constant's value cannot. It is best practice to use constants as much as possible to prevent accidentally reassigning values later on in a program.

> **Note:** Once a variable or constant's data type has been established, whether explicitly or implicitly (inferred by the compiler) declared, it cannot be changed. In addition, the variable name cannot be used for another data type within the same program. In the same manner, a variable cannot be changed into a constant and vice versa.

## Declaring and Initializing Variables and Constants

Variables and constants do not require initialization when declared. However, the variable or constant requires type annotation so that when the compiler reads the code line-by-line, it can determine the data type at the time of the build. A `Use of undeclared type` error will be thrown otherwise. Swift also allows a wide range of characters to be used as constant and variable names including [Unicode](https://www.codecademy.com/resources/docs/general/unicode) characters and emojis.

```swift
var dailyTemperature: Int
let boilingPoint = 100

var dailyHigh
// Compiler error: "Type annotation missing"
```

In the example above, `dailyTemperature` is declared as a variable because it's expected to change daily. It has been declared, meaning the operating system has set aside storage for it, but has not been initialized with a value. The constant `boilingPoint` will not change and is declared and initialized in the same line. Below are some examples of using emojis as variable names.

```swift
let 🌕 = "Full Moon"
let 🌑 = "New Moon"
let 🌙 = "Cresent Moon"
```

## Accessing and Reassigning Variables and Constants

The value of a variable can be changed by using the assignment operator to set the value to a different value of the same type. Another variable can also be used to set the value of a variable.

```swift
var dailyTemperature: Int
let reallyHot = 50

// Monday
dailyTemperature = 18

// Tuesday
dailyTemperature = reallyHot
```

Variables and constants can also be passed directly into functions and methods or returned as the result.

```swift
let 🌕 = "Full Moon"
print(🌕)
// Output: "Full Moon"
```
