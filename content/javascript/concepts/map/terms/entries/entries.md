---
Title: 'entries()'
Description: 'Returns an iterator of the key–value pairs in a Map object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Map'
  - 'Object'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`entries()`** method in JavaScript Maps returns an iterator containing each key–value pair in insertion order.

## Syntax

```pseudo
map.entries();
```

**Parameters:**

The `.entries()` method takes no parameters.

**Return value:**

An iterator object that contains the `[key, value]` pairs for each element in the `Map`, in insertion order.

> **Note:** If the `Map` object is empty, then `entries()` returns an empty iterator object.

## Example

In this example, a Map’s key-value pairs are iterated using `for...of`:

```js
const animals = new Map([
  ['cat', 1],
  ['dog', 2],
  ['horse', 3],
  ['eagle', 4],
  ['bear', 5],
  ['coyote', 6],
]);

const iterator = animals.entries();

for (const [key, value] of iterator) {
  console.log(`key: ${key}, value: ${value}`);
}
```

The output produced will be:

```shell
key: cat, value: 1
key: dog, value: 2
key: horse, value: 3
key: eagle, value: 4
key: bear, value: 5
key: coyote, value: 6
```

## Codebyte Example

In this example, a Map is used to track car inventory, search for a specific car, and update the inventory and wallet when a purchase is made:

```codebyte/javascript
const cars = new Map([
  ['Acura NSX', 70000],
  ['BMW M3 E92', 59000],
  ['Chevrolet Camaro', 50000],
  ['Ford Escort RS Cosworth', 25000],
  ['Honda Civic Si', 24000],
  ['Lexus IS350', 42000]
]);

let wallet = 100000;  // Current funds
const car = 'Lexus IS350';  // Selected car

// Convert Map entries to an array for searching
const found = Array.from(cars.entries()).find(([carName]) => carName === car);

if (found) {
  const price = found[1];

  if (wallet >= price) {
    wallet -= price; // Deduct funds
    cars.delete(car); // Remove car from inventory

    console.log(`${car} purchased.`);
    console.log('Current inventory after purchase:');

    // Iterate over remaining cars
    for (const [carName, price] of cars.entries()) {
      console.log(`{Car: ${carName}, Price: ${price}}`);
    }

    console.log(`\nCurrent funds: ${wallet}`);
    console.log(`${car} purchased. Enjoy the drive!`);
  } else {
    console.log('Not enough funds in wallet.');
  }
} else {
  console.log('Car is not found in inventory.');
}
```
