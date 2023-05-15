---
Title: 'Spacer()'
Description: 'Creates an adaptive view with no content that expands as much as it can.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
  - 'iOS'
  - 'Mobile Development'
  - 'Software Development'
Tags:
  - 'Interface'
  - 'iOS'
  - 'Swift UI'
  - 'Swift UI Views'
  - 'Views'
CatalogContent:
  - 'learn-swiftui'
  - 'paths/builds-ios-apps-with-swiftui'
---

This is the description.

## Syntax

```pseudo
var body: some View {
  HStack {
  	Text(name)
    Spacer()
  }
}
```

The **`Spacer`** is an adaptive view that sits within a stack, such as a **`HStack`** in the syntax example above.

## Examples

In the example below, the **`Spacer`** in the **`HStack`** fills the view to the left of the **`Text`**.

```swift
var body: some View {
  HStack {
  	Spacer()
  	Text(name)
  }
}
```

This will display the following:

![HStack] ...

In this next example below, each **`Spacer`** fills the view on both the left and right of the **`Text`**. This effectively pushes the **`Text`** to the centre.

```swift
var body: some View {
  HStack {
  	Spacer()
  	Text(name)
    Spacer()
  }
}
```

This will display the following:

![HStack] ...



