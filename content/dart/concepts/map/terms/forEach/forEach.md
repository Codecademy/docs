---
Title: '.forEach()'
Description: 'Iterates over each key-value pair in a map and applies a specified function to each pair.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Dart'
  - 'Methods'
  - 'Map'
  - 'Values'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The `**map.forEach()**` method in Dart iterates over each key-value pair in a map and applies a specified function to each pair.

## Syntax

```pseudo
map.forEach((key, value) {
  // Your code here
});
```

- `map`: It is the map to iterate over.
- `key`: It represents the key in each key-value pair.
- `value`: It represents the value associated with the key.

The code inside the `{}` block is executed for each key-value pair in the map.

Alternate syntax:

```pseudo
map.forEach((key, value) => expression);
```

- `expression`: It is the arrow function that defines what you want to do with each key-value pair.

## Example 1

The the following example, the `.forEach()` is used to print each key-value pair:

```dart
void main() {
  Map<String, int> ages = {
    'Alice': 25,
    'Bob': 30,
    'Charlie': 35,
  };

  ages.forEach((name, age) {
    print('$name is $age years old.');
  });
}
```

The above code produces the following output:

```shell
Alice is 25 years old.
Bob is 30 years old.
Charlie is 35 years old.
```

## Example 2

The the following example, The `.forEach()` method uses an arrow function to print each product and its price in a formatted string:

```dart
void main() {
  Map<String, double> productPrices = {
    'Laptop': 999.99,
    'Smartphone': 499.99,
    'Tablet': 299.99,
  };

  productPrices.forEach((product, price) => print('$product costs \$$price'));
}
```

The above code produces the following output:

```shell
Laptop costs $999.99
Smartphone costs $499.99
Tablet costs $299.99
```
