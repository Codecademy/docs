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

In this example, the Person struct conforms to the Hashable protocol by implementing the `hash(into:)` method. The hash value is calculated by combining the `name` and `age` properties using the `hasher.combine(_:)` method. This allows instances of the Person struct to be stored in a set (`personSet`) and efficiently looked up using their hashed values.

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
