---
Title: 'Classes'
Description: 'Classes are a core part of the JavaScript language that TypeScript respects. TypeScript adds a few new syntaxes such as type annotations to help write classes in a type-safe manner. Class members types work similarly to parameter and variable types. If an initial value exists, the members type is inferred to be that type. If no initial value exists, the member is implicitly type any unless a type annotation exists on its name. In the following Box class, count is inferred to be type number because its initial value is 0, while value is explicitly declared as type string. Asking for the count of a Box instance therefore is of type number, and the value is of type string:'
Subjects:
  - 'Web Development'
Tags:
  - 'Classes'
  - 'Objects'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Classes are a core part of the JavaScript language that TypeScript respects.
TypeScript adds a few new syntaxes such as type annotations to help write classes in a type-safe manner.

## Members

Class members' types work similarly to parameter and variable types.
If an initial value exists, the member's type is inferred to be that type.
If no initial value exists, the member is implicitly of type `any` unless a type annotation exists on its name.

In the following `Box` class, `count` is inferred to be type `number` because its initial value is `0`, while `value` is explicitly declared as type `string`.
Asking for the `count` of a `Box` instance, therefore, is of type `number`, and the `value` is of type `string`:

```ts
class Box {
  count = 0;
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

const myBox = new Box('stuff');
myBox.count; // Type: number
myBox.value; // Type: string
```

### Member Visibility

JavaScript recently added a `#` syntax to mark a member as private, meaning it can only be accessed inside its class:

```ts
class Secret {
  #value: string;

  constructor(value: string) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }
}

const mySecret = new Secret('shhh');

mySecret.getValue(); // Ok

mySecret.#value;
// Error: Property '#value' is not accessible outside
// class 'Secret' because it has a private identifier.
```

Separately, TypeScript also supports adding `public`, `protected`, or `private` in front of a class member to indicate whether the member may be used outside that class.

- `public` (default): anybody may access that member, anywhere
- `protected`: only the class or its derived classes may access that member
- `private`: only the class itself may access that member

The key difference between JavaScript's `#` syntax and TypeScript's privacy keywords are that:

- JavaScript's `#` syntax changes the name of the member
- TypeScript's privacy keywords exist only in the type system

In this example, the `Base` class sets up four variables; the first two are publicly accessible, the third is only accessible in the class or a derived class, and the fourth and fifth are the two different kinds of private:

```ts
class Base {
  // These two are functionally equivalent
  first = '';
  public second = '';

  protected third = '';

  private fourth = '';
  #fifth = '';
}

class Derived extends Base {
  test() {
    this.first; // Ok: public
    this.second; // Ok: public

    this.third; // Ok: protected

    this.fourth;
    // Error: Property 'fourth' is private
    // and only accessible within class 'Base'.

    this.fifth;
    // Error: Property '#fifth' is not accessible outside
    // class 'Base' because it has a private identifier.
  }
}

const derived = new Derived();

derived.first; // Ok: public
derived.second; // Ok: public

derived.third;
// Error: Property 'third' is protected
// and only accessible within class 'Base'.

derived.fourth;
// Error: Property 'fourth' is private
// and only accessible within class 'Base'.

derived.fifth;
// Error: Property '#fifth' is not accessible outside
// class 'Base' because it has a private identifier.
```

## Implementing Interfaces

Classes may be marked as implementing an interface, which means that instances of the class are meant to be assignable to that interface type.
Add the `implements` keyword after a class name followed by any number of interfaces to implement, with `,` commas between interface names.

In this example, the `Speaker` interface has a single `speak()` method, and so the `SpeechGiver` class may be marked as implementing it:

```ts
interface Speaker {
  speak(): string;
}

class SpeechGiver implements Speaker {
  constructor(speech: string) {
    this.speech = speech;
  }

  increaseEmphasis() {
    this.speech += '!';
  }

  speak() {
    return this.speech;
  }
}
```

Marking a class as implementing an interface doesn't change anything about the class itself; it won't change the types of any members or implicitly add them to the class.
It's purely a way to make sure the class implements the interface properly where it's declared, rather than when instances of the class happen to not match up with an interface.
