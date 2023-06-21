---
Title: 'Gestures'
Description: 'Gestures are used to make the view respond to various physical touches.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'SwiftUI ViewModifiers'
  - 'SwiftUI'
  - 'iOS'
CatalogContent:
  - 'learn-iOS-course'
  - 'path/iOS-path'
---

**Gestures** are used to make the view respond to various physical touches like taps, swipes, drags, and other standard screen motions.

## Tap Gestures

This is the most basic type of gesture. The `.onTapGesture()` modifier can be called on the view desired to track the gesture on:

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

The output looks like this:

![This is a gif that shows the effect of using TapGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-tapgesture-example.gif)

Every time the text view `"Hello, World"` is tapped, it prints `"View Tapped"` in the console.

The action can also be implemented after a certain amount of tap gestures. For example:

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

In this example, it prints `"View Tapped"` after taping the text view three times.

> **Note:** When a button is needed, a `Button` instance should be used rather than a tap gesture. Any view can be used as the button’s label, and the button type automatically provides many of the standard behaviors that users expect, like accessibility labels and hints.

## Long Press Gestures

`.onLongPressGesture()` is used for handling long press gestures. `.onLongPressGesture()` has an extra parameter called `minimumDuration` which takes a double as the input value. It's used to specify how much time will elapse before an action is executed. For example:

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

A string will be printed in the console after pressing the text view for 2 seconds. On Xcode, this will display:

![This is a gif that shows the effect of using LongPressGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-longgesture-example.gif)

## Advanced Gestures

The `.gesture()` modifier is used for more advanced and customizable gestures, with one of the gesture `struct`s like: `DragGesture()`, `LongPressGesture()`, `MagnificationGesture()`, `RotationGesture()`, and `TapGesture()`. These all have special modifiers, usually `.onEnded()` and `.onChanged()`, and they can be used to take action when the gestures are in-flight (for `.onChanged()`) or completed (for `.onEnded()`).

In the example below, a magnification gesture could be attached to a view so that pinching in and out scales the view up and down. This can be done by creating two `@State` properties to store the scale amount, using that inside a `.scaleEffect()` modifier, then setting those values in the gesture:

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

This will display on Xcode:

![This is a gif that shows the effect of using MagnificationGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-magnificationgesture-example.gif)

There is a problem with the code above because the text view didn't return to its normal state, which can result in a bad user experience. To fix this problem, the `currentAmount` property will be assigned to zero in the `.onEnded()` modifier, so the text view will return to its normal size after completing the gesture:

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
                            withAnimation(.spring()) {

                                currentAmount = 0
                            }
                        }
                )
        }
}
```

This will display on Xcode:

![This is a gif that shows the effect of using MagnificationGesture with Spring animation in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-magnficationgesture-example-with-animation.gif)

The `withAnimation(.spring()){}` was added to give the text view a spring animation while it returns to its normal size, as it looks in the **.gif** above.
