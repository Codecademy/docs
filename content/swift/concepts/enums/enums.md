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

In Swift, an enumeration (enum) is an

## Syntax

```swift
enum MyEnum {
  // Enumeration cases
}
```

## Examples

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

### Raw value

```swift
enum Level: String {
  case beginner = ""
  case intermediate = ""
  case advanced = ""
}
```

### Associated value

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
