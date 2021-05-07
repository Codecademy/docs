---
Title: "Variables in Swift"
Subjects:
  - "iOS"
  - "Mobile Development"
Tags:
  - "Data Types"
  - "Variables"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-swift"
  - "https://www.codecademy.com/learn/paths/build-ios-apps-with-swiftui"
---

The Swift programming language allows you to store values in two types of containers, `var` for variables and `let` for constants. As the names imply, a variable's value can change, or be reassigned, later in the program while a constant's value cannot. It is a best practice to use constants as much as possible, this will help prevent you from accidentally reassigning values later on without meaning to.

> Once a variable or constant's data type has been established, whether explicitly declared or inferred by the compiler, it cannot be changed and the variable name cannot be used for another data type within the same program. In the same manner, a variable cannot be changed into a constant and a constant cannot be converted into a variable.

## Declaring and Initializing Variables and Constants

Variables and constants can be declared with or without initialization on the same line, however you cannot declare an uninitialized variable without including the type annotation. This makes sense considering that the compiler, when it looks over the code line-by-line, can't make a determination of the data type at the time of the build. Swift also allows a wide range of characters to be used in constant and variable names including Unicode characters and emojis.

```swift
var dailyTemperature: Int
let boilingPoint = 100

var dailyHigh
// Compiler error: "Type annotation missing"
```

In the example above `dailyTemperature` is declared as a variable because we are expecting it to change daily. It has been declared, meaning that the operating system has set aside storage for it, but it has not been initialized with a value. The constant `boilingPoint` will not change and is declared and initialized in the same line. Below are some examples of using emojis as variable names.

```swift
let 🌕 = "Full Moon"
let 🌑 = "New Moon"
let 🌙 = "Cresent Moon"
```

## Accessing and Reassigning Variables and Constants

The value of a variable can be changed by using the assignment operator to set the value to a different value of the same type. You can also use another variable to set the value of a variable

```swift
var dailyTemperature: Int
let reallyHot = 50

// Monday
dailyTemperature = 18

// Tuesday
dailyTemperature = reallyHot
```

Variables and constants can also be passed directly into functions and methods or returned as the result of function.

```swift
let 🌕 = "Full Moon"
print(🌕)
// Output: "Full Moon"
```
