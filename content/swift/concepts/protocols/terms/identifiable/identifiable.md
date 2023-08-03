---
Title: 'Identifiable'
Description: 'Identifiable is a protocol in Swift that requires conforming types to have a unique identifier property'
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

**Identifiable** is a Swift protocol that requires conforming types to have a unique identifier property, which can be used to distinguish instances of the type.

## Syntax

```pseudo
protocol protocolName: Identifiable {
  // Protocol body
}
```

## Example

```swift
// Here, the Employee struct conforms to the Identifiable protocol by providing a unique id property using the UUID struct. This id can be used to distinguish instances of Employee in a collection or array, allowing for easy updates and deletions of specific employees.

struct Employee: Identifiable {
  let id = UUID()
  let firstName: String
  let lastName: String
  let isOnVacation: Bool
}
```

