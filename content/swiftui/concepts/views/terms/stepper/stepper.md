---
Title: 'Stepper'
Description: 'Allows a user to increment and decrement a value.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Stepper`** is used to give the user precise control over increasing or decreasing a value.

## Syntax

```pseudo
var body: some View {
    Stepper(value: Binding<Stridable>, in: ClosedRange<Int/Double>, step: Int/Double) {
        Label here
    }
    Modifiers here
}
```

- The first parameter that `Stepper` takes is a `value`. This parameter needs to be bound to a variable that tracks changes.
- The second parameter, `in`, specifies the minimum and maximum values accepted by the stepper.
- The third parameter, `step`, specifies the amount that `value` should be incremented or decremented by inside the stepper's range.
- A stepper view's shape, color, and text can be edited using [modifiers](https://www.codecademy.com/resources/docs/swiftui/viewmodifier).

## Example

In the example below, `@State` is used to store the mutable integer value. A `Stepper` is used to count the number of people.

```swift
@State var numberOfPeople = 4

var body: some View {
    Stepper(value: $numberOfPeople, in: 2...10, step: 1) {
        Text("People count: \(numberOfPeople)")
    }
    .padding()
}
```

This will display the following:

![Stepper](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-stepper.gif)
