---
Title: 'Picker'
Description: 'Allows a user to select a value from a set of exclusive values.'
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

A `Picker` allows a user to select a specific data value between a set of data. It can be displayed with different styles based on the type of data and its ultimate use.

## Syntax

```pseudo
var body: some View {
    Picker("Title here", selection: Binding<Hashable>) {
        Subviews and/or labels here
    }
}
```

## Example

In the example below, the `@State` property wrapper tracks the selected difficulty, and inside the `body` there is a `Picker` that allows the user to select a difficulty from a selection of difficulty levels that are stored within the [`enum`](https://www.codecademy.com/resources/docs/swift/enums).

```swift
enum Difficulty {
    case easy
    case medium
    case hard
    case extreme
}

@State private var selectedDifficulty: Difficulty = .medium

var body: some View {
    HStack {
        Text("Level:")

        Spacer()

        Picker("Level:", selection: $selectedDifficulty) {
            Text("Easy")
               .tag(Difficulty.easy)

            Text("Medium")
                .tag(Difficulty.medium)

            Text("Hard")
                .tag(Difficulty.hard)

            Text("Extreme")
                .tag(Difficulty.extreme)
        }
    }
    .padding()
}
```

A **`Picker`** can be created by providing a title or label, a selection, and the content to display. The `selection` parameter needs to be bound to an `@State` property which will keep track of possible changes in the selection.

The example above will display a `Picker` wrapped inside a [`HStack`](https://www.codecademy.com/resources/docs/swiftui/views/hstack). In addition, the `Text` and `Picker` views are separated by a `Spacer()` which will push both views to the edge of the screen. All the available difficulty options are available within the picker as text views and the `.tag()` modifier differentiates between the selectable views.

This will display the following by default and when the picker is clicked, respectively:

![Picker](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-picker.png)
![Picker Open](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-picker-open.png)
