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

The **`TypeNotPresentException`** is an exception in Java that occurs when an application tries to access a type using its name as a string, but the type definition cannot be found. Unlike ClassNotFoundException, this exception is unchecked. It can happen when attempting to access undefined type variables or when loading classes, interfaces, or annotation types. This exception is particularly relevant when using reflective annotation reading APIs. Overall, the TypeNotPresentException is thrown when the specified type is not present or cannot be accessed at runtime.

## Example

In this below code, we have a generic class `TypeNotPresentExceptionExample` with a type parameter T. We attempt to instantiate the class with the type argument NonExistentClass, which is a non-existent class. This triggers a `TypeNotPresentException` since the type NonExistentClass is not available at runtime We catch the exception and display the type name and cause.

In this code, T is defined as the type parameter for the `TypeNotPresentExceptionExample` class. It acts as a placeholder for the type that will be specified when creating an instance of the class.

Keep in mind that NonExistentClass should be replaced with an actual class name that does not exist in your codebase to observe the `TypeNotPresentException`.
Please note that `TypeNotPresentException` is typically encountered in scenarios involving generics and type erasure. It is not directly thrown when a class is missing.:

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
Type not present: com.example.NonExistentClass
Cause: null
```
