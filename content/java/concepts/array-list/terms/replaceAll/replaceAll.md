---
Title: '.replaceAll()'
Description: 'Replaces all occurrences of a given value ArrayList.'
Subjects:
  - 'A subject name'
  - 'A second subject name'
  - 'An nth subject name'
Tags:
  - 'Computer Science'
  - 'Information Technology'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.replaceAll()`** method of the `ArrayList` class takes an Operator as argument and applies it to every element in the List

## Syntax

Applies `operator` to each element in ArrayList `myArrayList` and replaces the element with a new value
```pseudo
myArrayList.replaceAll(operator);
```

## Example

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList for different cities
        ArrayList<String> cities = new ArrayList<>();

        // Add cities to the ArrayList
        cities.add("STOCKHOLM");
        cities.add("LONDON");
        cities.add("PARIS");
        cities.add("BERLIN");
        System.out.println("Cities in uppercase: " + cities);

        // Call replaceAll() to make every String element lowercase
        cities.replaceAll(String::toLowerCase);
        System.out.println("Updated cities in lowercase: " + cities);

    }
}
```

The output for this code would look like this:

```shell
Cities in uppercase: 
[STOCKHOLM, LONDON, PARIS, BERLIN]
Updated cities in lowercase: 
[stockholm, london, paris, berlin]
```