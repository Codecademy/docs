---
Title: 'Optionals'
Description: 'Optionals are types that deal with scenarios involving the potential presence or absence of a value (nil).'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Optionals'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Optionals** are types that deal with scenarios involving the potential presence or absence of a value (`nil`).

## Syntax

In Swift, a non-optional variable should not be set to `nil`. Rather, the optional type must be defined using the added question mark `?`.

There are two ways to use an optional. Below, a variable named `myVariable` is set to an optional `Type`, `Type?`. `Type` referred to a [Swift data type](https://www.codecademy.com/resources/docs/swift/data-types). It can either be equal to some value with the specified data type or `nil`.

```pseudo
var myVariable: Type?
var myVariable: Optional<Type>
```

> **Note:** If `myVariable` is not assigned a value of the specified data type, it will default to `nil`.

## Unwrapping Optionals

Optional types should be unwrapped only if it's certain that a value is present. An [error](https://www.codecademy.com/resources/docs/general/error) will result if an optional without a value is unwrapped. Below are some ways this can be done.

### Nil-Coalescing

The nil-coalescing operator, `??`, assigns a value by checking from left to right. If the preceding optional values are `nil`, the default value on the right is assigned.

In the example below,`maybeInt` is declared as an optional integer type and set to `nil`, therefore `myInt` will default to `27`:

```swift
var maybeInt: Int? = nil
var myInt = maybeInt ?? 27

print(myInt)
// Output: 27
```

> **Note:** In the following code blocks, a mutable `var` variable can be used in place of any constant `let` variable.

### `if let`

`if let` is an optional binding control structure.

```swift
var maybeString: String? = "maybeString"

if let myString = maybeString {
  print("\(maybeString) and myString are equal!")
} else {
  print("myString could not be assigned to nil.")
}

// Output: Optional("maybeString") and myString are equal!
```

`myString` is declared and conditionally bound to the `maybeString` optional. The value of `myString` can be accessed from inside the `if` statement, but not in the outer scope. An alternative to `if let` that allows upwrapped values to be accessed in the outer scope, is the `guard let` statement.

### `guard let`

`guard let` is another optional binding control structure that can be used within a function.

```swift
var maybeInt: Int? = 2022

func findInt() {
  guard let myInt = maybeInt else {
    return
  }
  print(myInt)
}

 findInt()
 // Output: 2022
```

If the optional `maybeInt` holds a value, it will be assigned to `myInt`. Otherwise, the `else` block will run and hit the `return` statement.

> **Note:** The following way(s) to unwrap optionals is not recommended because it does not handle `nil` cases.

### Forced Upwrapping

Placing an `!` after an optional value forces it to unwrap its value:

```swift
var maybeInt: Int? = 27

var myInt: Int = maybeInt!

print(myInt)
// Output: 27
```

Alternatively, this can be done implicitly:

```swift
var myInt = maybeInt!

print(myInt)
// Output: 27
```
