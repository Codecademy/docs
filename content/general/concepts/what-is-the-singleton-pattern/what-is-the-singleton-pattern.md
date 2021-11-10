---
Title: 'What is the Singleton Pattern?'
Description: 'The singleton pattern ensures a class has only one object instantiated during the programs lifecycle.'
Subjects:
  - 'Computer Science'
  - 'Interview Prep'
Tags:
  - 'Classes'
  - 'Conceptual'
  - 'Constructors'
  - 'Objects'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The singleton pattern ensures a class has only one object instantiated during the program's lifecycle. It is used to guarantee the control of a resource through its implementation.

## UML Design

![UML diagram of a singleton](media/singleton-uml.png)

## Example

Generally, singletons are lazily loaded and ensure thread safety. Below is a Java example outlining the most basic form of a singleton. The getInstance() creates a new instance (should one not exist), and the 'synchronized' keyword ensures two threads can not use this method at the same time.

```java
public class Singleton {
    // The singleton instance to be returned by getInstance()
    private static Singleton instance = null;

    // Constructor is made private to stop creation through 'new' keyword outside of getInstance().
    private Singleton() {}

    // Returns instance when called.
    public static synchronized Singleton getInstance() {
        // Creates new instance if none exists.
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
