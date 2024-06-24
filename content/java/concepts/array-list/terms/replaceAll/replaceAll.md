---
Title: '.replaceAll()'
Description: 'Replaces each element in the ArrayList with the result of applying a specified unary operator to it.'
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

The **`.replaceAll()`** method in Java is used for transforming all elements of a list according to a specified unary operation, effectively updating each element in place with the result of the operation applied to it. It does not return any value.

## Syntax

```pseudo
arrayList.replaceAll(UnaryOperator<E> operator)
```

- `arrayList`: The `ArrayList` on which the `.replaceAll()` method is called.
- `operator`: Represents the unary operator that will be applied to each element in the `ArrayList`. It is of type `UnaryOperator<E>`, where `E` is the type of elements in the ArrayList.

## Example

In this example, an `ArrayList` named `cities` is created and populated with city names using [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add). Then, `.replaceAll()` is used to transform all city names to lowercase, updating each element in place.

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
