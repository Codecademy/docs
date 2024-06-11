---
Title: '.add()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'In Python .add() will add an element to a set provided the element is not already in the set.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'A tag'
  - 'A second tag'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-git'
  - 'paths/computer-science'
---

[Introduction - make sure first mention of concept is in **bold**.] (The first 160 characters of this section will appear as the description of the page when it shows up on search engines. It's important!)

[**`add()`** function for Python sets. The `add()` function will insert a new element into a set.]

## Syntax

[To use `add()` we need to apply it to  an existing set]
```py
    set-1={1,2,4,5}
```
[Here we have a simple set of numbers. To insert an aditional number we can use the `add()` function.]
```py
    set-1.add(3)   
```
[After which the number 3 will be inserted into `set-1` becuase it does not already exist in the set.]
```py
    print(set-1)
```

## Example with a duplicate

[Should the element already exist in the set nothing will happen.]
```py
    set-dup={1,2,3,4,5}
    set-dup.add(3)

    print(set-dup)
```

## Common Errors

[If no value is put in the parenthesis for `add()` it will cause an error.]
[Only one element is allowed to be used with `add()`.]
[In order to add to an empty set the set must be properly declared]
```py
    set1=set()
    set1.add(1)

    print(set1)
```

## Codebyte Example 
```codebyte/python
    sets={1,2,3}
    sets.add(5)

    print(sets)
```
