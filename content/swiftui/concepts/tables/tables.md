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

A **`Table`** in SwiftUI is a container that enables the creation and presentation of data collections in a tabular format: values organized into columns and rows. It is a valuable tool for displaying datasets that have a structured, grid-like layout. When the number of rows exceeds the available vertical space, the `Table` component will automatically enable vertical scrolling to ensure all data is accessible. Moreover, on macOS, horizontal scrolling becomes available when the number of columns exceeds the width of the view.

## Syntax

To a create a table that computes its row based on a collection of identifiable data takes the following general form:

```pseudo
var body: some View {
    Table(data: // provide a collection of identifiable data) {
        TableColumn(Text, value: KeyPath<Identifiable, String>)
        TableColumn(Text, value: KeyPath<Identifiable, String>)
        }
}
```

## Example

`Table` is an excellent choice for presenting data in a concise, organized manner. In the example below, to create a straightforward three-column table from an array of `Singer`, the data model needs to conform to `Identifiable`.

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

![SwiftUI Tables](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-tables.png)

### Adding Sorting to a Table

To enable sorting of `Table` columns, an array of `KeyPathComparator` objects should be created with default sorting inside. Additionally, a binding to an array of sort comparators needs to be provided to track changes in the sorting order. The table itself does not perform data sorting itself. To activate sorting, monitoring changes can be achieved using the `.onChange(of:perform:)` modifier and then sorting the data within the closure.

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

### Adding Selection to a Table

To improve table interactivity, enabling users to select one or more rows can be achieved. To do this, binding to an optional identifier of the item should be provided to the `Table`. For creating a table that permits multiple selections, a binding to a Set of IDs can be established. Here's an example of how to incorporate multi-select functionality into the previous example:

```swift
 @State private var selection = Set<Singer.ID>()

var body: some View {
  Table(people, selection: $selection, sortOrder: $sortOrder) {...}
}
```

### Customizing a Table Style

One of the easiest methods to change a table's appearance is by using the `.tableStyle(_:)` modifier. This modifier requires one argument, a TableStyle, which defines the style to use for the table. For instance, SwiftUI provides several table styles, such as `InsetTableStyle` and, on macOS, `BorderedTableStyle`. The default style is `AutomaticTableStyle`, which is available on all platforms that support `Table`.

```swift
Table(people, selection: $selection, sortOrder: $sortOrder) {
}
.tableStyle(InsertTableStyle())
```

### Setting a Fixed Width for a Table Column

Defining a precise width for a table column can be accomplished as follows:

```swift
TableColumn("Name", value: \.name)
.width(100)
```
