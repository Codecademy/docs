---
Title: 'Views'
Description: 'Views make up the user interface for an application.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Views'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In [SwiftUI](https://www.codecademy.com/resources/docs/swiftui), **Views** make up an application's user interface (UI).

`View` is a `protocol` that other views must conform to. Syntactically, this means that when creating new custom views, the `View` `protocol` must be inherited like so:

```pseudo
struct MyView: View {
  Body of MyView
}
```

There are a set of requirements set by the `protocol` `View` that are required of all views. The body of a view is constructed using view instances.

Some built-in view instances, just referred to just as "views," are mentioned below:
