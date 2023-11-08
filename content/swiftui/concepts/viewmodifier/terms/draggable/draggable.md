---
Title: '.draggable()'
Description: 'Gives a view the ability to be dragged.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The `.draggable()` view modifier in SwiftUI gives a view the ability to be dragged around the user interface. It works in conjunction with the `.dropDestination()` modifier which provides a destination to drop draggable views. The data type or view you wish to drag-and-drop must conform to the Transferable protocol.

> **Note**: The data to be dragged and subsequently dropped must conform to the Transferable protocol. This ensures the data being dragged can be recognized and processed by other views or external applications. For information on protocols, see [Protocols](https://www.codecademy.com/resources/docs/swift/protocols).

## Syntax

```pseudo
View
  .draggable(payload, preview)
```

This method has two optional parameters:

- `payload`: The data the view carries as it is dragged, the default value is the view itself
- `preview`: The feedback you want to display to the user while they drag the view

## Example

```swift
struct ContentView: View {
  @State private var myPayload: String = "I belong in a blue box."
  var body: some View {
    HStack(spacing: 50) {
      Square(text: $myPayload, color: .pink)
        .draggable(myPayload, preview: {
          Text("Dragging...")
            .padding()
            .background(Color.purple)
            .cornerRadius(25)
        })
    }
  }
}
struct Square: View {
 @Binding var text: String
 var color: Color
 var body: some View {
   ZStack {
     color
     Text(text)
       .padding()
       .bold()
   }
   .frame(width: 150, height: 150)
   .cornerRadius(25)
  }
}
```

> **Note**: The `Square` view is a custom view that takes two parameters: `text` and `color`. The `text` parameter binds to the `myPayload` state variable, while the `color` parameter determines the background color of the view. For information on custom views, see [Views](https://www.codecademy.com/resources/docs/swiftui/views).

In the example, the custom Square view has a `.draggable()` modifier. When dragged, it carries the `String` assigned to `myPayload` and displays a `"Dragging..."` message within a purple, rounded rectangle until it is dropped.

This will display:

![SwiftUI ViewModifier Draggable](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-draggable.gif)

> **Note**: `.draggable()` is the first of two parts in the drag-and-drop operation. While it can be used independently, as shown here, it is usually paired with the `.dropDestination()` modifier. For information on setting up a drop destination, see [.dropDestination()](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/dropdestination).
