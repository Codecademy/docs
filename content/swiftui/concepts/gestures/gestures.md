---
Title: 'Gestures' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Defines interactions from taps, clicks, and swipes to fine-grained gestures.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'iOS'
  - 'Mobile Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'SwiftUI ViewModifiers'
  - 'SwiftUI'
  - 'iOS'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-iOS-course'
  - 'path/iOS-path'
---

Views can respond to taps, drags, pinches and other gestures just by adding **Gesture** modifiers to your View.

## Tap Gestures

This is the most basic type of Gesture.
The `.onTapGesture()` modifier can be called on the view desired to track the gesture on.

```Swift
struct Tap: View {
    var body: some View {
        Text("Hello, World!")
            .onTapGesture {
                print("View Tapped") 
            }
        
    }
}

```

The output looks like:

![This is a gif that shows the effect of using TapGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-tapgesture-example.gif)

Every time the text view "Hello, World" is tapped, it prints "View Tapped" in the console.
The action can also be implemented after certain amount of tap gestures. For example:

```Swift
struct Tap: View {
    var body: some View {
        Text("Hello, World!")
            .onTapGesture(count: 3) {
                print("View Tapped") 
            }
        
    }
}
```
In this example it prints "View Tapped" after taping the text view three times.

> **Note:** When a button is needed, use a Button instance rather than a tap gesture. Any view can be used as the button’s label, and the button type automatically provides many of the standard behaviors that users expect from a button, like accessibility labels and hints. 

## Long Press Gestures

`onLongPressGesture()` it's used for handling long presses gesture. `onLongPressGesture()` have an extra parameter called `minimumDuration:` (takes Double as input), it's used to specify after how much time the action will be executed. For example:

```Swift
struct Tap: View {
    var body: some View {
        Text("Hello, World!")
            .onLongPressGesture(minimumDuration: 2) {
                print("View Tapped")
            }
        
    }
}
```
The output looks like:

![This is a gif that shows the effect of using LongPressGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-longgesture-example.gif)

 "Long pressed!" was be printed in the console after pressing the text view for 2 seconds.

## Advanced Gestures

For more advanced and customizable gestures use the `gesture()` modifier with one of the gesture structs like: `DragGesture()`, `LongPressGesture()`, `MagnificationGesture()`, `RotationGesture()`, and `TapGesture()`. These all have special modifiers, usually `onEnded()` and `onChanged() `, and they can be used to take action when the gestures are in-flight (for `onChanged()`) or completed (`for onEnded()`).

As an example, a magnification gesture could be attached to a view so that pinching in and out scales the view up and down. This can be done by creating two `@State` properties to store the scale amount, using that inside a `scaleEffect()` modifier, then setting those values in the gesture, like this:

```Swift
struct ContentView: View {
    @State private var currentAmount = 0.0
    @State private var finalAmount = 1.0

    var body: some View {
        Text("Hello, World!")
            .scaleEffect(finalAmount + currentAmount)
            .gesture(
                MagnificationGesture()
                    .onChanged { amount in
                        currentAmount = amount - 1
                    }
                    .onEnded { amount in
                        finalAmount += currentAmount 
                        currentAmount = 0
                    }
            )
    }
}
```
The output looks like:

![This is a gif that shows the effect of using MagnificationGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-magnificationgesture-example.gif)

There is a problem with the code above, because the text view didn't return to it's normal state, this can result in a bad user experience. So to fix this problem the `currentAmount` property will be assigned to zero in the `.onEnded()` modifier, so the text view will return to it's normal size after completing the gesture: 

```Swift
struct Tap: View {
    @State private var currentAmount = 0.0

        var body: some View {
            Text("Hello, World!")
                .padding()
                .foregroundColor(.red)
                .scaleEffect(1 + currentAmount)
                .gesture(
                    MagnificationGesture()
                        .onChanged { amount in
                            currentAmount = amount - 1
                        }
                        .onEnded { amount in
                            withAnimation(.spring()){
                                currentAmount = 0
                            }
                        }
                )
        }
}
```
The output looks like:

![This is a gif that shows the effect of using MagnificationGesture with Spring animation in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-magnficationgesture-example-with-animation.gif)

the `withAnimation(.spring()){}` was added to gave the text view a spring animation while it returns to its normal size, as it looks in the gif above.
