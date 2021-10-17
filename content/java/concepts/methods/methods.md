---
Title: 'Methods'
Description: 'Methods are reusable pieces of code in classes. The difference between a method to a function is that methods are always related to class or object. As in Java there is no possibility to define logic outside of a class there are no real functions per definition. However in that case most likely static methods are used to have reusable logic without object state.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Methods are reusable pieces of code in classes. The difference between a method and a function is that methods are always related to a class or an object. Since in Java there is no possibility of defining logic outside of a class, there are no real functions given this definition. However, in that case static methods can be used to have reusable logic without an object instance.

Methods consist of at least the following elements:

- return type: the type of the value that is returned from the method
- name: the name of the method

Additionally they optionally include:

- arguments: methods can no, one or multiple arguments which consist of a type and a name. Arguments provide values to the method which can be used in the logic of the method
- modifier: modifier define in which way and from where a method is callable
- exceptions: exceptions can be thrown by method to make the caller react to unexpected situations (i.e. a non existing file)
- body: the body of a method contain all statements the method should execute when being called. The body is only optional in interfaces and abstract classes

## A minimal signature

```java
int getOneNumber() {
  return 1;
};
```

return type: `int`
name: `getOneNumber`
modifier: `package private`

## Return type

If methods shouldn't return a value they have to be defined as methods with return type `void`.
Further possibilities as return types can be seen under "data types".

## Name

The name of a method should describe as much as possible what the method is doing.
Ideally the programmer calling the method knows what the method does without having the need
to look at the body. By following the rule that a method should only do one thing, it's also easier
to give it concise name.
A valid name must follow the rules:
## Arguments

## Modifier

Modifiers have the possibility to change the way how a method is allowed to be called (public, protected, private, package private),
if the method is working on object state or should be executable without creating an object out of a class (static),
if the method is allowed to be replaced by inherited classes (final).

```java
public int sum(int number1, int number2) {
    return number1 + number2;
}
```

### Visibility modifiers

- public: Methods declared as public can be called from everywhere, inside and outside of the object or the class.
- private: Methods declared as private can only be called within the object or the class.
- package private: Methods declared as package private can only be called from classes within the same package.-
- protected: Methods declared as protected can only be called from inside the class or from inside classes inherited from that class.

### Additional modifiers

### static

Static methods can be called in classes without creating an object instance out of that class.
That's why the object state can't be accessed with `this`.
The `static` modifier can be combined with visibility modifiers.

```java
public static void main(String[] args) {
    System.out.println("Hello world");
}
```

### final

The `final` keywords prevents methods from being overwritten in inherited classes.
The `final` modifier can be combined with visibility modifiers.

## Exceptions

Methods can throw Exceptions. An example for this is trying to access a file which doesn't exist.
When calling a method which throws an exception the calling method has to take care of that exception
or has to throw an Exception as well.

```java
public static void main(String[] args) throws Exception {
    RandomAccessFile randomNewTextFile = new RandomAccessFile( "new-file.txt", "r" );
    System.out.println(randomNewTextFile.readLine());
}
```

## Body