---
Title: '.entries()'
Description: 'Returns the key-value pairs of a Map object.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Map'
  - 'Object'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Returns the key-value pairs of a `Map` object.

## Syntax

The `.entries()` function takes no arguments and returns an iterator object of key-value pairs.

```js
map.entries();
```

If the `Map` object is empty, then `entries()` returns an empty iterator object.

## Example

The contents of a `Map` object can be printed to the console using `forEach`.

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

iterator.forEach((pair) => {
  const key = pair[0];
  const value = pair[1];

  console.log(`key: ${key}, value: ${value}`);
  /*
    "key: cat, value: 1"
    "key: dog, value: 2"
    "key: horse, value: 3"
    "key: eagle, value: 4"
    "key: bear, value: 5"
    "key: coyote, value: 6"
  */
});
```

`iterator` contains the pairs in insertion order.

## Codebyte Example

A car dealership lists their inventory using a `Map` object. `.entries()` can be used to search the inventory and get the price of a selected car. When a user purchases a car, the corresponding key-value pair will be removed using the [`.delete()`](https://www.codecademy.com/resources/docs/javascript/map/delete) function.

```codebyte/js
const cars = new Map([
  ['Acura NSX', 70000],
  ['BMW M3 E92', 59000],
  ['Chevrolet Camaro', 50000],
  ['Ford Escort RS Cosworth', 25000],
  ['Honda Civic Si', 24000],
  ['Lexus IS350', 42000]
]);

let wallet = 100000;  // Current funds of user
const car = 'Lexus IS350';  // Selected car

let iterator = cars.entries();

// Search for the car in dealership inventory
const found = iterator.find(entry => {
  const carNameFromEntry = entry[0];
  return carNameFromEntry === car;
});

if (found) {
  const price = found[1]; // Price of car

  if (wallet >= price) {
    wallet -= price;  // Deduct price from existing funds

    cars.delete(car);  // Car leaves the inventory lot

    console.log(`${car} purchased.`)
    console.log('Current inventory after purchase:')

    iterator = cars.entries();

    iterator.forEach(entry => {
      const car = entry[0];
      const price = entry[1];
      console.log(`{Car: ${car}, Price: ${price}}`);
    });

    console.log(`\nCurrent funds: ${wallet}`);
    console.log(`${car} purchased. Enjoy the drive!`)
  } else {
    console.log('Not enough funds in wallet.')
  }
} else {
  console.log('Car is not found in inventory.');
}
```
