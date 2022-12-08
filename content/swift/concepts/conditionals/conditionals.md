---
Title: 'Conditionals'
Description: 'Conditionals are expressions that evaluate to either true or false and determine what the program will do next.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Conditionals'
  - 'Control Flow'
  - 'If'
  - 'Else'
  - 'Data Types'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Conditionals** are expressions that evaluate to either `true` or `false` and determine what the program will do next. As programs become more complex, conditionals can make programs more flexible and robust by addressing multiple scenarios.

As we write more complex programs, conditionals allow us to address multiple scenarios and make our programs more robust.

## `if` Statement

An `if` statement executes a code block when its condition evaluates to true. If the condition is false, the code block does not execute.

```swift
var halloween = true

if halloween {
  print("Trick or treat!")
}

// Output: Trick or treat!
```

## `else if` Statement

An `else if` statement provides additional conditions to check for within a standard `if`/`else` statement. `else if` statements can be chained and exist only after an `if` statement and before an `else`.

```swift
var weather = "rainy"

if weather == "sunny" {
  print("Grab some sunscreen")
} else if weather == "rainy" {
  print("Grab an umbrella")
} else if weather == "snowing" {
  print("Wear your snow boots")
} else {
  print("Invalid weather")
}

// Output: Grab an umbrella
```

## `else` Statement

An `else` statement is an optional partner to an `if` statement. When the condition for the `if` statement evaluates to `false`, the code within the body of the `else` will execute.

```swift
var turbulence = false

if turbulence {
  print("Please stay seated.")
} else {
  print("You may freely move around.")
}

// Output: You may freely move around.
```
