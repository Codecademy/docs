---
Title: 'TypeNotPresentException'
Description: 'Occurs when an application tries to access a type using a string representing the type's name, but no definition for the type with the specified name can be found.'
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

The `TypeNotPresentException` occurs when an application tries to access a type using a string representing the type's name, but no definition for the type with the specified name can be found. This exception differs from `ClassNotFoundException` in that `ClassNotFoundException` is a checked exception, whereas this exception is unchecked. This exception can be thrown when undefined type variables are attempted to be accessed as well as when types (classes, interfaces or annotation types) are loaded. It can, in particular, be thrown by the API used to read annotations reflectively.

## Example

The `TypeNotPresentException` is thrown in the following example because a custom annotation contains an element that refers to a class that exists at compile-time but not at runtime:
First, the custom annotation `MyAnnotation` is created. This annotation contains an element context that refers to the `javax.xml.bind.JAXBContext` class:

```java
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import javax.xml.bind.JAXBContext;

@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {
    Class<JAXBContext> context() default JAXBContext.class;
}
```

Next, a class `TypeNotPresentExceptionExample` is created that uses the `MyAnnotation` annotation. It then uses reflection to read the annotation and its context element:

```java
@MyAnnotation
public class TypeNotPresentExceptionExample {
    public static void main(String[] args) {
        TypeNotPresentExceptionExample.class
            .getAnnotation(MyAnnotation.class)
            .context();
    }
}
```
The output would look like this:

```shell
Exception in thread "main" java.lang.TypeNotPresentException: Type javax.xml.bind.JAXBContext not present
    at java.base/java.lang.reflect.Method.getDefaultValue(Method.java:680)
    at java.base/sun.reflect.annotation.AnnotationType.<init>(AnnotationType.java:132)
    at java.base/sun.reflect.annotation.AnnotationType.getInstance(AnnotationType.java:85)
    at java.base/sun.reflect.annotation.AnnotationParser.parseAnnotation2(AnnotationParser.java:267)
    at java.base/sun.reflect.annotation.AnnotationParser.parseAnnotations2(AnnotationParser.java:121)
    at java.base/sun.reflect.annotation.AnnotationParser.parseAnnotations(AnnotationParser.java:73)
    at java.base/java.lang.Class.createAnnotationData(Class.java:3886)
    at java.base/java.lang.Class.annotationData(Class.java:3875)
    at java.base/java.lang.Class.getAnnotation(Class.java:3780)
    at TypeNotPresentExceptionExample.main(TypeNotPresentExceptionExample.java:5)
Caused by: java.lang.ClassNotFoundException: javax.xml.bind.JAXBContext
    at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:602)
    at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
    at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
    at java.base/java.lang.Class.forName0(Native Method)
    at java.base/java.lang.Class.forName(Class.java:427)
    at java.base/sun.reflect.generics.factory.CoreReflectionFactory.makeNamedType(CoreReflectionFactory.java:114)
    at java.base/sun.reflect.generics.visitor.Reifier.visitClassTypeSignature(Reifier.java:125)
    at java.base/sun.reflect.generics.tree.ClassTypeSignature.accept(ClassTypeSignature.java:49)
    at java.base/sun.reflect.annotation.AnnotationParser.parseSig(AnnotationParser.java:440)
    at java.base/sun.reflect.annotation.AnnotationParser.parseClassValue(AnnotationParser.java:421)
    at java.base/sun.reflect.annotation.AnnotationParser.parseMemberValue(AnnotationParser.java:350)
    at java.base/java.lang.reflect.Method.getDefaultValue(Method.java:672)
    ... 9 more
```
