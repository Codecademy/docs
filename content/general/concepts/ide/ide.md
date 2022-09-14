---
Title: 'IDE'
Description: 'An IDE, or Integrated Development Environment, enables programmers to consolidate the different aspects of writing a computer program.'
Subjects:
  - 'Developer Tools'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'IDE'
  - 'Xcode'
  - 'Android'
  - 'Code Editors'
CatalogContent:
  - 'learn-python-3'
  - 'paths/front-end-engineer-career-path'
---

An **Integrated Development Environment (IDE)**, enables programmers to consolidate the different aspects of writing a computer program.

IDEs increase programmer productivity by featuring common activities of writing software into a single application..

## Common Features

Writing code is an important part of programming. We start with a blank file, write a few lines of code, and a program is born! IDEs facilitate this process with features like syntax highlighting and autocomplete.

### Syntax Highlighting

An IDE that knows the syntax of your language can provide visual cues. Keywords, words that have special meaning like `class` in Java, are highlighted with different colors.

Compare these two code samples:

```pseudo
// Without syntax highlighting

public class NiceDay {
  public static void main(String[] args) {
    System.out.println("It's a nice day out!");
  }
}
```

```java
// With syntax highlighting

public class NiceDay {
  public static void main(String[] args) {
    System.out.println("It's a nice day out!");
  }
}
```

Syntax highlighting makes code easier to read by visually clarifying different elements of language syntax.

### Autocompletion

When the IDE knows your programming language, it can anticipate what you’re going to type next!

We’ve seen statements with `System.out.println()` quite a bit so far. In an IDE, we might see `System` as an autocomplete option after only typing "Sy". This saves keystrokes so the programmer can focus on logic in their code.

![GIF](https://content.codecademy.com/courses/learn-java/revised-2019/autocomplete_v2.gif)

### Building Executables

Languages like Java and C++ are compiled languages. Before programs run, the source code of a **.java** or **.cpp** file must be transformed into an executable like **.class** or **.exe** by the compiler. Once compiled, the program can be run from the terminal.

This compilation process is necessary for every program, so why not have the IDE do it for us? IDEs provide automated build processes for languages, so the act of compiling and executing code is abstracted away, like in Codecademy lessons.

### Debugging

No programmer avoids writing bugs and programs with errors.

When a program does not run correctly, IDEs provide debugging tools that allow programmers to examine different variables and inspect their code in a deliberate way.

IDEs also provide hints while coding to prevent errors before compilation.

![Debugging GIF](https://content.codecademy.com/courses/learn-java/revised-2019/debugging_v2.png)

## Notable Examples

There are numerous IDEs available, such as:

- [IntelliJ IDEA](https://www.jetbrains.com/idea/)
- [Xcode](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio)
- [Microsoft Visual Studio](https://visualstudio.microsoft.com)

The IDE you decide to use depends on what area of computer programming you wish to pursue. Some IDEs, like Android Studio and Xcode, are dedicated solely for building mobile applications.

### Online IDEs

There are many online IDEs that allow users to practice with snippets of code without installing any software on their local machine. Most provide support for several different languages.

One example is Codecademy's own [Codebyte Editor](https://www.codecademy.com/codebyte-editor). It allows experimenting with [C++](https://www.codecademy.com/resources/docs/cpp), C#, [Go](https://www.codecademy.com/resources/docs/go), [JavaScript](https://www.codecademy.com/resources/docs/javascript), [PHP](https://www.codecademy.com/resources/docs/php), [Python 3](https://www.codecademy.com/resources/docs/python), [Ruby](https://www.codecademy.com/resources/docs/ruby), and Scheme.

Another example is [JDoodle](https://www.jdoodle.com/) which offers support for over 75 languages including [Java](https://www.codecademy.com/resources/docs/java), [Python 2](https://www.codecademy.com/resources/docs/python), [R](https://www.codecademy.com/resources/docs/r), and [Swift](https://www.codecademy.com/resources/docs/swift).
