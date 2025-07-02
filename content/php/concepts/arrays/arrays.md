---
Title: 'Arrays'
Description: 'In PHP, an array is a special variable that can hold more than one value at a time.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Functions'
  - 'Values'
CatalogContent:
  - 'learn-php'
  - 'paths/computer-science'
---

In PHP, an **array** is a special variable that can hold more than one value at a time. Rather than creating multiple variables to store related data, arrays group data logically under one variable name. PHP supports three main types of arrays:

- **Indexed Arrays**: Arrays having a numeric index.
- **Associative Arrays**: Arrays having named keys.
- **Multidimensional Arrays**: Arrays having one or more arrays in it.

## Creating Arrays

There are different ways to create an array in PHP. Let's check them out one-by-one.

### Indexed Arrays

The `array()` function is used to create an indexed array:

```php
$colors = array("Red", "Green", "Blue");
```

Here is a shorter syntax that can also be used to create an indexed array:

```php
$colors = ["Red", "Green", "Blue"];
```

### Associative Arrays

An associative array can be created like this:

```php
$person = [
  "name" => "John",
  "age" => 30,
  "email" => "john@example.com"
];
```

### Multidimensional Arrays

A multidimensional array can be created like this:

```php
$users = [
  ["name" => "Alice", "age" => 25],
  ["name" => "Bob", "age" => 28]
];
```

## Accessing Arrays

There are different ways to access an array in PHP. Let's check them out one-by-one.

### Indexed Arrays

This example accesses the first item in the indexed array `colors`:

```php
<?php
$colors = ["Red", "Green", "Blue"];

echo $colors[0]; // Output: Red
?>
```

### Associative Arrays

This example accesses the value associated with the `"name"` key in the associative array `person`:

```php
<?php
$person = [
  "name" => "John",
  "age" => 30
];

echo $person["name"]; // Output: John
?>
```

### Multidimensional Arrays

This example accesses the value associated with the `"name"` key for the second user in the multidimensional array `users`:

```php
<?php
$users = [
  ["name" => "Alice", "age" => 25],
  ["name" => "Bob", "age" => 28]
];

echo $users[1]["name"]; // Output: Bob
?>
```

## Updating Arrays

This example updates the second item of the indexed array `colors` and the value associated with the key `"age"` in the associative array `person`:

```php
<?php
$colors = ["Red", "Green", "Blue"];

$colors[1] = "Yellow";

$person = [
  "name" => "John",
  "age" => 30
];

$person["age"] = 31;

print_r($colors[1]);
print_r("\n");
print_r($person["age"]);
?>
```

Here is the output:

```shell
Yellow
31
```

## Adding Items to an Array

This example adds a new item to the indexed array `colors` and a new key-value pair to the associative array `person`:

```php
<?php
$colors = ["Red", "Green"];

$colors[] = "Purple";

$person = [
  "name" => "John",
  "age" => 30
];

$person["city"] = "New York";

print_r($colors);
print_r("\n");
print_r($person);
?>
```

Here is the output:

```shell
Array
(
  [0] => Red
  [1] => Green
  [2] => Purple
)

Array
(
  [name] => John
  [age] => 30
  [city] => New York
)
```

## Removing Items from an Array

This codebyte example uses the `unset()` function to remove an item from the indexed array `colors` and a key-value pair from the associative array `person`:

```codebyte/php
<?php
$colors = ["Red", "Green", "Blue"];

unset($colors[2]);

$person = [
  "name" => "John",
  "email" => "john@example.com"
];

unset($person["email"]);

print_r($colors);
print_r("\n");
print_r($person);
?>
```

## Frequently Asked Questions

### 1. How do I check if a value exists in an array?

Using `in_array()` and `array_key_exists()`:

```php
<?php
$colors = ["Red", "Green", "Blue"];
$person = ["name" => "Alice", "age" => 25];

if (in_array("Red", $colors)) {
  echo "Red is in the array.\n";
}

if (array_key_exists("name", $person)) {
  echo "The 'name' key exists.\n";
}
?>
```

Here is the output:

```shell
Red is in the array.
The 'name' key exists.
```

### 2. How can I loop through an array in PHP?

Using `foreach` to loop through indexed and associative arrays:

```php
<?php
$colors = ["Red", "Green", "Blue"];

foreach ($colors as $color) {
  echo $color . "\n";
}

$person = ["name" => "Alice", "age" => 25];

foreach ($person as $key => $value) {
  echo "$key: $value\n";
}
?>
```

Here is the output:

```shell
Red
Green
Blue
name: Alice
age: 25
```

### 3. How do I count the number of elements in an array?

You can use the built-in `count()` function to determine how many elements an array contains:

```php
<?php
$colors = ["Red", "Green", "Blue"];

echo "Total colors: " . count($colors);

print_r("\n");

$person = [
  "name" => "John",
  "age" => 30,
  "email" => "john@example.com"
];

echo "Total fields: " . count($person);
?>
```

Here is the output:

```shell
Total colors: 3
Total fields: 3
```
