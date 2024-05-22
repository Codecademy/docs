---
Title: 'Animation'
Description: 'Animation produces seamless visual updates in response to state changes.'
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

**Animation** is the ability to add smooth view changes to a view by changing the state of the view. There are two types of animation in SwiftUI: implicit and explicit animation.

It's a very powerful tool in SwiftUI that enhances the user experience of an app by making it more interactive. Custom views can be animated by conforming to the `Animatable` protocol, which tells SwiftUI about the value to animate.

## Implicit Animation with `.animation()`

To be able to add animation to a view, three things are required:

1. A variable that changes to activate the animation.
2. Flow control to manage the animation.
3. The actual animation; use of the [.animation()](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/animation) modifier on the desired view to be animated.

These components are essential to build animation implicitly or explicitly on a view. In the next example, implicit animation will be used:

```swift
struct ImplicitAnimation: View {
    @State var isanimation = false // @State variable that changes to activate the animation.

    var body: some View {
        Button {
            isanimation.toggle()
        } label: {
            Text( isanimation ? "Hello, World!" : "press me") // Ternary used to change the view based on the value of the isanimation.
                .foregroundColor(.white)
                .padding(.all)
                .background( isanimation ? Color.black : Color.red) // Ternary operator used to change the view based on the value of the isanimation.
                .animation(.default, value: isanimation) // This is the implicit animation. This gets activated when isanimation changes in value.
        }
    }
}
```

This is the result of the code above:

![Gif showing the effect of implicit animation on the view.](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-animation-implicit.gif)

In this simple animation, the background and the text of the button change depending on the value of the `isanimation` variable. When the button is pressed, `isanimation` changes, causing the implicit animation to change the text and background of the button. As the name implies, SwiftUI creates and manages implicit animations whenever specific situations or user interface state changes take place, which means developers don't have full control over the animations. With explicit animation, developers have full control over them.

## Explicit Animation using `withAnimation()`

To be able to make explicit animation, use the same three steps used in the implicit animation. This example uses explicit animation to change the position of a button:

```swift
struct ExplicitAnimation: View {
    @State var isanimation = false // @State variable that changes to activate the animation.

    var body: some View {
        Button {
            withAnimation(.spring()) {
                isanimation.toggle() // This is the Implicit animation.
            }
        } label: {
            Text("press me")
                .foregroundColor(.white)
                .padding(.all)
                .background(Color.black)
        }
        .offset(x: isanimation ? -20 : 60,y:0) // Ternary Operator used to change the view based on the value of the animation.
    }
}
```

> **Note:** `withAnimation()` isn't a view modifier like `.animation()`. It's a function that needs to be called to perform the change to the state smoothly. This means that any view that uses the same state in its view will also be animated.

![Gif showing the effect of explicit animation on the view.](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-animation-explicit-1.gif)

As shown in the output, `withAnimation()` is used to change the position of the button with a spring effect to it. One notable advantage of explicit animation is the ability for different views to be animated with a single call to `withAnimation()`. However, the two different views must use the same state variable to do so. For example, to animate the button label view's background color and the position of the button at the same time, a ternary operator will be added to `.background()`. This is shown in the following code:

```swift
struct ExplicitAnimation: View {
    @State var isanimation = false // @State variable that changes to activate the animation.

    var body: some View {
        Button {
            withAnimation(.spring()) {
                isanimation.toggle() // This is the Implicit animation.
            }
        } label: {
            Text("press me")
                .foregroundColor(.white)
                .padding(.all)
                .background(isanimation ? Color.blue : Color.black) // Ternary Operator used to change the view based on the value of the animation.
        }
        .offset(x: isanimation ? -20 : 60,y:0) // Ternary Operator used to change the view based on the value of the animation.
    }
}
```

![Gif showing the effect of explicit animation on two different views using the same state variable.](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-animation-explicit-2.gif)
