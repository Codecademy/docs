---
Title: "Conditionals"
Subjects:
  - "iOS"
  - "Mobile Development"
Tags:
  - "Conditionals"
  - "Control Flow"
  - "If"
  - "Else"
  - "Data Types"
  - "Variables"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-swift"
  - "https://www.codecademy.com/learn/paths/build-ios-apps-with-swiftui"
---

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
