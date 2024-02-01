---
Title: 'The Title' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A brief description.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'A subject name'
  - 'A second subject name'
  - 'An nth subject name'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'A tag'
  - 'A second tag'
  - 'An nth tag'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

## **join**
&nbsp;  
&nbsp;  


The **`join()`** method concatenates (*combines*) list elements as a string including various separators between them dependent on a user's need.

&nbsp;  

## Syntax

```
list-name.join(separator); // the raw syntax

chores.join(" + "); // a real example
```

The method refers to its object, in the below case, to the 'chores' variable, which holds list (or array) elements. Inside the brackets '( )' there's a parameter - a separator containing any sign/-s wrapped with single/double quotes. The main role of a separator is, as the name suggests, separating elements from one another - allowing for better readability and additional or new meaning to the text. Spaces added to a separator are nonobligatory.

&nbsp;  


## Example No 1



The following example is showing a list with examples of different separators (only particular examples amongst many variations) and their respective outputs:

```dart

List<String> chores = ["planting flowers", "vacuuming", "laundry", "ironing", "preparing meals"] // our main list that will  refer to


/* "planOfDut" as a variable holding the modified list ("chores") by the method ".join()" */

String planOfDut = chores.join(); // removes whitespaces between elements
print(planOfDut); // returns:  planting flowers,vacuuming,laundry,ironing,preparing meals

String planOfDut = chores.join(""); // no separation whatsoever
print(planOfDut); // returns:  planting flowersvacuuminglaundryironingprepering meals

String planOfDut = chores.join(" / "); // adds a slash
print(planOfDut); // returns:  planting flowers / vacuuming / laundry / ironing / preparing meals

String planOfDut = chores.join(" * "); // adds an asterisk
print(planOfDut); // returns:  planting flowers * vacuuming * laundry * ironing * preparing meals

String planOfDut = chores.join(" or "); // adds 'or' as a conjunction (any conjunction can be chosen)
print(planOfDut); // returns:  planting flowers or vacuuming or laundry or ironing or preparing meals

String planOfDut = chores.join(" and again "); // adds 'and again'
print(planOfDut); // returns:  planting flowers and again vacuuming and again laundry and again ironing and again preparing meals

String planOfDut = chores.join(" and maybe tomorrow "); // adds 'and again'
print(planOfDut); // returns:  planting flowers and maybe tomorrow vacuuming and maybe tomorrow laundry and maybe tomorrow ironing and maybe tomorrow preparing meals

String planOfDut = chores.join(" (sigh) "); // removes whitespaces between elements
print(planOfDut); // returns:  planting flowers (sigh) vacuuming (sigh) laundry (sigh) ironing (sigh) preparing meals


```
&nbsp;  


## Example No 2



The below snippet is showing another list but combined with a predefined text to make it slightly more complex, plus the output:

```dart

List<String> resolutions = ["takeaways", "alcohol", "toxic people", "overtime at work", "binge watching", "cigarettes", "being a couch potato", "comparing to others", "all night parties"]

String wishList = resolutions.join(", No ");

print('In 2024 defenitely I will stick to these simple rules: No ${wishList}.'); // returns: In 2024 defenitely I will stick to these simple rules: No takeaways, No alcohol, No toxic people, No overtime at work, No binge watching, No cigarettes, No being a couch potato, No comparing to others, No all night parties.


```

&nbsp;  


### Tags

```
Concatenation
Dart
Lists

```


