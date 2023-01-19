---
Title: '.strikethrough()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Applies a horizontal line through the middle of the text in a string.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Mobile Development'
  - 'iOS'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'SwiftUI'
  - 'SwiftUI ViewModifiers'
  - 'Xcode'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.strikethrough`** view modifier method in SwiftUI can be used to strike through text within a view. 

**_Note_**: _This method is specifically for use with text, so it can be applied as a view modifier to any view that displays text, such as a Text or Label View. However, it cannot be applied to views that do not display text, such as an Image View._

## Syntax

```psuedo
Text("This text will have a red line through it's center.")
    .strikethrough(color: .red)
```

## Example

```swift
var body: some View {
    Text("Here is a TextView with the .strikethrough() method applied to it using custom parameters.")
        .strikethrough(true, color: .blue)
}
```

This will display:
![SwiftUI ViewModifier Strikethrough](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-strikethrough.png)
