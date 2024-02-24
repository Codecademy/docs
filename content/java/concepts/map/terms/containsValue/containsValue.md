---
Title: 'containsValue()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A brief description.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Coding foundations'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'map'
  - 'hashmap'
  - 'java'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-java'
  - 'paths/computer-science'
---
The **containsValue()** method is declared in the Map interface. It is used to determine whether a map contains a given value. It returns a boolean value. The boolean value will return true if the map has one or more keys that map to the given value. If the map does not contain the given value, it will return false.

This function is helpful when you don't need to traverse the whole hashmap and only to know that the given value does or does not exist in a map. 

## Syntax

```java
map.containsValue(value);
```

- value: This can be any type of Object

## Example

```java
import java.util.HashMap;

public class FlowerInventory{
  public static void main(String[] args) {

    //Create a hashmap for flowers where the string represents the name of the flower and the integer represents the quantity of the flower
    Map<String, Integer> inventory = new HashMap<String, Integer>();
    inventory.put("Roses", 10);
    inventory.put("Lillies", 5);
    inventory.put("Tulips", 1);

    System.out.println("Flowers that have a quantity of 10 is present? " + inventory.containsValue(10));
    System.out.println("No flowers that have a quantity of 0?" + inventory.containsValue(0));
  }
}
```

The output would be:
```
Flowers that have a quantity of 10? true
Flowers that have a quantity of 0? false
```
<!-- 
See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
``` -->