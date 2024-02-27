---
Title: 'Drag and Drop'
Description: 'Drag and Drop in SwiftUI allows a user to pick up and drop an object from one view to another.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Methods'
  - 'iOS'
CatalogContent:
  - 'learn-ios-course'
  - 'paths/ios-developer'
---

**Drag and Drop** in SwiftUI is the concept of moving and dropping an object (e.g. a UI element or UIView) around the screen. This feature allows users to easily rearrange, reorder, or transfer objects between different parts of the app's interface by dragging them, enhancing the overall user experience.

## Move Transferable Items

SwiftUI `Transferable` protocol simplifies the process of adding drag and drop experience to an app. To achieve this with minimal code using the `.draggable()` and `.dropDestination()` modifiers.

### Dragging

Enable dragging functionality by attaching the `.draggable()` view modifier to the view and passing in the object. The object has to conform to the `Transferable` protocol.
For example, this code displays four strings representing Apple products, and allows the user to drag any of them into the box positioned below:

```swift
struct ContentView: View {
    @State private var appleProducts: [String] = ["iphone", "macbook.and.iphone", "ipad", "applewatch.watchface"]
    @State private var dropImage = Image(systemName: "square.and.arrow.down")

    var body: some View {
        VStack {
            HStack {
                ForEach(appleProducts, id: \.self) { product in
                    Image(systemName: product)
                        .frame(minWidth: 50, minHeight: 50)
                        .background(.white)
                        .foregroundStyle(.black)
                        .cornerRadius(10)
                        .draggable(product)
                }
            }
            .frame(minWidth: 250, minHeight: 70)
            .cornerRadius(10)
            .background(.yellow)
        }
    }
}
```

### Dropping

In order to handle the drop, use `.dropDestination()`. It has two parameter values:

- `items` is an array containing all the dragged items. However, when only one item is being dragged, this array will contain just one element.
- `location` indicates the position of the dragged item within the drop view.

```swift
struct ContentView: View {
    @State private var appleProducts: [String] = ["iphone", "macbook.and.iphone", "ipad", "applewatch.watchface"]
    @State private var dropImage = Image(systemName: "square.and.arrow.down")

    var body: some View {
        VStack {
            HStack {
                ForEach(appleProducts, id: \.self) { product in
                    Image(systemName: product)
                        .frame(minWidth: 50, minHeight: 50)
                        .background(.white)
                        .foregroundStyle(.black)
                        .cornerRadius(10)
                        .draggable(product)
                }
            }
            .frame(minWidth: 250, minHeight: 70)
            .cornerRadius(10)
            .background(.yellow)

            Text("Drop items here:")

            dropImage
                .frame(width: 200, height: 150)
                .background(.blue)
                .foregroundStyle(.white)
                .cornerRadius(10)
                .dropDestination(for: Image.self) { items, location in
                    dropImage = items.first ?? Image(systemName: "square.and.arrow.down")
                    print(location)
                    return true
                }
        }
    }
}
```

## Moving Items Using Item Providers

**`DropDelegate`** is a `protocol` in SwiftUI that lets the developer work with a drag and drop operations in a flexible way. To enable a view to accept drops, use the `onDrop()` method and specify a drop delegate.
This code defines a drop delegate that handles different events related to dropping objects onto a view. The events are:

```pseudo
struct CDDropDelegate: DropDelegate {

    func dropEntered(info: DropInfo) {
    // Triggered when an object enters the view.
  }
    func dropExited(info: DropInfo) {
    // Triggered when an object exits the view.
  }

    func dropUpdated(info: DropInfo) -> DropProposal? {
    // Triggered when an object moves within the view.
  }

    func validateDrop(info: DropInfo) -> Bool {
    // Determines whether to accept or reject the drop.
  }

    func performDrop(info: DropInfo) -> Bool {
    // Handles the drop when the user drops an object onto the view.
  }
}
```

## `DropProposal`

**`DropProposal`** is a `structure` in SwiftUI that helps to control how object and drop operations should be handled when it's dropped into a SwiftUI view. It is used together with the `.onDrop()` modifier to determine what happens when a user drops an object.

`DropProposal` can be customized using the operation property to specify the drop operation (e.g., `.move` or `.copy`).

```swift
struct ContentView: View {
    @State private var text: String = ""

    var body: some View {
        VStack {
            Text("DropProposal Example Codecademy")
                .font(.largeTitle)
                .padding()

            Text("Drop Text Here:")

            Text(text)
                .padding()
                .background(Color.yellow)
                .onDrop(of: [UTType.text], isTargeted: $text?, perform: { providers, isTargeted in
                        // Create a custom DropProposal
                        let dropProposal = DropProposal(operation: .copy)

                        // Check if the drop is targeted to this view
                        if isTargeted {
                            // Handle the drop operation based on the custom DropProposal
                            if let itemProvider = providers.first {
                                itemProvider.loadObject(ofClass: String.self) { item, error in
                                    if let droppedText = item as? String {
                                        // Update the text with the dropped content
                                        DispatchQueue.main.async {
                                            self.text = droppedText
                                        }
                                    }
                                }
                                return dropProposal
                            }
                        }

                        return nil
                })
                .frame(width: 200, height: 100)
                .border(Color.gray)
        }
    }
}

```

## DropInfo

**`DropInfo`** is a `structure` that gives information about a drop action. It is commonly used when handling drops with the `onDrop()` modifier. `DropInfo` gives details about the drop location, the types of data being dropped, and other important information.

## Example Using `.onDrag()` and `.onDrop()`

Here is the example of a simple LazyVGrid with 4 items. The `.onDrag()` view modifier is called on each item which handles the dragging. And the `.onDrop()` view modifier allows us to move and reorder elements, with the result being stored in a state variable named `draggedItem`.

```swift
struct ContentView: View {
    @State private var items = ["Apple", "Banana", "Lemon", "Orange"]
    @State private var draggedItem: String?

    var body: some View {
        VStack {
            LazyVGrid(columns: [GridItem(.adaptive(minimum: 160), spacing: 15)], spacing: 15) {
                ForEach(items, id: \.self) { item in
                    Text(item)
                        .background(Color.green)
                        .font(.headline)
                        .foregroundColor(.white)
                        .shadow(color: .black, radius: 3)
                        .frame(maxWidth: 136)
                        .padding()
                        .onDrag({
                            self.draggedItem = item
                            return NSItemProvider(item: nil, typeIdentifier: item)
                        })
                        .onDrop(of: [UTType.text], delegate: MyDropDelegate(item: item, items: $items, draggedItem: $draggedItem))
                        }
                }
        }
    }
}


struct MyDropDelegate : DropDelegate {

    let item : String
    @Binding var items : [String]
    @Binding var draggedItem : String?

    func performDrop(info: DropInfo) -> Bool {
        return true
    }

    func dropEntered(info: DropInfo) {
        guard let draggedItem = self.draggedItem else {
            return
        }

        if draggedItem != item {
            let from = items.firstIndex(of: draggedItem)!
            let to = items.firstIndex(of: item)!
            withAnimation(.default) {
                self.items.move(fromOffsets: IndexSet(integer: from), toOffset: to > from ? to + 1 : to)
            }
        }
    }
}
```
