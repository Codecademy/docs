---
Title: 'Comments'
Description: 'In Swift, single-line and multi-line comments represent text that explains the raw code in a program.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Comments** in Swift represent text that is ignored by the compiler at-compile time, but is useful to the programmer or development team. They are ideal for documenting important concepts or ideas that require explanation beyond the syntax of the raw code. Both single-line and multi-line comments are supported in Swift.

Famous software engineer Martin Fowler once wrote,

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

## Single-Line Comments

In Swift, single-line comments are prefaced with two consecutive forward slashes (`//`). They don't have to be their own line and can be appended at the end of a line to give more context.

```swift
// I am a single-line comment!
print("Hello World")
```

A single-line comment can also be used to comment after a line of code:

```swift
print("Hello World") // Me, too!
```

## Multi-Line Comments

Multi-line comments allow for greater context and readability of a concept or idea that the program is doing. It is also commonly used for metadata information like authorship and copyright information. In Swift, multi-line comments are made opened with `/*` and closed with `*/`.

```swift
/*
  This space can be used to write notes to our future selves about ideas that we want
  to implement and just haven't or if our algorithm isn't easily legible through
  the code, we can explain it here. This is especially important if we are part
  of a team separated by time and space and communication occurs here instead of an office.
*/
```
