---
Title: 'Animation'
Description: 'In response to state changes, produce seamless visual updates.'
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

**Animation** is the ability to add smooth view changes to your view by changing the state of the view. There is two types of animation in swiftUI: Implicit animation and Explicit animation both of them will be explained in the sections below. it's very important to add animation to the user experience of an app, because it makes the app more interactive with the user and enhance the user experience of the app. And also Animating custom views can be done by conforming the view to the `Animatable` protocol, and telling SwiftUI about the value you want to animate.

## Implicit Animation with .Animation(_:,value:)

To be able to add animation to your view, you need first to have three things in your code:

- A variable that changes to activate the animation. it must be `@State` variable to be able to reflect the changes to the view. 
- Then after that we need to use a `Ternary ? operator`.
- Then add the animation to the view.

  This steps are essential to build animation implicitly or explicitly to your view. In the next example Implicit annimation will be used :

```Swift
struct ImplicitAnimation: View {
    @State var isanimation = false // 1- @State variable that changes to activate the animation.
    
    var body: some View {
        Button {
            isanimation.toggle()
        } label: {
            Text( isanimation ? "Hello, World!" : "press me") / 2- Ternary Operator used to change the view based onn the value of the animation.
                .foregroundColor(.white)
                .padding(.all)
                .background( isanimation ? Color.black : Color.red) // 2- Ternary Operator used to change the view based onn the value of the animation.
                .animation(.default, value: isanimation) // 3- This is the Implicit animation.
        }

    }
}
  ```
This is the result of the code above:

![This is a gif that shows the effect of Implicit animation onn the view.](https://raw.githubusercontent.com/Codecademy/docs/main/media/Implicit-Animation-SwiftUI.gif)

This is a very simple animation, where the background and the text of the button changes depending on the value of the `isanimation` variable, when we press the button the `isanimation` changes which active the implicit animation which leads to changing the text and the backgroung of the button in a very smooth way (try to remove animation to see the difference). As the name implies, SwiftUI creates and manages implicit animations whenever specific situations or user interface state changes take place, which means developers doesn't have full control over them and this takes us to the second type of animation Explicit animation where developers have full control over them.
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
