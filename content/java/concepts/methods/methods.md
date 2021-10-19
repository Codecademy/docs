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

- parameters: methods can have no, one or multiple parameters which consist of a [data type](https://www.codecademy.com/resources/docs/java/data-types/) and a name. parameters make it possible to provide values to the method which can be used inside the body of a method
- modifier: modifiers define in which way and from which context a method is callable
- exceptions: exceptions can be thrown by method to make the caller react to unexpected situations (i.e. a non existing file)
- body: the body of a method contains all statements the method should execute when being called. The body is only optional in interfaces and abstract classes

## A minimal signature

```java
int getOneNumber() {
  return 1;
};
```

- return type: `int`
- name: `getOneNumber`
- modifier: `package private` (the default)

## Return type

Methods can return any type listet under [data types](https://www.codecademy.com/resources/docs/java/data-types/).
Additionally they can return instances any class.
If a method shouldn't return a value they have to be defined with the return type `void`.

## Name

The name of a method should describe as much as possible what the method is doing.
Ideally the programmer calling the method knows what the method does without having the need
to look at the body. By following the rule that a method should only do one thing, it's also easier
to give it concise name.
A valid name must follow the rules:

- it has to start with a letter or an underscore (`_`) and can contain digits.
- it could also start with a `$` but the specification of the language says that this shouldn't be done
- it can't have a name of keyword (i.e. `return` or `while`) however keywords can be within the name
- it can't start with digit however they can contain digits

Examples for valid method names:

- getObject
- setNumber
- countUntil300
- \_isValidCharacter
- GET_MAX_VALUE

Examples for invalid method names:

- 123number (method names mustn't start with a number)
- get-object (hyphens are not allowed inside a method name)
- sum_number1&number2 (ampersands are not allowed inside a method name)
- assert (method names mustn't have the name of a keyword)

By convention method names start with a verb and each word after the first word starts with a capitalized letter.

## Parameters

A parameter is described by a data type and a name.
With that name the parameter can be used to access the value inside the method body.
A method without any parameters must have empty parenthesis `()` after the method name.
Multiple parameters have to be seperated by a comma `,`.

_Parameters_ are the definitions inside the parenthesis of a method while _arguments_ are the values provided,
when the methods is actually called. The values of the arguments are made available via the parameter names inside the method body.

By convention a method should have a maximum three parameters.
If it's necessary to have more than three it makes sense to create an object which is passed and contains the data.

## Modifier

Modifiers have the possibility to change the way how a method is allowed to be called (public, protected, private, package private),
if the method is working on object state or should be executable without creating an object out of a class (static)
or if the method is allowed to be replaced by inherited classes (final).

```java
public int sum(int number1, int number2) {
    return number1 + number2;
}
```

- modifier: `public`
- return type: `int`
- name: `sum`
- parameters: `int number1, int number2`
- body: `return number1 + number2;`

### Visibility modifiers

- public: Methods declared as public can be called from everywhere, inside and outside of the object or the class.
- private: Methods declared as private can only be called from inside the object or the class.
- package private: Methods declared as package private can only be called from classes within the same package.
- protected: Methods declared as protected can only be called from inside the class or from inside classes inherited from that class.

### Additional modifiers

### static

Static methods can be called in classes without creating an object instance out of that class.
That's why the object state in those methods can't be accessed with `this`.
The `static` modifier can be combined with visibility modifiers.

```java
public static void main(String[] args) {
    System.out.println("Hello world");
}
```

- modifiers: `public static`
- return type: `void`
- name: `main`
- parameters: `String[] args`
- body: `System.out.println("Hello world");`

### final

The `final` keywords prevents methods from being overwritten in inherited classes.
The `final` modifier can be combined with visibility modifiers.

## Exceptions

Methods can throw Exceptions. An example for this is trying to access a file which doesn't exist.
When calling a method which throws an exception the calling method has to take care of that exception
or has to throw an Exception as well.
Here is an example how Java throws an exception in a method which could possibly execute a division by 0
and therefore the method has to throw an exception.

```java
public float divide(float dividend, float divisor) throws ArithmeticException {
    return dividend / divisor;
}
```

- modifiers: `public`
- return type: `float`
- name: `divide`
- parameters: `float dividend, float divisor`
- thrown exception: `throws ArithmeticException`
- body: `return dividend / divisor`

## Body

Everything between `{` and `}` is called the body of the method.
The body contains the actual code, statements or logic which is executed when the method is called.

If the method has a return type there needs to be at least one line in the body which returns a value of that type (i.e. `return a+b;`).

Methods also have access to values of the instance of a class when using the word `this`.
With `this` other methods of that same class can be called or instance fields of the class can be accessed which hold values which are accessible through all methods of the class.
