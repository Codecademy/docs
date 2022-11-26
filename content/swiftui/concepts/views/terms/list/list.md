---
Title: 'List'
Description: 'A list is a container that presents rows of data in a single column.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'List'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **`List`** creates its content statically but is commonly used to create dynamic list from a collection of data.

## Syntax

```pseudo
List(continents, id: \.self) {
    // How to display data (eg: continents)
}
```
A `List`, whether is static or dynamic, has different modifiers that can change the look.

## Example

The following example a variable holds an array of texts. The `List` displays the items inside the array in a column, assigns an `id` so SwiftUI can identify each of the items uniquely in the array:

```swift
var continents = ["Africa", "Antartica", "Asia", "Europe", "North America", "Oceania", "South America"]

    var body: some View {
        List(continents, id: \.self) {
            Text($0)
        }
    }
```
`$0` is a short hand syntax used to reference the first argument in a closure.

![List](https://raw.githubusercontent.com/Codecademy/docs/main/media/list.png)
