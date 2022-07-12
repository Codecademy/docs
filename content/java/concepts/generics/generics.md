---
Title: 'Generics'
Description: 'Generics refer to the ability to use a type as a parameter to methods and classes.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Data Types'
  - 'Constructors'
  - 'Methods'
  - 'OOP'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Generics** refer to the ability to use a type as a parameter to methods and classes. This provides the ability to a set of related classes or methods that can operate on many different types with a single declaration. This also allows type safety at compile-time allowing invalid types to be caught during compilation.

**Note:** Java type parameters can only be refrence types, not primitive types (like int, double or char).

## Generic Methods

A generic method declaration can be called with arguments of different types. The compiler handles each method call appropriatly based on the types of the arguments.

### Syntax

```pseudo

<T> void myMethod( T argument ) {
  // Method body 
  }
```

The type parameter section is before the return type and is enclosed in angle brackets `<...>`. Inside are one or more type parameters separated by commas, `T` above, each one is a identifier for a specific type name. The identifiers can used to declare the return type, or the types of the arguments passed to the method, or as type specifiers within the method body.


