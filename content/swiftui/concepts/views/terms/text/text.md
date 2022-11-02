---
Title: 'Text'
Description: 'Allows users to display one or more lines of text.'
Subjects:
  - 'Software Development'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
  - 'Buttons'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/build-ios-apps-with-swiftui'
---

A **Text view** in SwiftUI is a view that lets you display one or more lines of text. It is useful for read-only information and it is non-editable. For example, if you want to display a message on screen, you can use Text to implement it.
## Syntax
`Text("This is My App")`
  
Screen will display any information enclosed within the "" on the screen. In this case, it should show This is My App
  

## Example
The following example adds the text Codecademy is Awesome on the display screen.

```swift
struct ContentView: View{
    var body: some View{
        VStack{
            Text("Codecademy is Awesome!")
        }
        .padding()
    }
}
```
This will display the following:
![Image](https://i.ibb.co/C9yQ5z8/Screenshot-2022-11-03-at-1-54-49-AM.png)