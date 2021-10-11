---
Title: 'What is a Method?'
Description: 'A method is a function within a class that can be used with an instance of a class. You can think of a class in two parts, the data and the behavior. The method is the behavior part of a class.'
Subjects: 
- 'Computer Science'
- 'Object Oriented Programing'
Tags: 
- 'Classes'
- 'Objects'
- 'Methods'
- 'OOP'
- 'Functions'
CatalogContent: 
- 'learn-phython-3'
- 'learn-c++'
- 'learn-java
- 'paths/computer-science/'
---

A method is a function within a class that can be used with an instance of that class. You can think of a class in two parts: the data and the behaviors. Methods are the behavior part of the class. When you create an object from a class, you can use that object to call the methods that are associated with that class. Methods can accept parameters as arguments and produce a result by using these parameters. 

In object oriented programming, methods promotes reusability and keep functionality encapsulated inside an object.

## Example

Let's say we want to create a class for a character in a game. We want the character to do certain thingss

- introduce themself
- move in given a direction

```rb
class Character {
    introduceSelf() {
        # Code to print out an introduction phrase
    }

    move(direction) {
        # Code for the character to move in the given direction
    }
}
```

Now, when we create a character object for our game, we can get that character to introduce themself or move by using the methods on that character.  