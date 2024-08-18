---
Title: 'Inheritance'
Description: 'Inheritance allows one class to derive properties and characteristics from another class.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dart'
  - 'Data'
  - 'Objects'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

Inheritance is an integral part of [object-oriented programming (OOP)](https://www.codecademy.com/resources/docs/general/programming-paradigms/object-oriented-programming). It allows a class to derive properties and characteristics from another class.

## Example

```dart
class Animal {
  String name;

  Animal(this.name);

  void makeSound() {
    print('$name makes a sound.');
  }
}

class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void makeSound() {
    print('$name barks.');
  }

  void fetch() {
    print('$name is fetching!');
  }
}

void main() {
  Dog dog = Dog('Buddy');
  dog.makeSound(); // Buddy barks.
  dog.fetch(); // Buddy is fetching!
}
```

The output would be:

```shell
Buddy barks.
Buddy is fetching!
```

## Types of Inheritance

### Single Inheritance

Single inheritance is when a class inherits from one base (or super) class. This is the most common form of inheritance.

```dart
class Animal {
  void eat() {
    print('Animal is eating');
  }
}

class Dog extends Animal {
  void bark() {
    print('Dog is barking');
  }
}

void main() {
  Dog dog = Dog();
  dog.eat(); // Animal is eating
  dog.bark(); // Dog is barking
}
```

The output would be:

```shell
Animal is eating
Dog is barking
```

### Multilevel Inheritance

Multilevel inheritance is when a class inherits from another derived class, forming a chain of inheritance

```dart
class Animal {
  void eat() {
    print('Animal is eating');
  }
}

class Mammal extends Animal {
  void walk() {
    print('Mammal is walking');
  }
}

class Dog extends Mammal {
  void bark() {
    print('Dog is barking');
  }
}

void main() {
  Dog dog = Dog();
  dog.eat(); // Animal is eating
  dog.walk(); // Mammal is walking
  dog.bark(); // Dog is barking
}
```

The output would be:

```shell
Animal is eating
Mammal is walking
Dog is barking
```

### Hierarchical Inheritance

Hierarchical inheritance occurs when multiple classes inherit from the same base class.

```dart
class Animal {
  void eat() {
    print('Animal is eating');
  }
}

class Dog extends Animal {
  void bark() {
    print('Dog is barking');
  }
}

class Cat extends Animal {
  void meow() {
    print('Cat is meowing');
  }
}

void main() {
  Dog dog = Dog();
  Cat cat = Cat();

  dog.eat(); // Animal is eating
  dog.bark(); // Dog is barking

  cat.eat(); // Animal is eating
  cat.meow(); // Cat is meowing
}
```

The output would be:

```shell
Animal is eating
Dog is barking
Animal is eating
Cat is meowing
```
