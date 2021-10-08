---
Title: 'Interfaces'
Description: 'Interfaces are used to shape an object by describing a certain set of members and/or type annotations.'
Subjects:
  - 'Web Development'
Tags:
  - 'Interfaces'
  - 'Objects'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Interfaces are used to "shape" an object by describing a certain set of members and/or type annotations.

## Syntax

Interfaces may be declared by:

1. Starting with the `interface` keyword.
2. Giving the interface a name.
3. Creating an object that contains a set of members and/or type annotations.

```ts
interface myType {
  memberOne: string;
  memberTwo: number;
};

let myVar: myType = {"My favorite number is ", 42 };
```

## `Dog` Interface Example

In this example, the `Dog` interface declares `fluffy` and `woof` members. Any value declared to be of type `Dog` is therefore known to have those members:

```ts
interface Dog {
  fluffy: boolean;
  woof(): string;
}

function interactWithDog(dog: Dog) {
  dog.woof();

  if (dog.fluffy) {
    console.log('What a floof!');
  }

  dog.bark();
  // Error: Property 'bark' does not exist on type 'Dog'.
}
```

Members that do not exist in the interface, such as `bark()`, cannot be accessed and will throw a type error

## Optional Members

Here, the `Pet` interface uses `?` to set `name` as an optional member. The only member that is required is `species`. Declaring an object of type `Pet` doesn't need a `name` but does need a `species`:

```ts
interface Pet {
  name?: string;
  species: string;
}

let anonymous: Pet = { // Ok
  species: "Dog";
};

let named: Pet = {
  name: "Emerald",
  species: "Budgie",
};

let invalid: Pet = {
  name: "My Rock",
}
// Error: Property 'species' is missing in type
// '{ name: string; }' but required in type 'Pet'.
```

## Interface Extensions

Interfaces may be marked as _extending_ another interface. Doing so indicates that the derived child interface (the interface extending others) includes all members from the base parent interfaces (the interface being extended).

To mark an interface as extending other(s), add the `extends` keyword after its name followed by any number of interfaces to extend, with `,` commas between interface names.

In this example, the `Cat` interface is given a `.walk()` method by being an extension of the `Animal` interface. However, instance of type `Animal` don't have access to members and methods defined in the `Cat` interface:

```ts
interface Animal {
  walk(): void;
}

interface Cat extends Animal {
  fluffy: boolean;
  purr(): string;
}

function workWithAnimals(animal: Animal, cat: Cat) {
  animal.walk(); // Ok: defined on Animal
  cat.walk(); // Ok: Cat extends Animal

  if (cat.fluffy) {
    // Ok: defined on Cat
    console.log('Floof!!');
    cat.purr(); // Ok: defined on Cat
  }

  animal.purr();
  // Error: Property 'purr' does not exist on type 'Animal'.
}
```
