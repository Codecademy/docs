---
Title: 'TypeNotPresentException'
Description: 'Occurs when an application tries to access a type using a string representing the name of the type, but no definition for the type with the specified name can be found.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Errors'
  - 'Error Handling'
  - 'Exceptions'
  - 'Debugging'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**`TypeNotPresentException`** is an exception in Java that occurs when an application tries to access a type using its name as a string, but the type definition cannot be found. It's thrown when the specified type is not present or cannot be accessed at runtime. It can happen when attempting to access undefined type variables or when loading classes, interfaces, or annotation types. This exception is particularly relevant when using reflective annotation reading APIs. Unlike `ClassNotFoundException`, this exception is unchecked.

`TypeNotPresentException` is typically encountered in scenarios involving generics and type erasure. It is not directly thrown when a class is missing.

## Example

Below, `T` is defined as the type parameter for the `TypeNotPresentExceptionExample` class. It acts as a placeholder for the type that will be specified when creating an instance of the class:

```java
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

// Generic class that includes type parameter T.
public class TypeNotPresentExceptionExample<T> {
  public static void main(String[] args) {
    try {
      // Create instance of class using the type argument NonExistentClass.
      TypeNotPresentExceptionExample<NonExistentClass> example =
        new TypeNotPresentExceptionExample<>();
      example.throwTypeNotPresentException();
    } catch (TypeNotPresentException e) {
      System.out.println("Type not present: " + e.typeName());
      System.out.println("Cause: " + e.getCause());
    }
  }

  public void throwTypeNotPresentException() {
    Type type = ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    throw new TypeNotPresentException(type.getTypeName(), null);
  }
}
```

In the code above, `TypeNotPresentException` is raised due to the unavailability of the `NonExistentClass` type during runtime. The exception is handled, and both the type name and cause are subsequently exhibited. The output would look like this:

```shell
TypeNotPresentExceptionExample.java:7: error: cannot find symbol
            TypeNotPresentExceptionExample<NonExistentClass> example =
                                           ^
  symbol:   class NonExistentClass
  location: class TypeNotPresentExceptionExample<T>
  where T is a type-variable:
    T extends Object declared in class TypeNotPresentExceptionExample
```
