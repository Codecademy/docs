---
Title: 'Enums'
Description: 'A collection of set values that can be referenced throughout a program.'
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

In Swift, an **enumeration (enum)** is a collection of set values that can be referenced throughout a program.

## Syntax

```pseudo
enum MyEnum {
  Enumeration cases go here
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

Raw values can be added for each case if a raw [type](https://www.codecademy.com/resources/docs/swift/data-types) is defined after the `enum` name and trailing colon `:`.

```swift
enum Bishop: String {
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

## Accessing an `enum` and Examples

An enumeration can be accessed with the dot `.` syntax.

```swift
enum MageAdvancementTree {
  case novice, firstJob, secondJob, thirdJob, fourthJob
}

var bishop = MageAdvancementTree.thirdJob
bishop = .fourthJob

print(bishop)
// Output: fourthJob
```

When a variable is declared and set to an enumeration, it can be re-assigned to a different case value with the shortened dot syntax shown above.

### Switch Case

A [`switch`](https://www.codecademy.com/resources/docs/swift/switch) statement is another way to access values within an enumeration. In the example below, the `bishop` variable will be evaluated to match `case .fourthJob` because it was previously set to the `fourthJob` value. Access to the values in `enum MageAdvancementTree` is possible because `bishop` is already set to it.

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

In the snippet below, `MageAdvancementTree` adopts the [`CaseIterable`](https://www.codecademy.com/resources/docs/swift/protocols) protocol which gives access to the `allCases` property. Using a [`for...in`](https://www.codecademy.com/resources/docs/swift/loops) loop, each value within the enumeration can be accessed:

```swift
enum MageAdvancementTree: String, CaseIterable {
  case novice = "Beginner"
  case firstJob = "Magician"
  case secondJob = "Cleric"
  case thirdJob = "Priest"
  case fourthJob = "Bishop"
}

for job in MageAdvancementTree.allCases {
  print(job.rawValue)
}
```

This would output the raw values in `MageAdvancementTree`:

```shell
Beginner
Magician
Cleric
Priest
Bishop
```
