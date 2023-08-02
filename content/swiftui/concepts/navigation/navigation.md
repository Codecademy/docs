---
Title: 'Navigation'
Description: 'It is the ability to navigate to diffrent views from the root view in the app.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
  - 'iOS'
CatalogContent:
  - 'learn-iOS-course'
  - 'path/iOS-path'
---

**Navigation** is the ability to navigate to diffrent views from the root view in the app. In SwiftUI, `NavigationStack` is used to enable the root view to present views over it, but in iOS 15 and less `NavigationView` was used in the past but it's deprecated since iOS 16 and introduced `NavigationStack`. 

## NavigationStack
To be able to navigate to diffrent views from the root view, The view will be warped with `NavigationStack` struct as you see in the example below: 

```Swift
struct Tap: View {
    var body: some View {
      NavigationStack{
        Text("Hello, World!")
       }
    }
}
```
This is the first step to do to be able to navigate to diffrent views, this defines the root view of the stack. Then to define the destion or in other words the view you want to navigate to use `NavigationLink`. This defines view when pressed, it navigate to the destion view that was defined: 

```Swift
struct Tap: View { 
var body: some View {
          NavigationStack{
            VStack{
                Text("Hello, World!")
                  NavigationLink {
                      Text("Cairo") // desired view destination
                  } label: {
                      Text("Go to...")
                  }
            }

           }
        }
}
```
Output:


you can customize the label of the `NavigationLink`:

```Swift
struct Tap: View { 
   var body: some View {
          NavigationStack{
            VStack{
                Text("Hello, World!")
                  NavigationLink {
                      Text("Cairo") // desired view destination
                  } label: {
                      Image(systemName: "arrow.right")
                          .foregroundColor(.red)
                          .padding(.vertical)
                      
                  }
            }

           }
        }
}
```
Output:


> **Note:** If The app suports iOS 15 or less `NavigationStack` will not be available, so instead of `NavigationStack` use `NavigationView`. In the above examples just replace `NavigationStack` with `NavigationView` and the code will run.

## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
