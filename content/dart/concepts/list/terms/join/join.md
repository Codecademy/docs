---
Title: '.join()' 
Description: 'Concatenates list elements as a string.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Concatenation'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

The **`.join()`** method concatenates (combines) list elements as a string including various separators between them dependent on a user's need.
 

## Syntax

```pseudo
list-name.join('separator')
```

 - `separator`: It separate elements in a list using any characters wrapped with single/double quotes. White spaces can be used but aren't obligatory.


## Example 1

The following code snippet demonstrates the `.join` method:


```dart
void main() {

  List<String> my_letters = ["Y", "o", "u", " ", "a", "r", "e", " ", "a", "w", "e", "s", "o", "m", "e", "!"];

  String my_message = my_letters.join(""); // No separation whatsoever.
  print(my_message);
} 
```

The output of the above code is:

```shell
You are awesome!
```

## Example 2

In the following example, the asterisk is used as a delimiter between elements.

```dart
void main() {

  List<String> languages = ["JavaScript", "Python", "HTML", "CSS"];

  String familiar_with = languages.join(" * "); // Adds an asterisk.
  print(familiar_with);
} 
```

The output of the above code is:

```shell
JavaScript * Python * HTML * CSS
```

## Example 3

In the following example, the separator used between each element is `or` meaning each task in the list will be separated by the word `or`.

```dart
void main() {

  List<String> chores = ["planting flowers", "vacuuming", "laundry", "ironing", "preparing meals"];

  String planOfDut = chores.join(" or "); // Adds 'or' as a conjunction.
  print(planOfDut); 
}
```

The output of the above code is:

```shell
planting flowers or vacuuming or laundry or ironing or preparing meals
```

## Example 4

The following snippet contains a list which has a predefined text to make it slightly more complex:

```dart
void main() {

  List<String> resolutions = ["takeaways", "overtime at work", "binge watching", "cigarettes", "comparing to others", "all-night parties"];

  String wishList = resolutions.join(", No ");

  print('In 2024 I will defenitely stick to these simple rules: No ${wishList}.');
}
```

The output of the above code is:

```shell
In 2024 I will defenitely stick to these simple rules: No takeaways, No overtime at work, No binge watching, No cigarettes, No comparing to others, No all-night parties.
```
