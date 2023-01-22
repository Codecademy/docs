---
Title: 'Color'
Description: 'Creates a color view.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **Color** view is a way to represent and incorporate colors in the user interface. It can be used to modify the foregrounds and/ or backgrounds.


## Syntax

```pseudo
var body: some View {
    Color.color-example
    //Content that is being modified
        .foregroundColor(.color-example)
}
```
- Color.color-example  changes the background color
- .foregroundColor(.color-example) changes the color of the content (ex: "text") itself

## Example

The following example :

```swift
var body: some View {
        
        VStack {
            Color.black
           
                .overlay(
            Text("Codecademy__")
                .foregroundColor(.white)
            )
        }
        .padding()
    }
```

- `( Color.black )` makes the background color black 
- `( foregroundColor(.white) )` set the text color to white .



The code-block above will display an `interface` filled with the color black and the text "Codecademy" in black color.

This will display the following:

![Capsule](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-capsule.png)
