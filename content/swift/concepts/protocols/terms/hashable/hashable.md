---
Title: 'Hashable'
Description: 'allows types to be hashed into integer values.'
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

## Syntax

```pseudo
protocol Hashable {
    func hash(into hasher: inout Hasher)
}
```

The protocol requires the implementation of the `hash(into:)` method. This method accepts an `inout Hasher` parameter, which is responsible for combining the hash values of the properties of the type

## Example

Consider a simple use case with a `Book` struct that represents a book's title and author. By conforming to the `Hashable` protocol, instances of `Book` can be used as keys in a dictionary:

```swift
struct Person: Hashable {
    var name: String
    var age: Int
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(name)
        hasher.combine(age)
    }
}

var personSet: Set<Person> = []
let person1 = Person(name: "Alice", age: 30)
let person2 = Person(name: "Bob", age: 25)

personSet.insert(person1)
personSet.insert(person2)

print("Is Alice in the set? \(personSet.contains(person1) ? "Yes" : "No")")
```

This example results in the following output:

```shell
Is Alice in the set? Yes
```
