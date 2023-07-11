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

A **`Button`** is a view that can be interacted with and used to perform some action when pressed. It can be styled with various modififiers provided by the SwiftUI framework.

## Syntax

```pseudo
Button(
  action: { // Initiates when the button is pressed }, 
  label: { // Displays some image, text, or both on the button }
)
```

To create a `button`, an `action` and a `label` are required. The `action` parameter expects a closure or a method that it will execute when the button is pressed. The 'label' expects a closure or a view, which can be an image, text, or both.

```pseudo
Button(action: { // Initiates when the button is pressed }) {
  // A Label closure or view
}
```
The `label` parameter can be excluded from the `Button` initialization, and its details can be provided in a seperate closure following the button call. This allows for more flexibility in customizing the button's appearance.

## Example

The following example demonstrates the use of a `Button` in SwiftUI. Pressing the button will randomly change the colors of the screen and the button itself:

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

- Pressing the button triggers the `randomizeColors()` method, which generates random RGB values for the `backgroundColor` and `buttonColor` properties. 

The following will be displayed:

![swiftui-button-medium](https://github.com/kevveth/docs/assets/68872850/3f6283f5-bef2-452f-a635-a7608e115426 "Gif of a SwiftUI button being pressed. The colors of the screen and button change randomly as a result.")



