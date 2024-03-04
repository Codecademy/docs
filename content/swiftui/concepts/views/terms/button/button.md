---
Title: 'Button'
Description: 'Performs an action when pressed on.'
Subjects:
  - 'Mobile Development'
  - 'Software Development'
Tags:
  - 'Buttons'
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **`Button`** view is a `struct` that can be interacted with and used to perform an action when pressed on. It can be customized using various modifiers provided by the SwiftUI framework.

## Syntax

There are many ways to construct a button in SwiftUI:

```pseudo
Button("label") {
    // Some action
}

// Label details can be provided after action:

Button {
    // Some action
} label: {
    // Some label
}

Button(
  action: { // Initiates when the button is pressed },
  label: { // Displays some image, text, or both on the button }
)
```

To create a button, an action and a label are required. The `action` expects a closure or a method that it will execute when the button is pressed. The `label` expects a closure or a view, which can be an image, text, or both.

When creating a button, the `label` property can be left out and its details can be provided in a separate closure after the button call. This provides more flexibility for customizing the button's appearance.

## Example

The following example demonstrates the use of a `Button`. Pressing the button will randomly change the colors of the screen and the button itself:

```swift
struct ContentView: View {
    @State var backgroundColor = Color(red: 0.69, green: 0.96, blue: 1.0)
    @State var buttonColor = Color(red: 0.82, green: 0.34, blue: 0.45)

    var body: some View {
        ZStack {
            backgroundColor.ignoresSafeArea()

            VStack {
                Button(
                    action: { randomizeColors() }, // Action to randomize the colors when the button is pressed
                    label: {
                        Text("Press This") // The label text of the button
                            .font(.title)
                            .fontWeight(.semibold)
                            .foregroundColor(.white)
                            .padding()
                            .padding(.horizontal, 20)
                            .background(
                                buttonColor
                                    .cornerRadius(30)
                                    .shadow(radius: 5)
                            )
                    }
                )
            }
        }
    }

    func randomizeColors() -> Void {
        backgroundColor = Color(
            red: Double.random(in: 0...1),
            green: Double.random(in: 0...1),
            blue: Double.random(in: 0...1)
        )
        buttonColor = Color(
            red: Double.random(in: 0...1),
            green: Double.random(in: 0...1),
            blue: Double.random(in: 0...1)
        )
    }
}
```

Pressing the button triggers the `.randomizeColors()` method, which generates random [RGB](<[url](https://www.codecademy.com/resources/docs/swiftui/colors)>) values for the `.backgroundColor` and `.buttonColor` properties.

The following will be displayed:

![SwiftUI Views Button Gif](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-button.gif)
