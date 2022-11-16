---
Title: 'Label'
Description: 'A label is a standard user interface component that includes an icon and a title.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Label'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **`label`** is a standard user interface component that includes an icon and a title. It appears in many different context like collections, lists or buttons, to name a few.

## Syntax

```pseudo
Label("Lightning", systemImage: "bolt.fill")
}
```

The `label` can be a stand-alone component. It has modifiers where it can display just the icon, text, both or automatically adjust based on the space available.

## Example

The following example displays a `Text` that represent a number and two `Buttons`. The first one is using a `Label` and the second one is a broken down version of what `Label` actually does:

```swift
@State private var score = 0

var body: some View {
    VStack(spacing: 20) {
        Text("\(score)")

        Button {
            score += 1
        } label: {
            Label("Add", systemImage: "plus")
        }

        Button {
            score -= 1
        } label: {
            HStack {
                Image(systemName: "minus")
                Text("Remove")
            }
        }
    }
}
```
Each time the user selects press one of the two `Button`, the number above the button `"Add"` will increase or reduce the score by 1.

This will display the following:

![Label](https://raw.githubusercontent.com/Codecademy/docs/main/media/labels.png)
