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

This is the first step to be able to navigate to different views. This defines the root view of the stack. Then to define the destination use `NavigationLink`. When pressed, it navigates to the destination view that was defined: 

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

This code will output:

![This is a gif that shows Navigation in action](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack.gif)

The label of the `NavigationLink` can be customized:

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

This code will output:

![This is a gif that shows Navigation with a custom label in action](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-Custom-label.gif)

> **Note:** If The app suports iOS 15 or less `NavigationStack` will not be available, so instead of `NavigationStack` use `NavigationView`. In the above examples just replace `NavigationStack` with `NavigationView` and the code will run.

## NavigationStack with Lists

One of the common examples of using `NavigationStack` is with `Lists`. For example, there is a list of names in the view. The goal is to be able to navigate to another view by pressing the element in the list. This can be achieved by wrapping the `List` in a `NavigationStack` :

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

This code will output:

![This is a gif that shows how to use NavigationStack with Lists](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-List.gif)

Those are just basic examples for `NavigationStack`, there are no limits on how to use it.

## NavigationStack Modifiers

There are some basic modifiers to use with `NavigationStack`. The first one is `.navigationTitle`. This is used to be able to declare the title of the view. It looks like this:

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

This code will output:

![This picture shows the effect of using NavigationStack with navigationTitle](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-navigationTitle.png)

Another important modifier is `.navigationBarBackButtonHidden()`. This modifier removes the back button that appears when navigating to another view. This modifier is applied to the desired view:

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

This code produces the following output: 

![This gif shows the effect of using NavigationStack with navigationBarBackButtonHidden](https://raw.githubusercontent.com/Codecademy/docs/main/media/NavigationStack-with-navigationBarBackButtonHidden.gif)

The modifiers above are just two examples out of many.
