---
Title: 'Protocols'
Description: 'A collection of methods, properties, and rules that a class, structure, or enumeration can adopt.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

A protocol is a collection of methods, properties, and rules that a `class`, `struct`, or `enum` can adopt.

## Syntax

A protocol is created with the `protocol` keyword:

```swift
protocol MyProtocol {
  // Protocol body
}
```

**Note:** Names are written in PascalCase.

For class, structure, or enumeration data types to adopt a protocol, it chains onto their definition and is separated with a colon:

```swift
class MyClass: MyProtocol, OtherProtocol, ... {
  // This can be a class, structure, or enumeration
}
```

## Property Requirements

Property requirements are variables that indicate a type and the `get`/`set` keywords determine if that property is gettable and/or settable.

```swift
protocol MyProtocol {
  var getAndSet: Int { get set}
  var onlyGet: String { get }
}
```

**Note:** Gettable variables can be read and settable variables can be set or changed. Programmers sometimes only allow a variable to be gettable because they don't want it to be mutated.

Data types that adopt a protocol, must _conform_ to the properties and methods defined in it.

```swift
protocol Grammar {
  var alphabet: String { get }
}

struct Language: Grammar {
  var alphabet: String
}

let english = Language(alphabet: "abcdefghijklmnopqrstuvwxyz")

print(english.alphabet)
// Output: abcdefghijklmnopqrstuvwxyz
```
