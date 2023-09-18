---
Title: 'Drag and Drop' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Drag and Drop in SwiftUI allows a user to pick up and drop an object from one view to another.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'iOS'
  - 'Mobile Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'API'
  - 'Methods'
  - 'iOS'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-ios-course'
  - 'paths/ios-developer'
---

**Drag and Drop** in SwiftUI is the concept of moving and dropping an object (e.g. a UI element or UIView) around the screen. This feature allows users to easily rearrange, reorder, or transfer objects between different parts of the app's interface by dragging them, enhancing the overall user experience.

**`DropDelegate`** is a `protocol` in SwiftUI that lets you work with a drag and drop operations in a flexible way. To enable a view to accept drops, use the `onDrop()` method and specify a drop delegate.
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

## DropProposal

**`DropProposal`** is a `structure` in SwiftUI that helps to control how object and drop operations should be handled when it's dropped into a SwiftUI view. It is used together with the onDrop() modifier to determine what happens when a user drops an object.
You can customize the DropProposal using the operation property to specify the drop operation (e.g., .move or .copy).

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

**`DropInfo`** is a `structure` that gives information about a drop action. It is commonly used when handling drops with the onDrop() modifier. DropInfo gives details about the drop location, the types of data being dropped, and other important information.

## Drag and Drop in SwiftUI example

```swift
struct ContentView: View {
    @State private var items = ["Apple", "Banana", "Lemon", "Orange"]
    @State private var draggedItem: String?
    
    var body: some View {
        VStack {
            LazyVGrid(columns: [GridItem(.adaptive(minimum: 160), spacing: 15)], spacing: 15) {
                ForEach(items, id: \.self) { item in
                    Text(item)
                        .background(Color.red)
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

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

