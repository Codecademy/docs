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

The `.replaceAll()` method of the HashMap class replaces each value in the map with the result of the applied function. After the function executes every key is linked to a new value.

## Syntax

```pseudo
map.replaceAll((K, V) -> function)
```

- `map`: The name of the map.
- `K`: The key in the map.
- `V`: The value in the map that will be replaced.
- `function`: The function to perform on the Map.

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
        productPrices.forEach((product, price) ->
            System.out.println(product + ": $" + price));
    }
}
```

The above code returns the following output:

```shell
Laptop: $1080.0
Tablet: $360.0
Smartphone: $720.0
```
