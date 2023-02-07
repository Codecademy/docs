---
Title: '.overlay()'
Description: 'Layers the views that you specify in front of a view.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'SwiftUI Modifiers'
  - 'Xcode'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.overlay()`** layers the views that you specify in front of a [`View`](https://www.codecademy.com/resources/docs/swiftui/views).

## Syntax

```pseudo
	Text("This text will have a views layed over top of it.")
		.overlay(alignment) {
			Subviews here
		}
```

The `.overlay()` modifier method takes two parameters to create a [`ZStack`](https://www.codecademy.com/resources/docs/swiftui/views/terms/zstack) to group the foreground views:

- `alignment` specifies where to position the foreground views.
- `content` is used to declare the views to add to the foreground, stacked in the order that you list them. The last view that you list appears at the front of the stack.

Using the `.overlay()` modifier method without any specified parameter results in the default behavior of the modifier: the foreground views will be centered to the view.