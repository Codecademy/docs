---
Title: '.dropDestination()'
Description: 'Applies a destination to drop a draggable view.'
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

The **`.dropDestination()`** view modifier in SwiftUI is applied to a view that will receive a dropped item. It works in conjunction with the `.draggable()` view modifier which gives a view the ability to be dragged.

> **Note**: The data to be dragged and subsequently dropped must conform to the `Transferable` protocol. This ensures the data being dragged can be recognized and processed by other views or external applications. For more information see [protocols](https://www.codecademy.com/resources/docs/swift/protocols).

## Syntax

```pseudo
View
  .dropDestination(
    for: MyDataType.self,
    action: (droppedItems, location) -> Bool,
    isTargeted: (isMyViewTargeted) -> Void
  )
```

This method takes three required parameters:

- `for:` The data type of the draggable item that will be dropped on this view.
- `action:` A closure invoked when a draggable item is dropped on this view. It adds the dropped items to a designated array and stores the drop location (CGPoint) in a specified variable. Custom actions are defined within this closure. It returns true if the drop is successful and false otherwise.
- `isTargeted:` A closure that is triggered when a draggable item hovers over this view, updating a boolean value to true when a draggable item is hovering over this view, and false when it is not.

> **Note**: Both `action` and `isTargeted` are escaping closures. This means that they are executed after the function (they are passed to) returns. For a drag-and-drop operation to work appropriately, the `.dropDestination()` method must return the value of the data dropped on the view before the `action` and `isTargeted` closures can be executed. For more information see [closures](https://www.codecademy.com/resources/docs/swift/closures).

## Example

```swift
struct ContentView: View {
  @State private var isDropTargeted = false
  @State private var droppedPayload: String = "No text dropped yet"
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
  Square(text: $droppedPayload, color: .blue)
    .dropDestination(for: String.self) { receivedPayload, locationDrop in
      if !receivedPayload.isEmpty {
        droppedPayload = receivedPayload[0]
        myPayload = " "
        return true
      }
      return false
      } isTargeted: {
        isDropTargeted = $0
    }
    .brightness(isDropTargeted ? -0.2 : 0)
    .scaleEffect(isDropTargeted ? 1.25 : 1)
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
}
```

> **Note**: The `Square` view is a custom view that takes two parameters: `text` and `color`. The `text` parameter binds to the `droppedPayload` state variable, while the `color` parameter determines the background color of the view. For more information see [views](https://www.codecademy.com/resources/docs/swiftui/views).

In the example, the custom `Square` view has a `.dropDestination()` modifier. The following arguments are passed to this method:

- `for:` is set to `String.self` since the draggable and droppable data, `myPayload`, is of type String.
- `action:` defines variables to store received data `receivedPayload` and its drop location `locationDrop`, also determines custom actions, such as displaying dropped data on the view.
- `isTargeted:` utilizes the boolean `isDropTargeted` which, when `true`, applies the `.brightness()` and `.scaleEffect()` modifiers to the view.

> **Note**: By default, if the draggable items and drop destination reside in the same container, the item is removed from the original container and placed into the receiving one. Conversely, if the draggable items and drop destination are in different containers, the item is copied to the receiving container, and persists in both. These behaviors can be modified within the action closure.

This will display:

![SwiftUI ViewModifier DropDestination](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-dropDestination.gif)

> **Note**: `.dropDestination()` is the second of two parts in the drag-and-drop operation. For information on part one see [.draggable()](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/draggable).
