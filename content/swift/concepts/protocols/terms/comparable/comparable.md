---
Title: 'Comparable Protocol' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Protocol in Swift used to define a sort order for instances of a type.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Mobile Development'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'iOS'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
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

To conform a custom type to the `Comparable` protocol conformance to `Comparable` is first declared, then static methods for `<` and `==` are defined.

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

A custom type `Building` was created with a `height` constant, and static methods for `<` and `==` were defined. There are three instances of this type: `eiffelTower`, `burjKhalifa` and `sydneyTower`. The example conforms to the `Comparable` protocol, allowing each of the instances to be compared:

```swift
print(eiffelTower < burjKhalifa) // true
print(eiffelTower > sydneyTower) // false
print(sydneyTower == burjKhalifa) // false
print(sydneyTower != eiffelTower) // false
```
