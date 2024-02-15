---
Title: 'List'
Description: 'Presents data arranged in a column with the ability to select one or more items.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`List`** view arranges its elements into a column. It can be either static, when hard-coding the data into the list, or dynamic, when the data is pulled from an [array](https://www.codecademy.com/resources/docs/swift/arrays).

## Syntax

```pseudo
var body: some View {
    List {
        Subviews here
    }
}
```

## Example

In the example below, a `List` pulls the data from the `continents` array, and then displays them into a single column:

```swift
var continents = ["Africa", "Antartica", "Asia", "Europe", "North America", "Oceania", "South America"]

var body: some View {
    List(continents, id: \.self) {
        Text($0)
    }
}
```

- `id: \.self` allows Swift to identify each of the items uniquely in order to update the values when changed.
- `$0` is a shorthand syntax used to reference the first argument in a [closure](https://www.codecademy.com/resources/docs/swift/closures).

This will display the following:

![List](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-list.png)
