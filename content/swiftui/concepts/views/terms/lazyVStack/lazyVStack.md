---
Title: 'Lazy VStack'
Description: 'A view that arranges its children in a line that grows vertically, creating items only as needed.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'

The **`Lazy VStack`** has all the properties as a standard VStack **BUT** it will not create items until it needs to render them on screen.

## Syntax

```pseudo
var body: some View {
    LazyVStack {
        Subviews here
    }
}
```

The `LazyVStack` view rests within the body of a `View`.

## Example

In this example a `ScrollView` contains a `LazyVStack` that consists of a vertical row of text views. The `LazyVStack` will create the rows only when they are needed.

```swift
var body: some View {
    ScrollView {
        LazyVStack(alignment: .leading) {
            ForEach(1...100, id: \.self) {
                Text("Row \($0)")
            }
        }
    }
}
```

This will display the following:

![LazyVStack](https://raw.githubusercontent.com/Codecademy/docs/main/media/lazyVStack-gif.gif)
