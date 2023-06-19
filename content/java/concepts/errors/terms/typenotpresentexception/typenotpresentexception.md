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

**`TypeNotPresentException`** is an exception in Java that occurs when an application tries to access a type using its name as a string, but the type definition cannot be found. Unlike the `ClassNotFoundException`, this exception is unchecked at compile-time. It can happen when attempting to access undefined type variables or when loading classes, interfaces, or annotation types. This exception is particularly relevant when using reflective annotation reading APIs. Overall, the `TypeNotPresentException` is thrown when the specified type is not present or cannot be accessed at runtime.

## Example

In the provided code snippet, there is a generic class called `TypeNotPresentExceptionExample` that includes a type parameter `T`. The objective is to create an instance of this class using the type argument `NonExistentClass`, which does not exist. Consequently, a `TypeNotPresentException` is raised due to the unavailability of the `NonExistentClass` type during runtime. The exception is handled, and both the type name and cause are subsequently exhibited.

Keep in mind that `NonExistentClass` should be replaced with an actual class name that does not exist in the codebase to observe the `TypeNotPresentException`. In addition, `TypeNotPresentException` is typically encountered in scenarios involving generics and type erasure. It is not directly thrown when a class is missing.

`T` is defined as the type parameter for the `TypeNotPresentExceptionExample` class. It acts as a placeholder for the type that will be specified when creating an instance of the class:

```java
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

public class TypeNotPresentExceptionExample<T> {
    public static void main(String[] args) {
        try {
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

The output would look like this:

```shell
TypeNotPresentExceptionExample.java:7: error: cannot find symbol
            TypeNotPresentExceptionExample<NonExistentClass> example =
                                           ^
  symbol:   class NonExistentClass
  location: class TypeNotPresentExceptionExample<T>
  where T is a type-variable:
    T extends Object declared in class TypeNotPresentExceptionExample
```
