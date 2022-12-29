---
Title: '.italic()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Indicates that the font inside a view should have an italic style applied to it.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
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

The **`.italic()`** view modifier method in SwiftUI can be used to make text within a view appear in italic style.

## Syntax

```psuedo
Text("This text will be italic")
    .italic()
```

## Example

```swift
var body: some View {
    Text("I hope this appears as italic.")
        .italic()
}
```

This will display:

![SwiftUI ViewModifier Italic](https://raw.githubusercontent.com/Codecademy/docs/main/media/swiftui-viewmodifier-italic.png)
