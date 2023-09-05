q---
Title: 'Animation'
Description: 'Animation is the response to state changes by producing seamless visual updates.'
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

## Implicit Animation with .animation(_:value:)

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
            Text( isanimation ? "Hello, World!" : "press me") // 2- Ternary Operator used to change the view based on the value of the isanimation.
                .foregroundColor(.white)
                .padding(.all)
                .background( isanimation ? Color.black : Color.red) // 2- Ternary Operator used to change the view based onn the value of the isanimation.
                .animation(.default, value: isanimation) // 3- This is the Implicit animation. this gets activated when the isanimation changes.
        }

    }
}
  ```
> **Note:** `.animation` is a view modifier, which means that views That have this view applied to will be the only views to be animated.

This is the result of the code above:

![This is a gif that shows the effect of Implicit animation on the view.](https://raw.githubusercontent.com/Codecademy/docs/main/media/Implicit-Animation-SwiftUI.gif)

In this simple animation, the background and the text of the button change depending on the value of the `isanimation` variable. When we press the button, the `isanimation` changes which activate the implicit animation and smoothly change the button's text and background (try to remove the animation to see the difference). As the name implies, SwiftUI creates and manages implicit animations whenever specific situations or user interface state changes take place, which means developers don't have full control over them. this takes us to the second type of animation Explicit animation where developers have full control over them.

## Explicit Animation using withAnimation(_:_:)

To be able to make Explicit animation, we use the same three steps we used in the implicit animation. This example uses Explicit animation to change the position of a button:

```Swift
struct ImplicitAnimation: View {
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
        .offset(x: isanimation ? -20 : 60,y:0) // Ternary Operator used to change the view based onn the value of the animation.

    }
}
  ```

> **Note:** `withAnmation` isn't a view modifier like `.animation`, it's a function that needs to be called to preform the change to the state in a smooth way, which means that any view that uses the same state in there view will also be animated.

![This is a gif that shows the effect of Explicit animation on the view.](https://raw.githubusercontent.com/Codecademy/docs/main/media/Explicit-Animation-Swiftui.gif)

As you see from the output, we used the `withAnimation` to change the poisition of the button with a spring effect to it. what is beautiful about explicit animation is that you can animate different views with the same call of `withAinmation`, but the two different views must use the same state variable to do that. For example, to animate the background color of the label view of the button and the position of the button at the same time, a ternary operator will be added to `.background()` modifier. It looks like this:

```Swift
struct ImplicitAnimation: View {
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
                .background(isanimation ? Color.blue : Color.black) // Ternary Operator used to change the view based onn the value of the animation.
        }
        .offset(x: isanimation ? -20 : 60,y:0) // Ternary Operator used to change the view based onn the value of the animation.

    }
}
  ```
![This is a gif that shows the effect of Explicit animation on two diffrent views using the same state variable.](https://raw.githubusercontent.com/Codecademy/docs/main/media/morethanoneView-with-Explicit-Animation-Swiftui.gif)

One thing to consider is that no limit on how `withAnimation` or `.animation` can be used. This is a very powerful tool that can be used in many ways. 
