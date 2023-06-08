---
Title: 'Lists'
Description: 'In SwiftUI, lists are single-column containers that vertically display a collection of items.'
Subjects:  
  - 'iOS Development'
Tags:
  - 'SwiftUI'
  - 'iOS'
CatalogContent: 
  - 'learn-swift'
  - 'paths/ios-developer'
---

**Lists** in SwiftUI are single-column containers that vertically display a collection of items. 

## Creating Lists

SwiftUI offers many ways to create lists.

The `List` `struct` is used as a container to create a static list with a fixed number of rows:

```swift
struct ListExample: View {
    var body: some View {
        List {
            Text("Item 1")
            Text("Item 2")
            Text("Item 3")
        }
    }
}
```

To create a dynamic list, there needs to be some data that populates it. One way to store this data is through an array.

For example, a list of restaurant menu courses could be stored in array like so:

```swift
var menu = ["Appetizer", "Entrée", "Dessert"]
```

## How To Make Data Identifiable in the List

To make a list's data identifiable, an `id` property can be attached to each item in the list. One way to do this is by setting the `id` property to `\.self` in a `ForEach` loop as shown below:

```swift
ForEach(menu, id: \.self) { course in
    Text(sections)
}
```

For styling purposes, modifiers like `.listStyle()` can be used to alter how a list is displayed.
