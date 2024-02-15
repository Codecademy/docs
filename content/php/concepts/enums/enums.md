---
Title: 'Enums'
Description: 'An enumeration (enum) is a special or enumerated custom type that allows developers to have a fixed number of possible values.'
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

An enumeration (`enum`) is a special or enumerated custom type that allows developers to have a fixed number of possible values.

Enumerations are available in many languages and are implemented in different features, but in PHP, they are a special kind of object.

## Creating an `enum`

The keyword, `enum`, is used to declare an enumeration, followed by the name of the `enum`.

```php
enum my_enum {
  case Case1;
  case Case2;
  case Case3;
}
```

### Example

```php
<?php
  enum Color {
    case Pink;
    case Blue;
    case Yellow;
  }

  // Functions and methods
  function choose_color(Color $color) { }
?>
```

By using the `Color` enumeration, now it is possible to enforce types when accepting or returning a value for color:

```php
choose_color(Starter::Pink);
choose_color(Starter::Blue);
choose_color(Starter::Yellow);
```
