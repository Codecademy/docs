---
Title: 'Navigation'
Description: 'Navigation is the ability to move to different views from the root view in the app.'
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

**Navigation** is the ability to move to different views from an app's root view. In SwiftUI, `NavigationStack` is used to enable the root view to present views over it.

> **Note:** In iOS 15 and before, `NavigationView` was used, but it's been deprecated since iOS 16 introduced `NavigationStack` and `NavigationSplitView`.

## `NavigationStack`

To be able to navigate to different views from the root view, views will be wrapped with a `NavigationStack` `struct` as in the example below:

```swift
struct MyApp: View {
    var body: some View {
        NavigationStack {
            Text("Hello, World!")
        }
    }
}
```

This defines the root view of the stack. Then to define the destination, use `NavigationLink`. When pressed, it navigates to the destination view that was defined:

```swift
NavigationStack {
    VStack {
        Text("Hello, World!")
        NavigationLink {
            Text("Cairo") // Desired view destination
        } label: {
            Text("Go to...")
        }
    }
}
```

This code will output:

![This is a gif that shows Navigation in action](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-navigation-1.gif)

The label of the `NavigationLink` can be customized:

```swift
NavigationStack{
    VStack{
        Text("Hello, World!")
        NavigationLink {
            Text("Cairo") // Desired view destination
        } label: {
            Image(systemName: "arrow.right")
                .foregroundColor(.red)
                .padding(.vertical)
        }
    }
}
```

This code will output:

![This is a gif that shows Navigation with a custom label in action](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-navigation-2.gif)

> **Note:** If The app supports iOS 15 or less `NavigationStack` will not be available, so instead of `NavigationStack` use `NavigationView`. In the above examples just replace `NavigationStack` with `NavigationView` and the code will run.

## `NavigationStack` with Lists

One of the common examples of using `NavigationStack` is with `Lists`. For example, there is a list of names in the view. The goal is to be able to navigate to another view by pressing the element in the list. This can be achieved by wrapping the `List` in a `NavigationStack` :

```swift
struct MyApp: View {
    let names = ["Omar","Adam","Zack"] // List of names

    var body: some View {
        NavigationStack{
            List(Names, id:\.self){ name in // List iterates throw the Names array, every iteration the element is stored in name.
                NavigationLink {
                    Text(name) // Desired view destination
                } label: {
                    Text(name)
                }
            }
        }
    }
}
```

This code will output:

![This is a gif that shows how to use NavigationStack with Lists](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-navigation-3.gif)

Those are just basic examples for `NavigationStack`, there are no limits on how to use it.

## `NavigationStack` Modifiers

There are some basic modifiers to use with `NavigationStack`. The first one is `.navigationTitle`. This is used to be able to declare the title of the view. It looks like this:

```swift
struct MyApp: View {
    let names = ["Omar","Adam","Zack"]

    var body: some View {
        NavigationStack{
            List(Names,id:\.self){ name in
                NavigationLink {
                    Text(name) // Desired view destination
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

To remove the back button that appears when navigating to another view, use `.navigationBarBackButtonHidden()`:

```swift
NavigationStack{
    List(Names,id:\.self){ name in
        NavigationLink {
            Text(name)
                .navigationBarBackButtonHidden()
        } label: {
            Text(name)
        }
    }
    .navigationTitle("Names")
}
```
