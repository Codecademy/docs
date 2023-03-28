---
Title: 'Enumerations or Enums'
Description: 'An Enumerations or Enum is an special or enumerated custom type that allows developers to have a fixed number of possible values.

Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Enum'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

An Enumeration or Enum is a special or enumerated custom type that allows developers to have a fixed number of possible values.

Enums are available in many languages and are implemented in different features, but in PHP Enums are a special kind of object, they're a class.

## Syntax

In order to create an Enum it is used the `enum` keyword to declare them, followed by the name of the Enum.

```
enum Starters {
  case Charmander;
  case Squirtle;
  case Bulbasaur;
}
```

### Example

```php
<?php
enum Starter {
  case Charmander;
  case Squirtle;
  case Bulbasaur;
  }

  // functions and methods
  function choose_starter(Starter $starter) { }
}
?>
```

By using the `Starter` Enum, now it is possible to enforce types when accepting or returning a values for starter:

```
choose_starter(Starter :: Charmander);
choose_starter(Starter :: Squirtle);
choose_starter(Starter :: Bulbasaur);
```