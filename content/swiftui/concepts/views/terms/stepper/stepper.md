---
Title: 'Stepper'
Description: 'A control that increments and decrements values.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`Stepper`** is used to give the user precise control over increasing or decreasing values.

## Syntax

```pseudo
var body: some View {
    Stepper(value: Binding<Stridable>, in: ClosedRange<Int/Double>, step: Int/Double) {
        Label here
    }
}
```

## Example

In the example below, a `Stepper` is used to count the number of people.

```swift
@State var numberOfPeople = 4

var body: some View {
    Stepper(value: $numberOfPeople, in: 2...10, step: 1) {
        Text("People count: \(numberOfPeople)")
    }
    .padding()
}

```

- The first parameter that `Stepper` takes is `value:`. This parameter needs to be bound to a variable that tracks changes.
- SwiftUI uses `@State` to keep keep the variable up to date every time it changes.
- `in:` is the parameter that specifies the minimum and maximum values accepted by the stepper.
- `step:` measures the step by specific amounts inside the stepper's range.
- Inside the brackets you can edit the 'label' of the stepper, giving it the shape, color and text you want.

This will display the following:

![Stepper](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-stepper.gif)
