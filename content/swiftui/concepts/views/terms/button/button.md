---
Title: 'Button'
Description: 'Commences an action when it is pressed on.'
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

A **Button** is a **View** that can be used to perform some action when pressed. It can be styled with various modififiers provided by the SwiftUI framework.

## Syntax

```pseudo
Button(
  action: { // Initiates when the button is pressed }, 
  label: { // Displays some image, text, or both on the button }
)
```

To create a button, an action and a label are required. The 'action' parameter expects a closure or a method that it will execute when the button is pressed. The 'label' expects a closure or a view, which can be an image, text, or both.

```pseudo
Button(action: { // Initiates when the button is pressed }) {
  // A Label closure or view
}
```
The 'label' parameter can be excluded from the 'Button' initialization, and its details can be provided in a seperate closure following the Button call. This allows for more flexibility in customizing the button's appearance.

```pseudo
Button("title string", action: { // Initiates when the button is pressed })
```

If the label contains only text, the convenience initializer can be used by accepting a title string as its first parameter, followed by an action.

## Example

In the following example, a `Button` can be pressed to randomly change the colors displayed:

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

Whenever the `Button` is pressed,`backgroundColor` and `buttonColor` are given new, and random RGB values. This changes the background color of the screen, and the color of the button.

The following will be displayed:

// Gif of button being pressed and colors changing
