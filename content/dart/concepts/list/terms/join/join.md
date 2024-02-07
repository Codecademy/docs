---
Title: 'join' 
Description: 'The join() method concatenates (combines) list elements as a string including various separators between them dependent on a user's need.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Concatenation'
  - 'Dart'
  - 'Lists'
CatalogContent:
  - 'paths/computer-science'
---

The **`join()`** method concatenates (*combines*) list elements as a string including various separators between them dependent on a user's need.
 

## Syntax

```pseudo
list-name.join(separator); // the raw syntax

chores.join(" + "); // a real example
```

The method refers to its object, in the below case, to the 'chores' variable, which holds list (or array) elements. Inside the brackets '( )' there's a parameter - a separator containing any sign/-s wrapped with single/double quotes. The main role of a separator is to separate elements from one another - allowing for better readability and additional or new meaning to the text. Spaces added to a separator are nonobligatory.


## Example 1

The following block codes are showing an instance of removed spaces between elements, however a default `,` remains:

```dart
List<String> tought_to_read = ["A", "bit", "hard", "to", "read", "innit", "?"];

String try_to_read = tought_to_read.join(); // Spaces between elements are removed.
print(try_to_read); 
```
The output of `.join()`:

```shell
A,bit,hard,to,read,innit,?
```

## Example 2

The next snippet depicts an occurrence of erased separators entirely:

```dart
List<String> my_letters = ["Y", "o", "u", " ", "a", "r", "e", " ", "a", "w", "e", "s", "o", "m", "e", "!"];

String my_message = my_letters.join(); // No separation whatsoever.
print(my_message); 
```
The output of `.join("")`:

```shell
You are awesome!
```

## Example 3

The below code blocks are presenting an example of using special signs, that can be altered:

```dart
List<String> languages = ["JavaScript", "Python", "HTML", "CSS"];

String familiar_with = languages.join(" * "); // Adds an asterisk.
print(familiar_with); 
```
The output of `.join(" * ")`:

```shell
JavaScript * Python * HTML * CSS
```

## Example 4

The following fragments are showing an example of a conjunction, which can be also replaced with any:

```dart
List<String> chores = ["planting flowers", "vacuuming", "laundry", "ironing", "preparing meals"];

String planOfDut = chores.join(" or "); // Adds 'or' as a conjunction.
print(planOfDut); 
```
The output of `.join(" or ")`:

```shell
planting flowers or vacuuming or laundry or ironing or preparing meals
```

## Example 5

The below snippet is showing another list but combined with a predefined text to make it slightly more complex, plus the output:

```dart
List<String> resolutions = ["takeaways", "overtime at work", "binge watching", "cigarettes", "comparing to others", "all-night parties"];

String wishList = resolutions.join(", No ");

print('In 2024 I will defenitely stick to these simple rules: No ${wishList}.');
```
And its output:

```shell
In 2024 I will defenitely stick to these simple rules: No takeaways, No overtime at work, No binge watching, No cigarettes, No comparing to others, No all-night parties.
```
