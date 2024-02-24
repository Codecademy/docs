---
Title: 'List'
Description: 'A list provides a way to organize and store a collection of items.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Lists'
  - 'Arrays'
  - 'Objects'
  - 'Data Structures'
  - 'Data Types'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **list** provides a way to organize and store a collection of items. Simply, lists act as containers that can hold different pieces of data, such as strings, integers, boolean values, or even other lists. Lists are a great way to organize related data in an easy-to-manipulate format.
<!-- I think will be worth linking to other docs pages like 'strings' when they have been completed/submitted. -->

## Creating a List

In Dart, there are two ways to create a list, there is the more prominently used method of `var` and the lesser used `List` class, both use square brackets (`[]`) and commas (`,`). The square brackets are used to define the data, whilst commas are used to separate the individual items.

First, here's an example of utilizing `var` to create a list:

```dart
// Create a list of strings
var favouriteFruits = ['Apple', 'Banana', 'Orange'];

// Create a list of integers
var oddNumbers = [1, 3, 5, 7, 9];

// Create a list of lists (nested list)
var nestedList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
```

Then, an example of utilizing `List` to create a list:

```dart
// Create a list of strings
List favouriteFruits = ['Apple', 'Banana', 'Orange'];

// Create a list of integers
List oddNumbers = [1, 3, 5, 7, 9];

// Create a list of lists (nested list)
List nestedList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
```

>**Note:** As `var` is the predominantly used method to create lists in Dart, the rest of the examples will use this moving forward.

In the above examples, there are three separate lists:
- A list of strings
- A list of integers
- A nested list

Each list includes the same data type. However, creating lists using a mix of data types is possible.

```dart
// Create a list with mixed data types
var mixedList = [1, 'two', 3, true];
```

## Different List Types

There are two types of lists in Dart, fixed-length and growable. A fixed-length list has a specified size that cannot be changed after initialization. When creating a fixed-length list, it starts empty and needs items to be added to it. It is useful when the number of items in a list is known in advance. The following code block demonstrates the initialization of a fixed-length list:

```dart
// Example of a fixed length list
var fixedLengthList = List(3);
```

>**Note:** If more than the specified number of items are added, it will result in an error.

When creating a fixed-length list, it starts empty and needs items added to it. Fixed-length lists are useful when a known limit on list items is required ahead of time. This enforces the list to stay at the specified limit.

```dart
// Example of a growable list
var growableList = ['Lion', 'Tiger', 'Leopard'];
```

## List Methods

Lists are very versatile sets of data and Dart provides ways to manage the data held within the lists called methods. These methods include things like adding new data and removing data.

### Adding Data

Adding items of data to lists utilizing the following methods:
- `(listname).add(item);` - This adds an item to the end of the list
- `(listname).addAll(items);` - This adds multiple items to the end of the list

```dart
// Adding items to a list
var ages = [21, 23, 34, 19, 45];

ages.add(42); // Adds 42 to the end of the list
ages.addAll(42, 37, 62); // Adds 42, 37 and 62 to the end of the list
```

It is also possible to add items at specific points within a list. This can be done by calling the list and specifying where the item should be added.

```dart
// Adding an item to a specific position within a list
var ages = [21, 23, 34, 19, 45];

ages[0] = 87; // Adds 87 to the first position of the list
```
This comes in handy with fixed length lists:

```dart
var fixedLengthList = List(3);

fixedLengthList[0] = 1; // Sets the 1st item in the list as 1
fixedLengthList[1] = 2; // Sets the 2nd item in the list as 2
fixedLengthList[2] = 3; // Sets the 3rd item in the list as 3
```

### Removing Data

Removing items of data from lists utilizes the following methods:
- `(listname).remove(item);` - This removes the first occurance of the specified item
- `(listname).removeAt(1);` - This removes the item at the specified index
- `(listname).removeLast();` - This removes the last item in the list

```dart
var favouriteColors = ['red', 'red', 'orange', 'yellow', 'green'];

favouriteColors.remove(red); // Removes the first 'red' in the list
favouriteColors.removeAt(1); // Removes the second item in the list
favouriteColors.removeLast(); // Removes the last item from the list
```

## Displaying List Data
To display data held within a list the `print` method is used. This can be used to display the whole list, or specific items within the list.

```dart
// Displaying a whole list
var flowers = ['Rose', 'Lily', 'Sunflower', 'Tulip', 'Daisy'];

print(flowers); // Displays ['Rose', 'Lily', 'Sunflower', 'Tulip', 'Daisy'] in the console.

// Displaying a specific item from a list
var musicalInstruments = ['Piano', 'Guitar', 'Violin', 'Trumpet'];

print(musicalInstruments[2]); // Displays Violin in the console
```
