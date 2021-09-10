---
Title: 'Interfaces'
Description: 'JavaScript code often necessitates passing around objects known to have specific shapes. Interfaces are a way in TypeScript to declare that an object provided in a location must have at least a certain set of members. Interfaces may be declared by starting with the interface keyword, a name for the interface, and then an object containing any number of members. In this example, the Dog interface declares fluffy and woof members. Any value declared to be of type Dog is therefore known to have those members. Any other member, such as bark, is not known to exist, and accessing it would be a type error: ts'
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

JavaScript code often necessitates passing around objects known to have specific shapes.
Interfaces are a way in TypeScript to declare that an object provided in a location must have at least a certain set of members.

Interfaces may be declared by starting with the `interface` keyword, a name for the interface, and then an object containing any number of members.

In this example, the `Dog` interface declares `fluffy` and `woof` members.
Any value declared to be of type `Dog` is therefore known to have those members.
Any other member, such as `bark`, is not known to exist, and accessing it would be a type error:

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

## Optional Members

Here, the `Pet` interface doesn't assume the pets has received a `name` yet, but it does assume there is a `species`.
Declaring an object of type `Pet` doesn't need a `name` but does need a `species`:

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

Interfaces may be marked as _extending_ another interface.
Doing so indicates that the derived interface (the interface extending others) includes all members from the base interfaces (the interface being extended).

To mark an interface as extending other(s), add the `extends` keyword after its name followed by any number of interfaces to extend, with `,` commas between interface names.

In this example, the `Cat` interface is given a `.walk()` method by extending `Animal`, but `Animal` instances don't have the members added by `Cat`:

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
