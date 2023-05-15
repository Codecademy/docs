---
Title: 'Gestures' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Define interactions from taps, clicks, and swipes to fine-grained gestures.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'iOS'
  - 'Mobile Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'SwiftUI ViewModifiers'
  - 'SwiftUI'
  - 'iOS'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-iOS-course'
  - 'path/iOS-path'
---

Views can respond to your tap,drags,pinches and other gestures. Just by adding **Gesture** modifer to your View.

## Tap Gestures

This is the most basic type of Gestures. Implementing tap gesture is pretty easy. 
You can call `.onTapGesture()` modifier on the view you want to track gesture on.

```Swift
Text("Hello, World!") // SwiftUI Text view.
            .onTapGesture { // by using this modifier, you can run a specifec action when the View is tapped.
                print("View Tapped") // this function will print "View Tapped" in the console.
            }

```
**Output**:

![Output image](TapgestuerOutput.png)

In the above example, everytime you tap the text view "Hello, World", it prints "View Tapped" in the console.
You can also implement action on a certain amount of tap gesture counts.

```Swift
Text("Hello, World!") // SwiftUI Text view.
            .onTapGesture(count: 3) { // by using this modifier, you can run a specifec action when the View is tapped 3 times.
                print("View Tapped") // this function will print "View Tapped" in the console.
            }

```

 



## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
