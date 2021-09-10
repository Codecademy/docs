---
Title: 'Classes'
Description: 'A class is a definition of the properties and methods of a particular type of object. When a class is used to define a new object, the resultant object is referred to as an instance of that class. In a PHP class definition, properties are variables, methods are functions. php <?php class Car { // Properties'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Classes'
  - 'Objects'
  - 'OOP'
CatalogContent:
  - 'learn-php'
  - 'paths/front-end-engineer-career-path'
  - 'paths/computer-science'
---

A class is a definition of the properties and methods of a particular type of object.
When a class is used to define a new object, the resultant object is referred to as an instance of that class.

In a PHP class definition, properties are variables, methods are functions.

## Syntax

```php
<?php
class Car {
  // Properties
  public $make;
  public $model;
  public $year;

  // Methods
  function set_year($year) {
    $this->year = $year;
  }
  function get_year() {
    return $this->year;
  }
}
?>
```

This defines the class `Car` which has the properties `make`, `model` and `year`, and the methods `set_year()` and `get_year()`.

## The `$this` Keyword

Inside methods of a class, the `$this` keyword can be used to return a reference to the object instance that's executing the method. An example of this is shown above.
When the method refers to `$this->year`, it is referring to the `year` property of the particular object instance that is executing the method.

## The `new` Keyword

An object is created from a class definition by using the `new` keyword.

### Example

```php
<?php
  class Car {
    // Properties
    public $make;
    public $model;
    public $year;

    // Methods
    function set_year($year) {
      $this->year = $year;
    }
    function get_year() {
      return $this->year;
    }
  }

  // Create object instances
  $honda = new Car();
  $ford = new Car();

  // Use class properties
  $honda->make = 'Honda';
  $honda->model = 'Accord';
  $ford->make = 'Ford';
  $ford->model = 'Explorer';

  // Use class methods
  $honda->set_year(2019);
  $ford->set_year(2020);

  echo $honda->get_year() . ' ' . $honda->make . ' ' . $honda->model . '<br/>';
  // Output: 2019 Honda Accord

  echo $ford->get_year() . ' ' . $ford->make . ' ' . $ford->model . '<br/>';
  // Output: 2020 Ford Explorer

?>
```

## The `instanceof` Operator

The `instanceof` operator returns `true` when the operand on the left belongs to the class in the right operand.

### Example

```php
<?php
  $ford = new Car;
  if ($ford instanceof Car) {
    echo 'It is a Car!'; } else {
    echo 'It is not a Car!'; }
  // Output: It is a Car!
?>
```
