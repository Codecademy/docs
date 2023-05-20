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
You can call `.onTapGesture()` modifier on the view you want to track gesture on.

```Swift
Text("Hello, World!") // SwiftUI Text view.
            .onTapGesture { // by using this modifier, you can run a specifec action when the View is tapped.
                print("View Tapped") // this function will print "View Tapped" in the console.
            }

```
**Output**:

```Shell
View Tapped 
```

In the above example, everytime you tap the text view "Hello, World", it prints "View Tapped" in the console.
You can also implement the action after certain amount of tap gestures. For example:

```Swift
Text("Hello, World!") // SwiftUI Text view.
            .onTapGesture(count: 3) { // by using this modifier, you can run a specifec action when the View is tapped 3 times.
                print("View Tapped") // this function will print "View Tapped" in the console.
            }
```
**Output**:

```Shell
View Tapped
```
In this example it prints "View Tapped" after taping the text view for three times.
 
> Important note: When you need a button, use a Button instance rather than a tap gesture. You can use any view as the button’s label, and the button type automatically provides many of the standard behaviors that users expect from a button, like accessibility labels and hints. 


## Long Press Gestures
`onLongPressGesture()` it's used for handling long presses. Like `.onTapGesture()`, `onLongPressGesture()` is also customizable. For example, you can specify a minimum duration for the press, so your action closure only triggers after a specific number of seconds have passed. For example, this will trigger only after two seconds:

```Swift
Text("Hello, World!") // SwiftUI Text view.
            .onLongPressGesture(minimumDuration: 2) { // by using this modifier, you can run a specifec action after pressing the text view for 2 seconds.
                print("Long pressed!") // this function will print "View Tapped" in the console.
            }
```

There is so more types of gestures struct, to check them all visit: <https://developer.apple.com/documentation/swiftui/gestures>

## Advanced Gestures
For more advanced gestures you should use the `gesture()` modifier with one of the gesture structs:` DragGesture, LongPressGesture, MagnificationGesture, RotationGesture, and TapGesture`. These all have special modifiers, usually `onEnded()` and often `onChanged() `too, and you can use them to take action when the gestures are in-flight (for `onChanged()`) or completed (`for onEnded()`).

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
// this a comment for the person who will review this doc, I don't know if i can put images or not. if I can please tell me to add some images for this file.
