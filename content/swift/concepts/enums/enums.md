---
Title: 'Enums'
Description: ''
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Enum'
  - 'Data Types'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In Swift, an enumeration (enum) is a collection of values that can be referenced throughout a program.

## Syntax

```swift
enum MyEnum {
  // Enumeration cases
}
```

To access specific cases in `MyEnum`, the dot operator `.` is used, following the case name:

```pseudo
MyEnum.case
```

## Creating an `enum`

`enum` cases can be written in a single line:

```swift
enum Level {
  case beginner, intermediate, advanced
}
```

Another way to display `enum` cases is by defining them on separate lines:

```swift
enum Level {
  case beginner
  case intermediate
  case advanced
}
```

### Raw Value

Raw values can be added for each case if a raw type is defined after the trailing colon `:` that follows the `enum` name.

The following example displays an `enum` with a raw type of `String` and cases assigned to their respective raw values:

```swift
enum Level: String {
  case beginner = "Tadpole"
  case intermediate = "Froglet"
  case advanced = "Frog"
}
```

### Associated Value

```swift
enum Level: String {
  case beginner = ""
  case intermediate = ""
  case advanced = ""
}
```

### `CaseIterable`

```swift
enum Level: String, CaseIterable {
  case beginner = ""
  case intermediate = ""
  case advanced = ""
}
```

## Accessing an `enum`

### Switch Case Example

### Iterative Example
