---
Title: 'Method'
Description: 'A method is a small piece of code, usually defined in a class, that can be used outside the class and in other parts of the program.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Methods'
  - 'OOP'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science/'
---

A method is a small piece of code, usually defined in a class, that can be used in other parts of the program.

Classes can be broken into two core parts:

- The data that is attributed to a class's members or properties.
- The behaviors that are defined or inherited in the class.

Methods are the "behavior" part of the class. When an instance variable is created from a class, it has access to the class's associated methods. Methods can accept parameters (sometimes they're called "arguments") and can return a result.

In object-oriented programming, methods promote reusability and keep functionality encapsulated inside an object.

## Example

In the Python example below, a class for a character in a game, `Character`, is defined with certain behaviors. The character can:

- Introduce themselves via `introduceSelf(self)`.
- Move left given an integer amount via `moveLeft(self, x)`.
- Move right given an integer amount via `moveRight(self, x)`.

```py
class Character:
    
    def introduceSelf(self):
        # Code to print out an introduction phrase.
        Print(f"Hello! I'm {self.name}.")

    def moveLeft(self, x):
        # Code to move the character left by x pixels.
        self.movex -= x

    def moveRight(self, x):
        # Code to move the character right by x pixels.
        self.movex += x
```

Now, when an instance of `Character` is created, the game character can introduce themselves, move left, or move right.
