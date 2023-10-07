---
Title: 'Hashable'
Description: 'Allows types to be hashed into integer values.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Protocols'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Hashable`** protocol is a fundamental protocol in Swift that allows types to be hashed into integer values, facilitating their use as keys in hash-based collections like dictionaries and sets.

In Swift, the following [types](https://www.codecademy.com/resources/docs/swift/data-types) conforms to the `Hashable` protocol by default: `Int`, `UInt`, `Float`, `Double`, `Bool`, `String`, `Character`, `Tuples`, `Optionals`, `Enums`.

## Syntax

```pseudo
protocol Hashable {
    func hash(into myhasher: inout Hasher)
}
```

Conforming to the protocol automatically generates the `hash()` method. This method accepts an `inout Hasher` parameter (`myhasher`), which is responsible for combining the hash values of the properties of the type.

## Example Using a `struct`

In this example, the `Person` `struct` conforms to the `Hashable` protocol by implementing `hash()`. The hash value is calculated by combining the `name` and `age` properties using the `myhasher.combine()` method. This allows instances of the `Person` `struct` to be stored in a set (`personSet`) and efficiently looked up with their hashed values.

```swift
struct Person: Hashable {
    var id: Int
    var name: String
    var age: Int

    func hash(into myhasher: inout Hasher) {
        // Using id to uniquely identify each person.
        myhasher.combine(id)
    }
}

var personSet: Set<Person> = []
let person1 = Person(id: 1, name: "Alice", age: 30)
let person2 = Person(id: 2, name: "Bob", age: 25)

personSet.insert(person1)
personSet.insert(person2)

print("Is Alice in the set? \(personSet.contains(person1) ? "Yes" : "No")")
```

This example results in the following output:

```shell
Is Alice in the set? Yes
```

## Example Using an `enum`

In this example, an `enum` named `Color` contains three cases: `red`, `green`, and `blue`. Since `enum` cases are unique by definition, they are automatically hashable, and can be used in data structures like sets or dictionaries without any additional implementation of the `Hashable` protocol.

```swift
enum Color: Hashable {
    case red
    case green
    case blue
}

let colorSet: Set<Color> = [.red, .green, .blue]

for color in colorSet {
    print(color)
}
```

This example results in the following output:

```shell
red
green
blue
```
