---
Title: 'List'
Description: 'A List is a  container that presents data arranged in a a column with the ability to select one or more items.'
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

The **`List`** view arranges its elements in a column. It can be either static, when you hard-coding the data into the list, or dynamic, when the list pulls the data from an array.

## Syntax

```pseudo
var body: some View {
    List {
        // Subviews here
    }
}
```

## Example

In the example below, a `List` pulls the data from a variable called `continents` that contains an array of `Strings` then displays them in a column:

```swift
var continents = ["Africa", "Antartica", "Asia", "Europe", "North America", "Oceania", "South America"]

var body: some View {
    List(continents, id: \.self) {
        Text($0)
    }
}
```
- `id: \.self` allows Swift to identify each of the items uniquely in order to update the values when changed.
- `$0` is a short hand syntax used to reference the first argument in a closure.

This will display the following:

![List](https://raw.githubusercontent.com/Codecademy/docs/main/media/list.png)
