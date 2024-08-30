---
Title: 'Search'
Description: 'A Search Interface can be easily created using the .searchable() view modifier.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'Search'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

A **Search Interface** can be easily created using the `.searchable()` [view modifier](https://www.codecademy.com/resources/docs/swiftui/viewmodifier) applied to a `NavigationSplitView` or `NavigationStack`, or to a [view](https://www.codecademy.com/resources/docs/swiftui/views) within them.

## Syntax

```pseudo
NavigationSplitView or NavigationStack
    .searchable(
        text: binding variable of text to search for,
        placement: position (optional),
        prompt: prompt text (optional)
    )
```

Here are a few of the `placement` property types:

- `.automatic` places the search box automatically, this is the default value.
- `.sidebar` places the search box in the sidebar.
- `.toolbar` places the search box in the toolbar.

`prompt` is the prompt text to show in the search box. This defaults to display "Search" if the `prompt` parameter is not used.

## Example

The following example is a simple search interface. Two variables are declared:

- An empty string named `searchText` to hold the text for searches.
- A `plants` [array](https://www.codecademy.com/resources/docs/swift/arrays) containing plant names for the search to filter.

When the text in the search box is updated, `searchText` also updates, being bound by the `.searchable()`'s `text` parameter `$searchText`. The code within the `List` checks whether to show a plant depending on the value of `searchText`.

```swift
import SwiftUI

struct SearchBoxListView: View {
    @State private var searchText=""
    let plants = ["Birch", "Daffodil", "Daisy", "Dandylion", "Fir", "Lily", "Oak", "Olive", "Rose", "Tulip"]

    var body: some View {
        NavigationStack {
            List(plants, id: \.self) { plant in
                if searchText.isEmpty || plant.contains(searchText) {
                    Text(plant)
                }
            }.navigationTitle("Plants 🌷🌱")
        }
        .searchable(
            text: $searchText,
            prompt: "What plant are you looking for?"
        )
    }
}
```

This will initially display:

![SwiftUI Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-search-1.jpg)

If text is entered in the search box, the list will be filtered to contain only items that match the query text:

![SwiftUI Search with query](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-search-2.jpg)
