---
Title: 'Gestures'
Description: 'Gestures are used to make views respond to various physical touches.'
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

**Gestures** are used to make views respond to various physical touches like taps, swipes, drags, and other standard screen motions. [Modifiers](https://www.codecademy.com/resources/docs/swiftui/viewmodifier) handle the logic behind gestures like a tap.

## Tap Gestures

Call the `.onTapGesture()` modifier on a view to track the tap gesture on:

```swift
var body: some View {
    Text("Hello, World!")
        .onTapGesture {
            print("View Tapped")
        }
}
```

This will display:

![TapGesture in Xcode Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-gesture-tapgesture.gif)

Every time the view is tapped, the code block within the `.onTapGesture()` modifier runs. This modifier can also accept an integer argument named `count`:

```pseudo
.onTapGesture(count: number) {
    Code block
}
```

After tapping the text view some `number` of times, the code block will run. For example, if `number` was set to `3`, three taps would cause the code block to be run.

> **Note:** For buttons, create a [`Button`](https://www.codecademy.com/resources/docs/swiftui/views/button) instance rather than a tap gesture. Buttons automatically provide standard behaviors like accessibility labels and hints.

## Long Press Gestures

Use `.onLongPressGesture()` for handling long press gestures. `.onLongPressGesture()` has an extra parameter called `minimumDuration` which takes a double as the input value, to specify how much time will elapse before an action is executed. For example:

```swift
var body: some View {
    Text("Hello, World!")
        .onLongPressGesture(minimumDuration: 2) {
            print("View Tapped")
        }
}
```

A string will be printed in the console after pressing the text view for 2 seconds. On Xcode,this will display:

![LongPressGesture in Xcode Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-gesture-longgesture.gif)

## Advanced Gestures

The `.gesture()` modifier is used for more advanced and customizable gestures with one of the gesture `struct`s like:

- `DragGesture()`
- `LongPressGesture()`
- `MagnificationGesture()`
- `RotationGesture()`
- `TapGesture()`

These all have special modifiers, usually `.onEnded()` and `.onChanged()`. They can be used to take action when the gesture is in-flight (for `.onChanged()`) or completed (for `.onEnded()`).

In the example below, a magnification gesture is used. Pinching in and out scales the view up and down. This is done by creating two `@State` properties to store the scale amount, passing those variables into the `.scaleEffect()` modifier, then setting those values in the gesture:

```swift
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
```

This will display on Xcode:

![This is a gif that shows the effect of using MagnificationGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-gesture-magnificationgesture-1.gif)

There is a problem with the code above because the text view does not return to its normal state, which can result in a bad user experience. To fix this problem, the `currentAmount` property will be assigned to zero in the `.onEnded()` modifier, so the text view will return to its normal size after completing the gesture:

```swift
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
```

In addition, `.spring()` was added to give the text view a spring animation while it returns to its normal size. This will display on Xcode:

![MagnificationGesture in Xcode simulation](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-gesture-magnificationgesture-2.gif)
