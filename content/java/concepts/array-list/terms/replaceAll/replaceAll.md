---
Title: '.replaceAll()'
Description: 'Replaces all occurrences of elements in the ArrayList with a specified new value..'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.replaceAll()`** method in Java is used for transforming all elements of a list according to a specified unary operation, effectively updating each element in place with the result of the operation applied to it.

## Syntax

```pseudo
arrayList.replaceAll(UnaryOperator<E> operator)
```

- `arrayListInstance`: The `ArrayList` on which the `.replaceAll()` method is called.
- `UnaryOperator<E> operator`: The `UnaryOperator` that is applied to all elements in the list and replaces them with elements of the same type.

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

        // Call replaceAll() on ArrayList to make every String element lowercase
        cities.replaceAll(String::toLowerCase);
        System.out.println("Updated cities in lowercase: " + cities);

    }
}
```

The output for this code would look like this:

```shell
Cities in uppercase: [STOCKHOLM, LONDON, PARIS, BERLIN]
Updated cities in lowercase: [stockholm, london, paris, berlin]
```