---
Title: 'Tables' 
Description: 'A container that displays data in rows organized into one or more columns and optionally allows the selection of one or more items.'
Subjects: 
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'iOS'
  - 'SwiftUI'
  - 'Tables'
CatalogContent:
  - 'learn-ios-course'
  - 'paths/ios-developer'
---

**`Table`** in SwiftUI is a container that enables the creation and presentation of data collections in a tabular format, organized into columns and rows. It is a valuable tool for displaying datasets that have a structured, grid-like layout. When the number of rows exceeds the available vertical space, the `Table` component will automatically enable vertical scrolling to ensure all data is accessible. Moreover, on macOS, horizontal scrolling becomes available when the number of columns exceeds the width of the view.

## Creating a Table 

`Table` is a great option for displaying a collection of data in a compact form. In the example below, in order to create a simple three-column table from an array of Singer your data model has to conform to `Identifiable`.

### Example
```swift
struct ContentView: View {
    @State private var people = [
        Singer(name: "Taylor", lastName: "Swift", ranking: 95),
        Singer(name: "Olivia", lastName: "Rodrigo", ranking: 80),
        Singer(name: "Billie", lastName: "Eilish", ranking: 70),
        Singer(name: "Katy", lastName: "Perry", ranking: 75)
    ]
    
    var body: some View {
        Table(people) {
            TableColumn("Name", value: \.name)
            TableColumn("Last Name", value: \.lastName)
            TableColumn("Ranking") {
                people in
                Text(String(people.ranking))
            }
        }
    }
}

struct Singer: Identifiable {
    let name: String
    let lastName: String
    let ranking: Int
    let id = UUID()
    
    var fullName: String { name + " " + lastName}
}
```

## Adding sorting to a table

To make the columns of a `Table` sortable we need to make an array of KeyPathComparator objects with the default sorting inside.  Additionally, provide a binding to an array of sort comparators to watch for changes in the sort order. The table doesn't sort data by itself. To enable sorting, you can monitor changes by using the `.onChange(of:perform:)` modifier and then sort the data within the closure. 
Here's an example of how to add sorting to the previous code:

```swift
struct ContentView: View {
    @State private var people = [
        Singer(name: "Taylor", lastName: "Swift", ranking: 95),
        Singer(name: "Olivia", lastName: "Rodrigo", ranking: 80),
        Singer(name: "Billie", lastName: "Eilish", ranking: 70),
        Singer(name: "Katy", lastName: "Perry", ranking: 75)
    ]
    
    @State private var sortOrder = [KeyPathComparator(\Singer.name)]
    
    var body: some View {
        Table(people, sortOrder: $sortOrder) {
            TableColumn("Name", value: \.name)
            TableColumn("Last Name", value: \.lastName)
            TableColumn("Ranking") {
                people in
                Text(String(people.ranking))
            }
        }
        .onChange(of: sortOrder) { newOrder in
            people.sort(using: newOrder)
        }
    }
}
```

## Adding selection to a table

 To enhance the interactivity of tables we can enable users to choose one or more rows. To achieve this pass the `Table` a binding to an optional identifier of the item. To create a table that allows for multiple selections, you can establish a binding to a Set of IDs. 
 Here's an example of how to use multi-select functionality into the previous example:

```swift
 // @State private var selection: Singer.ID? allows one row selection
 @State private var selection = Set<Singer.ID>()

 var body: some View {
    Table(people, selection: $selection, sortOrder: $sortOrder) {...}
 }
```
## Customizing a Table style

One of the easiest methods to change a table's appearance is by using the `.tableStyle(_:)` modifier. This modifier requires one argument, a TableStyle, which defines the style to use for the table. For instance, SwiftUI provides several table styles, such as `InsetTableStyle` and, on macOS, `BorderedTableStyle`. The default style is `AutomaticTableStyle`, which is available on all platforms that support `Table`.

```swift
Table(people, selection: $selection, sortOrder: $sortOrder) {
    // Table columns
} 
.tableStyle(InsertTableStyle())
```

## Setting a fixed width for the table column

You can set a specific width for a table column:

```swift
TableColumn("Name", value: \.name)
.width(100)
```
