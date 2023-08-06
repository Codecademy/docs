---
Title: 'Navigation'
Description: 'Navigation is the ability to navigate to different views from the root view in the app.'
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

**Navigation** is the ability to navigate to different views from the root view in the app. In SwiftUI, `NavigationStack` is used to enable the root view to present views over it.  In iOS 15 and before, `NavigationView` was used, but it's been deprecated since iOS 16 introduced `NavigationStack`. 

## NavigationStack

To be able to navigate to different views from the root view, the view will be warped with `NavigationStack` struct as in the example below: 

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
struct Doc: View { 
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
![This is a gif that shows Navigation in action](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack.gif)

you can customize the label of the `NavigationLink`:

```Swift
struct Doc: View { 
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
![This is a gif that shows Navigation with a custom label in action](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-Custom-label.gif)

> **Note:** If The app suports iOS 15 or less `NavigationStack` will not be available, so instead of `NavigationStack` use `NavigationView`. In the above examples just replace `NavigationStack` with `NavigationView` and the code will run.

## NavigationStack with Lists
One of the common examples of using `NavigationStack` is with `Lists`, so lets say for Example there is a list of names in the view. The goal we want to achieve is to be able to navigate to another view by pressing the element in the list. This can be achieved by warping the `List` in a `NavigationStack` :

```Swift
struct Doc: View {
    let Names = ["Omar","Adam","Zack"] // this is the list
    var body: some View {
        NavigationStack{
            List(Names,id:\.self){ name in // List iterates throw the Names array, every iteration the element is stored in name.
                NavigationLink {
                    Text(name) // desired view destination
                } label: {
                    Text(name)  
                }
            }
            
        }
    }
}
```
Output:
![This is a gif that shows how to use NavigationStack with Lists](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-List.gif)

Those are just basic examples for `NavigationStack`, there is no limits on how to use it.

## NavigationStack modifiers
There are some basic modifiers to use with `NavigationStack`. The first one is `.navigationTitle`, this is used to be able to declare the title of the view, it looks like this:

```Swift
struct Doc: View {
    let Names = ["Omar","Adam","Zack"]
    var body: some View {
        NavigationStack{
            List(Names,id:\.self){ name in
                NavigationLink {
                    Text(name) // desired view destination
                } label: {
                    Text(name)
                }
            }
            .navigationTitle("Names")
        }
    }
}
```
Output:
![This picture shows the effect of using NavigationStack with navigationTitle](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-navigationTitle.png)

Another important modifier is `.navigationBarBackButtonHidden()`. From it's name this modifier removes the back button that appears when navigating to another view, this modifier is applied to the desired view:

```Swift
struct Doc: View {
    let Names = ["Omar","Adam","Zack"]
    var body: some View {
        NavigationStack{
            List(Names,id:\.self){ name in
                NavigationLink {
                    Text(name) // desired view destination
                     .navigationBarBackButtonHidden()
                } label: {
                    Text(name)
                }
            }
            .navigationTitle("Names")
        }
    }
}
```
Output: 
![This gif shows the effect of using NavigationStack with navigationBarBackButtonHidden](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-navigationBarBackButtonHidden.gif)

The modifiers above are just the basic one, to help in designing the app.


