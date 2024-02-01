---
Title: 'List'
Description: 'A list provides a way to organise and store a collection of items.'
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

A **list** provides a way to organise and store a collection of items. Simply, lists act as containers which are able to hold different pieces of data, such as strings, integers, boolean values or even other lists. Lists are a great way to organise related data in an easy to manipulate format.
<!-- I think will be worth linking to other docs pages like 'strings' when they have been completed / submitted. -->

## Syntax

In Dart, you are able to create a list utilising the `List` class, which also uses square brackets (`[]`) and commas (`,`). The square brackets are used to define the data, whilst commas are used to separate the individual items.

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

In the above example, there are three separate lists:
- A list of strings
- A list of integers
- A nested list

Each list includes the same data type. However, it is possible to create lists using a mix of data types.

```dart
// Create a list with mixed data types
List mixedList = [1, 'two', 3, true];
```

## Different List Types

There are two types of lists in Dart, fixed-length and growable. A fixed-length list has a specified size that cannot be changed after initialization. When creating a fixed-length list, it starts empty and needs items to be added to it. It is useful when the number of items in a list is known in advance. The following code block demonstrates the initialization of a fixed-length list:

```dart
// Example of a fixed length list
List fixedLengthList = List(3);
```

>**Note:** If more than the specified number of items will result in an error.

When creating a fixed length list, it starts off empty and needs items added to it. Adding too many items will result in an error. Fixed length lists are useful when you know in advance the number of items you need and want to enforce that size constraint. 

```dart
// Example of a growable list
List growableList = ['Lion', 'Tiger', 'Leopard'];
```

## List Methods

Lists are very versatile sets of data and Dart provides ways to manage the data we hold in the lists called methods. These methods include things like adding new data and removing data.

### Adding Data

Adding items of data to lists utilising the following methods:
- `(listname).add(item);` - This adds an item to the end of the list
- `(listname).addAll(items);` - This adds multiple items to the end of the list

```dart
// Adding items to a list
List ages = [21, 23, 34, 19, 45];

ages.add(42); // Adds 42 to the end of the list
ages.addAll(42, 37, 62); // Adds 42, 37 and 62 to the end of the list
```

It is also possible to add items at specific points within a list. This can be done by calling the list and specifying where you would like to add that item.

```dart
// Adding an item to a specific position within a list
List ages = [21, 23, 34, 19, 45];

ages[0] = 87; // Adds 87 to the first position of the list
```
This comes in handy with fixed length lists:

```dart
List fixedLengthList = List(3);

fixedLengthList[0] = 1; // Sets the 1st item in the list as 1
fixedLengthList[1] = 2; // Sets the 2nd item in the list as 2
fixedLengthList[2] = 3; // Sets the 3rd item in the list as 3
```

### Removing Data

We can remove items of data from lists utilising the following methods:
- `(listname).remove(item);` - This removes the first occurance of the specified item
- `(listname).removeAt(1);` - This removes the item at the specified index
- `(listname).removeLast();` - This removes the last item in the list

```dart
List favouriteColors = ['red', 'red', 'orange', 'yellow', 'green'];

favouriteColors.remove(red); // Removes the first 'red' in the list
favouriteColors.removeAt(1); // Removes the second item in the list
favouriteColors.removeLast(); // Removes the last item from the list
```

## Displaying List Data
To display data held within a list the `print` method is used. This can be used to dislay the whole list, or specific items within the list.

```dart
// Displaying a whole list
List flowers = ['Rose', 'Lily', 'Sunflower', 'Tulip', 'Daisy'];

print(flowers); // Displays ['Rose', 'Lily', 'Sunflower', 'Tulip', 'Daisy'] in the console.

// Displaying a specific item from a list
List musicalInstruments = ['Piano', 'Guitar', 'Violin', 'Trumpet'];

print(musicalInstruments[2]); // Displays Violin in the console
```