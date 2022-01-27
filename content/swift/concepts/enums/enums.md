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

## Creating an `enum` and Examples

`enum` cases can be defined on separate lines:

```swift
enum Level {
  case beginner
  case intermediate
  case advanced
}
```

`enum` cases can also be written in a single line for simplicity:

```swift
enum Level {
  case beginner, intermediate, advanced
}
```

### Raw Value

Raw values can be added for each case if a raw type is defined after the `enum` name and trailing colon `:`.

```swift
enum Bishop : String {
  case novice = "Beginner"
  case firstJob = "Magician"
  case secondJob = "Cleric"
  case thirdJob = "Priest"
}
```

The example above displays an `enum`, named `Bishop`, with a raw type of `String` and cases assigned to their respective raw values.

### Associated Value

Associated values can be added to available cases.

```swift
enum MageAdvancementTree {
  case novice
  case firstJob(String)
  case secondJob(wizard: String)
  case thirdJob(mage: String)
  case fourthJob(arch: String)
}

var bishop = MageAdvancementTree.thirdJob(mage: "Priest")

print(bishop)
// Output: thirdJob(mage: "Priest")
```

An `enum` named `MageAdvancementTree` is created and most of its cases have associated values. Then, a `bishop` variable is declared as a `MageAdvancementTree` and sets the `mage` to a string, `"Priest"`.

### `CaseIterable`

By conforming to the [`CaseIterable`](https://developer.apple.com/documentation/swift/caseiterable) protocol, certain properties like `allCases` can be accessed:

```swift
enum MageAdvancementTree: CaseIterable {
  case novice, firstJob, secondJob, thirdJob, fourthJob
}

print("You will have \(MageAdvancementTree.allCases.count) different jobs as a Mage.")
// Output: You will have 5 different jobs as a Mage.
```

## Accessing an `enum` and Examples

An enumeration can be accessed with the dot `.` syntax.

```swift
enum MageAdvancementTree: CaseIterable {
  case novice = "Beginner", firstJob = "Magician", secondJob = "Cleric", thirdJob = "Priest", fourthJob = "Bishop"
}

var bishop = MageAdvancementTree.thirdJob
bishop = .fourthJob

print(bishop)
// Output: fourthJob
```

When a variable is declared and set to an enumeration, it can be set to a different value with the shortened dot syntax shown above.

### Switch Case

```swift
switch bishop {
  case .novice:
    print("Beginner")
  case .firstJob:
    print("Magician")
  case .secondJob:
    print("Cleric")
  case .thirdJob:
    print("Priest")
  case .fourthJob:
    print("Bishop")
}
// Output: Bishop
```

### Iterative

```swift
for job in MageAdvancementTree.allCases {
  print(job.rawValue)
}

// Output:
// Beginner
// Magician
// Cleric
// Priest
// Bishop
```

The `CaseIterable` protocol allows `enum MageAdvancementTree` to call the `allCases` property. Then, the raw value for each case is printed.
