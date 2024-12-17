---
Title: 'Optional Chaining'
Description: 'The optional chaining operator simplifies the comparison of multiple data properties in a chain of connected objects.' 
Subjects: 
  - 'Web Development'
  - 'Computer Science'
Tags: 
  - 'Data'
  - 'Operators'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **optional chaining** operator simplifies comparing multiple data properties in a chain of connected objects. This is especially valuable if any of the properties are `null`, as the operator will return `undefined` instead of throwing an error.

Optional chaning can be used to validate nested object properties, call optional functions or methods on optional objects, accessing arrary elements, and more. 

The primary benefits of using optional chaining instead of regular syntax include simplifying the code to achieve the same result so it's easier to read, protecting against runtime errors and enhances maintainability.

## Syntax

The basic syntax for `optional chaining` can be defined as: 

```js
// To access an object property
object?.property

//To access an element in an array
array?.[index]

//To invoke a function (if it exists)
object?.method?.()
```

## Example
This person object lists an individual's details and containing properties, nested objects, an array, and a method. Optional chaining for each conditional evaluation is listed below. 

```js
const person = {
  name: "Alice",
  gender: "Female",
  age: 12,
  address: {
    street: "1111 Palm Ave", 
    city: "Broken Arrow",
    state: "Oklahoma"
  },
  favoriteFoods: ["pizza", "ice cream", "cake"], 
  commonPhrase: function() {
    return `${this.name} always says "I love ${this.address.state}."`;
  }
};
```

## Accessing Object Properties
To search for the `state` object of `person`:

```js
//Regular syntax
const state = person && person.address && person.address.state;
console.log(`State is: ${state}`);

//This can be rewritten as:
const state = person?.address?.state;
console.log(`State is: ${state}`);

//The output for both is: 
State is: Oklahoma
```

## Accessing Arrary Elements
To search for the `cake` in the `favoriteFoods` array of `person`:

```js
//Regular Syntax
const food = person && person.favoriteFoods && person.favoriteFoods.find(item => item === "cake");
console.log(`Favorite Food is: ${food}`);

//This can be rewritten as:
const food = person?.favoriteFoods.find(item => item === "cake");
console.log(`Favorite Food is: ${food}`)

//The output for both is: 
Favorite Food is: cake
```

## Accessing Object Functions
To determine if the `commonPhrase` function exists in `person` before invoking it:

```js
//Regular Syntax
if (person && typeof person.commonPhrase === "function") {
  const phrase = person.commonPhrase();
console.log(`${phrase}`);
}

//This can be rewritten as:
const phrase = person?.commonPhrase?.();
console.log(`${phrase}`);

//The output for both is: 
Alice always says "I love Oklahoma."
```


## Codebyte Example

Run the following example and compare the regular syntax of conditional statements and optional chaining on a more complex data set.

```codebyte/js
const people = [
  {
    name: "Blake",
    gender: "Male",
    age: null,
    address: {
      street: "456 Maple Dr",
      city: "Austin",
      state: "Texas"
    }
  },
  {
    name: "Eve",
    gender: "Female",
    age: 15,
    address: {
      street: "789 Birch Ln",
      city: "",
      state: "Colorado"
    }
  },
  null,
  {
    name: "David",
    gender: "Male",
    age: 72,
    address: {
      street: "123 Acorn St",
      city: "Tampa",
      state: "Florida"
    }
  },
  {
    name: "Jospeh",
    gender: "Male",
    age: 9,
    address: {
      street: "987 Pine Ave",
      city: "Taos",
      state: "New Mexico"
    }
  }
];

people.forEach((person, index) => {
  const city = person && person.address && person.address.city;
  console.log(`Person ${index + 1}: City: ${city}`);
});

people.forEach((person, index) => {
const age = person?.age;
console.log(`Person ${index + 1}: Age: ${age}`);
});
```
