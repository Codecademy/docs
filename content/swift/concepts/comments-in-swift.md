---
Title: "Comments in Swift"
Subjects:
  - "iOS"
  - "Mobile Development"
Tags:
  - "Comments"
  - "Documentation"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-swift"
  - "https://www.codecademy.com/learn/paths/build-ios-apps-with-swiftui"
---

Comments in represent text that is useful to the programmer or developement team. Think of them as notes or reminders to yourself of important concepts or ideas that need a little explaining above the syntax of the raw code. 

In Swift there are two kinds of comments: single-line comments and multi-line comments. These comments will be completely ignored by the compiler at compile-time. 

Famous software engineer Martin Fowler once wrote, 
> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

## Single-Line Comments

In Swift, as in many other languages, single line comments are prefaced with two consecutive forward slashes (`//`). They don't have to be their own line, single line comments can be appended at the end of a line to give more context.

```swift
// I am a single-line comment!
print("Hello World")
```

A single-line comment can also used to comment after a line of code:

```swift
print("Hello World") // Me, too!
```

## Multi-Line Comments

Multi-line comments allow for greater context and readability of a concept or idea that your program is doing. It is also commonly used for metadata information like authorship and copyright information. In Swift, multi-line comments are made opened with `/*` and closed with `*/`.

```swift
/* This space can be used to write notes to ourself about ideas that we want 
   to implement and just haven't or if our algorithm isn't easily legible through
   the code, we can explain it here. This is especially important if we are part
   of a team separated by time and space and communication occurs here instead of an office.
*/
```
