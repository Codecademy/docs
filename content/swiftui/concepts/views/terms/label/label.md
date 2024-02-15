---
Title: 'Label'
Description: 'Creates a component that includes an icon and a title.'
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

A **`label`** is a standard user interface component that includes an icon and a title. It appears in many different contexts like collections, lists, or buttons to name a few.

## Syntax

```pseudo
Label(myLabelName, systemImage: myImage)
```

- A `Label` can be a stand-alone component.
- `myLabelName` is a string that will be displayed on the label as text.
- `myImage` is a string that will be displayed on the label as an image.
- `ViewModifiers` can be used to display just the icon, text, or both, or automatically adjust based on the space available.

## Example

The following example displays a `Text` view that represents a number and two `Button`s. The first `Button` uses a `Label` and the second one is a broken-down version of what `Label` actually accomplishes:

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

Each time the user clicks either the top or bottom button, the `score` above will increase or reduce, respectively, by `1`.

This will display the following:

![Label](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-label.gif)
