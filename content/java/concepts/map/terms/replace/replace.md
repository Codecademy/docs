---
Title: '.replaceAll()'
Description: 'Replaces each value in the map with a new value returned by the applied function.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Hash Maps'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.replaceAll()` method of the [HashMap](https://www.codecademy.com/resources/docs/java/hashmap) class replaces each value in the map with the result of the applied function. After the function executes every key is linked to a new value. This method was introduced in JAVA 8. This method is efficient in terms of space method as it modifies the existing values directly within the HashMap. It doesn't create a new HashMap or duplicate the existing one, which means it operates with constant space overhead relative to the number of entries.

## Syntax

```pseudo
map.replaceAll((K, V) -> function)
```

- `map`: The instance of `HashMap` or any `Map`.
- `K`: The key in the map.
- `V`: The value in the map that will be replaced.
- `function`: The operation applied to each key-value pair will produce a new value.

## Example

The below example demonstrates the use of the `.replaceAll()` method:

```java
import java.util.HashMap;
import java.util.Map;

public class ReplaceAllLambdaExample {
  public static void main(String[] args) {
    Map<String, Double> productPrices = new HashMap<>();
    productPrices.put("Laptop", 1200.00);
    productPrices.put("Smartphone", 800.00);
    productPrices.put("Tablet", 400.00);

    // Apply a 10% discount to all prices using lambda expression
    productPrices.replaceAll((key, value) -> value * 0.9);

    // Print the modified map
    productPrices.forEach(
        (product, price) -> System.out.println(product + ": $" + price));
  }
}
```

> **Note:** Time complexity is O(n\*f), where n is the number of entries in the HashMap, and f is the time complexity of the function applied to each entry. In practice using simple functions is preferred

The above code returns the following output:

```shell
Laptop: $1080.0
Tablet: $360.0
Smartphone: $720.0
```
