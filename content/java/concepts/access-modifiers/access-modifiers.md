---
Title: 'Access Modifiers'
Description: 'In Java, access modifiers control who can access classes, methods, or variables, helping protect data and enforce encapsulation. They allow you to hide details, share functionality safely, and organize code for better maintenance.'
Subject:
  - 'Computer Science'
Tags:
  - 'Access-Modifiers'
  - 'OOP'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

# Java Access Modifiers

In Java, **access modifiers** control **who can use a class, method, or variable**.
They are important for **data protection**, **encapsulation**, and **safe code design**.

There are **four types of access modifiers**:


## 1. Public

- `public` is visible to everyone – inside or outside the package.
- Use it when a class or method should be accessible by any other class.
- Think of it as **“open for all”**.


## 2. Private

- `private` is visible only within the same class.
- Use it to hide data or methods from other classes.
- Helps protect your data and enforce encapsulation.


## 3. Protected

- `protected` is visible within the same package and to subclasses in other packages.
- Use it when you want to share functionality with child classes but not everyone.
- Useful in inheritance scenarios.


## 4. Default (Package-Private)

- Default (no modifier) is visible only within the same package.
- Use it for internal package-level access that should not be exposed outside.
- Helps organize related classes without exposing them publicly.


## Comparison Table

| Modifier     | Inside Class       | Same Package      | Subclass (Other Package)          | Other Packages              |
|--------------|-------------------|-------------------|-----------------------------------|--------------------------|
| **public**    | ✅ Yes             | ✅ Yes             | ✅ Yes                             | ✅ Yes                   |
| **private**   | ✅ Yes             | ❌ No              | ❌ No                              | ❌ No                    |
| **protected** | ✅ Yes             | ✅ Yes             | ✅ Yes                             | ❌ No                    |
| **default**   | ✅ Yes             | ✅ Yes             | ❌ No                              | ❌ No                    |
