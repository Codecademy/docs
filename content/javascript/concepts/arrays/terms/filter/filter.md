---
Title: ".filter()"
Description: "Creates a new array with all elements that pass the test from the provided function."
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Arrays"
  - "Methods"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---

The `.filter()` array method creates a new array with all elements that pass the test from the provided function.

## Syntax

```js
// Arrow function
array.filter(element => { ... })
array.filter((element, index) => { ... })
array.filter((element, index, array) => { ... })
```

## Parameters

* `element`: The current element being processed in the array.
* `index` (optional): The index of the current element being processed in the array.
* `array` (optional): The array *filter* was called upon.

## Return Value

A new array with the elements that pass the test. 

**Note:** If no elements that pass the test, an empty array will be returned.

## Examples

Filtering out all small values:

```js
const numbers = [6, 44, 87, 1, 197, 22];

const filteredNumbers = numbers.filter((num) => num >= 10)

console.log(filteredNumbers)
// Output: [44, 87, 197, 22]
```

Filtering by index:

```js
const numbers = [6, 44, 87, 1, 197, 22];

const filterByIndex = numbers.filter((element, index) => {
  return index % 2 === 0
})

console.log(filterByIndex)
// Output: [6, 87, 197]
```

Filtering out names that don't begin with the given character:

```js
const names = ['Jim', 'Bob', 'Sarah', 'Alex', 'James', 'Sam', 'Peter']

const filteredNames = ((char, array) => {
  return array.filter(name => name[0].toLowerCase() === char)
})

console.log(filteredNames('j', names))
// Output: ["Jim", "James"]
```

Filtering an array of objects:

```js
const kickballPlayers = [
  {name: 'Jim', team: 'Red'}, 
  {name: 'Bob', team: 'Red'}, 
  {name: 'Sarah', team: 'Blue'}, 
  {name: 'Alex', team: 'Red'}, 
  {name: 'James', team: 'Blue'}, 
  {name: 'Sam', team: 'Blue'}, 
  {name: 'Peter', team: 'Red'}, 
  {name: 'Michael', team: 'Red'}, 
  {name: 'Kenny', team: 'Blue'}, 
  {name: 'Matt', team: 'Blue'}
]

const redTeam = kickballPlayers.filter(player => player.team === 'Red')

console.log(redTeam)
```

The output would be:

```shell
[{
  name: "Jim", 
  team: "Red"
}, {
  name: "Bob",
  team: "Red"
}, {
  name: "Alex",
  team: "Red"
}, {
  name: "Peter",
  team: "Red"
}, {
  name: "Michael",
  team: "Red"
}]
```
