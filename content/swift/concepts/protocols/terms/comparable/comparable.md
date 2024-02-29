---
Title: 'Comparable'
Description: 'Protocol in Swift used to define a sort order for instances of a type.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'iOS'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Comparable`** protocol in Swift is used to define a sort order for instances of a type. To add `Comparable` conformance to custom types, define the `<` and `==` operators as static methods of those types.

## Syntax

```pseudo
struct StructName: Comparable {
    let var: Int

    static func < (lhs: StructName, rhs: StructName) -> Bool {
        return lhs.var < rhs.var
    }

    static func == (lhs: StructName, rhs: StructName) -> Bool {
        return lhs.var == rhs.var
    }
}
```

In the implementation of the `Comparable` protocol of the custom type defined below, the `Comparable` keyword is used in the `struct` declaration, then static methods for `<` and `==` are defined.

## Example

```swift
struct Building: Comparable {
    let height: Int

    static func < (lhs: Building, rhs: Building) -> Bool {
        return lhs.height < rhs.height
    }

    static func == (lhs: Building, rhs: Building) -> Bool {
        return lhs.height == rhs.height
    }
}

let eiffelTower = Building(height: 300)
let burjKhalifa = Building(height: 828)
let sydneyTower = Building(height: 300)
```

In this example the custom type, `Building`, was created with a `height` constant, and static methods for the `<` and `==` comparison operators were defined. There are three instances of this type: `eiffelTower`, `burjKhalifa` and `sydneyTower`. The example conforms to the `Comparable` protocol, allowing each of the instances to be compared:

```swift
print(eiffelTower < burjKhalifa) // true
print(eiffelTower > sydneyTower) // false
print(sydneyTower == burjKhalifa) // false
print(sydneyTower != eiffelTower) // false
```
