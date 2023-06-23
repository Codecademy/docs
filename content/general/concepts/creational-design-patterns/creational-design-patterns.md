---
Title: 'Creational Design Patterns'
Description: 'Creational design patterns concern themselves with the instantiation, or creation, of objects.'
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

**Creational design patterns** concern themselves with the instantiation of objects. At the time of creation, additional logic may be needed to decide what or how object types need to be created.

## Structure

Most creational design patterns generally abide by the following structure:

![Creational Design Pattern Structure](https://raw.githubusercontent.com/Codecademy/docs/main/media/creational-design-pattern-structure.png)

- The "Creator" declares the interface for the new object and returns it.
- The "Implementer" applies the object's interface.

## Use Cases

Creational design patterns promote independence and flexibility for object creation. Instead of complex, hard-coded behaviors, objects are defined by a set of smaller behaviors that are more maintainable. They can develop more complex behaviors later on. Some common scenarios for applying creational design patterns include the following:

- How objects are created should be separate from the system they inhabit.
- Sets of related objects are made to be used together.
- Only the object interface is visible while its implementation is hidden.
- Independent, complex objects need different representations.
- A subclass is created to implement an object created by a superclass.
- Class instances are specified at run-time.
- The client can access a single instance at all times.
- The instance can be extended without being modified.

The five main creational design patterns are outlined in the entries below:
