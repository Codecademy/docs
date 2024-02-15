---
Title: '.any()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'The .any() method checks if at least one item in the List satisfies the given condition.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Methods'
  - 'Dart'
  - 'Lists'
  - 'Development'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-dart'
  - 'paths/computer-science'
---

The **.any()** method checks if at least one item in the List satisfies the given condition. `.any()` returns a boolean value depending on the condition.

## Syntax

```pseudo
bool any(bool test(E element));
```

## Example
In this example, the `.any()` method is used to check if any of the items in the `List` is greater than `7`.
```dart
void main(){
  // Creating list
  List numbers = [9, 5, 8, 17, 11, 15, 23];
  // Using any()
  // verify if at least one item in the list is greater than 7
  if (numbers.any((item) => item > 7)) {
    // Print result
    print('At least one number > 7 in the list');
  }
}
```

Output
```pseudo
At least one number > 7 in the list
```