---
Title: 'Identifiable'
Description: 'A protocol in Swift that requires conforming types to have a unique identifier property.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Classes'
  - 'Protocols'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`Identifiable`** is a protocol in Swift that enforces types to include a unique identifier property. This identifier helps differentiate individual instances of the type from one another within collections or arrays, making it easier to handle, update, and manage specific instances.

## Syntax

An `Identifiable` protocol is created like a regular protocol, followed by the `Identifiable` keyword:

```pseudo
protocol protocolName: Identifiable {
  // Protocol body
}
```

## Example

Here, the `Employee` struct conforms to the `Identifiable` protocol by providing a unique `id` property using the `UUID` struct. This identifier can be used to distinguish instances of `Employee` in a collection or array, allowing for easy updates and deletions of specific employees.

```swift
struct Employee: Identifiable {
  let id = UUID()
  let firstName: String
  let lastName: String
  let isOnVacation: Bool
}
```
