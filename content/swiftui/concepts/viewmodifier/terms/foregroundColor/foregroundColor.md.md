---
Title: '.foregroundColor()'
Description: 'Sets the foreground color that is displayed in a view.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'Modifier'
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
  - 'View'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.foregroundColor()`** modifier sets the foreground color displayed in a [View](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
struct MyView: View {
    var body: some View {
        Text("We are setting the foreground color to green!")
            .foregroundColor(.green)
    }
}
```

The `.foregroundColor(green)` is applying the color green to the `Text` (which conforms to the `View` protocol).

## Example

```swift
struct ContentView: View {
    var body: some View {
        Text("We are setting the foreground color to green!")
            .foregroundColor(.green)
    }
}
```

In the above example, the `foregroundColor(.green)` modifier is called on the `Text` view. This applies the color green to all characters within the `Text`.

This will display the following:

![image](/Volumes/LaCie/Git-Practice/docs/media/SwiftUI-foregroundColor-display.png)
