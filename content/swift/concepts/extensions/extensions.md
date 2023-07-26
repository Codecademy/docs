---
Title: 'Extensions'
Description: 'Extensions add new functionality to existing data types.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Extensions'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Extensions** allow adding new functionality to existing data types without modifying their original code.

They can add methods, computed properties, and new initializers to existing types. An extension can also make an existing type conform to a protocol.

## Syntax

To declare an extension, use the `extension` keyword as shown below:

```swift
extension SomeExistingType {
    // Add new features here
}
```

To make an existing type conform to a protocol:

```swift
extension SomeExistingType: AProtocol, AnotherProtocol {
    // Implement the protocol requirements here
}
```

However, an extension cannot add new stored properties or override existing methods. Also, an existing type can be extended multiple times in separate extensions. For example:

```swift
extension SameType: Protocol {
    // Implement the protocol
}

extension SameType: AnotherProtocol {
    // Implement the other protocol
}

extension SameType {
    // Add new methods and computed properties
}

extension SameType {
    // Add some more methods
}
```

Notice the two separate extensions for two different protocols. Code readability and maintainability can be improved by extending a type to conform to a protocol one at a time. Generally speaking, an extension should focus on one category of functionality.

## Computed Properties

A useful application of extensions is extending the built-in `Int` type by adding functionality to calculate its square and cube. This can be done by adding two computed properties in the extension as shown below:

```swift
extension Int {
    var squared: Int { return self * self }
    var cubed: Int { return self * self * self }
}

print("The square of 2 is \(2.squared).")
// Prints: "The square of 2 is 4.
print("The cube of 3 is \(3.cubed).")
// Prints: "The cube of 3 is 27.
```

Another common application is extending a type to print itself out in a human-readable format. This can be accomplished by conforming the type to the `CustomStringConvertible` protocol found in the Swift Standard Library:

```swift
struct Person {
    let name: String
    let age: Int
}

let person = Person(name: "Bob", age: 35)
print(person)
// Prints: Person(name: "Bob", age: 35) -- Not really human-friendly

extension Person: CustomStringConvertible {
    var description: String {
        return "Hi, my name is \(name) and I am \(age) years old."
    }
}

print(person)
// Prints: "Hi, my name is Bob and I am 35 years old."
```

## Methods

New instance and type methods can be added to existing types via extensions. For example, the built-in `Int` type can be extended to offer additional functionality such as returning a custom message about itself and performing an operation on itself as shown below:

```swift
extension Int {
    func sayNumber() -> String {
        return "I am number \(self)."
    }

    mutating func squared() {
        self = self * self
    }
}

var x = 4
print(x.sayNumber())
// Prints: "I am number 4."

x.squared()
print(x)
// Prints: 16
```
