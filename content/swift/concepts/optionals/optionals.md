---
Title: 'Optionals'
Description: ''
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Optionals'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

Optionals are types that deal with scenarios involving the potential presence or absence of a value (nil).

## Syntax

In Swift, a non-optional variable can't be set to nil. Rather, the optional type must be defined using the added question mark `?`.

Below, a variable `myInt` is declared and set to the optional `Int` type, `Int?`. It can either be equal to any integer or nil.

```swift
var maybeInt: Int? = nil
```

**Note:** If `myInt` is not assigned the value of nil, it will default to nil.

## Unwrapping optionals

Optional types can be unwrapped if it's certain that a value is present. Below are some ways this can be done.

### Nil-coalescing

The nil coalescing operator, `??`, checks the value on the left. If that value is nil, the default value on the right side is used.

```swift
var myInt = maybeInt ?? 27
```

Since `maybeInt` is previously declared as nil, `myInt` will default to 27.

**Note:** In the following code blocks, a mutable variable `var` can be used in place of any constant variable `let`.

### `if` `let`

`if` `let` is an optional binding control structure.

```swift
var maybeString: String? = "maybeString"

if let myString = maybeString {
  print("\(maybeString) and myString are equal!")
} else {
  print("myString could not be assigned to nil.")
}

// Output: Optional("maybeString") and myString are equal!
```

`myString` is declared and conditionally bound to the `maybeString` optional. The value of `myString` can be accessed from inside the `if` statement and within `myString`'s outer scope.

### `guard` `let`

`guard` `let` is another optional binding control structure that can be used within a function.

```swift
guard let myInt = maybeInt else {
  return
}
```

If the optional `maybeInt` holds a value, it will be assigned to `myInt`. Otherwise, the `else` block will run and hit the `return` statement.

**Note:** The following ways to upwrap optionals is not recommended because it does not handle nil cases.

### Forced upwrapping

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
