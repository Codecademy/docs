---
Title: '.containsKey()'
Description: 'Checks if a map contains a specified key.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Hash Maps'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.containsKey()` method is declared in the [`Map`](https://www.codecademy.com/resources/docs/java/map) interface and is implemented in the [`HashMap`](https://www.codecademy.com/resources/docs/java/hashmap) class. It is used to determine if a `Map` object contains a specific key. The function returns a boolean value: `true` if the key exists, and `false` if not.

## Syntax

The `.containsKey()` method can be called on a `HashMap` instance and it requires one parameter, the key that needs to be checked:

```pseudo
hashMap.containsKey(key);
```

- `key`: This can take on the form of any type of `Object`.

## Example

In the example below, the `.containsKey()` method is used to check for the presence of the keys `Apples` and `Bananas` within a `HashMap`:

```java
import java.util.HashMap;

public class Groceries {
  public static void main(String[] args) {

    // creating a new HashMap which maps string keys to integer values
    HashMap<String, Integer> basket = new HashMap<String, Integer>();

    // adding fruits to the basket
    basket.put("Apples", 50);
    basket.put("Oranges", 30);

    // check if "Apples" is a key
    System.out.println("Basket contains Apples: " + basket.containsKey("Apples"));

    // check if "Bananas is a key
    System.out.println("Basket contains Bananas: " + basket.containsKey("Bananas"));
  }
}
```

The output should look like this:

```shell
Basket contains Apples: true
Basket contains Bananas: false
```
