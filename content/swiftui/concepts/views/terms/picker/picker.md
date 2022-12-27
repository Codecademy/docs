---
Title: 'Picker'
Description: 'A control that selects a value from a set of exclusive values.'
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

A `Picker` allows user to select a specific data between a set of data and can be displayed in different styles based on the type of data and its ultimate use.

## Syntax

You can create a **`Picker`** by providing a title (or label), a selection of binding, and the content to display. The `selection:` parameter needs to bound to an `@State` property, this will keep track of possible changes in the selection.

```pseudo
var body: some View {
    Picker(title: , selection: Binding<Hashable>) {
        Subviews / labels here
    }
}
```

## Example

In the example below, we have an `enum`, that stores a selection of difficulty levels, an `@State` property, that stores the selected difficulty, and inside the `body` there is a `List` with a `Picker`. 

```swift
enum Difficulty {
    case easy
    case medium
    case hard
    case extreme
}

@State private var selectedDifficulty: Difficulty = .medium

var body: some View {
    List {
        Picker("Level:", selection: $selectedDifficulty) {
            Text("Easy")
               .tag(Difficulty.medium)

            Text("Medium")
                .tag(Difficulty.medium)

            Text("Hard")
                .tag(Difficulty.hard)

            Text("Extreme")
                .tag(Difficulty.extreme)
        }
    }
}

```

- This will display a `Picker` with the label 'Level:' and the selection right at the end.
- Inside the brackets you have all available options.
- `.tag(Difficulty.easy)` differentiates between certain selectable views, like the possible values of the picker.

This will display the following:

![Picker](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-picker.png)
![Picker Open](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-picker-open.png)
