---
Title: 'Optional Chaining'
Description: 'The optional chaining operator allows safe access to nested object properties or methods without having to explicitly check if intermediate properties exist.'
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

The **optional chaining** (**`?.`**) operator simplifies comparing multiple data properties in a chain of connected objects. This is especially valuable if any of the properties are `null`, as the operator will return `undefined` instead of throwing an error.

Optional chaning can be used to validate nested object properties, call optional functions or methods on optional objects, accessing array elements, and more.

The primary benefits of using optional chaining instead of regular syntax include simplifying the code to achieve the same result, making it easier to read, protecting against runtime errors, and enhancing maintainability.

## Syntax

The basic syntax for using optional chaining is as follows:

```pseudo
// To access an object property
object?.property;

//To access an element in an array
array?.[index];

//To invoke a function (if it exists)
object?.method?.();
```

## Examples

### Accessing Object Properties

To search for the `state` object of `person`:

```js
const person = {
  name: 'Alice',
  gender: 'Female',
  age: 12,
  address: {
    street: '1111 Palm Ave',
    city: 'Broken Arrow',
    state1: 'Oklahoma',
  },
  favoriteFoods: ['pizza', 'ice cream', 'cake'],
  commonPhrase: function () {
    return `${this.name} always says "I love ${this.address.state1}."`;
  },
};

// Regular syntax for checking if the state1 property exists
const state1Regular = person && person.address && person.address.state1;
console.log(`State (regular syntax) is: ${state1Regular}`);

// This can be rewritten as:
const state1Chaining = person?.address?.state1;
console.log(`State (optional chaining) is: ${state1Chaining}`);
```

The output of the above code will be as follows:

```shell
State (regular syntax) is: Oklahoma
State (optional chaining) is: Oklahoma
```

### Accessing Array Elements

To search for the `cake` in the `favoriteFoods` array of `person`:

```js
const person = {
  name: 'Alice',
  gender: 'Female',
  age: 12,
  address: {
    street: '1111 Palm Ave',
    city: 'Broken Arrow',
    state1: 'Oklahoma',
  },
  favoriteFoods: ['pizza', 'ice cream', 'cake'],
  commonPhrase: function () {
    return `${this.name} always says "I love ${this.address.state1}."`;
  },
};

// Regular Syntax for searching favorite food
const foodRegular =
  person &&
  person.favoriteFoods &&
  person.favoriteFoods.find((item) => item === 'cake');
console.log(`Favorite Food (regular syntax) is: ${foodRegular}`);

// This can be rewritten as:
const foodChaining = person?.favoriteFoods.find((item) => item === 'cake');
console.log(`Favorite Food (optional chaining) is: ${foodChaining}`);
```

The output of the above code will be as follows:

```shell
Favorite Food (regular syntax) is: cake
Favorite Food (optional chaining) is: cake
```

### Accessing Object Functions

To determine if the `commonPhrase` function exists in `person` before invoking it:

```js
//Regular Syntax
if (person && typeof person.commonPhrase === 'function') {
  const phrase = person.commonPhrase();
  console.log(`${phrase}`);
}

//This can be rewritten as:
const phrase = person?.commonPhrase?.();
console.log(`${phrase}`);
```

The output of the above code will be as follows:

```shell
Alice always says "I love Oklahoma."
Alice always says "I love Oklahoma."
```

## Codebyte Example

Run the following example and compare the regular syntax of conditional statements and optional chaining on a more complex data set:

```codebyte/javascript
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

console.log("Using Regular Syntax for City:");
people.forEach((person, index) => {
  const city = person && person.address && person.address.city;
  console.log(`Person ${index + 1}: City: ${city ?? "Not Available"}`);
});

console.log("\nUsing Optional Chaining for Age:");
people.forEach((person, index) => {
  const age = person?.age;
  console.log(`Person ${index + 1}: Age: ${age ?? "Not Available"}`);
});
```
