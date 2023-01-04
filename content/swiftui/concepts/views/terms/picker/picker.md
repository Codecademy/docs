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

In the example below, we have an `enum` that stores a selection of difficulty levels, an `@State` property that stores the selected difficulty, and inside the `body` there is a `List` with a `Picker`. 

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

A **`Picker`** can be created by providing a title or label, a selection of binding, and the content to display. The `selection` parameter needs to bound to an `@State` property which will keep track of possible changes in the selection.

The example above will display a `Picker` wrapped inside a `HStack` which will display the text `'Level:'` and the selection right at the end. 
The `'Text'` and the `'Picker'` are separated by a `'Spacer()'` which is pushing both views to the edge of the screen.
Inside the brackets are all available options. `.tag()` differentiates between certain selectable views, like the possible values of the picker.

This will display the following:

![Picker](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-picker.png)
![Picker Open](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-picker-open.png)
